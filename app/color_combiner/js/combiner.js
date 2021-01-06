window.onload = function() {

    let textSelect = document.getElementById('text-color');
    let rangeInputs = document.getElementsByClassName('range');

    let colorCombiner = new ColorCombiner();
    colorCombiner.renderColorSample();

    textSelect.addEventListener('change', (e) => {
        
        colorCombiner.renderTextColor(e);

    });

    for (let range of rangeInputs) {

        range.addEventListener('change', (e) => {

            let indicator = e.target.previousElementSibling;

            indicator.innerText = e.target.value + e.target.dataset.unit;

            colorCombiner.renderColorSample();

        });

    }

}

class ColorCombiner {

    sample = document.getElementById('sample');

    renderColorSample() {

        let hue = document.getElementById('hue').value;
        let saturation = document.getElementById('saturation').value;
        let lightness = document.getElementById('lightness').value;
        let hslValue = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

        if (this.sample.classList.contains('hide')) {

            this.sample.classList.remove('hide');

        }

        this.sample.setAttribute('style', `background-color: ${hslValue}`);

    }

    renderTextColor(e) {

        if (this.sample.classList.contains('hide')) {

            this.sample.classList.remove('hide');

        }

        if (this.sample.classList.contains('white')) {

            this.sample.classList.remove('white');

            this.sample.classList.add(e.target.value);

        }
        else {

            this.sample.classList.remove('dark');

            this.sample.classList.add(e.target.value);

        }

    }

}