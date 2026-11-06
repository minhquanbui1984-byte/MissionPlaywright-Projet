import { test, expect } from './Fixtures';

test ('Login to account', async ({ login }) => {
    await login.page.goto(process.env.URL!);
    
    await test.step('Login', async () => {
        await login.login(process.env.EMAIL!, process.env.PASSWORD!);
    });
});