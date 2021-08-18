const base = document.querySelector(".base");
const height = document.querySelector(".height");
const output = document.querySelector("#output");

const areaBtn = document.querySelector("#areaOfTriangle")

function area(x, y){
    const areaOfTriangle = (x  * y)/2;
   return areaOfTriangle;
}
function calculateArea(){

    const areaOfTriangle = area(Number(base.value), Number(height.value));
    output.innerText = "Area of triangle is " + areaOfTriangle;
}

areaBtn.addEventListener("click", calculateArea);