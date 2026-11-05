import { Page, Locator, expect} from '@playwright/test';

export class PaymentformPage {
    readonly page: Page;
    readonly CardNumberInput: Locator;
    readonly CardHolderInput: Locator;
    readonly ExpirationDateInput: Locator;
    readonly CVVInput: Locator;
    readonly paymentButton: Locator;
    readonly PaymentSuccessMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.CardNumberInput = page.getByTestId('payment-cardnumber-input');
        this.CardHolderInput = page.getByTestId('payment-cardname-input');
        this.ExpirationDateInput = page.getByTestId('payment-expiry-input');
        this.CVVInput = page.getByTestId('payment-cvv-input');
        this.paymentButton = page.getByTestId('payment-submit-button');
        this.PaymentSuccessMessage = page.getByRole('heading', { name: 'Commande confirmée'});
    }

    async fillPaymentForm(cardNumber: string, cardHolder: string, expirationDate: string, cvv: string) {
        await this.CardNumberInput.fill(cardNumber);
        await this.CardHolderInput.fill(cardHolder);
        await this.ExpirationDateInput.fill(expirationDate);
        await this.CVVInput.fill(cvv);
        await this.paymentButton.click();
        await expect(this.PaymentSuccessMessage).toBeVisible();
    }
}