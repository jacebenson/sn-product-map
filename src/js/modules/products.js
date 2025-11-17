import { storage } from '../utils/storage.js';
import { saveStates } from './state.js';
import { applyFilters } from './filters.js';

// Helper: Find category card by name
export function findCategoryCard(categoryName) {
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
export function findProductInCategory(categoryCard, productName) {
    const products = categoryCard.querySelectorAll('.product-item');
    for (let product of products) {
        if (product.getAttribute('data-product') === productName) {
            return product;
        }
    }
    return null;
}

// Helper: Create category card
export function createCategoryCard(categoryName) {
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
export function createProductItem(product) {
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

// Render unmatched products from localStorage
export function renderUnmatchedProducts(attachHandlers, attachAddProductHandlers) {
    const unmatchedProducts = storage.get('unmatchedProducts');
    if (!unmatchedProducts || unmatchedProducts.length === 0) return;
    
    try {
        // Group unmatched products by category
        const categorizedProducts = {};
        unmatchedProducts.forEach(product => {
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
                    if (attachHandlers) {
                        attachHandlers(productItem);
                    }
                }
            });
        });
        
        // Reattach handlers to new [+] buttons
        if (attachAddProductHandlers) {
            attachAddProductHandlers();
        }
    } catch (e) {
        console.warn('Error rendering unmatched products:', e);
    }
}

// Add product to unmatched products storage
export function addToUnmatchedProducts(product) {
    const unmatchedProducts = storage.get('unmatchedProducts') || [];
    
    // Check if product already exists
    const exists = unmatchedProducts.some(p => 
        p.category === product.category && p.product === product.product
    );
    
    if (!exists) {
        unmatchedProducts.push(product);
        storage.set('unmatchedProducts', unmatchedProducts);
    }
}

// Delete a custom product
export function deleteCustomProduct(category, productName) {
    const unmatchedProducts = storage.get('unmatchedProducts') || [];
    
    // Filter out the product
    const filtered = unmatchedProducts.filter(p => 
        !(p.category === category && p.product === productName)
    );
    
    storage.set('unmatchedProducts', filtered);
    return true;
}

// Delete a preloaded product (mark as deleted)
export function deletePreloadedProduct(category, productName) {
    const deletedProducts = storage.get('deletedProducts') || {};
    const key = category + '::' + productName;
    deletedProducts[key] = true;
    storage.set('deletedProducts', deletedProducts);
    return true;
}

// Reset deleted products (restore all preloaded products)
export function resetDeletedProducts() {
    storage.remove('deletedProducts');
    return true;
}

// Handle product deletion
export function handleDeleteProduct(modal, callback) {
    const productName = modal.getAttribute('data-current-product');
    const category = modal.getAttribute('data-current-category');
    const isCustom = modal.getAttribute('data-current-is-custom') === 'true';
    
    const confirmed = confirm(`Are you sure you want to delete "${productName}" from "${category}"?`);
    
    if (confirmed) {
        // Find and remove the product element
        const categoryCard = findCategoryCard(category);
        if (categoryCard) {
            const productItem = findProductInCategory(categoryCard, productName);
            if (productItem) {
                productItem.remove();
                
                // If custom product, remove from unmatchedProducts
                if (isCustom) {
                    deleteCustomProduct(category, productName);
                } else {
                    // If preloaded, mark as deleted
                    deletePreloadedProduct(category, productName);
                }
                
                // Remove from states
                saveStates();
                
                // Check if category is now empty and should be removed
                const remainingProducts = categoryCard.querySelectorAll('.product-item');
                if (remainingProducts.length === 0) {
                    // Check if this was a custom category (created for unmatched products)
                    const allCategoryCards = document.querySelectorAll('.category-card');
                    let wasCustomCategory = true;
                    
                    // If there are other references to this category in preloaded data, keep the card
                    allCategoryCards.forEach(card => {
                        const title = card.querySelector('.category-title');
                        if (title && title.textContent === category && card !== categoryCard) {
                            wasCustomCategory = false;
                        }
                    });
                    
                    // Only remove if it was custom and empty
                    if (wasCustomCategory) {
                        categoryCard.remove();
                    }
                }
                
                // Close modal
                modal.style.display = 'none';
                
                if (callback) {
                    callback();
                }
            }
        }
    }
}
