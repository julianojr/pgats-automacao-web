class Checkout{
    fazerCheckout(){
        cy.get('.btn-default.check_out').should('be.visible').click();
        cy.get('.heading').first().should('have.text', 'Address Details');
        cy.get('.heading').last().should('have.text', 'Review Your Order');

        cy.get('.form-control').type('378 98562-8781');
        cy.get('.btn-default.check_out').click();
    }
}

export default new Checkout()