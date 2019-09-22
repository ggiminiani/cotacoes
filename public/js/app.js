console.log('javascript no frontend')



const cotacoesForm = document.querySelector('form')
const mainMensage = document.querySelector('h3')
const price = document.querySelector('#price')
const priceOpen = document.querySelector('#price_open')
const dayHigh = document.querySelector('#day_high')
const dayLow = document.querySelector('#day_low')

cotacoesForm.addEventListener('submit', (event) => {
    mainMensage.innerText = 'buscando....'
    event.preventDefault()
    const ativo = document.querySelector('input').value.toUpperCase()

    if (!ativo) {
        mainMensage.innerText = 'O ativo deve ser informado'
        return
    }

    fetch(`http://localhost:3000/cotacoes?ativo=${ativo}`).then((response) => {
        response.json().then((data) => {

            mainMensage.innerText = ''
            price.innerText = ''
            priceOpen.innerText = ''
            dayHigh.innerText = ''
            dayLow.innerText =''

            if (data.error) {
                mainMensage.innerText = 'Alguma coisa deu errado'
                price.innerText = `${data.error.mensage} | código ${data.error.code}`
            } else {                
                mainMensage.innerText = data.symbol
                price.innerText = `Preco: ${data.price}`
                priceOpen.innerText = `Preco de abertura: ${data.price_open}`
                dayHigh.innerText = `Maior alta do dia: ${data.day_high}`
                dayLow.innerText =`Baixa do dia: ${data.day_low}`
            }
        })
    })
    console.log('Oi passei por aqui ' + ativo)
})