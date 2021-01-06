window.onload = () => {

    initImageMap();

};

function initImageMap() {

    let areas = document.getElementsByTagName('area');
    if (areas.length === 0) return;

    let text = document.getElementById('text');

    for (let area of areas) {

        area.addEventListener('mouseover', (e) => {

            text.innerText = area.dataset.text;

        });

    }

}