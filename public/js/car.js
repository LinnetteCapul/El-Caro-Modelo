// search javascript

const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-btn');

searchButton.addEventListener('click', function(event) {
    event.preventDefault();

    const term = searchInput.value 
    document.location.replace('/search/' + term)
})

