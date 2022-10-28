const imgCount = 8;
const imgWidth = 640;


const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const images = document.getElementById('images');

function nextImg() {
  const lastImgPosition = `${-imgWidth * (imgCount - 1)}`; 
  let currentPosition = getCurrentPosition();

  if (currentPosition !== lastImgPosition) {
    images.style.transform = `translateX(${currentPosition - imgWidth}px)`; 
  }
}

function prevImg() {
  let currentPosition = getCurrentPosition();

  if (currentPosition !== '0') {
    images.style.transform = `translateX(${+currentPosition + imgWidth}px)`; 
  }
}

function getCurrentPosition() {
  let indexOfPx = images.style.transform.indexOf('p');
  let currentPosition = images.style.transform.slice(11, indexOfPx);
  if (currentPosition) return currentPosition;
  else return 0;
}

nextBtn.onclick = nextImg;
prevBtn.onclick = prevImg;

