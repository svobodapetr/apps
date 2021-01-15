import {
    getDayInfo
} from './day.js'

import {
    getMonthInfo
} from './month.js'

import {
    getFateInfo
} from './fate.js'

import {
    getNumbersInfo
} from './numbers.js'

window.onload = () => {

    initLS()

    initNumerica()

};

function initLS() {

    if (!localStorage.getItem('date_of_birth')) return

    document.getElementById('date').value = localStorage.getItem('date_of_birth')

}

function initNumerica() {

    initDayInfo()

    initMonthInfo()

    initFateInfo()

    initNumbersInfo()

}

function initDayInfo() {

    if (!document.getElementById('day-info')) return

    document.getElementById('day-info').addEventListener('click', (e) => {

        let dateElement = document.getElementById('date')
        if (dateElement.validity.valueMissing) return

        localStorage.setItem('date_of_birth', dateElement.value)

        showDayInfo()

    })

}

function initMonthInfo() {

    if (!document.getElementById('month-info')) return

    document.getElementById('month-info').addEventListener('click', (e) => {

        let dateElement = document.getElementById('date')
        if (dateElement.validity.valueMissing) return

        localStorage.setItem('date_of_birth', dateElement.value)

        showMonthInfo()

    })

}

function initFateInfo() {

    if (!document.getElementById('fate-info')) return

    document.getElementById('fate-info').addEventListener('click', (e) => {

        let dateElement = document.getElementById('date')
        if (dateElement.validity.valueMissing) return

        localStorage.setItem('date_of_birth', dateElement.value)

        showFateInfo()

    })

}

function initNumbersInfo() {

    if (!document.getElementById('numbers-info')) return

    document.getElementById('numbers-info').addEventListener('click', (e) => {

        let dateElement = document.getElementById('date')
        if (dateElement.validity.valueMissing) return

        localStorage.setItem('date_of_birth', dateElement.value)

        showNumbersInfo()

    })

}

function showDayInfo() {

    let date = new Date(localStorage.getItem('date_of_birth'))

    let dayNumber = date.getDate()

    let dayInfo = getDayInfo(dayNumber)

    let html = `
        <div class="day"></div>
            <h4>Co vypovídá den narození</h4>
            <h4>${dayNumber}</h4>
            <p class="bold">Chrakteristický prvek</p>
            <p class="keyword capitalize">${dayInfo.keyword}</p>
            <p class="bold">Vlastnosti</p>
            <p class="description">${dayInfo.description}</p>
            <p class="bold">Na co si dát pozor</p>
            <p class="warning">${dayInfo.warning}</p>
        </div>
    `

    document.getElementById('output').innerHTML = html

}

function showMonthInfo() {

    let date = new Date(localStorage.getItem('date_of_birth'))

    let monthNumber = date.getMonth() + 1

    let monthInfo = getMonthInfo(monthNumber)

    let html = `
        <div class="month"></div>
            <h4>Co vypovídá měsíc narození</h4>
            <h4>${monthNumber}</h4>
            <p class="bold">Vlastnosti</p>
            <p class="description">${monthInfo.description}</p>
        </div>
    `

    document.getElementById('output').innerHTML = html

}

function showFateInfo() {

    let fateNumber = getFateNumber()

    let fateInfo = getFateInfo(fateNumber)

    let evenOddNumbers = getOddEvenNumbers()

    let gender_energy = null

    if (evenOddNumbers.even.length > evenOddNumbers.odd.length) {

        gender_energy = 'spíše ženská (pasivní)'

    }
    else if (evenOddNumbers.even.length == evenOddNumbers.odd.length) {

        gender_energy = 'vyrovnaná'

    }
    else {

        gender_energy = 'spíše mužská (aktivní)'

    }

    let html = `
        <div class="fate"></div>
            <h4>Co vypovídá vaše osudové číslo</h4>
            <h4>${fateNumber}</h4>
            <p class="bold">Popis</p>
            <p class="description">${fateInfo.description}</p>
            <p class="bold">Na co si dát pozor</p>
            <p class="warning">${fateInfo.warning}</p>
            <p class="bold">Energie</p>
            <p class="energy">Energie vašeho data narození je ${gender_energy}</p>
        </div>
    `

    document.getElementById('output').innerHTML = html

}

function showNumbersInfo() {

    let dateValue = localStorage.getItem('date_of_birth').replace(/-|0/g, '')

    let uniqueNumbers = [...new Set(dateValue)].sort()

    let html = '<h4 class="text-center">Rozbor jednotlivých číslic</h4>'

    for (let number of uniqueNumbers) {

        html += `<p><span class="bold">${number}</span> - ${getNumbersInfo(number).description}</p>`

    }

    html += '<p class="small">čím více se číslo v datu opakuje, tím větší má vliv</p>'
    html += '<p class="small">0 posiluje číslo, za kterým stojí (10 je jako 11) tedy větší vliv čísla 1</p>'

    document.getElementById('output').innerHTML = html

}

function getOddEvenNumbers() {

    let dateValue = localStorage.getItem('date_of_birth').replace(/-/g, '')
    let numbersArray = dateValue.split('')
    let odd = []
    let even = []

    for (let number of numbersArray) {

        if (parseInt(number) % 2 == 0 && parseInt(number) > 0) {

            even.push(number)

        }
        else if (parseInt(number) == 0) {

        }
        else {

            odd.push(number)

        }

    }

    return {
        odd: odd,
        even: even
    }

}

function getFateNumber() {

    let dateValue = localStorage.getItem('date_of_birth').replace(/-|0/g, '')
    let numbers = dateValue.split('')

    let finalNumber = numbers.reduce((total, num) => parseInt(total) + parseInt(num))

    if (finalNumber > 9 && finalNumber != 11 && finalNumber != 22) {

        finalNumber = finalNumber.toString().split('').reduce(
            (total, num) => parseInt(total) + parseInt(num)
        );

    }

    let fateNumber = finalNumber
    if (fateNumber > 9 && fateNumber != 11 && fateNumber != 22) {

        fateNumber = fateNumber.toString().split('').reduce(
            (total, num) => parseInt(total) + parseInt(num)
        );

    }

    return fateNumber

}