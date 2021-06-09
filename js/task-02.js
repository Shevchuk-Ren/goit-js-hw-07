const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];



// // /**
// //  * 
// //  *ПЕРВЫЙ ВАРИАНТ
// //  */


// const makeItemsList = (ingredients) => {
// const addItemToIngredients = document.querySelector('ul#ingredients');

//     return ingredients.forEach(ingredient => {
//         const itemEl = document.createElement('li');
//         itemEl.textContent = ingredient;
//            return addItemToIngredients.appendChild(itemEl);
    
//     });
   
// };
// makeItemsList(ingredients);




/**
 * Второй вариант c помощью метода map();
 */
const addItemToIngredients = document.querySelector('ul#ingredients');
const makeItemsList = (items) => {
    return items.map(item => {

         const itemEl = document.createElement('li');
        itemEl.textContent = item;

        return itemEl;
    });
};
const addItem = makeItemsList(ingredients);
addItemToIngredients.append(...addItem);

