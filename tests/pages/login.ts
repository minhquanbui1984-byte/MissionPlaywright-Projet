import { Page, Locator, expect} from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginSubmitButton: Locator;
    readonly logoutButton: Locator;
    readonly userMenuButton: Locator;
    readonly loginTab: Locator;
    readonly LoginMessage: Locator;
    readonly loginButton: Locator;
    readonly CheckoutLoginButton: Locator;
    readonly FailedConnectionMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.getByTestId('login-email-input');
        this.passwordInput = page.getByTestId('login-password-input');
        this.loginSubmitButton = page.getByTestId('login-submit-button');
        this.logoutButton = page.getByTestId('logout-button');
        this.userMenuButton = page.getByTestId('user-menu-button');
        this.loginTab = page.getByTestId('login-tab');
        this.LoginMessage = page.getByText('Connexion réussie', { exact: true });
        this.loginButton = page.getByTestId('login-button');
        this.CheckoutLoginButton = page.getByTestId('checkout-login-button');
        this.FailedConnectionMessage = page.getByText('Erreur de connexion', { exact: true });
    }

    async login(email: string, password: string) {
        await this.loginButton.click();
        await expect(this.loginTab).toBeVisible();

        await this.loginTab.click();
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginSubmitButton.click();

        await expect(this.LoginMessage).toBeVisible();
    }

    async logout() {
        await this.userMenuButton.click();
        await this.logoutButton.click();

        await expect(this.loginButton).toBeVisible();
    }

    async loginFromCheckout(email: string, password: string) {
        await this.CheckoutLoginButton.click();

        await expect(this.loginTab).toBeVisible();

        await this.loginTab.click();
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginSubmitButton.click();

        await expect(this.LoginMessage).toBeVisible();
    }

    async failedLogin(email: string, password: string) {
        await this.loginButton.click();

        await expect(this.loginTab).toBeVisible();

        await this.loginTab.click();
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginSubmitButton.click();
        
        await expect(this.FailedConnectionMessage).toBeVisible();
    }


}