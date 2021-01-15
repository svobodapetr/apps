function getNumbersInfo(number) {

    return getNumbers()[number]

}

function getNumbers() {

    return {
        0: {
            description: 'posiluje předchozí číslo',
        },
        1: {
            description: 'slovní vyjadřování citu, inteligence',
        },
        2: {
            description: 'intuice, schopnost vcítit se, cit',
        },
        3: {
            description: 'duševní schopnost, pojmová představivost, mentální postřeh',
        },
        4: {
            description: 'praktičnost, zručnost, asertivita, pracovitost',
        },
        5: {
            description: 'vášeň, vůle, citová hloubka, kontakt s lidmi',
        },
        6: {
            description: 'harmonie, rodina, láska ke kráse, obchodní schopnosti',
        },
        7: {
            description: 'emotivnost, spontánnost, pochopení, účast, citová karma',
        },
        8: {
            description: 'logické myšlení, organizační talent, obrazuschopnost, materiální a fyzická karma',
        },
        9: {
            description: 'analytické schopnosti, duchovno',
        },
    }

}

export {getNumbersInfo}