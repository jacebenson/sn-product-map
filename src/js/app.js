// State cycle order
const states = [
    'not-licensed',
    'licensed-high',
    'licensed-medium',
    'licensed-low',
    'licensed-not-used',
    'plan-to-adopt'
];

// Active filters - all states visible by default
let activeFilters = new Set(states);

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    const productItems = document.querySelectorAll('.product-item');
    const modal = document.getElementById('productModal');
    const closeBtn = document.querySelector('.close');
    const legendItems = document.querySelectorAll('.legend-item');
    
    // Export/Import modal elements
    const exportImportBtn = document.getElementById('exportImportBtn');
    const exportImportModal = document.getElementById('exportImportModal');
    const closeExportBtn = document.querySelector('.close-export');
    const downloadJsonBtn = document.getElementById('downloadJsonBtn');
    const importJsonBtn = document.getElementById('importJsonBtn');
    const fileInput = document.getElementById('fileInput');
    const copyJsonBtn = document.getElementById('copyJsonBtn');
    const jsonViewer = document.getElementById('jsonViewer');
    const importStatus = document.getElementById('importStatus');
    
    // Add Product modal elements
    const addProductModal = document.getElementById('addProductModal');
    const closeAddProductBtn = document.querySelector('.close-add-product');
    const addProductForm = document.getElementById('addProductForm');
    const cancelAddProductBtn = document.getElementById('cancelAddProduct');
    
    // Load saved states from localStorage
    loadStates();
    
    // Load saved filters
    loadFilters();
    
    // Render unmatched products
    renderUnmatchedProducts();
    
    // Add click handlers to [+] buttons
    attachAddProductHandlers();
    
    // Add click handler to export/import button
    exportImportBtn.addEventListener('click', function() {
        openExportImportModal();
    });
    
    // Close export/import modal handlers
    closeExportBtn.addEventListener('click', function() {
        exportImportModal.style.display = 'none';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === exportImportModal) {
            exportImportModal.style.display = 'none';
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
    
    // Add click handlers to legend items for filtering
    legendItems.forEach(item => {
        item.addEventListener('click', function() {
            toggleFilter(this);
        });
    });
    
    // Add click handlers to product items
    productItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Check if it's a right-click or ctrl+click to show modal
            if (e.button === 2 || e.ctrlKey || e.metaKey) {
                e.preventDefault();
                showModal(this);
            } else {
                // Left-click cycles through states
                cycleState(this);
            }
        });
        
        // Add context menu handler
        item.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            showModal(this);
        });
        
        // Add double-click handler for modal
        item.addEventListener('dblclick', function(e) {
            e.preventDefault();
            showModal(this);
        });
    });
    
    // Close modal handlers
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
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
            if (exportImportModal.style.display === 'block') {
                exportImportModal.style.display = 'none';
            }
            if (addProductModal.style.display === 'block') {
                addProductModal.style.display = 'none';
            }
        }
    });
    
    // Apply initial filter
    applyFilters();
});

// Toggle filter state
function toggleFilter(legendItem) {
    const filterState = legendItem.getAttribute('data-filter');
    
    if (legendItem.classList.contains('active')) {
        legendItem.classList.remove('active');
        activeFilters.delete(filterState);
    } else {
        legendItem.classList.add('active');
        activeFilters.add(filterState);
    }
    
    applyFilters();
    saveFilters();
}

// Apply filters to product items
function applyFilters() {
    const productItems = document.querySelectorAll('.product-item');
    const categoryCards = document.querySelectorAll('.category-card');
    
    productItems.forEach(item => {
        const itemState = item.getAttribute('data-state');
        if (activeFilters.has(itemState)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
    
    // Hide category cards that have no visible products
    categoryCards.forEach(card => {
        const visibleProducts = card.querySelectorAll('.product-item:not([style*="display: none"])');
        if (visibleProducts.length === 0) {
            card.style.display = 'none';
        } else {
            card.style.display = '';
        }
    });
}

// Cycle through states
function cycleState(element) {
    const currentState = element.getAttribute('data-state');
    const currentIndex = states.indexOf(currentState);
    const nextIndex = (currentIndex + 1) % states.length;
    const nextState = states[nextIndex];
    
    element.setAttribute('data-state', nextState);
    
    // Save state to localStorage
    saveStates();
    
    // Reapply filters to show/hide based on new state
    applyFilters();
}

// Show modal with product details
function showModal(element) {
    const modal = document.getElementById('productModal');
    const productName = element.getAttribute('data-product');
    const category = element.getAttribute('data-category');
    const description = element.getAttribute('data-description');
    const tables = element.getAttribute('data-tables');
    const productURL = element.getAttribute('data-product-url');
    
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
    
    // Populate tables list
    const tablesList = document.getElementById('tablesList');
    tablesList.innerHTML = '';
    
    if (tables && tables.trim() !== '') {
        const tablesArray = tables.split(',').map(t => t.trim());
        tablesArray.forEach(table => {
            const li = document.createElement('li');
            li.textContent = table;
            tablesList.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.textContent = 'No specific tables defined';
        li.style.fontStyle = 'italic';
        tablesList.appendChild(li);
    }
    
    modal.style.display = 'block';
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
    
    if (savedStates) {
        const states = JSON.parse(savedStates);
        const productItems = document.querySelectorAll('.product-item');
        
        productItems.forEach(item => {
            const key = item.getAttribute('data-category') + '::' + item.getAttribute('data-product');
            if (states[key]) {
                item.setAttribute('data-state', states[key]);
            }
        });
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
    li.setAttribute('data-tables', product.tables || '');
    li.setAttribute('data-description', product.description || '');
    li.setAttribute('data-product-url', product.productURL || '');
    
    const span = document.createElement('span');
    span.className = 'product-name';
    span.textContent = product.product;
    
    li.appendChild(span);
    
    return li;
}

// Helper: Attach handlers to product item
function attachProductItemHandlers(item) {
    item.addEventListener('click', function(e) {
        if (e.button === 2 || e.ctrlKey || e.metaKey) {
            e.preventDefault();
            showModal(this);
        } else {
            cycleState(this);
        }
    });
    
    item.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        showModal(this);
    });
    
    item.addEventListener('dblclick', function(e) {
        e.preventDefault();
        showModal(this);
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

// Open Export/Import Modal
function openExportImportModal() {
    const exportImportModal = document.getElementById('exportImportModal');
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
    
    exportImportModal.style.display = 'block';
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

// Import state from JSON file
function importStateFromJson(file) {
    const importStatus = document.getElementById('importStatus');
    const reader = new FileReader();
    
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            
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
            
        } catch (error) {
            importStatus.textContent = `Error importing file: ${error.message}`;
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

// Add keyboard shortcut for export/import modal (Ctrl+E)
document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'e') {
        e.preventDefault();
        openExportImportModal();
    }
});
