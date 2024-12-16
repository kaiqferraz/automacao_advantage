describe("Atualize a imagem de um produto (POST):", () => {
  it("Deve realizar login, atualizar a imagem do produto e validar status code 200", () => {
    const loginUrl =
      "https://www.advantageonlineshopping.com/accountservice/accountrest/api/v1/login";
    const updateImageUrl =
      "https://www.advantageonlineshopping.com/catalog/api/v1/product/image/664211024/3683D1/BLUE";
    const queryParams = { product_id: 3 };
    const loginPayload = {
      email: "teste@teste.com",
      loginPassword: "Teste@10",
      loginUser: "kf.test",
    };

    // 1. Realiza o login para obter o token
    cy.request({
      method: "POST",
      url: loginUrl,
      body: loginPayload,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((loginResponse) => {
      expect(loginResponse.status).to.eq(200); // Valida status code 200

      // Loga a resposta do login para depuração
      cy.log("Login Response:", JSON.stringify(loginResponse.body));

      const statusMessage = loginResponse.body.statusMessage;

      expect(statusMessage).to.have.property("success", true);
      expect(statusMessage).to.have.property("token");
      expect(statusMessage).to.have.property("userId");

      const token = statusMessage.token; // Captura o token JWT
      const userId = statusMessage.userId; // Captura o userId

      // Loga o token e userId para depuração
      cy.log("Token:", token);
      cy.log("UserId:", userId);

      // 2. Carrega o arquivo da imagem
      const fileName = "notebook.jpg";
      cy.fixture(fileName, "base64").then((fileContent) => {
        const formData = new FormData();
        formData.append(
          "file",
          Cypress.Blob.base64StringToBlob(fileContent, "image/jpeg"),
          fileName
        );
        formData.append("color", "BLUE");
        formData.append("source", "3683D1");
        formData.append("userId", userId);

        // 3. Faz a requisição de atualização de imagem usando o token
        cy.request({
          method: "POST",
          url: updateImageUrl,
          qs: queryParams,
          headers: {
            Authorization: `Bearer ${token}`, // Insere o token JWT
          },
          body: formData,
          failOnStatusCode: false, // Evita quebra se o status não for 2xx
        }).then((response) => {
          // Validação do status code
          expect(response.status).to.eq(200);
        });
      });
    });
  });
});
