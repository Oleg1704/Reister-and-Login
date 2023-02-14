describe('Test register', () => {

  const register = () => {
          cy.visit('https://automationteststore.com/index.php?rt=account/login')
          cy.get('#customer_menu_top').click();

          cy.get('.btn-orange .fa-check').click()
          cy.get('#AccountFrm_firstname').type('Oleg');
          cy.get('#AccountFrm_lastname').type('Bosiuk');
          cy.get('#AccountFrm_email').type('olegbosiuk55@gmail.com');
          cy.get('#AccountFrm_address_1').type('some address');
          cy.get('#AccountFrm_city').type('Kyiv');
          cy.get('#AccountFrm_country_id').select('Ukraine')
          cy.get('#AccountFrm_zone_id').select('Kyiv');
          cy.get('#AccountFrm_postcode').type('12345');
          cy.get('#AccountFrm_loginname').type('OlegBest');
          cy.get('#AccountFrm_password').type('12345');
          cy.get('#AccountFrm_confirm').type('12345');
          cy.get('#AccountFrm_agree').click();
          cy.get('.col-md-2 .btn').click();
          cy.get('.mb40 .btn').click();
        }

  it('name test case register',()=>{
        register()
    } )

  });