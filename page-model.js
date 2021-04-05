import { Selector } from 'testcafe'

class Page {
  constructor () {
    this.loginButton = Selector('a').withText('Sign in')
    this.emailTextField = Selector('#email')
    this.passwordTextField = Selector('#passwd')
    this.submitButton = Selector('#SubmitLogin')
  }
}

export default new Page()
