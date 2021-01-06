window.onload = () => {

    initFinder();

}

function initFinder() {

    let random = document.getElementById('random');

    random.addEventListener('click', (event) => {

        event.preventDefault();

        getMeal();

    });

}

function getMeal() {

    let randomUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

    getAjax(

        `proxy.php?url=${randomUrl}`,

        renderMeal

    );
    
}

function renderMeal(reply) {

    let json = JSON.parse(reply);
    let meal = json.meals[0];

    let tags = meal.strTags ? meal.strTags.replace(/,/g, ', ') : '';
    let tagsHtml = tags == '' ? '' : `<p><span class="bold">Tags: </span>${tags}</p>`;
    let video = meal.strYoutube ? meal.strYoutube : '';
    let thumb = meal.strMealThumb ? meal.strMealThumb : '';
    let name = meal.strMeal ? meal.strMeal : '';
    let href = meal.strSource ? meal.strSource : '';
    let instructions = meal.strInstructions ? meal.strInstructions : '';
    let origin = meal.strArea ? meal.strArea : '';
    let category = meal.strCategory ? meal.strCategory : '';

    let ingredients = [];
    let portions = [];
    let ingredientsWithPortions = '';
    let i;

    for (i in meal) {

        if (i.substr(0, 13) == 'strIngredient'
            && meal[i] != ''
            && meal[i] != null) {

            ingredients.push(meal[i]);
            
        }

        if (i.substr(0, 10) == 'strMeasure'
            && meal[i] != ''
            && meal[i] != null) {

            portions.push(meal[i]);
            
        }

    }

    i = 0;

    ingredients.forEach((ingredient) => {

        let portion = portions[i] ? portions[i] : '';

        ingredientsWithPortions += `<li>${portion} ${ingredients[i]}</li>`;

        i++;

    });

    let html = `
        <div class="meal">
            <h2 class="center">${name}</h2>
            <p><span class="bold">Category: </span>${category}</p>
            <p><span class="bold">Origin: </span>${origin}</p>
            <p class="bold">Instructions:</p>
            <p>${instructions}</p>
            <p class="bold">Ingredients:</p>
            <ul>${ingredientsWithPortions}</ul>
            <p class="center"><span class="bold">Meal preview</span> (click for detail)</p>
            <a href="${href}">
                <img src="${thumb}" alt="${name}">
            </a>
            <div><a href="${video}">Watch video</a></div>
            ${tagsHtml}
        </div>
    `;

    displayRecipe(html);

}

function displayRecipe(html) {

    let recipe = document.getElementById('recipe');

    recipe.innerHTML = html;
    recipe.className = 'container bg-light-gray';

}

function getAjax(url, success = null) {

    let xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

    xhr.open('GET', url);

    xhr.onreadystatechange = function () {

        if (xhr.readyState > 3 && xhr.status == 200 && typeof success == 'function') {

            success(xhr.responseText);

        }

    };

    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    xhr.send();

    return xhr;

}

/*
Search meal by name
https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

List all meals by first letter
https://www.themealdb.com/api/json/v1/1/search.php?f=a

List all meal categories
https://www.themealdb.com/api/json/v1/1/categories.php

List all Categories, Area, Ingredients
https://www.themealdb.com/api/json/v1/1/list.php?c=list
https://www.themealdb.com/api/json/v1/1/list.php?a=list
https://www.themealdb.com/api/json/v1/1/list.php?i=list

Filter by main ingredient
https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast

Filter by Category
https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood

Filter by Area
https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian

Images
Meal Thumbnail Images
Add /preview to the end of the meal image URL
https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg/preview

Ingredient Thumbnail Images
https://www.themealdb.com/images/ingredients/Lime.png
https://www.themealdb.com/images/ingredients/Lime-Small.png
*/