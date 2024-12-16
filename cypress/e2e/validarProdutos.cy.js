/// <reference types="cypress" />

import ValidarProdutos from "../pageObjects/validarProdutos.po";

describe("Realizar a validação de produtos no carrinho compras do Advantage Shopping", () => {
  context(
    "Dado que realizo a busca de um produto e insero no carrinho..",
    () => {
      before(() => {
        cy.visit("https://advantageonlineshopping.com/#/");

        ValidarProdutos.insereProduto().type(
          "HP PAVILION 15Z TOUCH LAPTOP{enter}",
          { delay: 300 }
        );

        ValidarProdutos.selecionaProduto();

        ValidarProdutos.btnAddToCart();

        cy.visit("https://advantageonlineshopping.com/#/shoppingCart");
      });

      it("Então realizo a validação dos produtos no carrinho na tela de pagamento..", () => {
        ValidarProdutos.validaProdutos().contains(
          "HP PAVILION 15Z TOUCH LAPTOP"
        );
      });
    }
  );
});
