import { test, expect } from '@playwright/test';
import { CoordonneesPage } from './pages/coordonnees';
import { LoginPage } from './pages/login';

test.beforeEach(async ({ page }) => {
    
    const loginPage = new LoginPage(page);
    await page.goto('https://practice.missionplaywright.fr/exercises/checkout-form');

    await page.getByTestId('login-link').click();
    await loginPage.login('minh_quan_bui@yahoo.fr', 'M@tine163542');
    
    await expect(page.getByText('Mon compte')).toBeVisible();
});

test('Fill form using POM', async ({ page }) => {
  
    const coordonneesPage = new CoordonneesPage(page);

    await page.goto('https://practice.missionplaywright.fr/exercises/checkout-form');
    await coordonneesPage.fillCoordonnees('Marco Polo', '123 Main St', 'Venice', '30100');

    await expect(page.getByText('Payment')).toBeVisible();
});