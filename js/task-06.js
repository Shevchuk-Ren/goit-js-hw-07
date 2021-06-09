const input = document.getElementById('validation-input');

input.addEventListener('blur', onInputBlur);


function onInputBlur(event) {

    let currentLengthString = event.currentTarget.value.length;
    let maxLengthString = event.currentTarget.dataset.length;
    // console.log(currentLengthString);
    // console.log(event.currentTarget.dataset.length);
    if (currentLengthString == maxLengthString) {
        input.classList.add('valid');
        input.classList.remove('invalid');
        console.log(currentLengthString);
        console.log(event.currentTarget);
 
    } else if (currentLengthString > maxLengthString || currentLengthString < maxLengthString) {
        input.classList.add('invalid');
        input.classList.remove('valid');
        console.log(currentLengthString);
    console.log(event.currentTarget);

    };
   
}


// /**
//  *  ВТОРОЙ ВАРИАНТ
//  */

// const input = document.getElementById('validation-input');

// input.addEventListener('blur', onInputBlur);


// function onInputBlur(event) {

//     let currentLengthString = event.currentTarget.value.length;
//     let maxLengthString = event.currentTarget.dataset.length;
//     // console.log(currentLengthString);
//     // console.log(event.currentTarget.dataset.length);
//     if (currentLengthString == maxLengthString) {
//         input.classList.add('valid');
//         input.classList.remove('invalid');
//         console.log(currentLengthString);
//         console.log(event.currentTarget);
 
//     } else if (currentLengthString > maxLengthString || currentLengthString < maxLengthString) {
//         input.classList.add('invalid');
//         input.classList.remove('valid');
//         console.log(currentLengthString);
//     console.log(event.currentTarget);

//     };
//     if (currentLengthString == maxLengthString) {
//         input.classList.add('valid');
//         input.classList.remove('invalid');
//     } else if(currentLengthString !== maxLengthString) {
//          input.classList.add('invalid');
//         input.classList.remove('valid');
//     }
   
// }