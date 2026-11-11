import { test, expect } from './Fixtures';
import { faker } from '@faker-js/faker';

test.beforeEach(async ({ registration }) => {
    await registration.page.goto(process.env.URL!);
});

test ('Create account', async ({ registration }) => {
    await test.step ('Create an account', async() => {
        await registration.register(faker.person.fullName(), faker.internet.email(), faker.internet.password());
    });
});

test ('Create account with mismatch password', async({ registration }) => {
    await test.step ('Create account with mismatch password', async() => {
        await registration.registerWithMismatchedPasswords (faker.person.fullName(), faker.internet.email(), faker.internet.password(), faker.internet.password());
    });
});

test ('Create account with no data', async ({ registration }) => {
    await test.step ('Create account with no data', async () => {
        await registration.registerWithEmptyFields();
    });
});

test ('Create account with short password - 5 char', async ({ registration })=> {

    const Password = faker.internet.password({length: 5});

    await test.step ('Create account with short password', async () => {
        await registration.registerWithShortPassword(faker.person.fullName(), faker.internet.email(), Password);
    });
});