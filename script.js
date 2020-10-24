const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("twitter");

// Get Quote From API
async function getQuote() {
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try {
        const response = await fetch( apiUrl);
        const data = await response.json();
        // Write Unknown if the Author does not exist
        data.quoteAuthor === '' ? authorText.innerText = 'Unknown' : authorText.innerText = data.quoteAuthor
        // Reduce font size for long quotes
        data.quoteText.length > 120 ? quoteText.classList.add('long-quote'): quoteText.classList.remove('long-quote')
        quoteText.innerText = data.quoteText
    } catch (error) {
        getQuote();
    }
}
// On Load
getQuote()