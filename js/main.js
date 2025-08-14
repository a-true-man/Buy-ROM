// js/main.js

document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('product-grid');
    const searchBox = document.getElementById('search-box');
    const catalogTitle = document.getElementById('catalog-title');

    let currentProducts = [];

    // פונקציה שמייצרת כרטיס מוצר מ-HTML
   function createProductCard(product) {
    return `
        <a href="${product.pageUrl}" class="firmware-card">
            <img src="${product.image}" alt="${product.name}">
            <div class="firmware-card-content">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <span class="card-link-text">פרטים נוספים ומחיר &larr;</span>
            </div>
        </a>
    `;
}

    // פונקציה שמציגה את המוצרים על המסך
    function displayProducts(productsToDisplay) {
        if (!productGrid) return;
        if (productsToDisplay.length === 0) {
            productGrid.innerHTML = '<p>לא נמצאו מוצרים התואמים את החיפוש.</p>';
            return;
        }
        productGrid.innerHTML = productsToDisplay.map(createProductCard).join('');
    }

    // קביעת הקטגוריה הנוכחית על פי שם הקובץ
    function getCategoryFromPath() {
        const path = window.location.pathname.split('/').pop(); // 'mtk.html'
        if (path === 'index.html' || path === '') return 'all';
        return path.replace('.html', ''); // 'mtk'
    }

    const currentCategory = getCategoryFromPath();

    // סינון המוצרים הראשוני לפי קטגוריה
if (currentCategory === 'all') {
    currentProducts = products; // בדף הבית, הצג הכל
} else {
    currentProducts = products.filter(p => p.categories.includes(currentCategory));
}

// קביעת הכותרת מהאובייקט החדש
if (catalogTitle) {
    // חפש את הכותרת המתאימה. אם לא נמצאה, השתמש בכותרת הדיפולטיבית.
    catalogTitle.textContent = categoryTitles[currentCategory] || categoryTitles['default'];
}
    
    // הצגה ראשונית
    displayProducts(currentProducts);

    // טיפול בחיפוש ה"חכם"
    if (searchBox) {
        searchBox.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();
            
            if (searchTerm === '') {
                displayProducts(currentProducts); // הצג הכל אם החיפוש ריק
                return;
            }

            const filteredProducts = currentProducts.filter(product => {
                const nameMatch = product.name.toLowerCase().includes(searchTerm);
                const descriptionMatch = product.description.toLowerCase().includes(searchTerm);
                return nameMatch || descriptionMatch; // החיפוש בודק גם שם וגם תיאור
            });

            displayProducts(filteredProducts);
        });
    }
});