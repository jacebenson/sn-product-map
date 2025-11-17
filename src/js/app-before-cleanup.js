// ServiceNow Capability Planner - Modular Application
import { storage } from './utils/storage.js';
import * as StateModule from './modules/state.js';
import * as FilterModule from './modules/filters.js';
import * as ProductModule from './modules/products.js';
import * as EntitlementsModule from './modules/entitlements.js';

// Use module references directly - no local duplicates
let searchText = '';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    const productItems = document.querySelectorAll('.product-item');
    const modal = document.getElementById('productModal');
    const closeBtn = document.querySelector('.close');
    const deleteProductBtn = document.getElementById('deleteProductBtn');
    const legendItems = document.querySelectorAll('.legend-item');
    
    // Settings modal elements
    const settingsBtn = document.getElementById('settingsBtn');
    const settingsModal = document.getElementById('settingsModal');
    const closeSettingsBtn = document.querySelector('.close-settings');
    const downloadJsonBtn = document.getElementById('downloadJsonBtn');
    const importJsonBtn = document.getElementById('importJsonBtn');
    const fileInput = document.getElementById('fileInput');
    const copyJsonBtn = document.getElementById('copyJsonBtn');
    const jsonViewer = document.getElementById('jsonViewer');
    const importStatus = document.getElementById('importStatus');
    const importTextarea = document.getElementById('importTextarea');
    const importFromTextBtn = document.getElementById('importFromTextBtn');
    const clearImportTextBtn = document.getElementById('clearImportTextBtn');
    const resetProductsBtn = document.getElementById('resetProductsBtn');
    const resetStatus = document.getElementById('resetStatus');
    const resetStatesBtn = document.getElementById('resetStatesBtn');
    const resetStatesStatus = document.getElementById('resetStatesStatus');
    const clearAllDataBtn = document.getElementById('clearAllDataBtn');
    const clearAllStatus = document.getElementById('clearAllStatus');
    
    // Instance configuration elements
    const instanceUrlInput = document.getElementById('instanceUrl');
    const saveInstanceBtn = document.getElementById('saveInstanceBtn');
    const clearInstanceBtn = document.getElementById('clearInstanceBtn');
    const instanceStatus = document.getElementById('instanceStatus');
    const currentInstanceDisplay = document.getElementById('currentInstance');
    const urlPreview = document.getElementById('urlPreview');
    
    // Add Product modal elements
    const addProductModal = document.getElementById('addProductModal');
    const closeAddProductBtn = document.querySelector('.close-add-product');
    const addProductForm = document.getElementById('addProductForm');
    const cancelAddProductBtn = document.getElementById('cancelAddProduct');
    
    // Search filter elements
    const searchInput = document.getElementById('searchInput');
    const searchClear = document.getElementById('searchClear');
    
    // ServiceNow script elements
    const generateScriptBtn = document.getElementById('generateScriptBtn');
    const copyScriptBtn = document.getElementById('copyScriptBtn');
    const scriptOutput = document.getElementById('scriptOutput');
    const scriptCode = document.getElementById('scriptCode');
    
    // Load saved states from localStorage
    StateModule.loadStates();
    
    // Load saved filters
    FilterModule.loadFilters();
    
    // Render unmatched products
    ProductModule.renderUnmatchedProducts();
    
    // Load instance configuration
    loadInstanceConfig();
    
    // Add click handlers to [+] buttons
    attachAddProductHandlers();
    
    // Setup tab navigation
    setupTabs();
    
    // Add click handler to settings button
    settingsBtn.addEventListener('click', function() {
        openSettingsModal();
    });
    
    // Close settings modal handlers
    closeSettingsBtn.addEventListener('click', function() {
        settingsModal.style.display = 'none';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === settingsModal) {
            settingsModal.style.display = 'none';
        }
    });
    
    // Download JSON button
    downloadJsonBtn.addEventListener('click', function() {
        downloadStateAsJson();
    });
    
    // Import JSON button
    importJsonBtn.addEventListener('click', function() {
        fileInput.click();
    });
    
    // File input handler
    fileInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            importStateFromJson(file);
        }
    });
    
    // Copy JSON button
    copyJsonBtn.addEventListener('click', function() {
        jsonViewer.select();
        document.execCommand('copy');
        const originalText = copyJsonBtn.textContent;
        copyJsonBtn.textContent = 'Copied!';
        setTimeout(() => {
            copyJsonBtn.textContent = originalText;
        }, 2000);
    });
    
    // Import from textarea button
    importFromTextBtn.addEventListener('click', function() {
        importStateFromText();
    });
    
    // Clear import textarea button
    clearImportTextBtn.addEventListener('click', function() {
        importTextarea.value = '';
        importStatus.textContent = '';
        importStatus.className = 'import-status';
    });
    
    // Reset products button
    resetProductsBtn.addEventListener('click', function() {
        ProductModule.resetDeletedProducts();
    });
    
    // Reset all states button
    resetStatesBtn.addEventListener('click', function() {
        const statusElement = document.getElementById('resetStatesStatus');
        
        if (!confirm('Reset ALL product states back to "Not Licensed"?\n\nThis will clear all your capability adoption data. This cannot be undone!')) {
            return;
        }
        
        StateModule.resetAllStates();
        
        statusElement.textContent = 'All states have been reset. Reloading...';
        statusElement.style.color = '#27ae60';
        
        // Reload the page to show all products in default state
        setTimeout(() => {
            location.reload();
        }, 1000);
    });
    
    // Clear all data button
    clearAllDataBtn.addEventListener('click', function() {
        const statusElement = document.getElementById('clearAllStatus');
        
        if (!confirm('⚠️ COMPLETE RESET ⚠️\n\nThis will DELETE ALL DATA:\n• All product states\n• All deleted products\n• All custom products\n• Instance configuration\n\nThis CANNOT be undone!\n\nAre you absolutely sure?')) {
            return;
        }
        
        // Double confirmation for destructive action
        if (!confirm('Last chance! This will permanently delete everything.\n\nClick OK to proceed with complete data wipe.')) {
            return;
        }
        
        StateModule.clearAllData();
        
        statusElement.textContent = 'All data cleared. Reloading...';
        statusElement.style.color = '#27ae60';
        
        // Reload the page to show fresh state
        setTimeout(() => {
            location.reload();
        }, 1000);
    });
    
    // Instance configuration handlers
    saveInstanceBtn.addEventListener('click', function() {
        saveInstanceConfig();
    });
    
    clearInstanceBtn.addEventListener('click', function() {
        clearInstanceConfig();
    });
    
    // Instance URL input preview
    instanceUrlInput.addEventListener('input', function() {
        updateUrlPreview();
    });
    
    // ServiceNow script handlers
    generateScriptBtn.addEventListener('click', function() {
        generateServiceNowScript();
    });
    
    copyScriptBtn.addEventListener('click', function() {
        copyServiceNowScript();
    });
    
    // Add Product modal handlers
    closeAddProductBtn.addEventListener('click', function() {
        addProductModal.style.display = 'none';
    });
    
    cancelAddProductBtn.addEventListener('click', function() {
        addProductModal.style.display = 'none';
    });
    
    addProductForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleAddProduct();
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === addProductModal) {
            addProductModal.style.display = 'none';
        }
    });
    
    // Search filter handlers
    searchInput.addEventListener('input', function() {
        searchText = this.value.toLowerCase().trim();
        
        // Show/hide clear button
        if (searchText) {
            searchClear.style.display = 'block';
        } else {
            searchClear.style.display = 'none';
        }
        
        FilterModule.applyFilters();
    });
    
    searchClear.addEventListener('click', function() {
        searchInput.value = '';
        searchText = '';
        searchClear.style.display = 'none';
        FilterModule.applyFilters();
    });
    
    // Entitlements search functionality
    const entitlementsSearch = document.getElementById('entitlementsSearch');
    const entitlementsSearchClear = document.getElementById('entitlementsSearchClear');
    const entitlementsResults = document.getElementById('entitlementsResults');
    
    if (entitlementsSearch) {
        entitlementsSearch.addEventListener('input', function() {
            const query = this.value.toLowerCase().trim();
            
            // Show/hide clear button
            if (query) {
                entitlementsSearchClear.style.display = 'block';
            } else {
                entitlementsSearchClear.style.display = 'none';
                entitlementsResults.innerHTML = '';
                return;
            }
            
            // Search entitlements
            EntitlementsModule.searchEntitlements(query);
        });
    }
    
    if (entitlementsSearchClear) {
        entitlementsSearchClear.addEventListener('click', function() {
            entitlementsSearch.value = '';
            entitlementsSearchClear.style.display = 'none';
            entitlementsResults.innerHTML = '';
        });
    }
    
    // Add click handlers to legend items for filtering
    legendItems.forEach(item => {
        item.addEventListener('click', function() {
            FilterModule.toggleFilter(this);
        });
    });
    
    // Add click handlers to product items
    productItems.forEach(item => {
        // Click on product name cycles state
        const productName = item.querySelector('.product-name');
        if (productName) {
            productName.addEventListener('click', function(e) {
                e.stopPropagation();
                StateModule.cycleState(item, FilterModule.applyFilters);
            });
        }
        
        // Click on info button opens modal
        const infoBtn = item.querySelector('.product-info-btn');
        if (infoBtn) {
            infoBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                showModal(item);
            });
        }
        
        // Click on the item itself cycles state (fallback)
        item.addEventListener('click', function(e) {
            // Only if not clicking on a button
            if (!e.target.classList.contains('product-info-btn')) {
                StateModule.cycleState(this, FilterModule.applyFilters);
            }
        });
    });
    
    // Close modal handlers
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Delete product button handler
    deleteProductBtn.addEventListener('click', function() {
        ProductModule.handleDeleteProduct();
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Close modal on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (modal.style.display === 'block') {
                modal.style.display = 'none';
            }
            if (settingsModal.style.display === 'block') {
                settingsModal.style.display = 'none';
            }
            if (addProductModal.style.display === 'block') {
                addProductModal.style.display = 'none';
            }
        }
    });
    
    // Apply initial filter
    FilterModule.applyFilters();
});

// Show modal with product details
function showModal(element) {
    const modal = document.getElementById('productModal');
    const productName = element.getAttribute('data-product');
    const category = element.getAttribute('data-category');
    const description = element.getAttribute('data-description');
    const tables = element.getAttribute('data-tables');
    const productURL = element.getAttribute('data-product-url');
    
    // Store current product info for delete functionality
    modal.setAttribute('data-current-product', productName);
    modal.setAttribute('data-current-category', category);
    modal.setAttribute('data-current-is-custom', element.classList.contains('custom-product') ? 'true' : 'false');
    
    document.getElementById('modalProductName').textContent = productName;
    document.getElementById('modalCategory').textContent = 'Category: ' + category;
    document.getElementById('modalDescription').textContent = description;
    
    // Populate product URL
    const modalProductURL = document.getElementById('modalProductURL');
    if (productURL && productURL !== 'undefined') {
        modalProductURL.innerHTML = '<a href="' + productURL + '" target="_blank" rel="noopener noreferrer">View on ServiceNow.com</a>';
    } else {
        modalProductURL.textContent = '';
    }
    
    // Populate instance links
    const modalInstanceLinks = document.getElementById('modalInstanceLinks');
    const instanceLinks = generateInstanceLinks(tables);
    
    if (instanceLinks && instanceLinks.length > 0) {
        modalInstanceLinks.classList.remove('hidden');
        let linksHTML = '<h3>Instance Links:</h3>';
        instanceLinks.forEach(link => {
            linksHTML += `<a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.table}</a> `;
        });
        modalInstanceLinks.innerHTML = linksHTML;
    } else {
        modalInstanceLinks.classList.add('hidden');
        modalInstanceLinks.innerHTML = '';
    }
    
    // Clear entitlements search and results when modal opens
    const entitlementsSearch = document.getElementById('entitlementsSearch');
    const entitlementsResults = document.getElementById('entitlementsResults');
    if (entitlementsSearch) {
        entitlementsSearch.value = '';
    }
    if (entitlementsResults) {
        entitlementsResults.innerHTML = '';
    }
    
    // Populate tables list
    const tablesList = document.getElementById('tablesList');
    tablesList.innerHTML = '';
    
    if (tables && tables.trim() !== '') {
        try {
            // Try to parse as JSON
            const tablesData = JSON.parse(tables);
            
            // Check if it's an object (new format) or array (old format)
            if (typeof tablesData === 'object' && tablesData !== null && !Array.isArray(tablesData)) {
                // New format: { "table_name": "query", "table_name2": "query2" }
                const entries = Object.entries(tablesData);
                if (entries.length > 0) {
                    entries.forEach(([tableName, query]) => {
                        const li = document.createElement('li');
                        li.textContent = tableName;
                        if (query) {
                            li.title = `Query: ${query}`;
                        }
                        tablesList.appendChild(li);
                    });
                } else {
                    const li = document.createElement('li');
                    li.textContent = 'No specific tables defined';
                    li.style.fontStyle = 'italic';
                    tablesList.appendChild(li);
                }
            } else if (Array.isArray(tablesData) && tablesData.length > 0) {
                // Old format: array of objects [{ "table_name": "query" }]
                tablesData.forEach(tableItem => {
                    const li = document.createElement('li');
                    
                    if (typeof tableItem === 'object' && tableItem !== null) {
                        Object.entries(tableItem).forEach(([tableName, query]) => {
                            li.textContent = tableName;
                            if (query) {
                                li.title = `Query: ${query}`;
                            }
                        });
                    } else if (typeof tableItem === 'string') {
                        li.textContent = tableItem;
                    }
                    
                    tablesList.appendChild(li);
                });
            } else {
                const li = document.createElement('li');
                li.textContent = 'No specific tables defined';
                li.style.fontStyle = 'italic';
                tablesList.appendChild(li);
            }
        } catch (e) {
            // Fallback for old comma-separated format
            const tablesArray = tables.split(',').map(t => t.trim());
            tablesArray.forEach(table => {
                const li = document.createElement('li');
                li.textContent = table;
                tablesList.appendChild(li);
            });
        }
    } else {
        const li = document.createElement('li');
        li.textContent = 'No specific tables defined';
        li.style.fontStyle = 'italic';
        tablesList.appendChild(li);
    }
    
    modal.style.display = 'block';
}

// Handle product deletion
function handleDeleteProduct() {
    const modal = document.getElementById('productModal');
    const productName = modal.getAttribute('data-current-product');
    const category = modal.getAttribute('data-current-category');
    const isCustom = modal.getAttribute('data-current-is-custom') === 'true';
    
    if (!productName || !category) {
        alert('Error: Could not identify product to delete');
        return;
    }
    
    const confirmMessage = isCustom 
        ? `Delete custom product "${productName}"?\n\nThis will permanently remove this product.`
        : `Delete preloaded product "${productName}"?\n\nThis will hide this product from the catalog. You can restore all preloaded products from Settings.`;
    
    if (!confirm(confirmMessage)) {
        return;
    }
    
    if (isCustom) {
        deleteCustomProduct(category, productName);
    } else {
        deletePreloadedProduct(category, productName);
    }
    
    // Close the modal
    modal.style.display = 'none';
}

// Delete a custom product
function deleteCustomProduct(category, productName) {
    // Remove from unmatched products in localStorage
    const unmatchedData = localStorage.getItem('unmatchedProducts');
    if (unmatchedData) {
        const unmatched = JSON.parse(unmatchedData);
        const key = category + '::' + productName;
        delete unmatched[key];
        localStorage.setItem('unmatchedProducts', JSON.stringify(unmatched));
    }
    
    // Remove from capability states
    const statesData = localStorage.getItem('capabilityStates');
    if (statesData) {
        const states = JSON.parse(statesData);
        const key = category + '::' + productName;
        delete states[key];
        localStorage.setItem('capabilityStates', JSON.stringify(states));
    }
    
    // Remove from DOM - try multiple selectors to ensure we find it
    let productElement = document.querySelector(
        `.product-item.custom-product[data-category="${category}"][data-product="${productName}"]`
    );
    
    if (!productElement) {
        // Try without custom-product class
        productElement = document.querySelector(
            `.product-item[data-category="${category}"][data-product="${productName}"]`
        );
    }
    
    if (productElement) {
        productElement.remove();
    }
    
    // Re-render unmatched products section
    renderUnmatchedProducts();
    
    // Force a refresh of category visibility
    setTimeout(() => {
        applyFilters();
    }, 0);
}

// Delete a preloaded product (mark as deleted)
function deletePreloadedProduct(category, productName) {
    const key = category + '::' + productName;
    
    // Get or create deleted products list
    const deletedData = localStorage.getItem('deletedProducts');
    const deleted = deletedData ? JSON.parse(deletedData) : {};
    
    deleted[key] = true;
    
    localStorage.setItem('deletedProducts', JSON.stringify(deleted));
    
    // Remove from DOM - try to find the element
    let productElement = document.querySelector(
        `.product-item[data-category="${category}"][data-product="${productName}"]:not(.custom-product)`
    );
    
    if (!productElement) {
        // Try without the :not selector
        productElement = document.querySelector(
            `.product-item[data-category="${category}"][data-product="${productName}"]`
        );
    }
    
    if (productElement) {
        productElement.remove();
    }
    
    // Also remove from capability states
    const statesData = localStorage.getItem('capabilityStates');
    if (statesData) {
        const states = JSON.parse(statesData);
        delete states[key];
        localStorage.setItem('capabilityStates', JSON.stringify(states));
    }
    
    // Force a refresh of category visibility
    setTimeout(() => {
        applyFilters();
    }, 0);
}

// Reset deleted products (restore all preloaded products)
function resetDeletedProducts() {
    const deletedData = localStorage.getItem('deletedProducts');
    
    if (!deletedData) {
        const resetStatus = document.getElementById('resetStatus');
        resetStatus.textContent = 'No deleted products to restore.';
        resetStatus.style.color = '#666';
        setTimeout(() => {
            resetStatus.textContent = '';
        }, 3000);
        return;
    }
    
    const deleted = JSON.parse(deletedData);
    const count = Object.keys(deleted).length;
    
    if (count === 0) {
        const resetStatus = document.getElementById('resetStatus');
        resetStatus.textContent = 'No deleted products to restore.';
        resetStatus.style.color = '#666';
        setTimeout(() => {
            resetStatus.textContent = '';
        }, 3000);
        return;
    }
    
    if (!confirm(`Restore ${count} deleted product(s)?\n\nThis will reload the page.`)) {
        return;
    }
    
    // Clear the deleted products list
    localStorage.removeItem('deletedProducts');
    
    // Reload the page to show all products
    location.reload();
}

// Reset all product states to "not-licensed"
function resetAllStates() {
    const statusElement = document.getElementById('resetStatesStatus');
    
    if (!confirm('Reset ALL product states back to "Not Licensed"?\n\nThis will clear all your capability adoption data. This cannot be undone!')) {
        return;
    }
    
    // Clear capability states
    localStorage.removeItem('capabilityStates');
    
    statusElement.textContent = 'All states have been reset. Reloading...';
    statusElement.style.color = '#27ae60';
    
    // Reload the page to show all products in default state
    setTimeout(() => {
        location.reload();
    }, 1000);
}

// Clear all data (complete reset)
function clearAllData() {
    const statusElement = document.getElementById('clearAllStatus');
    
    if (!confirm('⚠️ COMPLETE RESET ⚠️\n\nThis will DELETE ALL DATA:\n• All product states\n• All deleted products\n• All custom products\n• Instance configuration\n\nThis CANNOT be undone!\n\nAre you absolutely sure?')) {
        return;
    }
    
    // Double confirmation for destructive action
    if (!confirm('Last chance! This will permanently delete everything.\n\nClick OK to proceed with complete data wipe.')) {
        return;
    }
    
    // Clear all localStorage items
    localStorage.removeItem('capabilityStates');
    localStorage.removeItem('deletedProducts');
    localStorage.removeItem('unmatchedProducts');
    localStorage.removeItem('instanceUrl');
    localStorage.removeItem('activeFilters');
    
    statusElement.textContent = 'All data cleared. Reloading...';
    statusElement.style.color = '#27ae60';
    
    // Reload the page to show fresh state
    setTimeout(() => {
        location.reload();
    }, 1000);
}

// Save states to localStorage
function saveStates() {
    const productItems = document.querySelectorAll('.product-item');
    const states = {};
    
    productItems.forEach(item => {
        const key = item.getAttribute('data-category') + '::' + item.getAttribute('data-product');
        const state = item.getAttribute('data-state');
        states[key] = state;
    });
    
    localStorage.setItem('capabilityStates', JSON.stringify(states));
}

// Load states from localStorage
function loadStates() {
    const savedStates = localStorage.getItem('capabilityStates');
    const deletedProducts = localStorage.getItem('deletedProducts');
    const deleted = deletedProducts ? JSON.parse(deletedProducts) : {};
    
    if (savedStates) {
        const states = JSON.parse(savedStates);
        const productItems = document.querySelectorAll('.product-item');
        
        productItems.forEach(item => {
            const key = item.getAttribute('data-category') + '::' + item.getAttribute('data-product');
            
            // Check if this product has been deleted
            if (deleted[key] && !item.classList.contains('custom-product')) {
                item.remove();
                return;
            }
            
            if (states[key]) {
                item.setAttribute('data-state', states[key]);
            }
        });
    } else {
        // Even if no states saved, still check for deleted products
        const deletedProductsList = deletedProducts ? JSON.parse(deletedProducts) : {};
        if (Object.keys(deletedProductsList).length > 0) {
            const productItems = document.querySelectorAll('.product-item');
            productItems.forEach(item => {
                const key = item.getAttribute('data-category') + '::' + item.getAttribute('data-product');
                if (deletedProductsList[key] && !item.classList.contains('custom-product')) {
                    item.remove();
                }
            });
        }
    }
}

// Save filters to localStorage
function saveFilters() {
    localStorage.setItem('activeFilters', JSON.stringify(Array.from(activeFilters)));
}

// Load filters from localStorage
function loadFilters() {
    const savedFilters = localStorage.getItem('activeFilters');
    
    if (savedFilters) {
        activeFilters = new Set(JSON.parse(savedFilters));
        
        // Update legend item states
        const legendItems = document.querySelectorAll('.legend-item');
        legendItems.forEach(item => {
            const filterState = item.getAttribute('data-filter');
            if (activeFilters.has(filterState)) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }
}

// Render unmatched products from localStorage
function renderUnmatchedProducts() {
    const unmatchedProducts = localStorage.getItem('unmatchedProducts');
    if (!unmatchedProducts) return;
    
    try {
        const unmatched = JSON.parse(unmatchedProducts);
        if (unmatched.length === 0) return;
        
        // Group unmatched products by category
        const categorizedProducts = {};
        unmatched.forEach(product => {
            if (!categorizedProducts[product.category]) {
                categorizedProducts[product.category] = [];
            }
            categorizedProducts[product.category].push(product);
        });
        
        // Get or create the categories grid
        const categoriesGrid = document.querySelector('.categories-grid');
        
        // Render each category
        Object.keys(categorizedProducts).forEach(categoryName => {
            // Check if category card already exists
            let categoryCard = findCategoryCard(categoryName);
            
            if (!categoryCard) {
                // Create new category card
                categoryCard = createCategoryCard(categoryName);
                categoriesGrid.appendChild(categoryCard);
            }
            
            const productsList = categoryCard.querySelector('.products-list');
            
            // Add each product
            categorizedProducts[categoryName].forEach(product => {
                // Check if product already exists in this category
                const existingProduct = findProductInCategory(categoryCard, product.product);
                if (!existingProduct) {
                    const productItem = createProductItem(product);
                    productsList.appendChild(productItem);
                    attachProductItemHandlers(productItem);
                }
            });
        });
        
    } catch (e) {
        console.warn('Error rendering unmatched products:', e);
    }
}

// Helper: Find category card by name
function findCategoryCard(categoryName) {
    const categoryCards = document.querySelectorAll('.category-card');
    for (let card of categoryCards) {
        const title = card.querySelector('.category-title');
        if (title && title.textContent === categoryName) {
            return card;
        }
    }
    return null;
}

// Helper: Find product in category
function findProductInCategory(categoryCard, productName) {
    const products = categoryCard.querySelectorAll('.product-item');
    for (let product of products) {
        if (product.getAttribute('data-product') === productName) {
            return product;
        }
    }
    return null;
}

// Helper: Create category card
function createCategoryCard(categoryName) {
    const card = document.createElement('div');
    card.className = 'category-card';
    
    const header = document.createElement('div');
    header.className = 'category-header';
    
    const title = document.createElement('h2');
    title.className = 'category-title';
    title.textContent = categoryName;
    
    const addBtn = document.createElement('button');
    addBtn.className = 'add-product-btn';
    addBtn.textContent = '+';
    addBtn.title = 'Add product to this category';
    addBtn.setAttribute('data-category', categoryName);
    
    header.appendChild(title);
    header.appendChild(addBtn);
    
    const list = document.createElement('ul');
    list.className = 'products-list';
    
    card.appendChild(header);
    card.appendChild(list);
    
    return card;
}

// Helper: Create product item
function createProductItem(product) {
    const li = document.createElement('li');
    li.className = 'product-item';
    li.setAttribute('data-state', product.state || 'not-licensed');
    li.setAttribute('data-product', product.product);
    li.setAttribute('data-category', product.category);
    
    // Handle tables - could be string or array/object
    let tablesValue = product.tables || '';
    if (typeof tablesValue === 'object') {
        tablesValue = JSON.stringify(tablesValue);
    }
    li.setAttribute('data-tables', tablesValue);
    
    // Handle entitlements
    let entitlementsValue = product.entitlements || '';
    if (typeof entitlementsValue === 'object') {
        entitlementsValue = JSON.stringify(entitlementsValue);
    }
    li.setAttribute('data-entitlements', entitlementsValue);
    
    li.setAttribute('data-description', product.description || '');
    li.setAttribute('data-product-url', product.productURL || '');
    
    const span = document.createElement('span');
    span.className = 'product-name';
    span.textContent = product.product;
    
    const infoBtn = document.createElement('button');
    infoBtn.className = 'product-info-btn';
    infoBtn.textContent = 'ℹ';
    infoBtn.title = 'View details';
    
    li.appendChild(span);
    li.appendChild(infoBtn);
    
    return li;
}

// Helper: Attach handlers to product item
function attachProductItemHandlers(item) {
    // Click on product name cycles state
    const productName = item.querySelector('.product-name');
    if (productName) {
        productName.addEventListener('click', function(e) {
            e.stopPropagation();
            cycleState(item);
        });
    }
    
    // Click on info button opens modal
    const infoBtn = item.querySelector('.product-info-btn');
    if (infoBtn) {
        infoBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            showModal(item);
        });
    }
    
    // Click on the item itself cycles state (fallback)
    item.addEventListener('click', function(e) {
        // Only if not clicking on a button
        if (!e.target.classList.contains('product-info-btn')) {
            cycleState(this);
        }
    });
}

// Attach handlers to [+] buttons
function attachAddProductHandlers() {
    const addProductBtns = document.querySelectorAll('.add-product-btn');
    addProductBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const categoryName = this.getAttribute('data-category');
            openAddProductModal(categoryName);
        });
    });
}

// Open Add Product Modal
function openAddProductModal(categoryName) {
    const addProductModal = document.getElementById('addProductModal');
    const categoryInput = document.getElementById('addProductCategory');
    const addProductStatus = document.getElementById('addProductStatus');
    
    // Set category name
    categoryInput.value = categoryName;
    
    // Clear form
    document.getElementById('addProductName').value = '';
    document.getElementById('addProductDescription').value = '';
    document.getElementById('addProductTables').value = '';
    document.getElementById('addProductURL').value = '';
    document.getElementById('addProductState').value = 'not-licensed';
    
    // Clear status
    addProductStatus.textContent = '';
    addProductStatus.className = 'form-status';
    
    // Show modal
    addProductModal.style.display = 'block';
}

// Handle adding a product
function handleAddProduct() {
    const categoryName = document.getElementById('addProductCategory').value;
    const productName = document.getElementById('addProductName').value.trim();
    const description = document.getElementById('addProductDescription').value.trim();
    const tables = document.getElementById('addProductTables').value.trim();
    const productURL = document.getElementById('addProductURL').value.trim();
    const state = document.getElementById('addProductState').value;
    const addProductStatus = document.getElementById('addProductStatus');
    
    // Validate
    if (!productName) {
        addProductStatus.textContent = 'Product name is required';
        addProductStatus.className = 'form-status error';
        return;
    }
    
    // Check if product already exists
    const categoryCard = findCategoryCard(categoryName);
    if (categoryCard) {
        const existingProduct = findProductInCategory(categoryCard, productName);
        if (existingProduct) {
            addProductStatus.textContent = 'A product with this name already exists in this category';
            addProductStatus.className = 'form-status error';
            return;
        }
    }
    
    // Create product object
    const product = {
        category: categoryName,
        product: productName,
        description: description || '',
        tables: tables || '',
        productURL: productURL || '',
        state: state
    };
    
    // Add to unmatched products (so it persists)
    addToUnmatchedProducts(product);
    
    // Render it immediately
    renderSingleProduct(product);
    
    // Save states
    saveStates();
    
    // Apply filters
    applyFilters();
    
    // Show success and close
    addProductStatus.textContent = 'Product added successfully!';
    addProductStatus.className = 'form-status success';
    
    setTimeout(() => {
        document.getElementById('addProductModal').style.display = 'none';
    }, 1000);
}

// Add product to unmatched products storage
function addToUnmatchedProducts(product) {
    let unmatchedProducts = [];
    const stored = localStorage.getItem('unmatchedProducts');
    
    if (stored) {
        try {
            unmatchedProducts = JSON.parse(stored);
        } catch (e) {
            console.warn('Error loading unmatched products:', e);
        }
    }
    
    // Add new product
    unmatchedProducts.push(product);
    
    // Save back
    localStorage.setItem('unmatchedProducts', JSON.stringify(unmatchedProducts));
}

// Render a single product
function renderSingleProduct(product) {
    const categoriesGrid = document.querySelector('.categories-grid');
    let categoryCard = findCategoryCard(product.category);
    
    if (!categoryCard) {
        // Create new category card
        categoryCard = createCategoryCard(product.category);
        categoriesGrid.appendChild(categoryCard);
        
        // Add [+] button handler to new category
        const addBtn = categoryCard.querySelector('.add-product-btn');
        if (addBtn) {
            addBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                openAddProductModal(product.category);
            });
        }
    }
    
    const productsList = categoryCard.querySelector('.products-list');
    const productItem = createProductItem(product);
    productsList.appendChild(productItem);
    attachProductItemHandlers(productItem);
}

// Export functionality - includes current products and unmatched imported products
// Only exports products that have been changed from default "not-licensed" state
function exportData() {
    const productItems = document.querySelectorAll('.product-item');
    const data = [];
    
    productItems.forEach(item => {
        const state = item.getAttribute('data-state');
        
        // Only include products that are NOT in the default "not-licensed" state
        if (state !== 'not-licensed') {
            data.push({
                category: item.getAttribute('data-category'),
                product: item.getAttribute('data-product'),
                state: state,
                description: item.getAttribute('data-description'),
                tables: item.getAttribute('data-tables')
            });
        }
    });
    
    // Include unmatched products from previous imports
    // (these are already non-default by definition since they were imported)
    const unmatchedProducts = localStorage.getItem('unmatchedProducts');
    if (unmatchedProducts) {
        try {
            const unmatched = JSON.parse(unmatchedProducts);
            const existingKeys = new Set(data.map(item => item.category + '::' + item.product));
            
            // Add unmatched products that aren't already in the current data
            unmatched.forEach(item => {
                const key = item.category + '::' + item.product;
                if (!existingKeys.has(key) && item.state !== 'not-licensed') {
                    data.push(item);
                }
            });
        } catch (e) {
            console.warn('Error loading unmatched products:', e);
        }
    }
    
    return data;
}

// Open Settings Modal
function openSettingsModal() {
    const settingsModal = document.getElementById('settingsModal');
    const jsonViewer = document.getElementById('jsonViewer');
    const importStatus = document.getElementById('importStatus');
    const unmatchedInfo = document.getElementById('unmatchedInfo');
    
    // Clear import status
    importStatus.textContent = '';
    importStatus.className = 'import-status';
    
    // Update JSON viewer with current state
    const data = exportData();
    jsonViewer.value = JSON.stringify(data, null, 2);
    
    // Show info about unmatched products
    const unmatchedProducts = localStorage.getItem('unmatchedProducts');
    if (unmatchedProducts) {
        try {
            const unmatched = JSON.parse(unmatchedProducts);
            if (unmatched.length > 0) {
                unmatchedInfo.textContent = `Note: ${unmatched.length} imported product(s) not found in current catalog are included in export.`;
            } else {
                unmatchedInfo.textContent = '';
            }
        } catch (e) {
            unmatchedInfo.textContent = '';
        }
    } else {
        unmatchedInfo.textContent = '';
    }
    
    settingsModal.style.display = 'block';
}

// Setup tab navigation
function setupTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all tabs and buttons
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked button and target tab
            this.classList.add('active');
            document.getElementById(targetTab + '-tab').classList.add('active');
        });
    });
}

// Parse and normalize instance URL
// Handles various input formats intelligently:
// - "dev12345" → https://dev12345.service-now.com
// - "dev12345.service-now.com" → https://dev12345.service-now.com
// - "https://dev12345.service-now.com" → https://dev12345.service-now.com
// - "acme.servicenowservices.com" → https://acme.servicenowservices.com
// - "http://test.com" → https://test.com (upgrades to https)
function parseInstanceUrl(input) {
    if (!input) return null;
    
    // Trim and convert to lowercase for easier parsing
    input = input.trim().toLowerCase();
    
    // Remove trailing slashes
    input = input.replace(/\/+$/, '');
    
    // Remove any protocol prefix if present
    let hasProtocol = false;
    let protocol = 'https://';
    
    if (input.startsWith('https://')) {
        input = input.substring(8);
        hasProtocol = true;
        protocol = 'https://';
    } else if (input.startsWith('http://')) {
        input = input.substring(7);
        hasProtocol = true;
        protocol = 'https://'; // Always upgrade to https
    }
    
    // Remove 'www.' prefix if present
    if (input.startsWith('www.')) {
        input = input.substring(4);
    }
    
    // Now input should be just the hostname/instance name
    
    // Check if it's already a fully qualified domain
    // (contains a dot and looks like a valid domain)
    if (input.includes('.')) {
        // It's a domain name
        // Check if it's a ServiceNow domain or custom domain
        
        // Common ServiceNow domain patterns:
        // - instance.service-now.com
        // - instance.servicenowservices.com
        // - custom.domain.com
        
        try {
            // Validate it's a valid hostname
            const url = new URL(protocol + input);
            return url.origin;
        } catch (e) {
            // Invalid URL format
            return null;
        }
    } else {
        // It's just an instance name (e.g., "dev12345", "acme")
        // Validate instance name (alphanumeric, hyphens, underscores)
        if (!/^[a-z0-9_-]+$/i.test(input)) {
            return null; // Invalid instance name
        }
        
        // Default to .service-now.com domain
        return `https://${input}.service-now.com`;
    }
}

// Load instance configuration
function loadInstanceConfig() {
    const instanceUrl = localStorage.getItem('instanceUrl');
    const currentInstanceDisplay = document.getElementById('currentInstance');
    
    if (instanceUrl) {
        currentInstanceDisplay.textContent = instanceUrl;
        currentInstanceDisplay.style.color = '#27ae60';
    } else {
        currentInstanceDisplay.textContent = 'Not configured';
        currentInstanceDisplay.style.color = '#7f8c8d';
    }
}

// Save instance configuration
function saveInstanceConfig() {
    const instanceUrlInput = document.getElementById('instanceUrl');
    const instanceStatus = document.getElementById('instanceStatus');
    const currentInstanceDisplay = document.getElementById('currentInstance');
    const input = instanceUrlInput.value.trim();
    
    if (!input) {
        instanceStatus.textContent = 'Please enter an instance URL';
        instanceStatus.className = 'form-status error';
        return;
    }
    
    const parsedUrl = parseInstanceUrl(input);
    
    if (!parsedUrl) {
        instanceStatus.textContent = 'Invalid URL format';
        instanceStatus.className = 'form-status error';
        return;
    }
    
    // Save to localStorage
    localStorage.setItem('instanceUrl', parsedUrl);
    
    // Update display
    currentInstanceDisplay.textContent = parsedUrl;
    currentInstanceDisplay.style.color = '#27ae60';
    
    // Show success
    instanceStatus.textContent = 'Instance URL saved successfully!';
    instanceStatus.className = 'form-status success';
    
    // Clear after 2 seconds
    setTimeout(() => {
        instanceStatus.textContent = '';
    }, 2000);
}

// Clear instance configuration
function clearInstanceConfig() {
    const instanceUrlInput = document.getElementById('instanceUrl');
    const instanceStatus = document.getElementById('instanceStatus');
    const currentInstanceDisplay = document.getElementById('currentInstance');
    
    // Clear from localStorage
    localStorage.removeItem('instanceUrl');
    
    // Clear input
    instanceUrlInput.value = '';
    
    // Update display
    currentInstanceDisplay.textContent = 'Not configured';
    currentInstanceDisplay.style.color = '#7f8c8d';
    
    // Show success
    instanceStatus.textContent = 'Instance URL cleared';
    instanceStatus.className = 'form-status success';
    
    // Clear after 2 seconds
    setTimeout(() => {
        instanceStatus.textContent = '';
    }, 2000);
    
    // Clear preview
    updateUrlPreview();
}

// Update URL preview as user types
function updateUrlPreview() {
    const instanceUrlInput = document.getElementById('instanceUrl');
    const urlPreview = document.getElementById('urlPreview');
    const input = instanceUrlInput.value.trim();
    
    if (!input) {
        urlPreview.textContent = '';
        urlPreview.className = 'url-preview';
        return;
    }
    
    const parsedUrl = parseInstanceUrl(input);
    
    if (parsedUrl) {
        urlPreview.textContent = `✓ Will be saved as: ${parsedUrl}`;
        urlPreview.className = 'url-preview';
    } else {
        urlPreview.textContent = `✗ Invalid URL format`;
        urlPreview.className = 'url-preview error';
    }
}

// Generate instance links for a product
function generateInstanceLinks(tablesData) {
    const instanceUrl = localStorage.getItem('instanceUrl');
    if (!instanceUrl || !tablesData) return null;
    
    try {
        // Parse the tables data (it's now JSON)
        const tables = JSON.parse(tablesData);
        
        // Check if it's an object (new format) or array (old format)
        if (typeof tables === 'object' && tables !== null && !Array.isArray(tables)) {
            // New format: { "table_name": "query", "table_name2": "query2" }
            const links = [];
            Object.entries(tables).forEach(([tableName, query]) => {
                let finalQuery = query;
                
                // Append ORDER BY clause if query exists
                if (finalQuery) {
                    finalQuery += '^ORDERBYDESCsys_created_on';
                }
                
                const url = finalQuery 
                    ? `${instanceUrl}/nav_to.do?uri=${tableName}_list.do?sysparm_query=${encodeURIComponent(finalQuery)}`
                    : `${instanceUrl}/nav_to.do?uri=${tableName}_list.do`;
                
                links.push({
                    table: tableName,
                    url: url
                });
            });
            return links.length > 0 ? links : null;
        }
        
        // Old format: array of objects [{ "table_name": "query" }]
        if (Array.isArray(tables) && tables.length > 0) {
            const links = [];
            
            tables.forEach(tableItem => {
                if (typeof tableItem === 'object' && tableItem !== null) {
                    Object.entries(tableItem).forEach(([tableName, query]) => {
                        let finalQuery = query;
                        
                        // Append ORDER BY clause if query exists
                        if (finalQuery) {
                            finalQuery += '^ORDERBYDESCsys_created_on';
                        }
                        
                        const url = finalQuery 
                            ? `${instanceUrl}/nav_to.do?uri=${tableName}_list.do?sysparm_query=${encodeURIComponent(finalQuery)}`
                            : `${instanceUrl}/nav_to.do?uri=${tableName}_list.do`;
                        
                        links.push({
                            table: tableName,
                            url: url
                        });
                    });
                } else if (typeof tableItem === 'string') {
                    links.push({
                        table: tableItem,
                        url: `${instanceUrl}/nav_to.do?uri=${tableItem}_list.do`
                    });
                }
            });
            
            return links.length > 0 ? links : null;
        }
        
        return null;
    } catch (e) {
        // Fallback for old comma-separated format
        const tableArray = tablesData.split(',').map(t => t.trim()).filter(t => t);
        if (tableArray.length === 0) return null;
        
        const links = tableArray.map(table => ({
            table: table,
            url: `${instanceUrl}/nav_to.do?uri=${table}_list.do`
        }));
        
        return links;
    }
}

// Download state as JSON file
function downloadStateAsJson() {
    const data = exportData();
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'sn-capability-plan-' + new Date().toISOString().split('T')[0] + '.json';
    link.click();
    URL.revokeObjectURL(url);
}

// Process imported JSON data (shared logic)
function processImportedData(data) {
    const importStatus = document.getElementById('importStatus');
    
    try {
        // Validate data structure
        if (!Array.isArray(data)) {
            throw new Error('Invalid JSON format: expected an array');
        }
        
        // Apply imported states
        const productItems = document.querySelectorAll('.product-item');
        let matchedCount = 0;
        let unmatchedCount = 0;
        const unmatchedProducts = [];
        
        // Create a map of existing products for faster lookup
        const existingProducts = new Map();
        productItems.forEach(productItem => {
            const key = productItem.getAttribute('data-category') + '::' + productItem.getAttribute('data-product');
            existingProducts.set(key, productItem);
        });
        
        // Process imported data
        data.forEach(item => {
            const key = item.category + '::' + item.product;
            
            if (existingProducts.has(key)) {
                // Product exists - update its state
                const productItem = existingProducts.get(key);
                if (item.state) {
                    productItem.setAttribute('data-state', item.state);
                    matchedCount++;
                }
            } else {
                // Product doesn't exist - store for future reference
                unmatchedProducts.push(item);
                unmatchedCount++;
            }
        });
        
        // Save matched states to localStorage
        saveStates();
        
        // Save unmatched products separately
        if (unmatchedProducts.length > 0) {
            localStorage.setItem('unmatchedProducts', JSON.stringify(unmatchedProducts));
        }
        
        // Render unmatched products on the UI
        renderUnmatchedProducts();
        
        // Reapply filters
        applyFilters();
        
        // Update JSON viewer with merged data (current + unmatched)
        const jsonViewer = document.getElementById('jsonViewer');
        const currentData = exportData();
        const mergedData = mergeImportedData(currentData, unmatchedProducts);
        jsonViewer.value = JSON.stringify(mergedData, null, 2);
        
        // Show detailed success message
        let message = `Successfully imported ${matchedCount} capability state(s)!`;
        if (unmatchedCount > 0) {
            message += ` (${unmatchedCount} product(s) not found but saved for future use)`;
        }
        importStatus.textContent = message;
        importStatus.className = 'import-status success';
        
        return true;
    } catch (error) {
        importStatus.textContent = `Error importing: ${error.message}`;
        importStatus.className = 'import-status error';
        return false;
    }
}

// Import state from textarea
function importStateFromText() {
    const importStatus = document.getElementById('importStatus');
    const importTextarea = document.getElementById('importTextarea');
    const text = importTextarea.value.trim();
    
    if (!text) {
        importStatus.textContent = 'Please paste JSON data first';
        importStatus.className = 'import-status error';
        return;
    }
    
    try {
        const data = JSON.parse(text);
        if (processImportedData(data)) {
            // Clear textarea on success
            importTextarea.value = '';
        }
    } catch (error) {
        importStatus.textContent = `Invalid JSON: ${error.message}`;
        importStatus.className = 'import-status error';
    }
}

// Import state from JSON file
function importStateFromJson(file) {
    const importStatus = document.getElementById('importStatus');
    const reader = new FileReader();
    
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            processImportedData(data);
        } catch (error) {
            importStatus.textContent = `Error reading file: ${error.message}`;
            importStatus.className = 'import-status error';
        }
    };
    
    reader.onerror = function() {
        importStatus.textContent = 'Error reading file';
        importStatus.className = 'import-status error';
    };
    
    reader.readAsText(file);
    
    // Reset file input
    document.getElementById('fileInput').value = '';
}

// Merge current data with unmatched imported products
function mergeImportedData(currentData, unmatchedProducts) {
    const merged = [...currentData];
    const existingKeys = new Set(currentData.map(item => item.category + '::' + item.product));
    
    // Add unmatched products that aren't in current data
    unmatchedProducts.forEach(item => {
        const key = item.category + '::' + item.product;
        if (!existingKeys.has(key)) {
            merged.push(item);
        }
    });
    
    return merged;
}

// Reset all states
function resetAllStates() {
    if (confirm('Are you sure you want to reset all capability states?')) {
        const productItems = document.querySelectorAll('.product-item');
        productItems.forEach(item => {
            item.setAttribute('data-state', 'not-licensed');
        });
        localStorage.removeItem('capabilityStates');
    }
}

// Add keyboard shortcut for settings modal (Ctrl+E)
document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'e') {
        e.preventDefault();
        openSettingsModal();
    }
});

// Generate ServiceNow script for usage analysis
function generateServiceNowScript() {
    // Get all products with their tables
    var productItems = document.querySelectorAll('.product-item');
    var tableMap = {}; // Map of table name to { query: '', products: [] }
    
    productItems.forEach(function(item) {
        var productName = item.getAttribute('data-product');
        var categoryName = item.getAttribute('data-category');
        var tablesData = item.getAttribute('data-tables');
        
        if (tablesData) {
            try {
                var tables = JSON.parse(tablesData);
                
                // Handle object format (new): { "table_name": "query" }
                if (typeof tables === 'object' && tables !== null && !Array.isArray(tables)) {
                    Object.keys(tables).forEach(function(tableName) {
                        var query = tables[tableName] || '';
                        
                        if (!tableMap[tableName]) {
                            tableMap[tableName] = {
                                query: query,
                                products: []
                            };
                        }
                        tableMap[tableName].products.push({
                            product: productName,
                            category: categoryName
                        });
                    });
                }
                // Handle array format (old): [{ "table_name": "query" }]
                else if (Array.isArray(tables)) {
                    tables.forEach(function(tableItem) {
                        if (typeof tableItem === 'object' && tableItem !== null) {
                            Object.keys(tableItem).forEach(function(tableName) {
                                var query = tableItem[tableName] || '';
                                
                                if (!tableMap[tableName]) {
                                    tableMap[tableName] = {
                                        query: query,
                                        products: []
                                    };
                                }
                                tableMap[tableName].products.push({
                                    product: productName,
                                    category: categoryName
                                });
                            });
                        }
                    });
                }
            } catch (e) {
                // Skip invalid JSON
            }
        }
    });
    
    // Generate ECMAScript 5 compatible ServiceNow script
    var script = '// ServiceNow Capability Usage Analysis Script\n';
    script += '// Generated: ' + new Date().toISOString() + '\n';
    script += '// Run this in Scripts - Background\n';
    script += '//\n';
    script += '// This script analyzes table usage and outputs JSON for import\n';
    script += '// Usage categories:\n';
    script += '//   High: >100 records\n';
    script += '//   Medium: 50-100 records\n';
    script += '//   Low: 1-49 records\n';
    script += '//   Not Used: 0 records\n';
    script += '//\n';
    script += '// Note: Queries from table definitions are applied to filter records\n\n';
    
    script += '(function() {\n';
    script += '    var results = [];\n';
    script += '    var tablesToCheck = ' + JSON.stringify(tableMap, null, 4) + ';\n\n';
    
    script += '    // Iterate through each table\n';
    script += '    for (var tableName in tablesToCheck) {\n';
    script += '        if (!tablesToCheck.hasOwnProperty(tableName)) continue;\n\n';
    
    script += '        var tableData = tablesToCheck[tableName];\n';
    script += '        var products = tableData.products;\n';
    script += '        var query = tableData.query || \'\';\n';
    script += '        var count = 0;\n\n';
    
    script += '        try {\n';
    script += '            // Use GlideAggregate to count records\n';
    script += '            var ga = new GlideAggregate(tableName);\n';
    script += '            \n';
    script += '            // Apply query filter if provided\n';
    script += '            if (query) {\n';
    script += '                ga.addEncodedQuery(query);\n';
    script += '            }\n';
    script += '            \n';
    script += '            ga.addAggregate(\'COUNT\');\n';
    script += '            ga.query();\n\n';
    
    script += '            if (ga.next()) {\n';
    script += '                count = parseInt(ga.getAggregate(\'COUNT\'), 10);\n';
    script += '            }\n';
    script += '        } catch (e) {\n';
    script += '            gs.warn(\'Error counting table \' + tableName + \': \' + e.message);\n';
    script += '            continue;\n';
    script += '        }\n\n';
    
    script += '        // Determine usage state based on count\n';
    script += '        var state;\n';
    script += '        if (count > 100) {\n';
    script += '            state = \'licensed-high\';\n';
    script += '        } else if (count >= 50) {\n';
    script += '            state = \'licensed-medium\';\n';
    script += '        } else if (count > 0) {\n';
    script += '            state = \'licensed-low\';\n';
    script += '        } else {\n';
    script += '            state = \'licensed-not-used\';\n';
    script += '        }\n\n';
    
    script += '        // Add result for each product using this table\n';
    script += '        for (var i = 0; i < products.length; i++) {\n';
    script += '            var product = products[i];\n';
    script += '            \n';
    script += '            // Check if we already have this product\n';
    script += '            var found = false;\n';
    script += '            for (var j = 0; j < results.length; j++) {\n';
    script += '                if (results[j].product === product.product && results[j].category === product.category) {\n';
    script += '                    found = true;\n';
    script += '                    // If this table has higher usage, update the state\n';
    script += '                    var currentPriority = getStatePriority(results[j].state);\n';
    script += '                    var newPriority = getStatePriority(state);\n';
    script += '                    if (newPriority > currentPriority) {\n';
    script += '                        results[j].state = state;\n';
    script += '                    }\n';
    script += '                    break;\n';
    script += '                }\n';
    script += '            }\n\n';
    
    script += '            if (!found) {\n';
    script += '                results.push({\n';
    script += '                    category: product.category,\n';
    script += '                    product: product.product,\n';
    script += '                    state: state\n';
    script += '                });\n';
    script += '            }\n';
    script += '        }\n';
    script += '    }\n\n';
    
    script += '    // Helper function to get state priority (higher = more usage)\n';
    script += '    function getStatePriority(state) {\n';
    script += '        var priorities = {\n';
    script += '            \'licensed-not-used\': 0,\n';
    script += '            \'licensed-low\': 1,\n';
    script += '            \'licensed-medium\': 2,\n';
    script += '            \'licensed-high\': 3\n';
    script += '        };\n';
    script += '        return priorities[state] || 0;\n';
    script += '    }\n\n';
    
    script += '    // Output results as JSON\n';
    script += '    gs.info(\'=== CAPABILITY USAGE ANALYSIS RESULTS ===\');\n';
    script += '    gs.info(\'Total products analyzed: \' + results.length);\n';
    script += '    gs.info(\'Copy the JSON below and import it into the tool:\');\n';
    script += '    gs.info(\'\\n\' + JSON.stringify(results, null, 2));\n';
    script += '    gs.info(\'=== END RESULTS ===\');\n';
    script += '})();\n';
    
    // Display the script
    scriptCode.textContent = script;
    scriptOutput.style.display = 'block';
    copyScriptBtn.style.display = 'inline-block';
}

// Copy ServiceNow script to clipboard
function copyServiceNowScript() {
    var script = scriptCode.textContent;
    
    // Create temporary textarea
    var textarea = document.createElement('textarea');
    textarea.value = script;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    
    textarea.select();
    document.execCommand('copy');
    
    document.body.removeChild(textarea);
    
    // Update button text
    var originalText = copyScriptBtn.textContent;
    copyScriptBtn.textContent = 'Copied!';
    setTimeout(function() {
        copyScriptBtn.textContent = originalText;
    }, 2000);
}

// Search entitlements function
function searchEntitlements(query) {
    const entitlementsResults = document.getElementById('entitlementsResults');
    
    if (!window.entitlementsData || !Array.isArray(window.entitlementsData)) {
        entitlementsResults.innerHTML = '<p class="no-results">Entitlements data not available.</p>';
        return;
    }
    
    // Filter entitlements by name or product codes
    const results = window.entitlementsData.filter(ent => {
        const nameMatch = ent.name && ent.name.toLowerCase().includes(query);
        const codeMatch = ent.productCodes && ent.productCodes.some(code => code.toLowerCase().includes(query));
        return nameMatch || codeMatch;
    });
    
    // Display results
    if (results.length === 0) {
        entitlementsResults.innerHTML = '<p class="no-results">No entitlements found.</p>';
        return;
    }
    
    let html = '';
    results.forEach(ent => {
        // Build PDF URL from name if source exists
        const pdfUrl = ent.source || `https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/other-document/entitlements/${ent.name}.pdf`;
        
        html += '<details class="entitlement-result">';
        html += '<summary class="entitlement-summary">';
        html += `<span class="entitlement-name">${ent.name}</span>`;
        html += '</summary>';
        html += '<div class="entitlement-details">';
        html += `<div class="entitlement-link-section">`;
        html += `<a href="${pdfUrl}" target="_blank" rel="noopener noreferrer" class="entitlement-pdf-link">📄 View PDF</a>`;
        html += `</div>`;
        
        if (ent.productCodes && ent.productCodes.length > 0) {
            html += '<div class="product-codes-section">';
            html += '<strong>Product Codes:</strong>';
            html += '<div class="product-codes-list">';
            ent.productCodes.forEach(code => {
                // Create direct link to the PROD PDF
                const prodUrl = `https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/other-document/entitlements/${code}.pdf`;
                html += `<a href="${prodUrl}" target="_blank" rel="noopener noreferrer" class="product-code product-code-link" title="View ${code} entitlement PDF">${code}</a>`;
            });
            html += '</div>';
            html += '</div>';
        }
        
        html += '</div>';
        html += '</details>';
    });
    
    entitlementsResults.innerHTML = html;
}
