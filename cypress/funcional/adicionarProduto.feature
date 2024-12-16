@SHOPPINGCART

Feature: Adicionar produto
    Scenario: É esperado que seja adicionado um produto no carrinho de compras
        Given Preencho todas as informações do produto
        When Adiciono o produto no carrinho
        And Realizo o checkout
        Then É exibido o produto no carrinho de compras







