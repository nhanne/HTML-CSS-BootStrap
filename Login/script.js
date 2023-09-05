const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
registerLink.addEventListener('click',()=>{
    logregBox.classList.add('active');
});
loginLink.addEventListener('click',()=>{
    logregBox.classList.remove('active');
});


function imgSlider(anything){
    document.querySelector('.fashion').src = anything;
}
function changeCircle(color){
    const circle = document.querySelector('.release__circle');
    circle.style.background = color;
}