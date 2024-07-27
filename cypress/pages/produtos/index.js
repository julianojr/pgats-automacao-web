class Produtos{
    clicarPrimeiroProduto(){
        cy.get('.single-products')
        .should('be.visible')
        .and('have.length.at.least', 1)
        .first()
        .parent()
        .contains('View Product')
        .click();

        return this;
    }

    procurarProduto(nome){
        cy.get('input#search_product').type('Tshirt');
        cy.get('button#submit_search').click();

        cy.get('.title')
            .should('be.visible')
            .and('contain', 'Searched Products');

        return this;
    }

    verificarSeListaDeProdutosNaoEstaVazia(){
        cy.get('.single-products')
            .should('be.visible')
            .and('have.length.at.least', 1);

        return this;
    }

    verificarDetalhesProduto(){
        cy.url().should('contain', 'product_details');

        cy.get('.product-information > h2').should('be.visible');
        cy.get('.product-information p').should('be.visible').and('have.length', 4);
        cy.get('.product-information span span').should('be.visible');

        return this;
    }
}

export default new Produtos()