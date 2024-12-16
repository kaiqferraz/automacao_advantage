@ORDERPAYMENT

Feature: Validar os produtos incluídos no carrinho na tela de pagamento
    Scenario: É esperado que seja validado os produtos incluídos no carrinho de compras
        Given Preencho os dados do usuário
        And Submeto o login na aplicação
        And Valido os dados do produto
        And Submeto para avançar
        When Preencho todos os dados do pagamento
        And Submeto a compra
        Then É apresentado todos os dados da compra


