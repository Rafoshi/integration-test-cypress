describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:8080/login.html')
    cy.get('#loginEmail').type('teste@gmail.com')
  })
})
