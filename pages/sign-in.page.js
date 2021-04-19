import { Selector, t } from 'testcafe'
import BasePage from '../pages/base.page'
import WelcomePage from '../pages/welcome.page'
class SignIn extends BasePage {
  constructor () {
    super()
    this.emailTextField = Selector('#email')
    this.passwordTextField = Selector('#passwd')
    this.submitButton = Selector('#SubmitLogin')
    this.emailCreateTextField = Selector('#email_create')
    this.submitCreateButton = Selector('#SubmitCreate')
  }

  async withAccount (email, password) {
    await t
      .click(WelcomePage.loginButton)
      .typeText(this.emailTextField, email)
      .typeText(this.passwordTextField, password)
      .click(this.submitButton)
  }
}

export default new SignIn()
