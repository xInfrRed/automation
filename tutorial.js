import { Selector } from 'testcafe';

    fixture `Getting Started`
    .page `http://automationpractice.com/index.php`;
    const loginButton = Selector("a").withText('Sign in')
    const emailTextField = Selector("#email");
    const passwordTextField = Selector("#passwd");
    const submitButton = Selector("#SubmitLogin")

    test('Valid Credentials Login Test', async t => {    
        await t
      
        //  .debug()
         .click(loginButton)
         .typeText(emailTextField,"testemail123@hotmail.com")
         .typeText(passwordTextField,"password1")
         .click(submitButton)
      
    });