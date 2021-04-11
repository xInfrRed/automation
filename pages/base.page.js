import { Selector } from 'testcafe'

class BasePage {
  constructor() {
    this.loginButton = Selector('a').withText('Sign in')
  }

  clickButton(name){
    Selector('button').withText(name).click()
  }
}

export default BasePage
