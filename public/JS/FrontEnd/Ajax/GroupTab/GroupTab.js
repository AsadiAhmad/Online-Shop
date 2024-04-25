function sortProducts(sortType) {
    document.querySelectorAll('.sort-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');
    $.ajax({
        url: '/api/sortProducts', // Assuming this is the endpoint in your backend that handles sorting
        type: 'GET',
        data: { sortType: sortType },
        success: function(response) {
            // Assuming the response is an object with arrays for each category
            const categories = ['laptop', 'phone', 'electronic', 'handbag', 'shoes', 'snack'];
            categories.forEach(category => {
                const productContainer = document.querySelector(`#${category}`);
                if (productContainer) {
                    const productElements = Array.from(productContainer.children).slice(1); // Skip the first child (the title)
                    productElements.forEach(element => element.remove()); // Remove all product elements

                    // Ensure the category exists in the response and is not undefined
                    if (response[category]) {
                        let productsToDisplay = response[category];

                        productsToDisplay.forEach(product => {
                            const productLink = document.createElement('a');
                            productLink.href = `/Product/Page/${product._id}`;
                            productLink.style.cursor = 'pointer'; // Make the link clickable
                            productLink.innerHTML = `
                                <div class="part">
                                    <div class="part-container">
                                        <div class="up center">
                                            <img class="product-img" src="${product.picture ? 'data:image/png;base64,' + product.picture.toString('base64') : './../Image/Error/loadError.png'}" alt="${product.productName}">
                                        </div>
                                        <div class="down">
                                            <p class="product-name inheritable-link">${product.productName}</p>
                                            <p class="price inheritable-link">${product.productPrice}$</p>
                                        </div>
                                    </div>
                                </div>
                            `;
                            productContainer.appendChild(productLink);
                        });
                    } else {
                        console.log(`No products found for category: ${category}`);
                    }
                }
            });
        },
        error: function(error) {
            console.error("Error fetching sorted products:", error);
        }
    });
}
