/// <reference types="cypress" />

import LOC from '../support/locators'
import dayjs from 'dayjs'

describe('Pedido de Venda', () => {
    beforeEach(() => {
        cy.login('felipe.duca@vrsoft.com.br', 'Vr@Duca445')
        cy.acessaLoja('VR2')
        cy.viewport(1280, 800)
    })

    it('Cadastro de Pessoa Cliente', () => {
        cy.buscaTela('Pessoa')

        cy.get(LOC.OPERACAO.CADASTRO.PESSOA.CONSULTA_BTN_CADASTRAR).click()

        cy.get(LOC.OPERACAO.CADASTRO.PESSOA.CADASTRO_ABA_DADOS_RADIOBTN_PESSOA_FISICA).click()
        cy.get(LOC.OPERACAO.CADASTRO.PESSOA.CADASTRO_ABA_DADOS_PESSOA_FISICA_NOME).type('Teste 10')
        cy.get(LOC.OPERACAO.CADASTRO.PESSOA.CADASTRO_ABA_DADOS_PESSOA_FISICA_CPF).type(21281026000)

        cy.get(LOC.OPERACAO.CADASTRO.PESSOA.CADASTRO_ABA_TIPO_PESSOA).click()
        cy.get(LOC.OPERACAO.CADASTRO.PESSOA.CADASTRO_ABA_TIPO_PESSOA_BTN_ADICIONAR).click()
        cy.get(LOC.OPERACAO.CADASTRO.PESSOA.CADASTRO_ABA_TIPO_PESSOA_MODAL_SELECT_TIPO_PESSOA).click()
        cy.get(LOC.OPERACAO.CADASTRO.PESSOA.SELECT_ITEM('Cliente')).click()
        cy.get(LOC.OPERACAO.CADASTRO.PESSOA.CADASTRO_ABA_TIPO_PESSOA_MODAL_BTN_SALVAR).click()

        cy.get(LOC.OPERACAO.CADASTRO.PESSOA.CADASTRO_ABA_ENDERECOS).click()
        cy.get(LOC.OPERACAO.CADASTRO.PESSOA.CADASTRO_ABA_ENDERECOS_BTN_ADICIONAR).click()
        cy.get(LOC.OPERACAO.CADASTRO.PESSOA.CADASTRO_ABA_ENDERECOS_MODAL_TIPO_ENDERECO).click()
        cy.get(LOC.OPERACAO.CADASTRO.PESSOA.SELECT_ITEM('Principal')).click()
        cy.get(LOC.OPERACAO.CADASTRO.PESSOA.CADASTRO_ABA_ENDERECOS_MODAL_INPUT_DESCRICAO).type('Endereço Cypress')
        cy.get(LOC.OPERACAO.CADASTRO.PESSOA.CADASTRO_ABA_ENDERECOS_MODAL_INPUT_CEP).type(13484646)
        cy.aguardaCarregar()
        cy.get(LOC.OPERACAO.CADASTRO.PESSOA.CADASTRO_ABA_ENDERECOS_MODAL_INPUT_NUMERO).type(10)
        cy.get(LOC.OPERACAO.CADASTRO.PESSOA.CADASTRO_ABA_ENDERECOS_MODAL_BTN_SALVAR).click()

        cy.get(LOC.OPERACAO.CADASTRO.PESSOA.CADASTRO_ABA_CONTATOS).click()
        cy.get(LOC.OPERACAO.CADASTRO.PESSOA.CADASTRO_ABA_CONTATOS_BTN_ADICIONAR).click()
        cy.get(LOC.OPERACAO.CADASTRO.PESSOA.CADASTRO_ABA_CONTATOS_MODAL_SELECT_TIPO_CONTATO).click()
        cy.get(LOC.OPERACAO.CADASTRO.PESSOA.SELECT_ITEM('Principal')).click()
        cy.get(LOC.OPERACAO.CADASTRO.PESSOA.CADASTRO_ABA_CONTATOS_MODAL_INPUT_CONTATO).type('Contato Cypress')
        cy.get(LOC.OPERACAO.CADASTRO.PESSOA.CADASTRO_ABA_CONTATOS_MODAL_INPUT_TELEFONE).type(1934427600)
        cy.get(LOC.OPERACAO.CADASTRO.PESSOA.CADASTRO_ABA_CONTATOS_MODAL_INPUT_EMAIL).type('teste@teste.com.br')
        cy.get(LOC.OPERACAO.CADASTRO.PESSOA.CADASTRO_ABA_CONTATOS_MODAL_BTN_SALVAR).click()

        cy.get(LOC.OPERACAO.CADASTRO.PESSOA.CADASTRO_ABA_CLIENTE).click()
        cy.get(LOC.OPERACAO.CADASTRO.PESSOA.CADASTRO_ABA_CLIENTE_ABA_DADOS_GERAIS_SELECT_CONSUMIDOR_FINAL).click()
        cy.get(LOC.OPERACAO.CADASTRO.PESSOA.SELECT_ITEM('0 - Normal')).click()
        cy.get(LOC.OPERACAO.CADASTRO.PESSOA.CADASTRO_ABA_CLIENTE_ABA_DADOS_GERAIS_SELECT_ORGAO_PUBLICO).click()
        cy.get(LOC.OPERACAO.CADASTRO.PESSOA.CADASTRO_ABA_CLIENTE_ABA_DADOS_GERAIS_SELECT_ORGAO_PUBLICO_LI('Nenhum')).click()

        cy.get(LOC.OPERACAO.CADASTRO.PESSOA.CADASTRO_BTN_SALVAR).click()
        cy.validaMensagem('Salvo com sucesso')
    })

    it('Cadastro de Produto', () => {
        cy.buscaTela('Produto')

        cy.get(LOC.OPERACAO.CADASTRO.PRODUTO.CONSULTA_BTN_CADASTRAR).click()

        cy.get(LOC.OPERACAO.CADASTRO.PRODUTO.CADASTRO_ABA_DADOS_GERAIS_DESCRICAO).type('Produto Teste Cypress 3')
        cy.get(LOC.OPERACAO.CADASTRO.PRODUTO.CADASTRO_ABA_DADOS_GERAIS_INPUT_DESCRICAO_CUPOM).type('Produto Cypress 3')
        cy.get(LOC.OPERACAO.CADASTRO.PRODUTO.CADASTRO_ABA_DADOS_GERAIS_INPUT_DESCRICAO_GONDOLA).type('Produto Teste Cypress 3')
        cy.get(LOC.OPERACAO.CADASTRO.PRODUTO.CADASTRO_ABA_DADOS_GERAIS_SELECT_TIPO_PRODUTO).click()
        cy.get(LOC.OPERACAO.CADASTRO.PRODUTO.SELECT_ITEM('Mercadoria para Revenda')).click()
        cy.get(LOC.OPERACAO.CADASTRO.PRODUTO.CADASTRO_ABA_DADOS_GERAIS_SELECT_TIPO_PRODUTO).click()
        cy.get(LOC.OPERACAO.CADASTRO.PRODUTO.CADASTRO_ABA_DADOS_GERAIS_SELECT_EMBALAGEM).click()
        cy.get(LOC.OPERACAO.CADASTRO.PRODUTO.SELECT_ITEM('Unidade')).click()
        cy.get(LOC.OPERACAO.CADASTRO.PRODUTO.CADASTRO_ABA_DADOS_GERAIS_INPUT_QTD_EMBALAGEM).type(1)
        cy.get(LOC.OPERACAO.CADASTRO.PRODUTO.CADASTRO_ABA_DADOS_GERAIS_SELECT_CLASSIFICACAO_PRODUTO).click()
        cy.get(LOC.OPERACAO.CADASTRO.PRODUTO.SELECT_ITEM('A ACERTAR')).click()
        cy.get(LOC.OPERACAO.CADASTRO.PRODUTO.CADASTRO_ABA_DADOS_GERAIS_SELECT_MARCA).click()
        cy.get(LOC.OPERACAO.CADASTRO.PRODUTO.SELECT_ITEM('APTI')).click()

        cy.get(LOC.OPERACAO.CADASTRO.PRODUTO.CADASTRO_ABA_FISCAL).click()
        cy.get(LOC.OPERACAO.CADASTRO.PRODUTO.CADASTRO_ABA_FISCAL_NCM).click()
        cy.get(LOC.OPERACAO.CADASTRO.PRODUTO.CADASTRO_ABA_FISCAL_BUSCA_NCM).type('Cafeina')
        cy.get(LOC.OPERACAO.CADASTRO.PRODUTO.CADASTRO_ABA_FISCAL_NCM_LI('Cafeina')).click()
        cy.get(LOC.OPERACAO.CADASTRO.PRODUTO.CADASTRO_ABA_FISCAL_ORIGEM_MERCADORIA).click()
        cy.get(LOC.OPERACAO.CADASTRO.PRODUTO.SELECT_ITEM('0 - Nacional')).click()
        cy.get(LOC.OPERACAO.CADASTRO.PRODUTO.CADASTRO_ABA_FISCAL_BTN_ADICIONAR_CENARIO_FISCAL).click()
        cy.get(LOC.OPERACAO.CADASTRO.PRODUTO.CADASTRO_ABA_FISCAL_MODAL_CENARIO_FISCAL_DATATABLE_ROW('Substituído Saída')).within(() => {
            cy.get(LOC.OPERACAO.CADASTRO.PRODUTO.CADASTRO_ABA_FISCAL_MODAL_CENARIO_FISCAL_CHECKBOX_ROW).click()
        })
        cy.get(LOC.OPERACAO.CADASTRO.PRODUTO.CADASTRO_ABA_FISCAL_MODAL_CENARIO_FISCAL_DATATABLE_ROW('Outras Entrada')).within(() => {
            cy.get(LOC.OPERACAO.CADASTRO.PRODUTO.CADASTRO_ABA_FISCAL_MODAL_CENARIO_FISCAL_CHECKBOX_ROW).click()
        })
        cy.get(LOC.OPERACAO.CADASTRO.PRODUTO.CADASTRO_ABA_FISCAL_MODAL_CENARIO_FISCAL_CARREGAR).click()

        cy.get(LOC.OPERACAO.CADASTRO.PRODUTO.CADASTRO_BTN_SALVAR).click()

        cy.get(LOC.OPERACAO.CADASTRO.PRODUTO.CADASTRO_MODAL_DEFINICAO_PRECO_DEFINIR).click()

        cy.get(LOC.OPERACAO.CADASTRO.PRODUTO.CADASTRO_MODAL_ADMINISTRACAO_PRECO_CUSTO_COM_IMPOSTO).clear().type(3)
        cy.get(LOC.OPERACAO.CADASTRO.PRODUTO.CADASTRO_MODAL_ADMINISTRACAO_PRECO_PRECO_COMUM_NOVO).clear().type(4)
        cy.get(LOC.OPERACAO.CADASTRO.PRODUTO.CADASTRO_MODAL_ADMINISTRACAO_PRECO_DEFINIR).click()
        cy.validaMensagem('Salvo com sucesso!')
    })

    it('Cadastro de Pedido de Venda', () => {
        cy.buscaTela('Pedido de Venda')
        cy.get('div > .main-nav-action').should('contain', 'Consulta de Pedido de Venda')
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CONSULTA_BTN_CADASTRAR).click()

        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CADASTRO_DATEPICKER_DATA_LANCAMENTO).invoke('val').then(data => {
            expect(data).equal(dayjs().format('DD/MM/YYYY'))
        })
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CADASTRO_SELECT_SITUACAO).should('contain', 'Aberto')

        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CADASTRO_SELECT_LOJA).click()
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.SELECT_ITEM('VR2')).click()
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CADASTRO_SELECT_CLIENTE).click()
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CADASTRO_SELECT_BUSCA_CLIENTE).type('Teste 10')
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.SELECT_ITEM('Teste 10')).click()
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CADASTRO_SELECT_ENDERECO).click()
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.SELECT_ITEM('Endereço Cypress')).click()
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CADASTRO_SELECT_CONTATO).click()
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.SELECT_ITEM('Contato Cypress')).click()
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CADASTRO_INPUT_OBSERVACAO).type('Lançamento teste')

        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CADASTRO_BTN_ADD_PRODUTO).click()
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CADASTRO_MODAL_PRODUTO_INPUT_DESCRICAO).type('Produto Teste Cypress 3')
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CADASTRO_MODAL_PRODUTO_DATATABLE_ROW('Produto Teste Cypress 3')).within(() => {
            cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CADASTRO_MODAL_PRODUTO_DATATABLE_CHECKBOX).click()
        })
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CADASTRO_MODAL_PRODUTO_BTN_CARREGAR).click()

        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CADASTRO_DATATABLE_INPUT_QTD_PRODUTO).clear().type(10)
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CADASTRO_CARD_TOTAL_ITENS).should('contain', 1)
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CADASTRO_CARD_TOTAL_BRUTO).should('contain', '40,00')
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CADASTRO_DATATABLE_INPUT_DESCONTO_PRODUTO).type(5)
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CADASTRO_CARD_DESCONTO_TOTAL).should('contain', '2,00')
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CADASTRO_CARD_TOTAL_LIQUIDO).should('contain', '38,00')
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CADASTRO_DATATABLE_BTN_DESCONTO_MONETARIO_PRODUTO).click()
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CADASTRO_DATATABLE_INPUT_DESCONTO_PRODUTO).type(3)
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CADASTRO_CARD_DESCONTO_TOTAL).should('contain', '3,00')
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CADASTRO_CARD_TOTAL_LIQUIDO).should('contain', '37,00')
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CADASTRO_DATATABLE_INPUT_ACRESCIMO_PRODUTO).type(3)
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CADASTRO_CARD_ACRESCIMO_TOTAL).should('contain', '1,20')
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CADASTRO_CARD_TOTAL_LIQUIDO).should('contain', '38,11')
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CADASTRO_DATATABLE_BTN_ACRESCIMO_MONETARIO_PRODUTO).click()
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CADASTRO_DATATABLE_INPUT_ACRESCIMO_PRODUTO).type(1)
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CADASTRO_CARD_ACRESCIMO_TOTAL).should('contain', '1,00')
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CADASTRO_CARD_TOTAL_LIQUIDO).should('contain', '38,00')
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CADASTRO_DATATABLE_INPUT_OBSERVACAO_PRODUTO).type('Teste desconto e acréscimo')

        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CADASTRO_EXPORT_FILE_BTN_EXPORTAR_TABELA).click()
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CADASTRO_EXPORT_FILE_RADIO).click()
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CADASTRO_EXPORT_FILE_BTN__APLICAR).click()
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CADASTRO_MODAL_EXPORT_FILE_TODAS_COLUNAS).click()
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CADASTRO_MODAL_EXPORT_FILE_BTN_GERAR).click()
        cy.exec('dir "cypress/downloads"').its('stdout').should('include', 'produtos_do')
        cy.exec('rmdir "cypress/downloads" /Q /S')

        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CADASTRO_BTN_SALVAR).click()
        cy.validaMensagem('Salvo com sucesso')

        cy.aguardaCarregar()

        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CADASTRO_INPUT_NUMERO_VENDA).invoke('val').then(num => {
            return num
        }).as('numeroPedido')

        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CADASTRO_BTN_VOLTAR).click()
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CADASTRO_MODAL_SAIR_BTN_SEM_SALVAR).click()

        cy.aguardaCarregar()

        cy.get('@numeroPedido').then(numeroPedido => {
            cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CONSULTA_INPUT_CODIGO).type(numeroPedido + '{ENTER}')
            cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CONSULTA_DATATABLE_ROW('Aberto')).should('exist')
        })

        cy.get('@numeroPedido').then(numeroPedido => {
            cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CONSULTA_DATATABLE_ROW(numeroPedido)).within(() => {
                cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CONSULTA_DATATABLE_CHECKBOX).click()
            })
        })
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CONSULTA_BTN_FINALIZAR).click()
        cy.validaMensagem('Atualizado com sucesso!')
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CONSULTA_DATATABLE_ROW('Finalizado')).should('exist').dblclick()
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CADASTRO_DATEPICKER_DATA_EMISSAO).invoke('val').then(data => {
            expect(data).equal(dayjs().format('DD/MM/YYYY'))
        })
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CADASTRO_BTN_VOLTAR).click()
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CADASTRO_MODAL_SAIR_BTN_SEM_SALVAR).click()

        cy.get('@numeroPedido').then(numeroPedido => {
            cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CONSULTA_DATATABLE_ROW(numeroPedido)).within(() => {
                cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CONSULTA_DATATABLE_CHECKBOX).click()
            })
        })
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CONSULTA_BTN_ESTORNAR).click()
        cy.validaMensagem('Atualizado com sucesso!')
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CONSULTA_DATATABLE_ROW('Aberto')).should('exist')

        cy.get('@numeroPedido').then(numeroPedido => {
            cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CONSULTA_DATATABLE_ROW(numeroPedido)).within(() => {
                cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CONSULTA_DATATABLE_CHECKBOX).click()
            })
        })
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CONSULTA_BTN_CANCELAR).click()
        cy.validaMensagem('Atualizado com sucesso!')
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CONSULTA_DATATABLE_ROW('Cancelado')).should('exist')

    })

    it.skip('Teste de coletar numero pedido', () => {
        cy.buscaTela('Pedido de Venda')

        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CONSULTA_DATATABLE_NUMERO_PAGINA(4)).click()
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CONSULTA_DATATABLE_ROW(31)).within(() => {
            cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CONSULTA_DATATABLE_EDITAR).click()
        })

        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CADASTRO_INPUT_NUMERO_VENDA).invoke('val').then(num => {
            return num
        }).as('numeroPedido')

        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CADASTRO_BTN_VOLTAR).click()
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CADASTRO_MODAL_SAIR_BTN_SEM_SALVAR).click()

        cy.aguardaCarregar()

        cy.get('@numeroPedido').then(numeroPedido => {
            cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CONSULTA_INPUT_CODIGO).type(numeroPedido + '{ENTER}')
            cy.aguardaCarregar()
        })
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CONSULTA_DATATABLE_ROW('Aberto')).should('exist')

        cy.get('@numeroPedido').then(numeroPedido => {
            cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CONSULTA_DATATABLE_ROW(numeroPedido)).within(() => {
                cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CONSULTA_DATATABLE_CHECKBOX).click()
            })
        })
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CONSULTA_BTN_FINALIZAR).click()
        cy.validaMensagem('Atualizado com sucesso!')
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CONSULTA_DATATABLE_ROW('Finalizado')).should('exist')

        cy.get('@numeroPedido').then(numeroPedido => {
            cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CONSULTA_DATATABLE_ROW(numeroPedido)).within(() => {
                cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CONSULTA_DATATABLE_CHECKBOX).click()
            })
        })
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CONSULTA_BTN_ESTORNAR).click()
        cy.validaMensagem('Atualizado com sucesso!')
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CONSULTA_DATATABLE_ROW('Aberto')).should('exist')

        cy.get('@numeroPedido').then(numeroPedido => {
            cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CONSULTA_DATATABLE_ROW(numeroPedido)).within(() => {
                cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CONSULTA_DATATABLE_CHECKBOX).click()
            })
        })
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CONSULTA_BTN_CANCELAR).click()
        cy.validaMensagem('Atualizado com sucesso!')
        cy.get(LOC.VENDA.PEDIDO_DE_VENDA.CONSULTA_DATATABLE_ROW('Cancelado')).should('exist')
    })

})