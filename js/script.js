var mySVG = ["sunglasses1.svg", "sunglasses2.svg", "patch.svg", "tattoo.svg", "potter.svg"];
var randomSVG = Math.floor(Math.random() * mySVG.length);
var myHeroImage = document.querySelectorAll(".myHeroImage");

for (var i = 0; i < myHeroImage.length; i++) {
  myHeroImage[i].addEventListener("mouseover", function(){
    // console.log("randomSVG");
    this.style.cursor = 'url("../CV/images/'+mySVG[randomSVG]+'"), auto';
  })
}
