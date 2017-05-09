//alert("hola");
var buttonClose = document.getElementsByClassName("panda");
var gallery = document.getElementById("panda-gallery");
console.log(buttonClose);

for (var i = 0; i < buttonClose.length; i++){
  buttonClose[i].addEventListener("click", function(){
      this.style.display = "none";

  });
}
