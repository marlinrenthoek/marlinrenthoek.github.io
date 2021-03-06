var link = document.querySelector(".item-block");
var popup = document.querySelector(".popup");
var close = document.querySelector(".popup-close-button");
var overlay = document.querySelector(".popup-overlay");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup-show");
  overlay.classList.add("popup-overlay-show");
}); 

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup-show");
  overlay.classList.remove("popup-overlay-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode ===27) {
    if (popup.classList.contains("popup-show")) {
      evt.preventDefault();
      popup.classList.remove("popup-show");
      overlay.classList.remove("popup-overlay-show");
    }
  }
});

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup-show");
  overlay.classList.remove("popup-overlay-show");
});

var eveDeg = document.querySelector(".eve-deg");
var eveDegPopup = document.querySelector(".eve-deg-popup");
var eveDegClose = document.querySelector(".eve-deg-cls-btn");

eveDeg.addEventListener("click", function (evt) {
  evt.preventDefault();
  eveDegPopup.classList.add("popup-show");
  overlay.classList.add("popup-overlay-show");
}); 

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  eveDegPopup.classList.remove("popup-show");
  overlay.classList.remove("popup-overlay-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode ===27) {
    if (popup.classList.contains("popup-show")) {
      evt.preventDefault();
      popup.classList.remove("popup-show");
      overlay.classList.remove("popup-overlay-show");
    }
  }
});

eveDegClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup-show");
  overlay.classList.remove("popup-overlay-show");
});

var xmiBulb = document.querySelector(".xmi-bulb");
var xmiBulbPopup = document.querySelector(".xmi-bulb-popup");
var xmiBulbClose = document.querySelector(".xmi-bulb-cls-btn");

xmiBulb.addEventListener("click", function (evt) {
  evt.preventDefault();
  xmiBulbPopup.classList.add("popup-show");
  overlay.classList.add("popup-overlay-show");
}); 

xmiBulbClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  xmiBulbPopup.classList.remove("popup-show");
  overlay.classList.remove("popup-overlay-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode ===27) {
    if (xmiBulbPopup.classList.contains("popup-show")) {
      evt.preventDefault();
      xmiBulbPopup.classList.remove("popup-show");
      overlay.classList.remove("popup-overlay-show");
    }
  }
});

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  xmiBulbPopup.classList.remove("popup-show");
  overlay.classList.remove("popup-overlay-show");
});

var wrmFlr = document.querySelector(".wrm-flr");
var wrmFlrPopup = document.querySelector(".wrm-flr-popup");
var wrmFlrClose = document.querySelector(".wrm-flr-cls-btn");

wrmFlr.addEventListener("click", function (evt) {
  evt.preventDefault();
  wrmFlrPopup.classList.add("popup-show");
  overlay.classList.add("popup-overlay-show");
}); 

wrmFlrClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  wrmFlrPopup.classList.remove("popup-show");
  overlay.classList.remove("popup-overlay-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode ===27) {
    if (wrmFlrPopup.classList.contains("popup-show")) {
      evt.preventDefault();
      wrmFlrPopup.classList.remove("popup-show");
      overlay.classList.remove("popup-overlay-show");
    }
  }
});

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  wrmFlrPopup.classList.remove("popup-show");
  overlay.classList.remove("popup-overlay-show");
});