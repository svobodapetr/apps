window.onload = () => {

    let memoryCards = new MemoryCards();

}

class MemoryCards {

    overlay = document.getElementById('overlay')
    addCardBtn = document.getElementById('add_card')
    closeFormBtn = document.getElementById('close-form')
    newCardBtn = document.getElementById('new_card')
    clearCardsBtn = document.getElementById('clear_cards')
    prevBtn = document.getElementById('prev')
    nextBtn = document.getElementById('next')
    cardsHtml = document.getElementById('cards')
    overlay = document.getElementById('overlay')
    clearCardsBtn = document.getElementById('clear_cards')
    deleteBtns = document.getElementsByClassName('delete-card')
    counter = document.getElementById('counter')

    question = document.getElementById('question')
    answer = document.getElementById('answer')

    cards = null
    cardCount = 0
    storagePrefix = 'memory_cards'

    constructor() {

        this.initButtons()

        this.getCardsHtml()

        this.setCards()

        this.initFlipCard()

        this.setCardsCount()

        this.initCardSlider()

        this.initDeleteCard()

        this.initClearCards()

        this.start()

    }

    start() {

        if (this.cards.length == 0) return

        this.hideCards()

        this.showFirst()

    }

    setCards() {

        this.cards = this.getCards()

    }

    setCardsCount() {

        this.cardsCount = this.cards.length

    }

    showFirst() {

        show(this.cards[0])

    }

    hideCards() {

        for (let card of this.cards) {

            hide(card)

        }

    }

    initButtons() {

        this.addCardBtn.addEventListener('click', (event) => {

            event.preventDefault();

            this.cleanForm();

            show(overlay);

        });

        this.closeFormBtn.addEventListener('click', (event) => {

            event.preventDefault();

            hide(overlay);

        });

        this.newCardBtn.addEventListener('click', (event) => {

            event.preventDefault();

            if (this.addCard() === false) return;

            location.reload();

        });

        this.clearCardsBtn.addEventListener('click', (event) => {

            event.preventDefault();

            this.clearCards();

        });

        this.prevBtn.addEventListener('click', (event) => {

            event.preventDefault();

            this.prevCard();

        });

        this.nextBtn.addEventListener('click', (event) => {

            event.preventDefault();

            this.nextCard();

        });

    }

    getCardsHtml() {

        let cardsData = this.getCardsData();
        let html = '';
        let counter = 1;

        for (let cardData of cardsData) {

            html += `
                <div class="card d-inline-block" data-counter=${counter}>
                    <div class="front bg-green border-radius-medium p-20 bold white">
                        <p class="question">${cardData[0]}</p>
                    </div>
                    <div class="back hide bg-orange border-radius-medium p-20 bold white">
                        <p class="answer">${cardData[1]}</p>
                    </div>
                    <span class="flip-icon">flip</span>
                    <div class="delete-card"><span>&times;</span> delete this card</div>
                </div>
            `;

            counter++;

        }

        this.cardsHtml.innerHTML = html;

    }

    getCardsData() {

        let i = 0;
        let cardCount = localStorage.length;
        let cards = [];

        for (i; i < cardCount; i++) {

            if (localStorage.key(i).search(this.storagePrefix) >= 0) {

                let key = localStorage.key(i).replace(this.storagePrefix, '')

                cards.push([
                    key,
                    localStorage[[localStorage.key(i)]]
                ]);

            }

        }

        return cards;

    }

    initFlipCard() {

        for (let card of this.cards) {

            card.addEventListener('click', (event) => {

                event.preventDefault();

                this.flipCard(card);

            });

        }

    }

    getCards() {

        return document.getElementsByClassName('card');

    }

    flipCard(card) {

        let front = card.children[0];
        let back = card.children[1];

        if (back.classList.contains('hide')) {

            show(back);
            hide(front);

        }
        else {

            show(front);
            hide(back);

        }

    }

    cleanForm() {

        this.question.value = '';
        this.answer.value = '';

    }

    clearCards() {

        if (confirm('delete?') === false) return;

        localStorage.clear();

        alert('Notice: cards deleted');

        location.reload();

    }

    addCard() {

        let question = this.question.value;
        let answer = this.answer.value;
        if (question == '' || answer == '') return false;

        this.saveItem(question, answer);

        hide(this.overlay);

        alert('card added');

        return true;

    }

    prevCard() {

        for (let card of this.cards) {

            if (card.classList.contains('hide')) continue;
            if (card.previousElementSibling === null) return;

            this.updateCounter(card.previousElementSibling.dataset.counter);

            show(card.previousElementSibling);
            hide(card);

            break;

        }

    }

    nextCard() {

        for (let card of this.cards) {

            if (card.classList.contains('hide')) continue;
            if (card.nextElementSibling === null) return;

            this.updateCounter(card.nextElementSibling.dataset.counter);

            show(card.nextElementSibling);
            hide(card);

            break;

        }

    }

    initClearCards() {

        if (this.cards.length === 0) return;

        show(this.clearCardsBtn);

    }

    initDeleteCard() {

        for (let deleteBtn of this.deleteBtns) {

            deleteBtn.addEventListener('click', (event) => {

                event.preventDefault();

                if (confirm('delete?') === false) return;

                alert('Notice: card deleted');

                localStorage.removeItem(event.target.parentElement.children[0].innerText);

                location.reload();

            });

        }

    }

    initCardSlider() {

        if (this.cardsCount === 0) return;

        shuffle(this.cards);

        for (let card of this.cards) {

            hide(card);

        }

        show(this.cards[0]);

        this.updateCounter(this.cards[0].dataset.counter);

    }

    updateCounter(index) {

        this.counter.innerHTML = `${index} / ${this.cardsCount}`;

    }

    saveItem(question, answer) {

        localStorage.setItem(this.storagePrefix + question, answer);

    }

}

function shuffle(items) {

    Array.from(items).sort(() => Math.random() - 0.5);

}

function show(element) {

    if (element.classList.contains('hide')) element.classList.remove('hide');

}

function hide(element) {

    if (! element.classList.contains('hide')) element.classList.add('hide');

}