window.onload = () => {

    if (document.getElementById('game-screen')) {

        new WordGame()

    }

}

class WordGame {

    start = document.getElementById('start');
    game = document.getElementById('game');
    gameScreen = document.getElementById('game-screen');
    gameOverScreen = document.getElementById('game-over');
    gameOverScore = document.getElementById('lost-score');
    gameOverMessage = document.getElementById('gave-over-message');
    warningMessage = document.getElementById('warning-message');

    clockTime = document.getElementById('total-time');
    clockValue = 0;
    countDown = null;
    clock = null;

    time = document.getElementById('time');
    timeLeft = document.getElementById('time-left');
    timeValue = 3;
    timeValueStart = 15;

    scoreValue = document.getElementById('score-value');
    userScoreStart = 0;
    userScore = 0;

    word = document.getElementById('word');
    userInput = document.getElementById('user-input');

    difficulty = document.getElementById('difficulty');
    difficultySettings = document.getElementById('difficulty-settings');
    difficultyLevels = document.getElementsByClassName('difficulty-level');

    rules = document.getElementsByClassName('rules');
    rulesText = document.getElementById('rules-text');
    overlay = document.getElementById('overlay');

    allowedKeyCodes = [
        // a-z (26 letters)
        65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82,
        83, 84, 85, 86, 87, 88, 89, 90,
        // enter, backspace, shift, F5, Ctrl  keycode
        13, 8, 16, 116, 17
    ];

    constructor() {

        this.initStart();

        this.initKeys();

        this.initRules();

        this.initDifficulty();

        this.initDifficultySettings();

        this.setWords();

    }

    setWords() {

        this.words = this.getWords();

    }

    initStart() {

        this.start.addEventListener('click', (event) => {

            event.preventDefault();

            this.initGame();

        });

    }

    initDifficultySettings() {

        for (let difficulty of this.difficultyLevels) {

            difficulty.addEventListener('click', (event) => {

                event.preventDefault();

                this.setDifficulty(difficulty.dataset.difficulty);

                this.toggleSettings();

            });

        }

    }

    initRules() {

        for (let rule of this.rules) {

            rule.addEventListener('click', (event) => {

                event.preventDefault();

                this.toggle(this.rulesText);
                this.toggle(this.overlay);

            });

        }

    }

    initDifficulty() {

        this.difficulty.addEventListener('click', (event) => {

            event.preventDefault();

            this.toggleSettings();

        });

    }

    initKeys() {

        document.addEventListener('keydown', (event) => {

            this.disableInvalidKeys(event) ? null : event.preventDefault();

            this.validateKeyInput(event);

        });

    }

    initGame() {

        this.reset();

        this.displayWord();

        this.startCountDown();

        this.startClock();

    }

    toggleSettings() {

        if (this.difficultySettings.classList.contains('hide')) {

            this.show(this.difficultySettings)

        }
        else {

            this.hide(this.difficultySettings);

        }

        this.focusUserInput();

    }

    disableInvalidKeys(event) {

        return (this.allowedKeyCodes.indexOf(event.keyCode) === -1) ? false : true;

    }

    validateKeyInput(event) {

        if (event.key === 'Enter') {

            this.validateMatch()

        }

    }

    validateMatch() {

        if (this.userInput.value === this.word.innerText) {

            this.updateScore(1);

            this.emptyUserInput();

            this.setTimeBonus();

            this.timeLeft.innerText = this.timeValue;

            this.displayWord();

        }
        else {

            this.removeScorePoint();

            this.show(this.warningMessage);

            this.setTimeout(() => {

                this.hide(this.warningMessage);

            }, 2000);

        }

    }

    emptyUserInput() {

        this.userInput.value = '';

    }

    focusUserInput() {

        this.userInput.focus();

    }

    displayWord() {

        this.word.innerText = this.getRandomWord();

    }

    startCountDown() {

        this.countDown = setInterval(() => {

            if (this.timeValue <= 0) {

                clearInterval(this.countDown);

                this.gameOver();

                return false;

            }

            this.updateTimeLeft(-1);

            }, 1000

        );

    }

    updateTimeLeft(value) {

        this.timeValue += value;

        this.timeLeft.innerText = this.timeValue;

    }

    resetTime() {

        this.timeValue = this.timeValueStart;

        this.timeLeft.innerText = this.timeValue;

    }

    startClock() {

        this.clock = setInterval(() => {

            this.updateClock(1);

            if (this.timeValue <= 0) {

                clearInterval(this.clock);

                return false;

            }

        }, 1000);

    }

    setTimeBonus() {

        if (this.game.classList.contains('easy')) {

            this.timeValue += 5;

        }
        else if (this.game.classList.contains('medium')) {

            this.timeValue += 3;

        }
        else if (this.game.classList.contains('hard')) {

            this.timeValue += 2;

        }

    }

    removeScorePoint() {

        this.userScore > 0 ? this.updateScore(-1) : this.updateTimeLeft(-1);

    }

    updateScore(value) {

        this.userScore += value;

        this.scoreValue.innerText = this.userScore;

    }

    resetScore() {

        this.userScore = this.userScoreStart;

        this.scoreValue.innerText = this.userScoreStart;

    }

    updateClock(value) {

        this.clockValue += value;

        let minutes = Math.floor(this.clockValue / 60);
        let seconds = (this.clockValue % 60);

        minutes < 10 ? minutes = '0' + minutes : minutes;
        seconds < 10 ? seconds = '0' + seconds : seconds;

        this.clockTime.innerText = `Game time ${minutes}:${seconds}`;

    }

    resetClock() {

        this.clockValue = 0;

        this.clockTime.innerText = '';

    }

    setDifficulty(setting = 'easy') {

        this.game.className = setting;

    }

    gameOver() {

        this.gameOverMessage.innerText = '';

        this.hide(this.game);

        this.show(this.gameOverScreen);

        this.gameOverScore.innerText = this.userScore;

        switch (true) {

            case this.userScore <= 20:

                this.gameOverMessage.innerText = 'Not bad. Try to do better.';

                break;

            case this.userScore <= 40:

                this.gameOverMessage.innerText = 'Your are getting better.';

                break;

            case this.userScore <= 60:

                this.gameOverMessage.innerText = 'Nice. Try raising the difficulty.';

                break;

            case this.userScore <= 80:

                this.gameOverMessage.innerText = 'Welcome to the big boys league.';

                break;

            case this.userScore <= 100:

                this.gameOverMessage.innerText = 'Slow down hotshot, you nearly fried my circuits.';

                break;

            default:

                this.gameOverMessage.innerText = 'You are too qualified for this game.';

                break;

        }

        this.show(this.gameOverMessage);

        this.saveScore();

        location.reload();

        document.getElementById('start').focus();

    }

    saveScore() {

        let date = new Date()


        localStorage.setItem(
            `typing ${this.game.className} ${date.getTime()}`,
            this.userScore
        );

    }

    show(element) {

        element.classList.contains('hide') ? element.classList.remove('hide') : null;

    }

    hide(element) {

        ! element.classList.contains('hide') ? element.classList.add('hide') : null;

    }

    toggle(element) {

        element.classList.contains('hide') ? this.show(element) : this.hide(element);

    }

    resetUserInput() {

        this.userInput.value = '';

        this.focusUserInput();

    }

    reset() {

        this.game.className === '' ? this.setDifficulty() : null;

        this.hide(this.gameOverScreen);
        this.hide(this.warningMessage);
        this.hide(this.rulesText);
        this.hide(this.start);

        this.show(this.gameScreen);
        this.show(this.time);

        this.resetScore();

        this.resetClock();

        this.resetTime();

        this.resetUserInput();

    }

    getWords() {

        let text = "fly relate house expert charge interview itself because job consider knowledge color low late hope significant understand business home where entire tonight want heavy such sell way employee by civil hold executive become station successful enough task exactly reflect about fear let perform term always industry spend feeling play federal performance season major buy ability evidence treat wall true like project return popular whether inside especially say size fast really activity final use strategy maintain see add explain conference school line almost economy rise various claim range imagine their central watch art right century scientist thought radio rule call administration light concern pick coach make chair suddenly information show rock pretty ready hang finally music cold join professional later though series head college building career consumer everyone sure area maybe history wear land matter save realize family plan risk compare prepare simply meet last however score rest card also bring begin movement moment material night reduce these live condition yeah food than morning city speak enjoy laugh teacher cell health well summer player interesting might subject movie themselves price trip address anything million get image probably recent why reveal billion write hair may remove car response just sharp wide goofy fixed itch sidewalk dependent reject overrated magnificent absent report irate scintillating pancake scent horn cars brainy impulse panicky bizarre promise plastic approve mean escape bewildered uncovered exultant suppose godly cause safe action unruly donkey trashy sisters rotten agreement partner soft kettle hilarious miniature creepy fall dysfunctional woman unfasten scare ball cool brash eminent smiling calm grass acoustic windy judicious ban hour gigantic fanatical sip dinner exciting bite warlike bear amuck mist stereotyped earthy inject chin remarkable filthy concerned improve succeed chance distance cultured certain possess chicken helpless overconfident ruthless young hard-to-find groan sparkle doctor gamy parched eager planes venomous undefined motionless desk wrestle distribution pickle stage warn terrific terrible female gaudy alleged remain paddle bored expect incandescent cautious shiny fact lush kindly crowd hop damage belligerent basketball title comfortable enormous decorate stick rigid interest hanging scrawny sheet eye efficient automatic addition repeat amusement deafening tremendous acoustics versed mere peep unkempt lie buzz polite cattle bed alluring position ground old-fashioned shelter bushes travel zonked internal relieved pink point demonic yarn arrest observation placid tranquil white deceive houses shiver vanish grip minor zany beneficial noxious voracious zesty fuel cheap delight greedy explode crib pen root correct valuable stocking fire tub road sugar highfalutin waiting dislike impartial unequaled useful believe coordinated straight ugliest scene blade tightfisted arrogant shirt grandmother murder gate eight medical teeth account airplane super note humor vessel worry handle physical confess weigh curious tour throne shock ski abortive society debt green bustling accept silk tearful reminiscent stimulating zebra found coil metal rate defective suggest test supreme drop bad half hobbies nauseating utopian lazy angry massive long-term decorous open quaint unequal program devilish five attempt pumped achiever engine dynamic wait clover moor boil rabbit absorbing chew afraid ship pat hulking steel scrub lake bone early close drown swing hill defeated exuberant scarf collect historical brush idiotic outrageous conscious sneeze scratch glamorous own purring abrupt ethereal alike dazzling please exotic rebel credit ring volatile bore drip wonder grateful scale tangible powder veil unnatural rural short divergent sad lonely apologise wood settle ghost lunchroom skinny muddled rejoice care agonizing frogs trousers nose brave complete resonant blue profuse clip run dad stupendous rain prickly aboriginal homely jittery quiet humorous jealous salty tight end load extra-large thin cluttered guitar spiffy opposite cast knowledgeable chunky religion dapper occur motion knife loutish meal work thoughtless cure brown thirsty sweet birds lucky jam average fancy bury jellyfish develop icicle strip illustrious dead mountainous bag fit money straw incompetent tall grain lumpy label ugly fertile shallow slim impossible receive shop party war pig sheep chemical grade notebook stream blue-eyed grate bouncy brother vein balance miss allow arrive mourn cloth understood fortunate meek crack ambiguous cannon heal condemned poised lace rail poor fold prevent seal willing spotted payment nimble normal number bump waggish plate subdued contain crash teeny debonair voyage expansion soggy chop ludicrous abnormal squeak analyse ancient grin keen different";

        return text.split(' ');

    }

    getRandomWord() {

        let randomIndex = Math.floor(Math.random() * this.words.length);

        return this.words[randomIndex];

    }

}