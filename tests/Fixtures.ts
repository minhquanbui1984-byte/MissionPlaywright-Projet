import { test as base } from '@playwright/test';
import { LoginPage } from './pages/login';
import { AddToCartPage } from './pages/addtocart';
import { RegistrationPage } from './pages/registration';
import { ShippingFormPage } from './pages/shippingform';
import { PaymentformPage } from './pages/paymentform';

type Fixtures = {
    login: LoginPage;
    addToCart: AddToCartPage;
    registration: RegistrationPage;
    shipping: ShippingFormPage;
    payment: PaymentformPage;
};

const test = base.extend<Fixtures>({
    login: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    addToCart: async ({ page }, use) => {
        await use (new AddToCartPage(page));
    },

    registration: async ({ page }, use) => {
        await use (new RegistrationPage(page));
    },

    shipping: async ({ page }, use) => {
        await use (new ShippingFormPage(page));
    },

    payment: async ({ page }, use) => {
        await use (new PaymentformPage(page));
    }
});

const expect = base.expect;

export { test, expect };