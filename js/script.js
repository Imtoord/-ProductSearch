
const searchInput = document.querySelector('#searchInput');
const productList = document.querySelector('#productList');
const lis = document.querySelectorAll('li');
const h2s = document.querySelectorAll('h4');

searchInput.addEventListener('input', function (event) {
    const searchValue = event.target.value.trim().toUpperCase();

    lis.forEach((li, index) => {
        const h2Text = h2s[index].textContent.toUpperCase();
        const shouldDisplay = h2Text.includes(searchValue);

        li.classList.toggle('d-none', !shouldDisplay);
        li.classList.toggle('d-block', shouldDisplay);
    });
});
