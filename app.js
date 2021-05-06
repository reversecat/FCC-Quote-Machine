const new_quote_btn = document.getElementById('new-quote');
const bg = document.getElementById('wrapper');
const text = document.getElementById('text');
const author = document.getElementById('author');
const quote = document.getElementById('quotes');
const icons = document.getElementsByClassName('box')
let cur_quote;

window.onload = function() {
    newQuote();
    console.log("test");
}

function newQuote() {
    new_quote_btn.removeEventListener('click', newQuote);
    let random_hue = Math.floor(Math.random() * 361);
    let new_color = "hsl(" + random_hue + ", 95%, 50%)";
    let new_quote;
    if (!cur_quote) {
        new_quote = Math.floor(Math.random() * quotes.length);
    } else {
        do {
           new_quote = Math.floor(Math.random() * quotes.length); 
        } while (new_quote === cur_quote);
    }
    cur_quote = new_quote;
    bg.style.background = new_color;
    quote.style.color = new_color;
    for (let i = 0; i < icons.length; i++) {
        icons[i].style.background = new_color;
    }
    text.innerText = quotes[new_quote].quote;
    author.innerText = quotes[new_quote].author;
    new_quote_btn.addEventListener('click', newQuote);
}

const quotes = [
    {
        quote: "The world isn't perfect. But it's there for us, doing the best it can....that's what makes it so damn beautiful.",
        author: "Roy Mustang (Full Metal Alchemist)"
    },
    {
        quote: "To know sorrow is not terrifying. What is terrifying is to know you can't go back to happiness you could have.",
        author: "Matsumoto Rangiku (Bleach)"
    },
    {
        quote: "We are all like fireworks: we climb, we shine and always go our separate ways and become further apart. But even when that time comes, let's not disappear like a firework and continue to shine.. forever.",
        author: "Hitsugaya Toshiro (Bleach)"
    },
    {
        quote: "Those who stand at the top determine what's wrong and what's right! This very place is neutral ground! Justice will prevail, you say? But of course it will! Whoever wins this war becomes justice!",
        author: "Don Quixote Doflamingo (One Piece)"
    },
    {
        quote: "Fear is not evil. It tells you what weakness is. And once you know your weakness, you can become stronger as well as kinder.",
        author: "Gildarts Clive (Fairy Tail)"
    },
    {
        quote: "Whatever you lose, you'll find it again. But what you throw away you'll never get back",
        author: "Kenshin Himura (Rurouni Kenshin: Meiji Kenkaku Romantan)"
    },
    {
        quote: "Fear is freedom! Subjugation is liberation! Contradiction is truth! Those are the facts of this world! And you will all surrender to them, you pigs in human clothing!",
        author: "Satsuki Kiryuuin (Kill la Kill)"
    },
    {
        quote: "I am the hope of the universe. I am the answer to all living things that cry out for peace. I am protector of the innocent. I am the light in the darkness. I am truth. Ally to good! Nightmare to you!",
        author: "Son Goku (Dragon Ball Z)"
    },
    {
        quote: "Religion, ideology, resources, land, spite, love or just because… No matter how pathetic the reason, it’s enough to start war. War will never cease to exist… reasons can be thought up after the fact… Human nature pursues strife.",
        author: "Pain (Naruto Shippuden)"
    },
    {
        quote: "People, who can’t throw something important away, can never hope to change anything.",
        author: "Armin Arlert (Shingeki no Kyojin / Attack on Titan)"
    },
];