const quotes = [
    {
        quote: "Try not. Do or do not. There is no try.",
        author: "Yoda, Star Wars Episode V: The Empire Strikes Back",
    },
    {
        quote: "Great, kid, don’t get cocky.",
        author: "Han Solo, A New Hope",
    },
    {
        quote: "Let go of your hate.",
        author: "Luke Skywalker, Return Of The Jedi",
    },
    {
        quote: "I am one with the Force and the Force is with me.",
        author: "Chirrut, Rogue One",
    },
    {
        quote: "This is the way.",
        author: "Mando, The Mandalorian",
    },
    {
        quote: "Women always figure out the truth. Always.",
        author: "Han Solo, The Force Awakens",
    },
    {
        quote: "Let the past die. Kill it if you have to.",
        author: "Kylo Ren, The Last Jedi",
    },
    {
        quote: "May the force be with you.",
        author: "Unknown",
    },
    {
        quote: "I like those odds.",
        author: "Mando, The Mandalorian",
    },
    {
        quote: "I’ll see you again. I promise.",
        author: "Mando, The Mandalorian",
    }
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = `${todaysQuote.quote}\n`;
author.innerText = ` - ${todaysQuote.author}`;
