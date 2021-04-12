import { Selector } from 'testcafe'
import BasePage from './base.page'


class WelcomePage extends BasePage{
    constructor() {
        super()
        this.loginButton = Selector('a').withText('Sign in')
  }


}

export default new WelcomePage()
