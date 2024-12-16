/// <reference types="cypress" />

describe("Teste de API", () => {
  const apiUrl =
    "https://www.advantageonlineshopping.com/catalog/api/v1/products/search?name=HP%20PAVILION%2015Z%20TOUCH%20LAPTOP&quantityPerEachCategory=-1";

  it("Validar o status code “200” da resposta do serviço", () => {
    cy.request("GET", apiUrl).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Verifique se a lista exibe somente produtos conforme sua busca.", () => {
    cy.request("GET", apiUrl).then((response) => {
      expect(response.status).to.eq(200);
      const products = response.body[0].products;
      const productName = "HP Pavilion 15z Touch Laptop";

      // Verifica se a lista contém o produto esperado
      const product = products.find((p) => p.productName === productName);
      expect(product).to.not.be.undefined;
      expect(product.productName).to.eq(productName);
    });
  });
});
