// Entitlements search module

// Search entitlements function
export function searchEntitlements(query) {
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

// Initialize entitlements search handlers
export function initializeEntitlementsSearch() {
    const entitlementsSearch = document.getElementById('entitlementsSearch');
    const entitlementsSearchClear = document.getElementById('entitlementsSearchClear');
    
    if (entitlementsSearch) {
        entitlementsSearch.addEventListener('input', function() {
            const query = this.value.trim().toLowerCase();
            if (query.length >= 2) {
                searchEntitlements(query);
            } else {
                document.getElementById('entitlementsResults').innerHTML = '';
            }
        });
    }
    
    if (entitlementsSearchClear) {
        entitlementsSearchClear.addEventListener('click', function() {
            entitlementsSearch.value = '';
            document.getElementById('entitlementsResults').innerHTML = '';
        });
    }
}
