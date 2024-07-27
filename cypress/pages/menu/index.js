class Menu{
    irParaProdutos(){
        cy.contains('Products').click();
        cy.url().should('contain', 'products');

        cy.get('.title')
            .should('be.visible')
            .and('contain', 'All Products');

        return this;
    }

    irParaContato(){
        cy.contains('Contact us').click();

        return this;
    }

    irParaLoginCadastro(){
        cy.contains('Signup').click();

        return this;
    }

    fazerLogout(){
        cy.contains('Logout').click();

        return this;
    }

    deletarConta(){
        cy.get('[href *="delete"]').click();
        cy.get('b').should('contain', 'Account Deleted!');
        cy.get('[data-qa="continue-button"]').click();

        return this;
    }
}

export default new Menu()