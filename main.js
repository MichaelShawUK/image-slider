const imgCount = 8;
const imgWidth = 640;

const leftControl = document.getElementById('left');
const rightControl = document.getElementById('right');
const images = document.getElementById('images');

function getCurrentPosition() {
  let indexOfPx = images.style.transform.indexOf('p');
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
}

function prevImg() {
  let currentPosition = getCurrentPosition();

  if (currentPosition != '0') {
    images.style.transform = `translateX(${+currentPosition + imgWidth}px)`; 
  }
}

function dotNavigation() {
  const dots = document.querySelectorAll('.dot');

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    let index = Array.from(dots).indexOf(dot);
    images.style.transform = `translateX(${index * -imgWidth}px)`;
  })
})
}

leftControl.onclick = prevImg;
rightControl.onclick = nextImg;
dotNavigation();