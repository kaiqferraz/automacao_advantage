class ValidarProdutos {
  insereProduto() {
    return cy.get("#mobileSearch").click();
  }

  selecionaProduto() {
    return cy.get("#3").click();
  }

  btnAddToCart() {
    return cy.get('[name="save_to_cart"]').click();
  }

  validaProdutos() {
    return cy
      .get("td")
      .get(".roboto-regular.productName.ng-binding")
      .should("be.visible");
  }
}

export default new ValidarProdutos();
