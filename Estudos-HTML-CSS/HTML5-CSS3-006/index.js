/*Código para tornar a página dark mode*/

const $html = document.querySelector('html');
const $checkbox = document.querySelector('#switch');

$checkbox.addEventListener('change',function(){
    $html.classList.toggle('dark-mode');
})