const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#submit-btn");
const outputElement = document.querySelector("#output");

function sumOfAngles(angle1, angle2, angle3){
    const sum = angle1 + angle2 + angle3;
    return sum;
}

function isTriangle(){

    const sumOfAngle = sumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value) );
    if( sumOfAngle === 180){
         outputElement.innerText = "The angles forms a triangle 🙂";
        console.log("triangle");

    }else if(inputs[0].value === "" || inputs[1].value==="" || inputs[2].value === ""){
        outputElement.innerText = "Please enter all the values 🙄";

    }else{
         outputElement.innerText = "The angles does not form a triangle 😕 ";
        console.log("not triangle");
    }
}

isTriangleBtn.addEventListener("click", isTriangle)