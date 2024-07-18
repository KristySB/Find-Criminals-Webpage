let criminals = [{
    firstName: "Martin",
    secondName: "Zelený",
    birth: 1985,
    licencePlate: "85C3322",
    address: "U sloupů 16",
    city: "České Budějovice"
    }, {
    firstName: "Jana",
    secondName: "Růžová",
    birth: 1996,
    licencePlate: "93K3922",
    address: "Malská 29",
    city: "České Budějovice"
    }, {
    firstName: "Anna",
    secondName: "Modrá",
    birth: 1989,
    licencePlate: "2EP6328",
    address: "Stevardská 38",
    city: "České Budějovice"
    }]

let list = ['firstName', 'secondName', 'licencePlate', 'city']

// CHOOSE ACTION HTML => NASTAVENI USERCHOICE, PODLE CEHO, BUDU PACHATELE HLEDAT
if(button1){
    
    buttons2.forEach(function(oneButton, index){
        oneButton.addEventListener('click', function(){
            localStorage.setItem('userChoice', list[index])
        })
    })
}

// FIND SUSPECTS HTML => SAMOTNE HLEDANI PACHATELE
let input = document.querySelector('.input')

if(input){

    let userChoice = localStorage.getItem('userChoice')

    let inputValue = ''

    // FUNKCE HLEDANI PACHATELE A PRIDAVANI TEXTU NA STRANKU
    let findSuspect = function(criminalList, value, userChoice){
        document.querySelector('.criminals').innerHTML = ''
        
        let foundCriminals = criminalList.filter(function(oneCriminal){

            return oneCriminal[userChoice].toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(value.toLowerCase())
        })

        foundCriminals.forEach(function(oneCriminal){
            let paragraph = document.createElement('p')
            paragraph.innerHTML = `First name: ${oneCriminal.firstName}<br>
                Last name: ${oneCriminal.secondName}<br>
                Birth: ${oneCriminal.birth}<br>
                Licence plate: ${oneCriminal.licencePlate}<br>
                Address: ${oneCriminal.address}, ${oneCriminal.city}`
            document.querySelector('.criminals').appendChild(paragraph)
        })
    }

    // PRIDANI ADDEVENTLISTENER TLACITKUM
    input.addEventListener('change', function(event){
        inputValue = event.target.value.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        console.log(inputValue)
        findSuspect(criminals, inputValue, userChoice)
    })
}

