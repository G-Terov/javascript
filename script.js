const bigImage = document.getElementById("big-image");

function nextImg(event) {
  event = event || window.event;

  if (event.target.classList.contains("min-image")) {
    const allMinImg = document.querySelectorAll(".min-img-block div");

    for (let i = 0; i < allMinImg.length; i++) {
      allMinImg[i].classList.remove("active");
    }

    bigImage.src = event.target.src;
    event.target.parentNode.classList.add("active");
  }
}

document.body.addEventListener("mousedown", nextImg);

function resizeImage() {

    // Работа над масштабированием главного изображения по клику. 
}
bigImage.addEventListener("mousedown", resizeImage);
