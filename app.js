let passwordEl1 = document.querySelector('#password-el1');
let passwordEl2 = document.querySelector('#password-el2');
let passwordEl3 = document.querySelector('#password-el3');
let passwordEl4 = document.querySelector('#password-el4');

let chars = "!#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~";

function generate() {
    passwordEl1.textContent = ''
    passwordEl2.textContent = ''
    passwordEl3.textContent = ''
    passwordEl4.textContent = ''

    for (let i = 0; i < 12; i++) {
    const randomNum1 = Math.floor(Math.random() * chars.length);
    const randomNum2 = Math.floor(Math.random() * chars.length);
    const randomNum3 = Math.floor(Math.random() * chars.length);
    const randomNum4 = Math.floor(Math.random() * chars.length);
    console.log(randomNum1);

    let passChar1 = chars[randomNum1];
    let passChar2 = chars[randomNum2];
    let passChar3 = chars[randomNum3];
    let passChar4 = chars[randomNum4];

    passwordEl1.textContent += passChar1
    passwordEl2.textContent += passChar2
    passwordEl3.textContent += passChar3
    passwordEl4.textContent += passChar4

    }
}

