// /**
// * ПЕРВЫЙ ВАРИАНТ РЕШЕНИЯ
//  */

// const categoriesEl = document.querySelector('ul#categories');
// const categoriesItemsEl = categoriesEl.querySelectorAll('.item');

// console.log(`В списке ${categoriesEl.children.length} категории.`);


// const showNamesCategories = categoriesItemsEl.forEach(item => {
//     // el.querySelector('h2');
//     const itemTitleEl = item.querySelector('h2');
//     const itemsSumEl = item.querySelectorAll('li');

//     console.log(`Категория: ${itemTitleEl.textContent}`);
//     console.log(`Количество элементов: ${itemsSumEl.length}`);
    
// });


/**
 * ВТОРОЙ ВАРИАНТ Функция
 */


const categoriesEl = document.querySelector('ul#categories');
const categoriesItemsEl = categoriesEl.querySelectorAll('.item');

console.log(`В списке ${categoriesEl.children.length} категории.`);

const makeCategoriesList = (categories) => {

    

    const showNamesCategories = categories.forEach(item => {

         const itemTitleEl = item.querySelector('h2');
        const itemsSumEl = item.querySelectorAll('li');

        console.log(`Категория: ${itemTitleEl.textContent}`);
        console.log(`Количество элементов: ${itemsSumEl.length}`);
       
    });   
};
makeCategoriesList(categoriesItemsEl);