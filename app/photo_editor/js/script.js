window.onload = () => {

    let photoEditor = new PhotoEditor();

};

class PhotoEditor {

    brightness = document.getElementById('brightness');
    saturation = document.getElementById('saturation');
    contrast = document.getElementById('contrast');
    filters = document.getElementsByClassName('filter');
    image = document.getElementById('image');
    reset = document.getElementById('reset');

    constructor() {

        for (let filter of this.filters) {

            filter.addEventListener('change', () => {

                this.setStyles();

            })

        }

        this.reset.addEventListener('click', (e) => {

            this.brightness.value = 100;
            this.saturation.value = 100;
            this.contrast.value = 100;

            this.setStyles();

        })

    }

    setStyles() {

        this.image.setAttribute('style', `
            filter:
                brightness(${this.brightness.value}%)
                saturate(${this.saturation.value}%)
                contrast(${this.contrast.value}%)
        `);

    }

}