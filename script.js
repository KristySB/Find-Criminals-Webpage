let english = document.querySelector('.englishBtn')
let italian = document.querySelector('.italianBtn')
let czech = document.querySelector('.czechBtn')
let buttons = [english, italian, czech]

if(english){

    buttons.forEach(function(oneButton){
        oneButton.addEventListener('click', function(event){
            console.log(event.target.className)
            localStorage.setItem('language', event.target.className)
        })
    })
}

let button1 = document.querySelector('.button1')
let button2 = document.querySelector('.button2')
let button3 = document.querySelector('.button3')
let button4 = document.querySelector('.button4')
let buttons2 = [button1, button2, button3, button4]

let title1 = document.querySelector('h1 .span1')
let title2 = document.querySelector('h1 .span2')

if(button1){

    let language = localStorage.getItem('language')

    let list = []

    if(language === 'englishBtn common'){
        title1.textContent = 'CHOOSE '
        title2.textContent = 'ACTION'

        list.push('FIRST NAME', 'LAST NAME', 'LICENCE PLATE', 'CITY')
        // buttons2.forEach(function(oneButton, index){
        //     oneButton.textContent = list[index]
        // })

    } else if(language === 'italianBtn common'){
        title1.textContent = 'SCEGLI '
        title2.textContent = 'AZIONE'

        list.push('NOME', 'COGNOME', 'TARGA', 'CITTÀ')

    } else if(language === 'czechBtn common'){
        title1.textContent = 'VYBER '
        title2.textContent = 'AKCI'

        list.push('JMÉNO', 'PŘÍJMENÍ', 'POZNÁVACÍ ZNAČKA', 'MĚSTO')
    }

    buttons2.forEach(function(oneButton, index){
        oneButton.textContent = list[index]
    })
}
