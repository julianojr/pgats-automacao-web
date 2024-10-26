class Login{
    fazerLogin(usuario, senha){
        cy.get('[data-qa="login-email"]').type(usuario);
        cy.get('[data-qa="login-password"]').type(senha, { log: false });
    
        cy.get('[data-qa="login-button"]').click();

        return this;
    }

    verificarMensagemLoginIncorreto(){
        cy.get('p').should('contain', 'Your email or password is incorrect!');

        return this;
    }

    verificarPaginaLogin(){
        cy.url().should('contain', 'https://automationexercise.com/login');
        cy.contains("Login to your account").should("be.visible");

        return this;
    }
}

export default new Login()