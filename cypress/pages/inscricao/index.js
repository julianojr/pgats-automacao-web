class Inscricao{
    preencherFormulario(){
        cy.get('footer .single-widget')
            .should('contain', 'Subscription');

        cy.get('input#susbscribe_email')
            .scrollIntoView()
            .type('tester-1721346302730@mail.com');

        cy.get('button#subscribe').click();

        return this;
    }

    verificarSeInscricaoFoiConcluida(){
        cy.contains('You have been successfully subscribed!').should('be.visible');

        return this;
    }

}

export default new Inscricao()