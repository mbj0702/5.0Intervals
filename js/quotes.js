const quotes = [
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
    },
    {
        quote:
            "The world is a book and those who do not travel read only one page.",
        author: "Saint Augustine",
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "Albert Einstein",
    },
    {
        quote: "A room without books is like a body without a soul.",
        author: "Marcus Tullius Cicero",
    },
    {
        quote: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "If you tell the truth, you don't have to remember anything.",
        author: "Mark Twain",
    },
    {
        quote: "The fool doth think he is wise, but the wise man knows himself to be a fool.",
        author: "William Shakespeare, As You Like It",
    },
    {
        quote: "I have not failed. I've just found 10,000 ways that won't work",
        author: "Thomas A. Edison",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;