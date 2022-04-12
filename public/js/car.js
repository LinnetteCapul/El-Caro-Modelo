// search javascript

const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-btn');
const backButton = document.querySelector('#back-btn');

searchButton.addEventListener('click', function(event) {
    event.preventDefault();

    const term = searchInput.value 
    document.location.replace('/search/' + term)
})

backButton.addEventListener('click', function(event) {
    event.preventDefault();

    document.location.replace('/')
})