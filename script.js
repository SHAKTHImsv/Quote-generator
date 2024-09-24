const quotes = [
    {text: "Implementations is always better the certifications",author: "Shakthivishwa"},
    { text: "Never give up because you never know what could be the next", author: "Mary Kay Ash" },
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { text: "Do not wait to strike till the iron is hot, but make it hot by striking.", author: "William Butler Yeats" },
    { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { text: "I am not a product of my circumstances. I am a product of my decisions.", author: "Stephen R. Covey" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." },
    { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { text: "Our greatest glory is not in never falling, but in rising every time we fall.", author: "Confucius" },
    { text: "You have to be odd to be number one.", author: "Dr. Seuss" },
    { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Get busy living or get busy dying.", author: "Stephen King" },
    { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
    { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
    { text: "The best revenge is massive success.", author: "Frank Sinatra" },
    { text: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
    { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { text: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
    { text: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.", author: "Roy T. Bennett" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
    { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "What we fear doing most is usually what we most need to do.", author: "Tim Ferriss" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "Life is really simple, but we insist on making it complicated.", author: "Confucius" },
    { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston S. Churchill" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
    { text: "You cannot shake hands with a clenched fist.", author: "Indira Gandhi" },
    { text: "If you can dream it, you can achieve it.", author: "Zig Ziglar" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { text: "The man who moves a mountain begins by carrying away small stones.", author: "Confucius" },
    { text: "Everything has beauty, but not everyone sees it.", author: "Confucius" },
    { text: "The best way to find yourself is to lose yourself in the service of others.", author: "Mahatma Gandhi" },
    { text: "Life is short, and it is up to you to make it sweet.", author: "Sarah Louise Delany" },
    { text: "It is never too late to be what you might have been.", author: "George Eliot" },
    { text: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
    { text: "What we think, we become.", author: "Buddha" },
    { text: "Happiness is not something ready-made. It comes from your own actions.", author: "Dalai Lama" },
    { text: "Life isn't about finding yourself. Life is about creating yourself.", author: "George Bernard Shaw" },
    { text: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
    { text: "Do not wait; the time will never be 'just right.' Start where you stand, and work with whatever tools you may have at your command, and better tools will be found as you go along.", author: "Napoleon Hill" },
    { text: "If you cannot do great things, do small things in a great way.", author: "Napoleon Hill" },
    { text: "Life is what we make it, always has been, always will be.", author: "Grandma Moses" },
    { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    { text: "Success is how high you bounce when you hit bottom.", author: "George S. Patton" },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
    { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
    { text: "If you don't design your own life plan, chances are you'll fall into someone else's plan.", author: "Jim Rohn" },
    { text: "The best way to predict your future is to create it.", author: "Abraham Lincoln" },
    { text: "You cannot cross the sea merely by standing and staring at the water.", author: "Rabindranath Tagore" },
    { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
    { text: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
    { text: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
    { text: "You get in life what you have the courage to ask for.", author: "Oprah Winfrey" },
    { text: "Life is short, and it is up to you to make it sweet.", author: "Sarah Louise Delany" },
    { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { text: "We cannot change the cards we are dealt, just how we play the hand.", author: "Randy Pausch" },
    { text: "If you can’t explain it simply, you don’t understand it well enough.", author: "Albert Einstein" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
    { text: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", author: "Christian D. Larson" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "The future belongs to those who prepare for it today.", author: "Malcolm X" },
    { text: "The best and most beautiful things in the world cannot be seen or even heard, but must be felt with the heart.", author: "Helen Keller" },
    { text: "It is not how much we have, but how much we enjoy, that makes happiness.", author: "Charles Spurgeon" },
    { text: "Challenges are what make life interesting and overcoming them is what makes life meaningful.", author: "Joshua J. Marine" },
    { text: "Limit your 'always' and your 'nevers.'", author: "Amy Poehler" },
    { text: "Nothing in life is to be feared, it is only to be understood.", author: "Marie Curie" },
    { text: "To succeed in life, you need three things: a wishbone, a backbone, and a funny bone.", author: "Reba McEntire" },
    { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
    { text: "You have within you right now, everything you need to deal with whatever the world can throw at you.", author: "Brian Tracy" },
    { text: "Your life is your story, and the adventure ahead of you is the journey to fulfill your own purpose and potential.", author: "Kerry Washington" },
    { text: "The only way to achieve the impossible is to believe it is possible.", author: "Charles Kingsleigh" },
    { text: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington" },
    { text: "Success is not just what you accomplish in your life, it's about what you inspire others to do.", author: "Unknown" },
    { text: "Keep your eyes on the stars, and your feet on the ground.", author: "Theodore Roosevelt" },
    { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
    { text: "Life is a succession of lessons which must be lived to be understood.", author: "Ralph Waldo Emerson" },
    { text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle" },
    { text: "If you want to change the world, change yourself.", author: "Mahatma Gandhi" },
    { text: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." },
    { text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
    { text: "The mind is everything. What you think you become.", author: "Buddha" },
    { text: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
    { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" }
];

// Elements
const quoteElement = document.querySelector('.quote');
const authorElement = document.querySelector('.name');
const newQuoteButton = document.querySelector('button');
const copyButton = document.querySelector('.copy');
const twitterButton = document.querySelector('.twitter');
const soundButton = document.querySelector('.sound');

// Function to get a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Function to update the quote and author in the DOM
function updateQuote() {
    const { text, author } = getRandomQuote();
    quoteElement.textContent = text;
    authorElement.textContent = author;
}

// Function to speak the quote and author
function speakQuote() {
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = `${quoteElement.textContent} - ${authorElement.textContent}`;
    speechSynthesis.speak(utterance);
}

// Copy quote to clipboard
copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(quoteElement.textContent).then(() => {
        alert("Quote copied to clipboard!");
    });
});

// Share on Twitter
twitterButton.addEventListener('click', () => {
    const quote = encodeURIComponent(quoteElement.textContent);
    const author = encodeURIComponent(authorElement.textContent);
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} -  ${author}`;
    window.open(twitterUrl, '_blank');
});

// Event listener for the sound button
soundButton.addEventListener('click', speakQuote);

// Event listener for the new quote button
newQuoteButton.addEventListener('click', updateQuote);

// Initialize with a random quote
updateQuote();
