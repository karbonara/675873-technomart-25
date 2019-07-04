  var link = document.querySelector(".basket");
  
  var popup = document.querySelector(".modal-basket");
  
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
  });