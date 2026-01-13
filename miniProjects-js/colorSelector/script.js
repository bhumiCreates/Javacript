const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
const output = document.getElementById('output')

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const color = e.target.id

        if (color === 'grey') {
            body.style.backgroundColor = e.target.id
        } else if (color === 'red') {
            body.style.backgroundColor = e.target.id
        } else if (color === 'blue') {
            body.style.backgroundColor = e.target.id
        } else if (color === 'green') {
            body.style.backgroundColor = e.target.id
        }
    })

    button.addEventListener('click', (e) => {
        const color = e.target.id
        output.innerHTML = `Selected Color: ${color.charAt(0).toUpperCase() + color.slice(1)}`
    })

})