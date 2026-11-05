import { test, expect } from './Fixtures';

test('Add to cart - Best Seller', async ({ addToCart }) => {
    await addToCart.addToCartBestSeller();
});

test('Add to cart - Category', async ({ addToCart }) => {
    await addToCart.addToCartCategory();
});

test ('Add to cart - Catalog', async ({ addToCart }) => {
    await addToCart.addToCartCatalog();
});

test ('Add to cart - Out of stock', async ({ addToCart }) => {
    await addToCart.addToCartOutOfStock();
});