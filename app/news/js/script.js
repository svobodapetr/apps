window.onload = () => {

    getNews();

    showUI();

};

async function getNews() {

    const API_KEY = '1cae2d411f5c4f92be073498d80ec929';

    let country = 'us';
    let pageSize = 6;
    let baseUrl = 'http://newsapi.org/v2';
    let service = 'top-headlines';
    let queryString = [
        `apiKey=${API_KEY}`,
        `pageSize=${pageSize}`,
        `country=${country}`
    ];

    let search = document.getElementById('search');
    let countries = document.getElementById('countries');
    let categories = document.getElementById('categories');
    let searchBtn = document.getElementById('search-icon');

    searchBtn.addEventListener('click', (e) => {

        e.preventDefault()

        if (search.value != '') queryString.push(`q=${search.value}`);

        if (categories.value != '') queryString.push(`category=${categories.value}`);

        if (countries.value != '') {

            queryString.push(`country=${country}`);

        }
        else {

            queryString.push(`country=us`);

        }


    })

    let url = `${baseUrl}/${service}?${queryString.join('&')}`;
    console.log(url);

    let response = await fetch(url);
    if (response.status !== 200) return;

    let data = await response.json();
    if (data.status !== 'ok') return;

    document.getElementById('posts').innerHTML = getPostHtml(data.articles);

}

function showUI() {

    let countries = document.getElementById('countries');
    let countryHtml = '<option>not selected</option>';

    for (let code of getCountryCodes()) {

        countryHtml += `<option value="${code}">${code}</option>`

    }

    countries.innerHTML = countryHtml;

    let categories = document.getElementById('categories');
    let categoryHtml = '<option>not selected</option>';

    for (let code of getCategories()) {

        categoryHtml += `<option value="${code}">${code}</option>`

    }

    categories.innerHTML = categoryHtml

}

function getPostHtml(posts) {

    let html = '';

    for (let post of posts) {

        html += `
            <article class="post">
                <a href="${post.url}">
                    <img src="${post.urlToImage}" alt="${post.title}">
                    <h3>${post.title}</h3>
                </a>
                <p class="description">${post.description}</p>
                <p class="details">${post.publishedAt.substr(0, 10)} | ${post.author} | ${post.source.name}</p>
            </article>
        `;

    }

    return html;

}

function getCategories() {

    return [
        'business',
        'entertainment',
        'general',
        'health',
        'science',
        'sports',
        'technology'
    ]

}

function getCountryCodes() {

    return [
        'ae',
        'ar',
        'at',
        'au',
        'be',
        'bg',
        'br',
        'ca',
        'ch',
        'cn',
        'co',
        'cu',
        'cz',
        'de',
        'eg',
        'fr',
        'gb',
        'gr',
        'hk',
        'hu',
        'id',
        'ie',
        'il',
        'in',
        'it',
        'jp',
        'kr',
        'lt',
        'lv',
        'ma',
        'mx',
        'my',
        'ng',
        'nl',
        'no',
        'nz',
        'ph',
        'pl',
        'pt',
        'ro',
        'rs',
        'ru',
        'sa',
        'se',
        'sg',
        'si',
        'sk',
        'th',
        'tr',
        'tw',
        'ua',
        'us',
        've',
        'za'
    ]

}