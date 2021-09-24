const height = document.querySelector(".angle-input3");
const base = document.querySelector(".angle-input4");
const hypotenuseBtn = document.querySelector("#submit-btn");
const outputDiv = document.querySelector("#output");

function calculateSumOfSquares(a, b){
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}

function calculateHypotenuse(){

    if( height.value < 0 || base.value < 0)
    { 
        output.innerText = "Please enter positive values!!!🙄";
    }else
    
    if( height.value === "" || base.value === "")
    {
        outputDiv.innerText = "Please enter both the values !!! 🙄 ";
    }else 
    if(Number(height.value) === 0 || Number(base.value) === 0){
        console.log("kya");
        outputDiv.innerText = "Height or Base can not be zero. Please enter positive values !!! 🙄 ";
    }
    else{
    const sumOfSquares = calculateSumOfSquares(Number(height.value), Number(base.value));
    const lengthOfHypotenuse = (Math.sqrt(sumOfSquares)).toFixed(2);
    console.log(lengthOfHypotenuse);
    outputDiv.innerText = "The length of hypotenuse is " + lengthOfHypotenuse + " units.";
    }
}


hypotenuseBtn.addEventListener("click", calculateHypotenuse);