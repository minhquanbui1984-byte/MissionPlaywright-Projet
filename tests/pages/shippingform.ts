import { Page, Locator, expect} from '@playwright/test';

export class ShippingFormPage {
    readonly page: Page;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly emailInput: Locator;
    readonly phoneInput: Locator;
    readonly addressInput: Locator;
    readonly cityInput: Locator;
    readonly postalCodeInput: Locator;
    readonly SubmitButton: Locator;
    readonly CartButton: Locator;
    readonly CheckoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = page.getByTestId('shipping-firstname-input');
        this.lastNameInput = page.getByTestId('shipping-lastname-input');
        this.emailInput = page.getByTestId('shipping-email-input');
        this.phoneInput = page.getByTestId('shipping-phone-input');
        this.addressInput = page.getByTestId('shipping-address-input');
        this.cityInput = page.getByTestId('shipping-city-input');
        this.postalCodeInput = page.getByTestId('shipping-postalcode-input');
        this.SubmitButton = page.getByTestId('shipping-submit-button');
        this.CartButton = page.getByTestId('cart-button');
        this.CheckoutButton = page.getByTestId('checkout-button');
    }
    
    async accessCheckout() {
        await this.CartButton.click();
        await expect(this.page.url()).toContain('/cart');
        await this.CheckoutButton.click();
        await expect(this.page.url()).toContain('/checkout');
    }

    async fillShippingForm(firstName: string, lastName: string, phone: string, address: string, city: string, postalCode: string) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.phoneInput.fill(phone);
        await this.addressInput.fill(address);
        await this.cityInput.fill(city);
        await this.postalCodeInput.fill(postalCode);
        await this.SubmitButton.click();
        await expect(this.page.getByText('Paiement sécurisé')).toBeVisible();
    }
}
