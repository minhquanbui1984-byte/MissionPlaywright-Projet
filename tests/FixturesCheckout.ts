import { test as base } from '@playwright/test';
import { LoginPage } from './pages/login';
import { CoordonneesPage } from './pages/coordonnees';

type Fixtures = {
    login: LoginPage;
    coordonnees: CoordonneesPage;
};

const test = base.extend<Fixtures>({
    login: async ({ page }, use) => {
        await use (new LoginPage(page));
    },

    coordonnees: async ({ page }, use) => {
        await use (new CoordonneesPage(page));
    }
});

const expect = base.expect;

export { test, expect };
