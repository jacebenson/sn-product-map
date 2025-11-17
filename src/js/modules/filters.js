import { storage } from '../utils/storage.js';
import { states } from './state.js';

// Active filters - all states visible by default
export let activeFilters = new Set(states);

// Search filter text
export let searchText = '';

// Toggle filter state
export function toggleFilter(legendItem) {
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
export function applyFilters() {
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

// Update search text and apply filters
export function updateSearchText(text) {
    searchText = text.toLowerCase();
    applyFilters();
}

// Save filters to localStorage
export function saveFilters() {
    storage.set('activeFilters', Array.from(activeFilters));
}

// Load filters from localStorage
export function loadFilters() {
    const savedFilters = storage.get('activeFilters');
    
    if (savedFilters) {
        activeFilters = new Set(savedFilters);
        
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
