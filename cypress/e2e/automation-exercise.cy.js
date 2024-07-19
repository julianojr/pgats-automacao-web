/// <reference types="cypress"/>

describe('Automation Exercise', () => {
    it('Test Case 1: Cadastrar um usuário', () => {
        const timestamp = new Date().getTime()
        const fakeNome = 'QA Tester'

        cy.visit('https://automationexercise.com/')
        cy.contains('Signup').click()
        cy.get('[data-qa="signup-name"]').type(fakeNome)
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
        cy.get('i.fa-user').parent().should('contain', fakeNome)
    });

    it('Test Case 2: Login User with correct email and password', () => {
        cy.visit('https://automationexercise.com');
    
        cy.contains('Signup').click();
    
        cy.get('[data-qa="login-email"]').type('tester-1721346302730@mail.com');
        cy.get('[data-qa="login-password"]').type('12345', { log: false });
    
        cy.get('[data-qa="login-button"]').click();
    
        cy.get('i.fa-user').parent().should('contain', 'Tester QA');
    });

    it('Test Case 3: Login User with incorrect email and password', () => {
        cy.visit('https://automationexercise.com');
    
        cy.contains('Signup').click();
    
        cy.get('[data-qa="login-email"]').type('tester-1721346302730@mail.com');
        cy.get('[data-qa="login-password"]').type('54321');
    
        cy.get('[data-qa="login-button"]').click();
    
        cy.get('.login-form form p').parent().should('contain', 'Your email or password is incorrect!');
    });

    it.only('Test Case 4: Logout after login', () => {
        cy.visit('https://automationexercise.com');
    
        cy.contains('Signup').click();
    
        cy.get('[data-qa="login-email"]').type('tester-1721346302730@mail.com');
        cy.get('[data-qa="login-password"]').type('12345', { log: false });
    
        cy.get('[data-qa="login-button"]').click();

        cy.contains('Logout').click();
    
        cy.url().should('contain', 'https://automationexercise.com/login');
        cy.contains("Login to your account").should("be.visible");
    });
});