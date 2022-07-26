
const btn = document.querySelector('.btn');
const searchInput = document.querySelector('.search-input');
const button = document.querySelector('.button')

btn.addEventListener('click',expandInput);

function expandInput() {
  
    searchInput.classList.toggle('active');
    searchInput.focus();
}
