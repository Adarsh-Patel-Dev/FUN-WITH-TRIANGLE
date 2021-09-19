const base = document.querySelector(".angle-input1");
const height = document.querySelector(".angle-input2");
const output = document.querySelector("#output");

const areaBtn = document.querySelector("#submit-btn")

function area(x, y){
    const areaOfTriangle = (x  * y)/2;
   return areaOfTriangle;
}
function calculateArea(){

    if( height.value < 0 || base.value < 0)
    { 
        output.innerText = "Please enter positive values!!!🙄";
    }else

    if( height.value === " " || base.value === " ")
    { 
        output.innerText = "Please enter both the values!!!🙄";
    }else{

    const areaOfTriangle = area(Number(base.value), Number(height.value));
    output.innerText = "Area of triangle is " + areaOfTriangle + " square units.";
}
}

areaBtn.addEventListener("click", calculateArea);