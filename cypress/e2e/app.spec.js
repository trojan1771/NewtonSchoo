// cypress/integration/app.spec.js
describe('React Context App', () => {
  it('should display login message', () => {
    cy.visit('/')
    cy.contains('Login to continue')
  })

  it('should login and display welcome message', () => {
    cy.visit('/')
    cy.contains('Login').click()
    cy.contains('Welcome, user123!')
  })

  it('should logout and display login message', () => {
    cy.visit('/')
    cy.contains('Login').click()
    cy.contains('Logout').click()
    cy.contains('Login to continue')
  })
})
