 var mapLink = document.querySelector(".contacts-button-map");
 var mapPopup = document.querySelector(".modal-map");
 var mapClose = mapPopup.querySelector(".modal-close-map");
 mapLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
 });
 mapClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
 });
 window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
       if (mapPopup.classList.contains("modal-show")) {
          evt.preventDefault();
          mapPopup.classList.remove("modal-show");
       }
    }
 });
 var link = document.querySelector(".btn-map");
 var popup = document.querySelector(".modal-login");
 var close = popup.querySelector(".modal-close");
 var login = popup.querySelector("[user-name]");
 link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    login.focus();
 });
 close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
 });