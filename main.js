// Js Variables ---------------------
const menubar = document.getElementById('menu-bar')
const banner = document.getElementById("banner-section")
const about = document.getElementById('about-section')
const capability = document.getElementById("capability-section")
const navlinks = document.querySelectorAll(".menu-links");
const mediaQuery = window.matchMedia("(max-width:768px)");
const multiply = document.getElementById('close')
const apps = document.getElementById('apps')
// creating dom routing 



const body = [banner,about,capability]
body[0].style.display = "flex"


const slider = document.getElementById("slider");
  //  using active link 
navlinks[0].classList.add("active");
    function acitveLink() {
      navlinks.forEach((item) => {
        item.classList.remove("active");
        this.classList.add("active");
      });
    }
// Add an event listener to check when the media query changes
window.addEventListener('orientationchange',()=>{
  mediaQuery.addListener(handleMediaChange);

})
window.addEventListener("orientationchange", function() {
  // Reload the page
  location.reload();
});

// Check the initial state of the media query
handleMediaChange(mediaQuery);


// Define the function to handle media changes
function handleMediaChange(mediaQuery) {
  if (mediaQuery.matches) {
    // The media query is currently matching
    slider.style.left = `${navlinks[0].children[1].offsetLeft - 22}px`;
    slider.style.top = `${navlinks[0].children[1].offsetTop - 17}px`;

    
    navlinks.forEach((e) => {
      e.addEventListener("click", acitveLink);
    });
    navlinks.forEach((e) => {
      e.addEventListener("click", () => {
        slider.style.left = `${e.children[1].offsetLeft - 22}px`;
        slider.style.top = `${e.children[1].offsetTop - 17}px`;
        menubar.style.bottom = '-1000%';
        multiply.style.display = "none"
        apps.style.display = 'block'
        body.forEach(function(item){
          item.style.display = "none"
          if(item.getAttribute('data-effect') == e.getAttribute('data-output')){
          item.style.display = "flex"
          item.style.opacity = "1"
          if (item.getAttribute("data-effect") == "About"){
            for(let i = 0 ; i<= 4 ; i++){
              value = document.getElementsByClassName(`bubble${i}`);
              value[0].hidden  = true;
            }
          }
         
          }
        })
      
      });
    });
// Define menu shower buttons 
 multiply.addEventListener('click',(e)=>{
  menubar.style.bottom = '-1000%'
  multiply.style.display = "none"
  apps.style.display = 'block'
 })
 apps.addEventListener('click',(e)=>{
  menubar.style.bottom = '-50%'
  multiply.style.display = "block"
  apps.style.display = "none "
 })
  }


 else{
    // The media query is not currently matching
    slider.style.width = `${navlinks[0].offsetWidth}px`;
    navlinks.forEach((e) => {
      e.addEventListener("click", acitveLink);
    });
    navlinks.forEach((e) => {
      e.addEventListener("click", () => {
        slider.style.left = `${e.offsetLeft}px`;
        slider.style.width = `${e.offsetWidth}px`;
        body.forEach(function(item){
          item.style.display = "none"
          if(item.getAttribute('data-effect') == e.getAttribute('data-output')){
          item.style.display = "flex"
          }
        })
      });
    });
  }
}


//  Heading type effect
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Utkarsh", "Student", "Coder"];
const typingDelay = 200;
const erasingDelay = 50;
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
    setTimeout(type, typingDelay + 1000);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 20);
});
