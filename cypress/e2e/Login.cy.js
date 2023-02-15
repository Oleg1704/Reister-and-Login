const login = 'OlegBest', pass = '12345'
describe('Test login', () => {

  const log = ( login, pass) => {
          
          cy.visit('https://automationteststore.com/index.php?rt=account/login')
          cy.get('#customer_menu_top').click();

          cy.get('#loginFrm_loginname').type(login);
          cy.get('#loginFrm_password').type(pass);
          cy.get('#loginFrm > fieldset > .btn').click();


        }

  it('name test case login',()=>{
        log(login , pass)
    } )

  });