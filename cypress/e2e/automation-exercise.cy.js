/// <reference types="cypress"/>

import cadastro from '../pages/cadastro';
import login from '../pages/login';
import menu from '../pages/menu';
import contato from '../pages/contato';
import produtos from '../pages/produtos';
import pagamento from '../pages/pagamento';
import inscricao from '../pages/inscricao';
import checkout from '../pages/checkout';

describe('Automation Exercise', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Test Case 1: Cadastrar um usuário', () => {
        menu.irParaLoginCadastro();

        cadastro
            .preencherFormulario()
            .verificarSeCadastroFoiConcluido();
    });

    it('Test Case 2: Login User with correct email and password', () => {
        menu.irParaLoginCadastro();
    
        login.fazerLogin('tester-1721346302730@mail.com', '12345');
    
        cy.get('i.fa-user').parent().should('contain', 'Tester QA');
    });

    it('Test Case 3: Login User with incorrect email and password', () => {
        menu.irParaLoginCadastro();
    
        login
            .fazerLogin('tester-1721346302730@mail.com', '54321')
            .verificarMensagemLoginIncorreto();
    });

    it('Test Case 4: Logout user', () => {
        menu.irParaLoginCadastro();
    
        login.fazerLogin('tester-1721346302730@mail.com', '12345');

        cy.get('i.fa-user').parent().should('contain', 'Tester QA');

        menu.fazerLogout();
    
        cy.url().should('contain', 'https://automationexercise.com/login');
        cy.contains("Login to your account").should("be.visible");
    });

    it('Test Case 5: Register user with existing email', () => {
        menu.irParaLoginCadastro();

        cadastro
            .iniciarCadastro('tester-1721346302730@mail.com')
            .verificarMensagemCadastroExistente();
    });

    it('Test Case 6: Contact Us Form', () => {
        menu.irParaContato();

        contato
            .preencherFormulario()
            .verificarSeContatoFoiConcluido
    });

    it('Test Case 8: Verify All Products and product detail page', () => {
        menu.irParaProdutos();

        produtos
            .clicarPrimeiroProduto()
            .verificarDetalhesProduto();
    });

    it('Test Case 9: Search Product', () => {
        menu.irParaProdutos();

        produtos
            .procurarProduto()
            .verificarSeListaDeProdutosNaoEstaVazia();
    });

    it('Test Case 10: Verify Subscription in home page', () => {
        inscricao
            .preencherFormulario()
            .verificarSeInscricaoFoiConcluida();
    });

    it('Test Case 15: Place Order: Register before Checkout', () => {
        menu.irParaLoginCadastro();

        cadastro.preencherFormulario();

        cy.contains("Add to cart").click();
        cy.contains("View Cart").click();

        checkout.fazerCheckout();

        pagamento
            .preencherFormulario()
            .verificarSePedidoFoiConcluido();

        menu.deletarConta();
    });
});