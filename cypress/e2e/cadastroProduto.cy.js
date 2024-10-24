function gerarStringAleatoria(tamanho) {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let resultado = '';
  
  for (let i = 0; i < tamanho; i++) {
    const indice = Math.floor(Math.random() * caracteres.length);
    resultado += caracteres[indice];
  }
  
  return resultado;
}

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:8080/cadastroProduto.html')
    const nome = gerarStringAleatoria(4);
    const preco = Math.floor(Math.random() * 1000);
    cy.get('#registerProdutoName').type(nome)
    cy.get('#registerPreco').type(preco)
    cy.get('.btn').click()
  })
})
