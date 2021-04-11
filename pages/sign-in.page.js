import { Selector } from 'testcafe'
import BasePage from '../pages/base.page'

class SignIn extends BasePage {
  constructor() {
    super()
    this.loginButton = Selector('a').withText('Sign in')
    this.emailTextField = Selector('#email')
    this.passwordTextField = Selector('#passwd')
    this.submitButton = Selector('#SubmitLogin')
    this.emailCreateTextField = Selector('#email_create')
    this.submitCreateButton = Selector ('#SubmitCreate')
  }

  withAccount(email, password) {
    
  }
}


export default new SignIn()
