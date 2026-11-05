import { Page, Locator, expect} from '@playwright/test';

export class RegistrationPage {
    readonly page: Page;
    readonly fullNameInput: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly confirmPasswordInput: Locator;
    readonly registerButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.fullNameInput = page.getByTestId('signup-name-input');
        this.emailInput = page.getByTestId('signup-email-input');
        this.passwordInput = page.getByTestId('signup-password-input');
        this.confirmPasswordInput = page.getByTestId('signup-confirm-password-input');
        this.registerButton = page.getByTestId('signup-submit-button');
    }

    async register(fullName: string, email: string, password: string) {
        await this.page.goto(process.env.URL!);
        await this.page.getByTestId('login-button').click();

        await expect (this.page.getByTestId('signup-tab')).toBeVisible();
        await this.page.getByTestId('signup-tab').click();

        await this.fullNameInput.fill(fullName);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.confirmPasswordInput.fill(password);
        await this.registerButton.click();
    }
}