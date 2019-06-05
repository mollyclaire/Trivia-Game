$(document).ready(function() {

// Create object with question and answers
var questionList = [
    {
        question: "What art form was born because of the collapse of social and moral values during WWI?",
        answers: ["Cubism", "Etruscan Art", "Pop Art", "Dada"],
        correctAnswer: 3
    },
    {
        question: "Scenes from an American's everyday life were shown through which of these art movements?",
        answers: ["Abstract Expressionism", "Modernism", "Impressionism", "American Scene Painting"],
        correctAnswer: 3
    },
    {
        question: "What style of painting leaves a very thick layer of paint on the canvas?",
        answers: ["Impasto", "Pointillism", "Hatching", "Sfumato"],
        correctAnswer: 0
    },
    {
        question: "What style of painting most emphasizes an immediate visual image of a scene?",
        answers: ["Expressionism", "Impressionism", "Photorealism", "Idealism"],
        correctAnswer: 1
    },
    {
        question: "Which art movement emphasizes the expression of imagination, free of the restraints of reason?",
        answers: ["Realism", "Expressionism", "Surrealism", "Constructivism"],
        correctAnswer: 2
    }
];

// User clicks "Start" button to begin


// Function to display questions and answer choices
// var currentquestion = 0;
// function displayQuestion() {
//     $("#question").text(questionList[currentquestion].question);
//     var options = questionList[currentquestion].answers;
//     console.log(options);
//     for (var i = 0; i < options.length; i++) {
//     console.log(questionList[currentquestion].answers[i]);
//   }

//     }
var currentQuestion = 0;
function displayQuestion() {
    let q = questionList[currentQuestion].question;

        console.log(q);
    let a = questionList[currentQuestion].answers;
    
        $("#question").text(q);
        $("#answers").text(a);

    }
    displayQuestion();

// Create function for a 30 sec timer that applies to only one question

var sec = 30
var timer = setInterval(function() {
   $('#timer').text(sec--);
   if (sec == -1) {
      clearInterval(timer);
   }
}, 1000);

// User clicks on an answer
    // If it's wrong...
        // The text where the question and answers is replaced with "Incorrect!," the correct answer, and an image
        // After a few seconds, the next question appears
        // Reset timer
    // If it's correct...
        // The text where the question and answers is replaced with "Correct!" and an image
        // The timer is stopped 
        // After a few seconds, the next question appears
        // Reset timer
// If the user does NOT click on an answer and the timer runs out
    // The next question is displayed
    // Reset timer
// After all questions have been presented, display the user's score and a "Start Over" button



// for(var i = 0; i < questionList.length; i++){
//     var displayQuestion = questionList[i].question};

// console.log(displayQuestion);
// console.log(options);

});