import { Page, Locator, test, expect} from '@playwright/test';

export class RegistrationPage {
    readonly page: Page;
    readonly fullNameInput: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly confirmPasswordInput: Locator;
    readonly registerButton: Locator;
    readonly registrationSuccessMessage: Locator;
    readonly MissingFullname: Locator;
    readonly MissingMailMessage: Locator;
    readonly PasswordtoShort: Locator;
    readonly MismatchPasswordsMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.fullNameInput = page.getByTestId('signup-name-input');
        this.emailInput = page.getByTestId('signup-email-input');
        this.passwordInput = page.getByTestId('signup-password-input');
        this.confirmPasswordInput = page.getByTestId('signup-confirm-password-input');
        this.registerButton = page.getByTestId('signup-submit-button');
        this.registrationSuccessMessage = page.getByText('Inscription réussie !', { exact: true });
        this.MissingFullname = page.getByText('Le nom doit contenir au moins 2 caractères');
        this.MissingMailMessage = page.getByText('Adresse email invalide', { exact: true });
        this.PasswordtoShort = page.getByText('Le mot de passe doit contenir au moins 6 caractères');
        this.MismatchPasswordsMessage = page.getByText('Les mots de passe ne correspondent pas', { exact: true});
    }

    async register(fullName: string, email: string, password: string) {
        await this.page.getByTestId('login-button').click();

        await expect (this.page.getByTestId('signup-tab')).toBeVisible();
        await this.page.getByTestId('signup-tab').click();

        await this.fullNameInput.fill(fullName);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.confirmPasswordInput.fill(password);
        await this.registerButton.click();

        await expect (this.registrationSuccessMessage).toBeVisible();
    }

    async registerWithMismatchedPasswords(fullName: string, email: string, password: string, confirmPassword: string) {
        await this.page.getByTestId('login-button').click();
        await expect (this.page.getByTestId('signup-tab')).toBeVisible();
        await this.page.getByTestId('signup-tab').click();
        await this.fullNameInput.fill(fullName);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.confirmPasswordInput.fill(confirmPassword);
        await this.registerButton.click();

        await expect (this.MismatchPasswordsMessage).toBeVisible();
    }

    async registerWithEmptyFields() {
        await this.page.getByTestId('login-button').click();
        await expect (this.page.getByTestId('signup-tab')).toBeVisible();

        await this.page.getByTestId('signup-tab').click();
        await this.registerButton.click();

        await test.step ('No fullname', async () => {
            await expect (this.MissingFullname).toBeVisible();
        });

        await test.step ('No email', async () => {
            await expect (this.MissingMailMessage).toBeVisible();
        });
        
        await test.step ('No password', async () => {
            await expect (this.PasswordtoShort).toBeVisible();
        });
    }

    async registerWithShortPassword(fullName: string, email: string, password: string) {
        await this.page.getByTestId('login-button').click();
        await expect (this.page.getByTestId('signup-tab')).toBeVisible();
        
        await this.page.getByTestId('signup-tab').click();
        await this.fullNameInput.fill(fullName);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.confirmPasswordInput.fill(password);
        await this.registerButton.click();

        await expect (this.PasswordtoShort).toBeVisible();
    }
}