window.onload = () => {

    let scrabble = new Scrabble();

};

class Scrabble {

    constructor() {

        this.input = document.getElementById('input');
        this.word = document.getElementById('word');
        this.letters = document.getElementById('letters');
        this.score = document.getElementById('score');
        this.scoreCount = 0;
        this.allowedKeys = ['q','w','e','r','t','u','i','o','p','a','s','d','f','g','l','h','k','j','y','m','x','n','c','b','v'];

        if (this.word === null) {

            alert('elements missing');

            return;

        }

        this.setWords();

        this.displayWord();

        this.initKeyboard();

        this.updateScore();

        this.input.focus();

    }

    setWords() {

        this.words = this.getWords();

    }

    updateScore() {

        this.score.innerText = 'score: ' + this.scoreCount;

    }

    displayWord() {

        this.getRandomWord();

        this.letters.innerText = this.scramble(this.currentWord);

        this.unsetWord();

        console.log(this.currentWord);

    }

    getRandomWord() {

        this.randomIndex = Math.floor(Math.random() * this.words.length);

        this.currentWord = this.words[this.randomIndex];

    }

    scramble(a) {

        var a = a.split("");
        var b = (a.length - 1);

        for (b; 0 < b; b--) {

            var c = Math.floor(Math.random() * (b + 1));

            var d = a[b];

            a[b] = a[c];

            a[c] = d;

        }

        return a.join("");

    }

    unsetWord() {

        this.words.splice(this.randomIndex, 1);

    }

    initKeyboard() {

        document.addEventListener('keyup', (e) => {

            if (e.key == 'Enter') {

                this.checkWord();

                return;

            }

            if (e.key == 'Backspace') {

                if (this.word.innerText.length == 0) return;

                this.backspace();

                return;

            }

            if (this.allowedKeys.includes(e.key) === false) return;

            if (this.word.innerText.length == this.currentWord.length) return;

            this.showLetter(e);

        })

    }

    showLetter(e) {

        this.word.innerText += e.key;

    }

    backspace() {

        this.word.innerText = this.word.innerText.substr(0, (this.word.innerText.length - 1));

    }

    checkWord() {

        if (this.currentWord == this.word.innerText) {

            this.addScore();

            this.updateScore();

            this.displayWord();

            this.emptyWordElement();

        }
        else {

            alert('incorrect');

        }

    }

    emptyWordElement() {

        this.word.innerText = '';

    }

    addScore() {

        this.scoreCount++;

    }

    getWords() {

        let text = "fly relate house expert charge interview itself because job consider knowledge color low late hope significant understand business home where entire tonight want heavy such sell way employee by civil hold executive become station successful enough task exactly reflect about fear let perform term always industry spend feeling play federal performance season major buy ability evidence treat wall true like project return popular whether inside especially say size fast really activity final use strategy maintain see add explain conference school line almost economy rise various claim range imagine their central watch art right century scientist thought radio rule call administration light concern pick coach make chair suddenly information show rock pretty ready hang finally music cold join professional later though series head college building career consumer everyone sure area maybe history wear land matter save realize family plan risk compare prepare simply meet last however score rest card also bring begin movement moment material night reduce these live condition yeah food than morning city speak enjoy laugh teacher cell health well summer player interesting might subject movie themselves price trip address anything million get image probably recent why reveal billion write hair may remove car response just sharp wide goofy fixed itch sidewalk dependent reject overrated magnificent absent report irate scintillating pancake scent horn cars brainy impulse panicky bizarre promise plastic approve mean escape bewildered uncovered exultant suppose godly cause safe action unruly donkey trashy sisters rotten agreement partner soft kettle hilarious miniature creepy fall dysfunctional woman unfasten scare ball cool brash eminent smiling calm grass acoustic windy judicious ban hour gigantic fanatical sip dinner exciting bite warlike bear amuck mist stereotyped earthy inject chin remarkable filthy concerned improve succeed chance distance cultured certain possess chicken helpless overconfident ruthless young hard-to-find groan sparkle doctor gamy parched eager planes venomous undefined motionless desk wrestle distribution pickle stage warn terrific terrible female gaudy alleged remain paddle bored expect incandescent cautious shiny fact lush kindly crowd hop damage belligerent basketball title comfortable enormous decorate stick rigid interest hanging scrawny sheet eye efficient automatic addition repeat amusement deafening tremendous acoustics versed mere peep unkempt lie buzz polite cattle bed alluring position ground old-fashioned shelter bushes travel zonked internal relieved pink point demonic yarn arrest observation placid tranquil white deceive houses shiver vanish grip minor zany beneficial noxious voracious zesty fuel cheap delight greedy explode crib pen root correct valuable stocking fire tub road sugar highfalutin waiting dislike impartial unequaled useful believe coordinated straight ugliest scene blade tightfisted arrogant shirt grandmother murder gate eight medical teeth account airplane super note humor vessel worry handle physical confess weigh curious tour throne shock ski abortive society debt green bustling accept silk tearful reminiscent stimulating zebra found coil metal rate defective suggest test supreme drop bad half hobbies nauseating utopian lazy angry massive long-term decorous open quaint unequal program devilish five attempt pumped achiever engine dynamic wait clover moor boil rabbit absorbing chew afraid ship pat hulking steel scrub lake bone early close drown swing hill defeated exuberant scarf collect historical brush idiotic outrageous conscious sneeze scratch glamorous own purring abrupt ethereal alike dazzling please exotic rebel credit ring volatile bore drip wonder grateful scale tangible powder veil unnatural rural short divergent sad lonely apologise wood settle ghost lunchroom skinny muddled rejoice care agonizing frogs trousers nose brave complete resonant blue profuse clip run dad stupendous rain prickly aboriginal homely jittery quiet humorous jealous salty tight end load extra-large thin cluttered guitar spiffy opposite cast knowledgeable chunky religion dapper occur motion knife loutish meal work thoughtless cure brown thirsty sweet birds lucky jam average fancy bury jellyfish develop icicle strip illustrious dead mountainous bag fit money straw incompetent tall grain lumpy label ugly fertile shallow slim impossible receive shop party war pig sheep chemical grade notebook stream blue-eyed grate bouncy brother vein balance miss allow arrive mourn cloth understood fortunate meek crack ambiguous cannon heal condemned poised lace rail poor fold prevent seal willing spotted payment nimble normal number bump waggish plate subdued contain crash teeny debonair voyage expansion soggy chop ludicrous abnormal squeak analyse ancient grin keen different pipe cucumber ukulele violin park hammer horse circumference";

        return text.split(' ');

    }

}