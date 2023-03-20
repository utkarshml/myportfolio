// Js Variables ---------------------
const navlinks = document.querySelectorAll('.nav-link')
console.log(navlinks)
const slider = document.getElementById('slider')
navlinks[0].classList.add('active')
slider.style.width = `${navlinks[0].offsetWidth}px`
function acitveLink() {
    navlinks.forEach((item) => {
        item.classList.remove('active')
        this.classList.add('active')
    })
}
navlinks.forEach((e) => {
    e.addEventListener('click', acitveLink)
})
navlinks.forEach((e) => {
    e.addEventListener('click', () => {
        slider.style.left = `${e.offsetLeft}px`
        slider.style.width = `${e.offsetWidth}px`
    })
})

//  Heading type effect
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Utkarsh", "Student", "Coder"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});