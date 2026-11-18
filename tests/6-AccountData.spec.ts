import { test, expect } from './Fixtures';
import { faker } from '@faker-js/faker';

const FirstName = faker.person.firstName();
const LastName = faker.person.lastName();
const PhoneNumber = faker.phone.number();
const Address = faker.location.streetAddress();
const City = faker.location.city();
const PostalCode = faker.location.zipCode();
const CardNumber = faker.finance.creditCardNumber();
const CardHolder = `${FirstName} ${LastName}`;
const CardExpiry = faker.date.future().toISOString().split('T')[0];
const CardCvv = faker.number.int({ min: 100, max: 999 }).toString();
const Fullname = `${FirstName} ${LastName}`;
const Email = `${FirstName}.${LastName}@example.com`;
const Password = faker.internet.password();

test.beforeEach(async ({ registration }) => {

    await registration.page.goto(process.env.URL!);

    await test.step ('Create account', async () => {
        await registration.register(Fullname, Email, Password);
    });
});

test ('Access to account data', async ({ account }) => {
    await account.AccessProfile();

    await test.step ('Check Fullname', async () => {
        await expect (account.page.getByText(Fullname)).toBeVisible();
    });
    
    await test.step ('Check Email', async () => {
        await expect (account.page.getByText(Email)).toBeVisible();
    });
});

test ('Modify profile', async ({ account }) => {
    await account.ModifyData(Fullname, PhoneNumber, Address, City, PostalCode);
});