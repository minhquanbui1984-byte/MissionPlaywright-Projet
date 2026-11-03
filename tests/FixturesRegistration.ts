import { test as base } from '@playwright/test';
import { RegistrationPage } from './pages/registration';

type Fixtures = {
    registration: RegistrationPage;
};

const test = base.extend<Fixtures>({
    registration: async ({ page }, use) => {
        await use (new RegistrationPage(page));
    }
});

const expect = base.expect;

export { test, expect };