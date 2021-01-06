window.onload = function () {

    if (document.getElementById('note')) {

        createNotesSelectBox('note');

    }

    if (document.getElementById('transpile')) {

        createTranspileSelectBox('transpile');

    }

    if (document.getElementById('transpone')) {

        document.getElementById('transpone').addEventListener('click', (e) => {

            let note = document.getElementById('note').value;
            let change = parseInt(document.getElementById('transpile').value);

            let notes = getNotes();
            let indexOriginalNote = notes.indexOf(note);
            let indexTranspiledNote = indexOriginalNote + change;

            if (indexTranspiledNote < notes.length) {

                indexTranspiledNote += notes.length;

            }

            if (indexTranspiledNote >= notes.length) {

                indexTranspiledNote -= notes.length;

            }

            document.getElementById('transpiled').innerText = notes[indexTranspiledNote].toUpperCase();

        })

    }

};

function getTranspileNumbers() {

    return [-7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7];

}

function getNotes() {

    return [
        'a',
        'a#',
        'b',
        'c',
        'c#',
        'd',
        'd#',
        'e',
        'f',
        'f#',
        'g',
        'g#',
    ];

}

function createTranspileSelectBox(selector) {

    let element = document.getElementById(selector);

    let notes = getTranspileNumbers();

    let select = document.createElement('select');
    select.setAttribute('id', element.id);

    element.appendChild(select);
    element.setAttribute('id', '')

    let i = 0;

    for (i; i < notes.length; i += 1) {

        let child = document.createElement('option');

        child.setAttribute('value', notes[i]);
        child.innerText = notes[i];

        select.appendChild(child);

    }

}

function createNotesSelectBox(selector) {

    let element = document.getElementById(selector);

    let notes = getNotes();

    let select = document.createElement('select');
    select.setAttribute('id', element.id);

    element.appendChild(select);
    element.setAttribute('id', '')

    let i = 0;

    for (i; i < notes.length; i += 1) {

        let child = document.createElement('option');

        child.setAttribute('value', notes[i]);
        child.innerText = notes[i].toUpperCase()

        select.appendChild(child);

    }

}