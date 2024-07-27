class Contato{
    preencherFormulario(){
        cy.get('.contact-form h2')
            .should('be.visible')
            .and('have.text', 'Get In Touch');

        cy.get('[data-qa="name"]').type('Tester QA');
        cy.get('[data-qa="email"]').type('tester-1721346302730@mail.com');
        cy.get('[data-qa="subject"]').type('Testes');
        cy.get('[data-qa="message"]').type('Testing the contact us form');

        cy.fixture('example.json').as('arquivo');
        cy.get('input[name="upload_file"]').selectFile('@arquivo');
        cy.get('[data-qa="submit-button"]').click();

        return this;
    }

    verificarSeContatoFoiConcluido(){
        cy.get('.status').should('have.text', 'Success! Your details have been submitted successfully.');

        return this;
    }
}

export default new Contato()