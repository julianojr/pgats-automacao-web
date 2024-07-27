class Cadastro{
    preencherFormulario(){
        const timestamp = new Date().getTime()
        Cypress.env('fakeNome', 'QA Tester')

        cy.get('[data-qa="signup-name"]').type(Cypress.env('fakeNome'))
        cy.get('[data-qa="signup-email"]').type(`tester-${timestamp}@mail.com`)
        cy.get('[data-qa="signup-button"]').click()
        cy.get('#id_gender2').check()
        cy.get('[data-qa="password"]').type('password')
        cy.get('[data-qa="days"]').select('6')
        cy.get('[data-qa="months"]').select('July')
        cy.get('[data-qa="years"]').select('2006')
        cy.get('input[name="newsletter"]').check()
        cy.get('input[type=checkbox]#optin').check()
        cy.get('[data-qa="first_name"]').type('QA')
        cy.get('[data-qa="last_name"]').type('Tester')
        cy.get('[data-qa="company"]').type('Automation Ltda.')
        cy.get('input[name="address1"]').type('Rua Ficticia 1, Nº 123')
        cy.get('input[name="address2"]').type('Rua Ficticia 2, Nº 456')
        cy.get('[data-qa="country"]').select('Australia')
        cy.get('[data-qa="state"]').type('Victoria')
        cy.get('[data-qa="city"]').type('Melbourne')
        cy.get('[data-qa="zipcode"]').type('987654321')
        cy.get('[data-qa="mobile_number"]').type('011999998888')
        cy.contains('Create Account').click()
        cy.url().should('includes', 'account_created')
        cy.get('[data-qa="account-created"]').should('be.visible')
        cy.get('[data-qa="continue-button"]').click()

        return this;
    }

    iniciarCadastro(email){
        cy.get('[data-qa="signup-name"]').type('Tester QA');
        cy.get('[data-qa="signup-email"]').type(email);
        cy.get('[data-qa="signup-button"]').click();

        return this;
    }

    verificarSeCadastroFoiConcluido(){
        cy.get('i.fa-user').parent().should('contain', Cypress.env('fakeNome'));

        return this;
    }

    verificarMensagemCadastroExistente(){
        cy.get('.signup-form form p')
            .should('be.visible')
            .and('contain', 'Email Address already exist!');
            
        return this;
    }
}

export default new Cadastro()