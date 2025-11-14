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
    
    // Load saved states from localStorage
    loadStates();
    
    // Load saved filters
    loadFilters();
    
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

// Export functionality (optional - can be used later)
function exportData() {
    const productItems = document.querySelectorAll('.product-item');
    const data = [];
    
    productItems.forEach(item => {
        data.push({
            category: item.getAttribute('data-category'),
            product: item.getAttribute('data-product'),
            state: item.getAttribute('data-state'),
            description: item.getAttribute('data-description'),
            tables: item.getAttribute('data-tables')
        });
    });
    
    return data;
}

// Open Export/Import Modal
function openExportImportModal() {
    const exportImportModal = document.getElementById('exportImportModal');
    const jsonViewer = document.getElementById('jsonViewer');
    const importStatus = document.getElementById('importStatus');
    
    // Clear import status
    importStatus.textContent = '';
    importStatus.className = 'import-status';
    
    // Update JSON viewer with current state
    const data = exportData();
    jsonViewer.value = JSON.stringify(data, null, 2);
    
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
            let updatedCount = 0;
            
            data.forEach(item => {
                const key = item.category + '::' + item.product;
                
                productItems.forEach(productItem => {
                    const itemKey = productItem.getAttribute('data-category') + '::' + productItem.getAttribute('data-product');
                    if (itemKey === key && item.state) {
                        productItem.setAttribute('data-state', item.state);
                        updatedCount++;
                    }
                });
            });
            
            // Save to localStorage
            saveStates();
            
            // Reapply filters
            applyFilters();
            
            // Update JSON viewer
            const jsonViewer = document.getElementById('jsonViewer');
            jsonViewer.value = JSON.stringify(data, null, 2);
            
            // Show success message
            importStatus.textContent = `Successfully imported ${updatedCount} capability states!`;
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
