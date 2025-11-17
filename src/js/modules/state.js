import { storage } from '../utils/storage.js';

// State cycle order
export const states = [
    'not-licensed',
    'licensed-high',
    'licensed-medium',
    'licensed-low',
    'licensed-not-used',
    'plan-to-adopt'
];

// Save states to localStorage
export function saveStates() {
    const productItems = document.querySelectorAll('.product-item');
    const states = {};
    
    productItems.forEach(item => {
        const key = item.getAttribute('data-category') + '::' + item.getAttribute('data-product');
        const state = item.getAttribute('data-state');
        states[key] = state;
    });
    
    storage.set('capabilityStates', states);
}

// Load states from localStorage
export function loadStates() {
    const savedStates = storage.get('capabilityStates');
    const deletedProducts = storage.get('deletedProducts') || {};
    
    if (savedStates) {
        const productItems = document.querySelectorAll('.product-item');
        
        productItems.forEach(item => {
            const key = item.getAttribute('data-category') + '::' + item.getAttribute('data-product');
            
            // Check if this product has been deleted
            if (deletedProducts[key] && !item.classList.contains('custom-product')) {
                item.remove();
                return;
            }
            
            if (savedStates[key]) {
                item.setAttribute('data-state', savedStates[key]);
            }
        });
    } else {
        // Even if no states saved, still check for deleted products
        if (Object.keys(deletedProducts).length > 0) {
            const productItems = document.querySelectorAll('.product-item');
            productItems.forEach(item => {
                const key = item.getAttribute('data-category') + '::' + item.getAttribute('data-product');
                if (deletedProducts[key] && !item.classList.contains('custom-product')) {
                    item.remove();
                }
            });
        }
    }
}

// Cycle through states
export function cycleState(element, applyFiltersCallback) {
    const currentState = element.getAttribute('data-state');
    const currentIndex = states.indexOf(currentState);
    const nextIndex = (currentIndex + 1) % states.length;
    const nextState = states[nextIndex];
    
    element.setAttribute('data-state', nextState);
    
    // Save state to localStorage
    saveStates();
    
    // Reapply filters to show/hide based on new state
    if (applyFiltersCallback) {
        applyFiltersCallback();
    }
}

// Reset all product states to "not-licensed"
export function resetAllStates() {
    const productItems = document.querySelectorAll('.product-item');
    
    productItems.forEach(item => {
        item.setAttribute('data-state', 'not-licensed');
    });
    
    // Clear from localStorage
    storage.remove('capabilityStates');
    
    return true;
}

// Clear all data (complete reset)
export function clearAllData() {
    storage.clear();
    return true;
}
