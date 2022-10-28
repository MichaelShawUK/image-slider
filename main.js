const imgCount = 8;
const imgWidth = 640;

const leftControl = document.getElementById("left");
const rightControl = document.getElementById("right");
const images = document.getElementById("images");
const dots = document.querySelectorAll(".dot");


function getCurrentPosition() {
  let indexOfPx = images.style.transform.indexOf("p");
  let currentPosition = images.style.transform.slice(11, indexOfPx);
  if (currentPosition) return currentPosition;
  else return 0;
}

function nextImg() {
  const lastImgPosition = `${-imgWidth * (imgCount - 1)}`;
  let currentPosition = getCurrentPosition();

  if (currentPosition !== lastImgPosition) {
    images.style.transform = `translateX(${currentPosition - imgWidth}px)`;
  }
  highlightDot();
}

function prevImg() {
  let currentPosition = getCurrentPosition();

  if (currentPosition != "0") {
    images.style.transform = `translateX(${+currentPosition + imgWidth}px)`;
  }
  highlightDot();
}

function dotNavigation() {
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      let index = Array.from(dots).indexOf(dot);
      images.style.transform = `translateX(${index * -imgWidth}px)`;
      highlightDot();
    });
  });
}

function highlightDot() {
  let index = getCurrentPosition()/-imgWidth;
  dots.forEach(dot => dot.classList.remove('selected'));
  dots[index].classList.add('selected');
}

leftControl.onclick = prevImg;
rightControl.onclick = nextImg;
dotNavigation();

let slideshow = setInterval(nextImg, 5000);
window.addEventListener('click', () => {
  clearInterval(slideshow);
  slideshow = setInterval(nextImg, 5000);
})

