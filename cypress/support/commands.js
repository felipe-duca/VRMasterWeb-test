// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import LOC from './locators'

Cypress.Commands.add('login', (email, senha) => {
    cy.visit('https://staging-master.vrsoft.com.br/login')
    cy.get(LOC.LOGIN.INPUT_EMAIL).type(email)
    cy.get(LOC.LOGIN.INPUT_SENHA).type(senha)
    cy.get(LOC.LOGIN.SWITCH_LEMBRAR_USUARIO).click()
    cy.get(LOC.LOGIN.BTN_ENTRAR).click()
})

Cypress.Commands.add('acessaLoja', nomeLoja => {
    cy.get(`p:contains('${nomeLoja}')`).click()
    cy.get('span:contains("Confirmar")').click()
})

Cypress.Commands.add('buscaTela', nomeTela => {
    cy.get(LOC.BARRA_BUSCA).type(nomeTela)
    cy.get('div > .datalist-option:eq(0)').click()
})

Cypress.Commands.add('validaMensagem', mensagem => {
    cy.get('vrc-push-notification span').should('contain', `${mensagem}`)
})

Cypress.Commands.add('aguardaCarregar', () => {
    cy.get('.loading-size').should('not.exist')
    cy.wait(500)
})