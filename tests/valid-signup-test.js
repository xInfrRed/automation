import BasePage from '../pages/base.page'
import faker from 'faker';
import generator from 'generate-password';
import signIn from '../pages/sign-in.page'
import signUp from '../pages/sign-up.page'

const daysSelect = signUp.dayOfBirthSelectForm;
const daysOption = daysSelect.find('option');
const monthsSelect = signUp.monthOfBirthSelectForm ;
const monthsOption = monthsSelect.find('option');
const yearsSelect = signUp.yearOfBirthSelectForm ;
const yearsOption = yearsSelect.find('option');
const randomFirstName = faker.name.firstName();
const randomLastName = faker.name.lastName();
const validEmail = faker.internet.email();
const randomCompany = faker.company.companyName();
const randomAddress = faker.address.streetAddress();
const randomCity = faker.address.city()
const stateSelect = signUp.stateTextSelectForm;
const stateOption = stateSelect.find('option');
const randomZipcode = faker.address.zipCode();
const countrySelect = signUp.countrySelectForm;
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
    .click(signIn.loginButton)
    .typeText(signIn.emailCreateTextField, validEmail, { replace:true })
    .click(signIn.submitCreateButton)
    .click(signUp.genderSelectMaleButton)
    .typeText(signUp.customerFirstNameTextField, randomFirstName)
    .typeText(signUp.customerLastNameTextField, randomLastName)
    .typeText(signUp.createPasswordTextField, validPassword, { replace: true })
    .click(daysSelect)
    .click(daysOption.withText('3'))
    .click(monthsSelect)
    .click(monthsOption.withText('August'))
    .click(yearsSelect)
    .click(yearsOption.withText('2001'))
    .typeText(signUp.firstNameTextField, randomFirstName)
    .typeText(signUp.lastNameTextField, randomLastName)
    .typeText(signUp.companyTextField, randomCompany)
    .typeText(signUp.address1TextField, randomAddress)
    .typeText(signUp.cityTextField, randomCity)
    .click(stateSelect)
    .click(stateOption.withText('Alabama'))
    .typeText(signUp.zipPostCodeTextField, randomZipcode)
    .click(countrySelect)
    .click(countryOption.withText('United States'))
    .typeText(signUp.mobilePhoneNumberTextField, randomMobilePhoneNumber)
    .click(signUp.registerButton)



    .wait(3000)
    
    };
}) 

