const modal = document.querySelector('.modal-overlay');
const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');

openBtn.addEventListener('click', function () {

    modal.classList.add('open-modal');

});

closeBtn.addEventListener('click', function () {

    modal.classList.remove('open-modal');

});