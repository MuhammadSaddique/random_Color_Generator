var button = document.querySelector("button");
var h1 = document.querySelector("h1");

button.addEventListener("click",function(){
   
    var newColor = makeRandColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})

var makeRandColor = () =>{
    
    var r = Math.floor(Math.random() *255);
    var g = Math.floor(Math.random() *255);
    var b = Math.floor(Math.random() *255);
    return `rgb(${r},${g},${b})`;
}

