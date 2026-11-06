import { test, expect } from './Fixtures';

test('Add to cart - Best Seller', async ({ addToCart }) => {

    await test.step('Add to cart from Best Seller', async () => {
        await addToCart.addToCartBestSeller();
    });
});

test('Add to cart - Category', async ({ addToCart }) => {
   
    await test.step('Add to cart from Category', async () => {
        await addToCart.addToCartCategory();
    });
});

test ('Add to cart - Catalog', async ({ addToCart }) => {
    
    await test.step('Add to cart from Catalog', async () => {
        await addToCart.addToCartCatalog();
    });
});

test ('Add to cart - Out of stock', async ({ addToCart }) => {
    
    await test.step('Add to cart Out of stock product', async () => {
        await addToCart.addToCartOutOfStock();
    });
});