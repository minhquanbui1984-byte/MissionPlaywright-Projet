import { Page, Locator, expect} from '@playwright/test';

export class AddToCartPage {
    readonly page: Page;
    readonly BestSeller: Locator;
    readonly Category: Locator;
    readonly CategoryProduct: Locator;
    readonly Catalog: Locator;
    readonly CatalogProduct: Locator;
    readonly OutOfStockProduct: Locator;
    readonly addToCartButton: Locator;
    readonly addToCartMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.BestSeller = page.getByTestId('product-card-4');
        this.Category = page.getByRole('link', { name: 'Maison Connectée', exact: true });
        this.CategoryProduct = page.getByTestId('product-card-7');
        this.Catalog = page.getByTestId('nav-link-products');
        this.CatalogProduct = page.getByTestId('product-card-6');
        this.OutOfStockProduct = page.getByTestId('product-card-12');
        this.addToCartButton = page.getByTestId('product-detail-add-to-cart');
        this.addToCartMessage = page.getByText('ajouté au panier');
    }

    async addToCartBestSeller() {
        await this.page.goto(process.env.URL!);
        await this.BestSeller.click();
        await expect(this.page.url()).toContain('/product/4');
        await this.addToCartButton.click();
        await expect(this.addToCartMessage).toBeVisible();
    }

    async addToCartCategory() {
        await this.page.goto(process.env.URL!);
        await this.Category.click();
        await expect(this.page.url()).toContain(`/products?category=`);
        await this.CategoryProduct.click();
        await expect(this.page.url()).toContain('/product/7');
        await this.addToCartButton.click();
        await expect(this.addToCartMessage).toBeVisible();
    }

    async addToCartCatalog() {
        await this.page.goto(process.env.URL!);
        await this.Catalog.click();
        await expect(this.page.url()).toContain(`/products`);
        await this.CatalogProduct.click();
        await expect(this.page.url()).toContain('/product/6');
        await this.addToCartButton.click();
        await expect(this.addToCartMessage).toBeVisible();
    }

    async addToCartOutOfStock() {
        await this.page.goto(process.env.URL!);
        await this.Catalog.click();
        await expect(this.page.url()).toContain(`/products`);
        await this.OutOfStockProduct.click();
        await expect(this.page.url()).toContain('/product/12');
        await expect(this.addToCartButton).toBeDisabled();
    }
}