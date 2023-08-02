function toggleMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// You can replace the date below with the actual date of your conference
var countDownDate = new Date("2023-9-9").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
let cardIndex = 0;
showCards();

function showCards() {
  let i;
  let cards = document.getElementsByClassName("my-card");
  for (i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
  }
  cardIndex++;
  console.log(cardIndex)
  if (cardIndex > cards.length) { cardIndex = 1; console.log('yes1')}
  if (cardIndex+1>cards.length){console.log('yes2');cards[0].style.display = "block";cards[1].style.display = "block";cards[2].style.display = "block";}
  else if (cardIndex+2>cards.length){console.log('yes3');cards[cardIndex].style.display = "block";cards[0].style.display = "block";cards[1].style.display = "block";}
else{
  console.log('yes4');
  for (i = cardIndex - 1; i < cardIndex + 2; i++) {
    if (i < cards.length) {
      cards[i].style.display = "block";
    }
  }}
  setTimeout(showCards, 2000); // Change slide every 2 seconds
}
let slideTimer;

function startSlideshow() {
  slideTimer = setTimeout(showCards, 2000); // Delay the initial start by 2 seconds
}


function stopSlideshow() {
  clearTimeout(slideTimer);
}

// Start the slideshow after a brief pause
setTimeout(startSlideshow, 1000); // Delay the initial start by 1 second

