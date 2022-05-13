import { Selector, t } from 'testcafe'
import signIn from './sign-in.page'
import faker from 'faker'
import welcomePage from './welcome.page'
import BasePage from './base.page'
import data from '../data/data.json'

class SignUp extends BasePage{
    constructor() {
        super()
        this.genderSelectMaleButton = Selector ('#id_gender1')
        this.genderSelectFemaleButton = Selector ('#id_gender2')
        this.customerFirstNameTextField = Selector ('#customer_firstname')
        this.customerLastNameTextField = Selector ("#customer_lastname")
        this.createPasswordTextField = Selector ('#passwd')
        this.dayOfBirthSelectForm = Selector ('#days')
        this.monthOfBirthSelectForm = Selector ('#months')
        this.yearOfBirthSelectForm = Selector ('#years')
        this.firstNameTextField = Selector ('#firstname')   
        this.lastNameTextField = Selector ('#lastname')
        this.companyTextField = Selector ('#company')
        this.address1TextField = Selector ('#address1')
        this.cityTextField = Selector ('#city')
        this.stateTextSelectForm = Selector ('#id_state')
        this.zipPostCodeTextField = Selector ('#postcode')
        this.countrySelectForm = Selector ("#id_country")
        this.mobilePhoneNumberTextField = Selector ('#phone_mobile')
        this.registerButton = Selector ('#submitAccount')
  }


    async createAccount() {
        const validEmail = faker.internet.email();

        await t  
        .click(welcomePage.loginButton)
        .typeText(signIn.emailCreateTextField, validEmail, { replace:true })
        .click(signIn.submitCreateButton)
  } 


    async fillRandomForms() {
        const daysSelect = this.dayOfBirthSelectForm;
        const daysOption = daysSelect.find('option');
        const monthsSelect = this.monthOfBirthSelectForm ;
        const monthsOption = monthsSelect.find('option');
        const yearsSelect = this.yearOfBirthSelectForm ;
        const yearsOption = yearsSelect.find('option');
        const randomFirstName = faker.name.firstName();
        const randomLastName = faker.name.lastName();
        const randomCompany = faker.company.companyName();
        const randomAddress = faker.address.streetAddress();
        const randomCity = faker.address.city()
        const stateSelect = this.stateTextSelectForm;
        const stateOption = stateSelect.find('option');
        const randomZipcode = faker.address.zipCode();
        const countrySelect = this.countrySelectForm;
        const countryOption = countrySelect.find('option');
        const randomMobilePhoneNumber = faker.phone.phoneNumberFormat();
        const randomPassword = faker.internet.password();
     

        await t
        .click(this.genderSelectMaleButton)
        .typeText(this.customerFirstNameTextField, randomFirstName)
        .typeText(this.customerLastNameTextField, randomLastName)
        .typeText(this.createPasswordTextField, randomPassword)
        .click(daysSelect)
        .click(daysOption.withText('3'))
        .click(monthsSelect)
        .click(monthsOption.withText('August'))
        .click(yearsSelect)
        .click(yearsOption.withText('2001'))
        .typeText(this.firstNameTextField, randomFirstName)
        .typeText(this.lastNameTextField, randomLastName)
        .typeText(this.companyTextField, randomCompany)
        .typeText(this.address1TextField, randomAddress)
        .typeText(this.cityTextField, randomCity)
        .click(stateSelect)
        .click(stateOption.withText('Alabama'))
        .typeText(this.zipPostCodeTextField, randomZipcode)
        .click(countrySelect)
        .click(countryOption.withText('United States'))
        .typeText(this.mobilePhoneNumberTextField, randomMobilePhoneNumber)
        .click(this.registerButton)
        .wait(3000)
  }

    async fillDataForms() {
   
        const daysSelect = this.dayOfBirthSelectForm;
        const daysOption = daysSelect.find('option');
        const monthsSelect = this.monthOfBirthSelectForm ;
        const monthsOption = monthsSelect.find('option');
        const yearsSelect = this.yearOfBirthSelectForm ;
        const yearsOption = yearsSelect.find('option');
        const randomAddress = faker.address.streetAddress();
        const stateSelect = this.stateTextSelectForm;
        const stateOption = stateSelect.find('option');
        const randomZipcode = faker.address.zipCode();
        const countrySelect = this.countrySelectForm;
        const countryOption = countrySelect.find('option');
        const randomMobilePhoneNumber = faker.phone.phoneNumberFormat();
        const randomPassword = faker.internet.password();


        const dataSet = require ('../data/data.json')
        for ( data of dataSet ) {
        await t
        .click(this.genderSelectMaleButton)
        .typeText(this.customerFirstNameTextField, data.firstname)
        .typeText(this.customerLastNameTextField, data.lastname)
        .typeText(this.createPasswordTextField, randomPassword)
        .click(daysSelect)
        .click(daysOption.withText('3'))
        .click(monthsSelect)
        .click(monthsOption.withText('August'))
        .click(yearsSelect)
        .click(yearsOption.withText('2001'))
        .typeText(this.firstNameTextField, data.firstname)
        .typeText(this.lastNameTextField, data.lastname)
        .typeText(this.companyTextField, data.company)
        .typeText(this.address1TextField, randomAddress)
        .typeText(this.cityTextField, data.city)
        .click(stateSelect)
        .click(stateOption.withText('Alabama'))
        .typeText(this.zipPostCodeTextField, randomZipcode)
        .click(countrySelect)
        .click(countryOption.withText('United States'))
        .typeText(this.mobilePhoneNumberTextField, randomMobilePhoneNumber)
        .click(this.registerButton)
        .wait(3000)
    }
      
}
}


export default new SignUp()
