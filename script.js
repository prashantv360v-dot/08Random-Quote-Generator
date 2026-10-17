// 1. Array containing 10 quotes and their authors
const quotes = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "If you look at what you have in life, you'll always have more.",
        author: "Oprah Winfrey"
    },
    {
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        author: "James Cameron"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        author: "Mother Teresa"
    },
    {
        quote: "When you reach the end of your rope, tie a knot in it and hang on.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "Always remember that you are absolutely unique. Just like everyone else.",
        author: "Margaret Mead"
    }
];

// Selecting DOM elements based on your HTML structure
const quoteText = document.querySelector(".quote");
const authorName = document.querySelector(".name");
const quoteBtn = document.querySelector("button");

// Function to generate random quotes
function randomQuote() {
    // Generate a random number between 0 and the array length - 1
    const randomIndex = Math.floor(Math.random() * quotes.length);
    
    // DOM Manipulation: Update the text inside the HTML elements
    quoteText.innerText = quotes[randomIndex].quote;
    authorName.innerText = quotes[randomIndex].author;
}

// Event Handling: Listen for a 'click' event on the button to call the function
quoteBtn.addEventListener("click", randomQuote);

// Optional: Load a random quote automatically when the page loads
randomQuote();