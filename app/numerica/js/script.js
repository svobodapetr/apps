import {
    getDayInfo
} from './day.js'

import {
    getMonthInfo
} from './month.js'

import {
    getFateInfo
} from './fate.js'

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

}

function initDayInfo() {

    if (!document.getElementById('day-info')) return

    document.getElementById('day-info').addEventListener('click', (e) => {

        let dateElement = document.getElementById('date')
        if (dateElement.validity.valueMissing) return

        let date = new Date(dateElement.valueAsDate)

        localStorage.setItem('date_of_birth', dateElement.value)

        showDayInfo(date)

    })

}

function initMonthInfo() {

    if (!document.getElementById('month-info')) return

    document.getElementById('month-info').addEventListener('click', (e) => {

        let dateElement = document.getElementById('date')
        if (dateElement.validity.valueMissing) return

        let date = new Date(dateElement.valueAsDate)

        localStorage.setItem('date_of_birth', dateElement.value)

        showMonthInfo(date)

    })

}

function initFateInfo() {

    if (!document.getElementById('fate-info')) return

    document.getElementById('fate-info').addEventListener('click', (e) => {

        let dateElement = document.getElementById('date')
        if (dateElement.validity.valueMissing) return

        let date = new Date(dateElement.valueAsDate)

        localStorage.setItem('date_of_birth', dateElement.value)

        showFateInfo(date)

    })

}

function showDayInfo(date) {

    let dayNumber = date.getDate()

    let dayInfo = getDayInfo(dayNumber)

    let label = document.createElement('h4')
    label.innerText = 'Co vypovídá den narození'

    let day = document.createElement('h4')
    day.innerText = dayNumber

    let keyword = document.createElement('p')
    keyword.className = 'keyword capitalize'
    keyword.innerText = dayInfo.keyword

    let keywordLabel = document.createElement('p')
    keywordLabel.className = 'bold'
    keywordLabel.innerText = 'Chrakteristický prvek'

    let descriptionLabel = document.createElement('p')
    descriptionLabel.className = 'bold'
    descriptionLabel.innerText = 'Vlastnosti'

    let description = document.createElement('p')
    description.className = 'description'
    description.innerText = dayInfo.description

    let warningLabel = document.createElement('p')
    warningLabel.className = 'bold'
    warningLabel.innerText = 'Na co si dát pozor'

    let warning = document.createElement('p')
    warning.className = 'warning'
    warning.innerText = dayInfo.warning

    let wrapper = document.createElement('div')
    wrapper.className = 'day'
    wrapper.appendChild(label)
    wrapper.appendChild(day)
    wrapper.appendChild(keywordLabel)
    wrapper.appendChild(keyword)
    wrapper.appendChild(descriptionLabel)
    wrapper.appendChild(description)
    wrapper.appendChild(warningLabel)
    wrapper.appendChild(warning)

    document.getElementById('output').innerHTML = ''
    document.getElementById('output').appendChild(wrapper)

}

function showMonthInfo(date) {

    let monthNumber = date.getMonth() + 1

    let monthInfo = getMonthInfo(monthNumber)

    let label = document.createElement('h4')
    label.innerText = 'Co vypovídá měsíc narození'

    let month = document.createElement('h4')
    month.innerText = monthNumber

    let descriptionLabel = document.createElement('p')
    descriptionLabel.className = 'bold'
    descriptionLabel.innerText = 'Vlastnosti'

    let description = document.createElement('p')
    description.className = 'description'
    description.innerText = monthInfo.description

    let wrapper = document.createElement('div')
    wrapper.className = 'month'
    wrapper.appendChild(label)
    wrapper.appendChild(month)
    wrapper.appendChild(descriptionLabel)
    wrapper.appendChild(description)

    document.getElementById('output').innerHTML = ''
    document.getElementById('output').appendChild(wrapper)

}

function showFateInfo(date) {

    let fateNumber = getFateNumber(date)

    let fateInfo = getFateInfo(fateNumber)

    let label = document.createElement('h4')
    label.innerText = 'Co vypovídá vaše osudové číslo'

    let fate = document.createElement('h4')
    fate.innerText = fateNumber

    let descriptionLabel = document.createElement('p')
    descriptionLabel.className = 'bold'
    descriptionLabel.innerText = 'Popis'

    let description = document.createElement('p')
    description.className = 'description'
    description.innerText = fateInfo.description

    let warningLabel = document.createElement('p')
    warningLabel.className = 'bold'
    warningLabel.innerText = 'Na co si dát pozor'

    let warning = document.createElement('p')
    warning.className = 'warning'
    warning.innerText = fateInfo.warning

    let wrapper = document.createElement('div')
    wrapper.className = 'fate'
    wrapper.appendChild(label)
    wrapper.appendChild(fate)
    wrapper.appendChild(descriptionLabel)
    wrapper.appendChild(description)
    wrapper.appendChild(warningLabel)
    wrapper.appendChild(warning)

    document.getElementById('output').innerHTML = ''
    document.getElementById('output').appendChild(wrapper)

}

function getFateNumber(date) {

    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    let numbersArray = [
        day.toString().split(''),
        month.toString().split(''),
        year.toString().split(''),
    ]

    let finalNumber = 0

    for (let numbers of numbersArray) {

        finalNumber += parseInt(numbers.reduce((total, num) => parseInt(total) + parseInt(num)));

    }

    if (finalNumber > 9) {

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