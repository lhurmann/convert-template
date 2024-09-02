// Cotação de moedas do dia.
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

// Obtendo os elementos do formulário.
const amount = document.querySelector('#amount')
const currency = document.querySelector('#currency')
const form = document.querySelector('form')
const footer = document.querySelector('main footer')

// Manipulando o input amount para receber somente números.
amount.addEventListener('input', () => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, '')
})

// Captando o evento de subtmit (enviar) do formuçário.
form.onsubmit = (event) => {
  event.preventDefault()

  switch (currency.value) {
    case 'USD':
      convertCurrency(amount.value, USD, 'US$')
      break
    case 'EUR':
      convertCurrency(amount.value, EUR, '€')
      break
    case 'GBP':
      convertCurrency(amount.value, GBP, '£')
      break
  }
}

// Função para converter a moeda.
function convertCurrency(amount, price, symbol) {
  try {
    // Aplica a classe que exibe o footer para monstrar o resultado.
    footer.classList.add('show-result')
  } catch (error) {
    // Remove a classe do footer removendo ele da tela.
    footer.classList.remove('show-result')
    console.log(error)
    alert('Não foi possível converter. Tente novamente mais tarde.')
  }
}