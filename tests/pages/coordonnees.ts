import { Page, Locator, expect} from '@playwright/test';

export class CoordonneesPage {
    readonly page: Page;
    readonly nomInput: Locator;
    readonly addressInput: Locator;
    readonly cityInput: Locator;
    readonly zipCodeInput: Locator;
    readonly nextButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nomInput = page.getByTestId('checkout-name');
        this.addressInput = page.getByTestId('checkout-address');
        this.cityInput = page.getByTestId('checkout-city');
        this.zipCodeInput = page.getByTestId('checkout-zip');
        this.nextButton = page.getByTestId('checkout-next');
    }

    async fillCoordonnees(nom: string, address: string, city: string, zipCode: string) {
        await this.nomInput.fill(nom);
        await this.addressInput.fill(address);
        await this.cityInput.fill(city);
        await this.zipCodeInput.fill(zipCode);
        await this.nextButton.click();
    }
}