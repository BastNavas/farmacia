const burger = document.querySelector('.burger');
const navList = document.querySelector('.listBoton');

//navList.setAttribute("class","hidden")
burger.addEventListener('click', () => {
    navList.classList.toggle('show');
});

console.log(burger)

