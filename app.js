const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');
const modal = document.getElementById('myDialog')
const openModal = document.querySelector('#messenger-button')
const closeModal = document.querySelector('#close')

openModal.addEventListener('click', () => {
    modal.show()
})

closeModal.addEventListener('click', () => {
    modal.close()
})

var apiQuote = '';

function newQuote(){
    if (apiQuote['category'] == null){
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = apiQuote['category'];
    }

    if (apiQuote['joke'].length > 100){
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = apiQuote['joke'];
}

async function getQuotes(){
    // const apiUrl = 'https://api.quotable.io/random';
    const apiUrl = 'https://v2.jokeapi.dev/joke/Any?type=single';
    try{
        const response = await fetch(apiUrl);
        apiQuote = await response.json();
        newQuote();
    } catch (error){
        alert('An error happens when fetching');
    }
}

newQuoteBtn.addEventListener('click', getQuotes);

getQuotes();
