const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#output");

const correctAnswers = ["90°", "Right angled", "Equilateral triangle", "Corresponding angles are congruent.", "360°"];



  
submitBtn.addEventListener("click", function (){
   
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for (const value of formResults.values()) {
        if(value === correctAnswers[index]){
            score = score + 1;
        
    } index = index + 1;
 }
    output.innerText = "Your score is " + score;
    
});

