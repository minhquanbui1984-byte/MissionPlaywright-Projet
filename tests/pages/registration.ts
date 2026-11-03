import { Page, Locator, expect} from '@playwright/test';

export class RegistrationPage {
    readonly page: Page;
    readonly fullNameInput: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly confirmPasswordInput: Locator;
    readonly confirmTermsCheckbox: Locator;
    readonly registerButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.fullNameInput = page.getByTestId('registration-name');
        this.emailInput = page.getByTestId('registration-email');
        this.passwordInput = page.getByTestId('registration-password');
        this.confirmPasswordInput = page.getByTestId('registration-confirmPassword');
        this.confirmTermsCheckbox = page.getByTestId('registration-terms');
        this.registerButton = page.getByTestId('registration-submit');
    }

    async register(fullName: string, email: string, password: string, confirmPassword: string) {
        await this.fullNameInput.fill(fullName);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.confirmPasswordInput.fill(confirmPassword);
        await this.confirmTermsCheckbox.check();
        await this.registerButton.click();
    }
}