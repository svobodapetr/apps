/*
TODO:

If user wins
    track used words, dont repeat them
    track score

Test mobile keyboard

*/
'use strict';

window.onload = () => {

    let game = new GuessLetter();

};

class GuessLetter {

    input = document.getElementById('input');

    failedAttempts = document.getElementById('failed');

    hintParts = document.getElementsByClassName('hint-part');

    targetWord = this.getRandomWord();

    targetWordLetters = Array.from(this.targetWord);

    pressedKeys = [];

    constructor() {

        console.log(this.targetWord);

        this.showHint();

        this.input.focus();
        this.input.value = '';

        this.startGame();

    }

    showHint() {

        let hint = document.getElementById('hint');

        for (let letter of this.targetWord) {

            let hintPart = document.createElement('span');
            
            hintPart.classList.add('border-bottom', 'hint-part');
            hintPart.innerText = 'x';
            hintPart.dataset.content = letter;
            
            hint.appendChild(hintPart);

        }

    }

    getRandomWord() {

        let words = this.getWords();

        return words[this.getRandomIndex()];

    }

    getWords() {

        let text = "fly relate house expert charge interview itself because job consider knowledge color low late hope significant understand business home where entire tonight want heavy such sell way employee by civil hold executive become station successful enough task exactly reflect about fear let perform term always industry spend feeling play federal performance season major buy ability evidence treat wall true like project return popular whether inside especially say size fast really activity final use strategy maintain see add explain conference school line almost economy rise various claim range imagine their central watch art right century scientist thought radio rule call administration light concern pick coach make chair suddenly information show rock pretty ready hang finally music cold join professional later though series head college building career consumer everyone sure area maybe history wear land matter save realize family plan risk compare prepare simply meet last however score rest card also bring begin movement moment material night reduce these live condition yeah food than morning city speak enjoy laugh teacher cell health well summer player interesting might subject movie themselves price trip address anything million get image probably recent why reveal billion write hair may remove car response just sharp wide goofy fixed itch sidewalk dependent reject overrated magnificent absent report irate scintillating pancake scent horn cars brainy impulse panicky bizarre promise plastic approve mean escape bewildered uncovered exultant suppose godly cause safe action unruly donkey trashy sisters rotten agreement partner soft kettle hilarious miniature creepy fall dysfunctional woman unfasten scare ball cool brash eminent smiling calm grass acoustic windy judicious ban hour gigantic fanatical sip dinner exciting bite warlike bear amuck mist stereotyped earthy inject chin remarkable filthy concerned improve succeed chance distance cultured certain possess chicken helpless overconfident ruthless young hard-to-find groan sparkle doctor gamy parched eager planes venomous undefined motionless desk wrestle distribution pickle stage warn terrific terrible female gaudy alleged remain paddle bored expect incandescent cautious shiny fact lush kindly crowd hop damage belligerent basketball title comfortable enormous decorate stick rigid interest hanging scrawny sheet eye efficient automatic addition repeat amusement deafening tremendous acoustics versed mere peep unkempt lie buzz polite cattle bed alluring position ground old-fashioned shelter bushes travel zonked internal relieved pink point demonic yarn arrest observation placid tranquil white deceive houses shiver vanish grip minor zany beneficial noxious voracious zesty fuel cheap delight greedy explode crib pen root correct valuable stocking fire tub road sugar highfalutin waiting dislike impartial unequaled useful believe coordinated straight ugliest scene blade tightfisted arrogant shirt grandmother murder gate eight medical teeth account airplane super note humor vessel worry handle physical confess weigh curious tour throne shock ski abortive society debt green bustling accept silk tearful reminiscent stimulating zebra found coil metal rate defective suggest test supreme drop bad half hobbies nauseating utopian lazy angry massive long-term decorous open quaint unequal program devilish five attempt pumped achiever engine dynamic wait clover moor boil rabbit absorbing chew afraid ship pat hulking steel scrub lake bone early close drown swing hill defeated exuberant scarf collect historical brush idiotic outrageous conscious sneeze scratch glamorous own purring abrupt ethereal alike dazzling please exotic rebel credit ring volatile bore drip wonder grateful scale tangible powder veil unnatural rural short divergent sad lonely apologise wood settle ghost lunchroom skinny muddled rejoice care agonizing frogs trousers nose brave complete resonant blue profuse clip run dad stupendous rain prickly aboriginal homely jittery quiet humorous jealous salty tight end load extra-large thin cluttered guitar spiffy opposite cast knowledgeable chunky religion dapper occur motion knife loutish meal work thoughtless cure brown thirsty sweet birds lucky jam average fancy bury jellyfish develop icicle strip illustrious dead mountainous bag fit money straw incompetent tall grain lumpy label ugly fertile shallow slim impossible receive shop party war pig sheep chemical grade notebook stream blue-eyed grate bouncy brother vein balance miss allow arrive mourn cloth understood fortunate meek crack ambiguous cannon heal condemned poised lace rail poor fold prevent seal willing spotted payment nimble normal number bump waggish plate subdued contain crash teeny debonair voyage expansion soggy chop ludicrous abnormal squeak analyse ancient grin keen different pipe cucumber ukulele violin park hammer horse circumference";

        return text.split(' ');

    }

    getRandomIndex() {

        return Math.floor((Math.random() * this.getWords().length));

    }

    startGame() {

        this.input.addEventListener('keyup', (e) => {

            let letter = e.key.toLowerCase();
            let wrongGuess = (this.targetWordLetters.indexOf(letter) === -1);
            let triedAlready = (this.pressedKeys.indexOf(letter) >= 0);
            let hangmanParts = document.getElementsByClassName('hangman-part');
            let onlyLetters = new RegExp("[a-zA-Z]");
            let notLetter = (onlyLetters.test(letter) === false);
            let correctLetters = document.getElementsByClassName('correct');
            let win = (correctLetters.length === this.hintParts.length);

            this.input.value = '';

            if (win) {

                alert('You win');

                location.reload();

                return;

            }

            if (notLetter || letter.length !== 1) {

                console.log('not a letter');

                return;

            }
            
            if (triedAlready) {

                console.log('you tried that already');

                return;

            }

            this.pressedKeys.push(letter);

            if (wrongGuess) {

                let gameOver = (hangmanParts.length === 0);

                if (gameOver) {

                    alert('Game Over');

                    location.reload();

                    return;

                }

                this.failedAttempts.classList.remove('hide');
                this.failedAttempts.innerText += letter + ', ';

                hangmanParts[0].classList.remove('hide');
                hangmanParts[0].classList.replace('hangman-part', 'visible');

            }
            else {

                for (let hintLetter of this.hintParts) {

                    if (hintLetter.dataset.content === letter) {
                        
                        hintLetter.innerText = hintLetter.dataset.content;
                        hintLetter.classList.add('green', 'correct');

                    }

                }

            }

        });

    }

}