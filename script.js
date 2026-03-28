const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const salePopup = document.getElementById('salePopup');
const closePopup = document.getElementById('closePopup');

burger.addEventListener('click', () => {
  menu.classList.toggle('show');
});

window.addEventListener('load', () => {
  setTimeout(() => {
    salePopup.classList.add('show');
  }, 1200);
});

closePopup.addEventListener('click', () => {
  salePopup.classList.remove('show');
});