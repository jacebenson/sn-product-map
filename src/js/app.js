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

// Search filter text
let searchText = '';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    const productItems = document.querySelectorAll('.product-item');
    const modal = document.getElementById('productModal');
    const closeBtn = document.querySelector('.close');
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
    
    // Load saved states from localStorage
    loadStates();
    
    // Load saved filters
    loadFilters();
    
    // Render unmatched products
    renderUnmatchedProducts();
    
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
        
        applyFilters();
    });
    
    searchClear.addEventListener('click', function() {
        searchInput.value = '';
        searchText = '';
        searchClear.style.display = 'none';
        applyFilters();
    });
    
    // Add click handlers to legend items for filtering
    legendItems.forEach(item => {
        item.addEventListener('click', function() {
            toggleFilter(this);
        });
    });
    
    // Add click handlers to product items
    productItems.forEach(item => {
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
            if (settingsModal.style.display === 'block') {
                settingsModal.style.display = 'none';
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
        const productName = item.getAttribute('data-product').toLowerCase();
        
        // Check state filter
        const stateMatches = activeFilters.has(itemState);
        
        // Check search filter
        const searchMatches = !searchText || productName.includes(searchText);
        
        // Show only if both filters pass
        if (stateMatches && searchMatches) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
    
    // Hide category cards that have no visible products
    categoryCards.forEach(card => {
        const categoryTitle = card.querySelector('.category-title');
        const categoryName = categoryTitle ? categoryTitle.textContent.toLowerCase() : '';
        const visibleProducts = card.querySelectorAll('.product-item:not([style*="display: none"])');
        
        // Check if category name matches search (if searching)
        const categoryMatches = !searchText || categoryName.includes(searchText);
        
        // Show category if it has visible products OR if category name matches search
        if (visibleProducts.length > 0 || (searchText && categoryMatches && visibleProducts.length === 0)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
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
    
    // Populate tables list
    const tablesList = document.getElementById('tablesList');
    tablesList.innerHTML = '';
    
    if (tables && tables.trim() !== '') {
        try {
            // Try to parse as JSON (new format)
            const tablesArray = JSON.parse(tables);
            
            if (Array.isArray(tablesArray) && tablesArray.length > 0) {
                tablesArray.forEach(tableItem => {
                    const li = document.createElement('li');
                    
                    if (typeof tableItem === 'object' && tableItem !== null) {
                        // New format: { "table_name": "query" }
                        Object.entries(tableItem).forEach(([tableName, query]) => {
                            li.textContent = tableName;
                            if (query) {
                                li.title = `Query: ${query}`;
                            }
                        });
                    } else if (typeof tableItem === 'string') {
                        // Old format: "table_name"
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
    
    // Handle tables - could be string or array/object
    let tablesValue = product.tables || '';
    if (typeof tablesValue === 'object') {
        tablesValue = JSON.stringify(tablesValue);
    }
    li.setAttribute('data-tables', tablesValue);
    
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
        
        if (!Array.isArray(tables) || tables.length === 0) return null;
        
        const links = [];
        
        tables.forEach(tableItem => {
            if (typeof tableItem === 'object' && tableItem !== null) {
                // New format: { "table_name": "query" }
                Object.entries(tableItem).forEach(([tableName, query]) => {
                    const url = query 
                        ? `${instanceUrl}/${tableName}_list.do?sysparm_query=${encodeURIComponent(query)}`
                        : `${instanceUrl}/nav_to.do?uri=${tableName}_list.do`;
                    
                    links.push({
                        table: tableName,
                        url: url
                    });
                });
            } else if (typeof tableItem === 'string') {
                // Old format: "table_name"
                links.push({
                    table: tableItem,
                    url: `${instanceUrl}/nav_to.do?uri=${tableItem}_list.do`
                });
            }
        });
        
        return links.length > 0 ? links : null;
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

// Add keyboard shortcut for settings modal (Ctrl+E)
document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'e') {
        e.preventDefault();
        openSettingsModal();
    }
});
