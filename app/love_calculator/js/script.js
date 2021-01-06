window.onload = () => {

    document.getElementById('start').addEventListener('click', (e) => {

        e.preventDefault();

        (async function() {

            let compatibility = await getCompatibility();
            let html = await getTemplate(compatibility);

            document.getElementById('result').innerHTML = html;

        })();

    });

};

async function getCompatibility() {

    let name1 = document.getElementById('name1').value;
    let name2 = document.getElementById('name2').value;
    if (name1 == '' || name2 == '') return false;

    let API_KEY = 'ef672f90e8msh3e160dd67429a8ap1c2fd5jsn4dd8c8c94331';
    let host = 'love-calculator.p.rapidapi.com';
    let baseUrl = `https://${host}/getPercentage`;
    let query = `fname=${name1}&sname=${name2}`;
    let url = `${baseUrl}?${query}`;

    let response = await fetch(url, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": host,
            "x-rapidapi-key": API_KEY
        }
    });

    if (response.status !== 200) return;

    return await response.json();

}

function getTemplate(data) {

    let name1 = capitalize(data.fname);
    let name2 = capitalize(data.sname);
    let color = '';
    let face = '';

    switch (true) {

        case data.percentage < 30:

            color = 'red';
            face = ':-(';
            break;

        case data.percentage < 60:

            color = 'orange';
            face = ':-/';
            break;

        case data.percentage >= 60:

            color = 'green';
            face = ':-)';
            break;

    }

    return `
        <p class="chance">The chance of successful love relationship between${name1}
        and ${name2} are: <span class="percentage bold">${data.percentage}%</span></p>
        <p class="result ${color}">${face} ${data.result}</p>
    `;
}

function capitalize(string) {
    return (string.charAt(0).toUpperCase() + string.slice(1));
}