import { Page, Locator, test, expect} from '@playwright/test';

export class AccountPage {
    readonly page: Page;
    readonly AccountButton: Locator;
    readonly AccountAccess: Locator;
    readonly ProfileTab: Locator;
    readonly ProfileHeader: Locator;
    readonly OrderTab: Locator;
    readonly OrderHeader: Locator;
    readonly SettingsTab: Locator;
    readonly SettingsHeader: Locator;
    readonly EditProfile: Locator;
    readonly CancelProfileModification: Locator;
    readonly SaveProfileModification: Locator;
    readonly MailNotification: Locator;
    readonly Newsletter: Locator;
    readonly DeleteAccount: Locator;
    readonly LogoutButton: Locator;
    readonly FullnameBox: Locator;
    readonly PhoneBox: Locator;
    readonly AddressBox: Locator;
    readonly ZipCodeBox: Locator;
    readonly CityBox: Locator;
    readonly SaveModificationMessage: Locator

    constructor (page:Page) {
        this.page = page;
        this.AccountButton = page.getByTestId('user-menu-button');
        this.AccountAccess = page.getByTestId('account-link');
        this.ProfileTab = page.getByTestId('account-tab-profile');
        this.ProfileHeader = page.getByRole('heading', {name: 'Informations personnelles'});
        this.OrderTab = page.getByTestId('account-tab-orders');
        this.OrderHeader = page.getByRole('heading', {name: 'Historique des commandes'});
        this.SettingsTab = page.getByTestId('account-tab-settings');
        this.SettingsHeader = page.getByRole('heading', {name: 'Paramètres du compte'});
        this.EditProfile = page.getByTestId('account-edit-button');
        this.CancelProfileModification = page.getByTestId('account-cancel-button');
        this.SaveProfileModification = page.getByTestId('account-save-button');
        this.MailNotification = page.getByRole('heading', {name: 'Notifications par email'});
        this.Newsletter = page.getByRole('heading', {name: 'Newsletter'});
        this.DeleteAccount = page.getByTestId('account-delete-button');
        this.LogoutButton = page.getByTestId('account-logout-button');
        this.FullnameBox = page.getByTestId('account-fullname-input');
        this.PhoneBox = page.getByTestId('account-phone-input');
        this.AddressBox = page.getByTestId('account-address-input');
        this.ZipCodeBox = page.getByTestId('account-postalcode-input');
        this.CityBox = page.getByTestId('account-city-input');
        this.SaveModificationMessage = page.getByText ('Profil mis à jour', { exact: true });
    }

    async AccessProfile () {

        await (this.AccountButton).click();

        await test.step ('Access to account menu', async () => {
            await expect (this.AccountAccess).toBeVisible();
        });

        await this.AccountAccess.click();
        
        await test.step ('Display Profile data', async () => {
            await expect (this.ProfileHeader).toBeVisible();
        });
    }

    async ModifyData (fullname: string, phone: string, address: string, city: string, postalcode: string) {
        await (this.AccountButton).click();

        await test.step ('Access to account menu', async () => {
            await expect (this.AccountAccess).toBeVisible();
        });

        await this.AccountAccess.click();
        
        await test.step ('Display Profile data', async () => {
            await expect (this.ProfileHeader).toBeVisible();
        });

        await test.step ('Access to modification', async () => {
            await this.EditProfile.click();

            await expect (this.SaveProfileModification).toBeVisible();
        });
        

        await test.step ('Fill Profile', async () => {
            await this.FullnameBox.fill(fullname);
            await this.PhoneBox.fill(phone);
            await this.AddressBox.fill(address);
            await this.CityBox.fill(city);
            await this.ZipCodeBox.fill(postalcode);
        });

        await this.SaveProfileModification.click();

        await test.step ('Modification saved', async () => {
            await expect (this.SaveModificationMessage).toBeVisible();
        });

        await test.step ('Check data correctly saved', async () => {
            await expect (this.page.getByText(fullname)).toBeVisible();
            await expect (this.page.getByText(phone)).toBeVisible();
            await expect (this.page.getByText(address)).toBeVisible();
            await expect (this.page.getByText(city)).toBeVisible();
            await expect (this.page.getByText(postalcode)).toBeVisible();
        })
    }
}

