
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


// Масштабирование главного изображения по клику.

const img = document.createElement("img");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const modalClose = document.querySelector(".fa-times");

function resizeImage() {

  img.src = bigImage.src;
  document.querySelector(".modal-content").appendChild(img);

  modal.classList.add("modal-active");
  overlay.classList.add("overlay-active");

  // Закрытие модального окна по кнопке
  modalClose.onclick = function () {
    
    modal.classList.remove("modal-active");
    overlay.classList.remove("overlay-active");
  };

  // Закрытие модального окна по клику на overlay
  overlay.addEventListener("click", function(){

    modal.classList.remove("modal-active");
    overlay.classList.remove("overlay-active");
  });
}

bigImage.addEventListener("mousedown", resizeImage);
