window.onload = () => {

    if (document.getElementById('select')) {

        new StressApp()

    }

};

class StressApp {

    select = document.getElementById('select');
    addBtn = document.getElementById('add');
    countBtn = document.getElementById('count');
    list = document.getElementById('list');
    counter = document.getElementById('counter');
    resultElement = document.getElementById('result')
    points = this.getPoints();

    constructor() {

        this.showOptions()

        this.initApp()


    }

    showOptions() {

        let options = '';

        for (let point of this.points) {

            options += `
                <option data-key="${point[0]}" value="${point[1]}">${point[0]}</option>
            `;

        }

        this.select.innerHTML += options;

    }

    initApp() {

        this.addBtn.addEventListener('click', (event) => {

            event.preventDefault();

            this.addListItem();

        });

        this.countBtn.addEventListener('click', (event) => {

            event.preventDefault();

            this.getCount();

        });

    }

    addListItem() {

        if (this.select.value == '') return;

        this.list.classList.remove('hide');
        this.list.innerHTML += `
            <li data-value="${this.select.value}" class="list-item">
            ${this.select.selectedOptions[0].innerHTML}</li>
        `;

        this.select.selectedOptions[0].classList.add('selected');
        this.select.value = '';

        this.countPoints();

    }

    getCount() {

        let total = this.countPoints();

        this.getResult(total);

    }

    countPoints() {

        let selectedItems = document.getElementsByClassName('list-item');

        let total = 0;

        for (let item of selectedItems) {

            total += parseInt(item.dataset.value);

        }

        this.updateCounter(total);

        if (this.resultElement.innerHTML != '') this.getResult(total);

        return total;

    }

    updateCounter(total) {

        this.counter.innerHTML = `<p>${total} bodů</p>`;

    }

    getResult(total) {

        let evaluation = '';

        switch (true) {

            case (total < 150):

                evaluation = `
                    <p class="green">
                        Gratulujeme, vaše stresová zátěž je normální.
                    </p>
                `;

                break;

            case (total < 200):

                evaluation = `
                    <p class="blue">
                        Každý třetí s touto hodnotou má problémy se zdravím.
                        Můžete tomu předejít, pokud si osvojíte
                        <a href="http://aplikace.svobodaweb.cz/app/relax_breathe" target="_blank"class="bold">uvolňovací cviky</a>
                    </p>
                `;

                break;

            case (total < 300):

                evaluation = `
                    <p class="orange">
                        U vás se riziko, že v nejbližší době onemocníte pohybuje
                        kolem 50%.
                        Měli byste stresu uniknout pomocí
                        <a href="http://aplikace.svobodaweb.cz/app/relax_breathe" target="_blank"class="bold">uvolňovacího cvičení</a>
                    </p>`;

                break;

            case (total >= 300):

                evaluation = `
                    <p class="red">
                        Pozor! Asi 80% těch, jejichž hladina stresu překračuje hodnotu
                        300 rychle onemocní.
                        Co nejdříve začněte s
                        <a href="http://aplikace.svobodaweb.cz/app/relax_breathe" target="_blank"class="bold">uvolňovacím cvičením</a>
                        a pracujte na omezení stresu ve vašem každodenním životě.
                    </p>`;

                break;

            default:

                alert('Chyba');

        }

        this.resultElement.innerHTML = evaluation;

    }

    getPoints() {

        return [
            ['smrt partnera', 100],
            ['rozvod', 73],
            ['smrt rodinného příslušníka', 63],
            ['vězení', 63],
            ['zranění / nemoc', 53],
            ['svatba', 50],
            ['výpověď', 47],
            ['usmíření s partnerem', 45],
            ['odchod do důchodu', 45],
            ['onemocnění člena rodiny', 44],
            ['těhotenství', 40],
            ['šikana na pracovišti', 39],
            ['sexuální problémy', 39],
            ['nové zaměstnání', 38],
            ['zlepšení / zhoršení pozice v zaměstnání', 36],
            ['manželská hádka', 36],
            ['odstěhování dítěte', 29],
            ['hádka s partnerovými rodiči', 29],
            ['vyjímečný úspěch', 28],
            ['zakončení / začátek školy', 26],
            ['změna zvyklostí', 24],
            ['změna bydliště', 20],
            ['změna pracovních podmínek', 20],
            ['změna školy', 20],
            ['velká půjčka', 17],
            ['změna spánkového režimu', 15],
            ['změna stravovacího režimu', 15],
            ['dovolená', 15],
            ['vánoce', 12],
            ['problémy se zákonem / úřady', 11],
        ];

    }

}