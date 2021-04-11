import page from '../pages/base.page'
import faker from 'faker';
import generator from 'generate-password';

const daysSelect = page.dayOfBirthSelectForm;
const daysOption = daysSelect.find('option');
const monthsSelect = page.monthOfBirthSelectForm ;
const monthsOption = monthsSelect.find('option');
const yearsSelect = page.yearOfBirthSelectForm ;
const yearsOption = yearsSelect.find('option');
const randomFirstName = faker.name.firstName();
const randomLastName = faker.name.lastName();
const validEmail = faker.internet.email();
const randomCompany = faker.company.companyName();
const randomAddress = faker.address.streetAddress();
const randomCity = faker.address.city()
const stateSelect = page.stateTextSelectForm;
const stateOption = stateSelect.find('option');
const randomZipcode = faker.address.zipCode();
const countrySelect = page.countrySelectForm;
const countryOption = countrySelect.find('option');
const randomMobilePhoneNumber = faker.phone.phoneNumberFormat();

let validPasswords = [];

for (let i = 0; i < 5; i++) {
    let newRandomPassword = generator.generate({
        length: faker.datatype.number({ 'min': 5, 'max': 20 }), // 10-20 characters long
    });

    validPasswords.push(newRandomPassword);
};

fixture`Getting Started`
  .page`http://automationpractice.com/index.php`


test('Valid Credentials Login Test', async t => {
    for (const validPassword of validPasswords) {
  await t
    .click(page.loginButton)
    .typeText(page.emailCreateTextField, validEmail, { replace:true })
    .click(page.submitCreateButton)
    .click(page.genderSelectMaleButton)
    .typeText(page.customerFirstNameTextField, randomFirstName)
    .typeText(page.customerLastNameTextField, randomLastName)
    .typeText(page.createPasswordTextField, validPassword, { replace: true })
    .click(daysSelect)
    .click(daysOption.withText('3'))
    .click(monthsSelect)
    .click(monthsOption.withText('August'))
    .click(yearsSelect)
    .click(yearsOption.withText('2001'))
    .typeText(page.firstNameTextField, randomFirstName)
    .typeText(page.lastNameTextField, randomLastName)
    .typeText(page.companyTextField, randomCompany)
    .typeText(page.address1TextField, randomAddress)
    .typeText(page.cityTextField, randomCity)
    .click(stateSelect)
    .click(stateOption.withText('Alabama'))
    .typeText(page.zipPostCodeTextField, randomZipcode)
    .click(countrySelect)
    .click(countryOption.withText('United States'))
    .typeText(page.mobilePhoneNumberTextField, randomMobilePhoneNumber)
    .click(page.registerButton)



    .wait(3000)
    
    };
}) 

