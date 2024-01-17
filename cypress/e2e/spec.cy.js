// cypress/integration/app.spec.js
describe('React Context App', () => {
  it('should display login message', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Login to continue')
  })

  it('should login and display welcome message', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('LoginButton').click()
    cy.contains('Welcome, user123!')
  })

  it('should logout and display login message', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('LoginButton').click()
    cy.contains('LogoutButton').click()
    cy.contains('Login to continue')
  })
})
