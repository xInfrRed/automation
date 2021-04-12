import { Selector } from 'testcafe'


class WelcomePage {
  constructor() {
    this.loginButton = Selector('a').withText('Sign in')
  }
}

export default new WelcomePage()
