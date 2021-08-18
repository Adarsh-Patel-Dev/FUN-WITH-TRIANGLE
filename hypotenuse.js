const height = document.querySelector(".height");
const base = document.querySelector(".base");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputDiv = document.querySelector("#output");

function calculateSumOfSquares(a, b){
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}

function calculateHypotenuse(){
    const sumOfSquares = calculateSumOfSquares(Number(height.value), Number(base.value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    console.log(lengthOfHypotenuse);
    outputDiv.innerText = "the length of hypotenuse is " + lengthOfHypotenuse;
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);