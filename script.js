let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
   const titleEl =document.getElementById('main-title')
   titleEl.textContent= 'DOM Toretto'
    
  // Part 2
 const body =document.querySelector('body')
 body.style.backgroundColor='lightBlue'

  // Part 3
  const domFavorite = document.getElementById('favorite-things')
  domFavorite.removeChild(domFavorite.children[5])

  // Part 4
const titles= document.querySelectorAll('.special-title')
    titles.forEach(title => {
      title.style.fontSize= '2rem';
    });



  // Part 5
  const races= document.querySelector('#past-races')
 
  races.removeChild(races.children[3])

  // Part 6
//Let's add to DOM's Past Races list. Create a new <li>element, change the new <li>text to the name of a city, and append it to the Past Races list.
const newli = document.createElement ('li')
newli.textContent='New York'
races.appendChild('newli')

  // Part 7
  const elements = document.createElement("div");
  document.body.append(elements)
  elements.classList.add("blog-post")
  const h2 = document.createElement("h2");
  h2.innerHTML = "What's up?";
  elements.append(h2);

  // Part 8
  const title = document.querySelector("#quote-title");
  title.addEventListener("click", randomQuote)



  // Part 9
  const allPost = document.querySelectorAll(".blog-post");
  for (let i = 0; i <allPost.length; i++){
    
  }



});
