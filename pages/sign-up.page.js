import { Selector } from 'testcafe'


class SignUp {
  constructor() {
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
}


export default new SignUp()
