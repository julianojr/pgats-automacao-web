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
}

export default new Login()