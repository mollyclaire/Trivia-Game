$(document).ready(function() {

// List of questions and answers
var questionList = [
    {
        question: "What art form was born because of the collapse of social and moral values during WWI?",
        answers: ["Cubism", "Etruscan Art", "Pop Art", "Dada"],
        correctAnswer: "Dada"
    },
    {
        question: "Scenes from an American's everyday life were shown through which of these art movements?",
        answers: ["Abstract Expressionism", "Modernism", "Impressionism", "American Scene Painting"],
        correctAnswer: "American Scene Painting"
    },
    {
        question: "What style of painting leaves a very thick layer of paint on the canvas?",
        answers: ["Impasto", "Pointillism", "Hatching", "Sfumato"],
        correctAnswer: "Impasto"
    },
    {
        question: "What style of painting most emphasizes an immediate visual image of a scene?",
        answers: ["Expressionism", "Impressionism", "Photorealism", "Idealism"],
        correctAnswer: "Impressionism"
    },
    {
        question: "Which art movement emphasizes the expression of imagination, free of the restraints of reason?",
        answers: ["Realism", "Expressionism", "Surrealism", "Constructivism"],
        correctAnswer: "Surrealism"
    }
];

// Global variables
var correct = 0;
var incorrect = 0;
var currentQuestion = 0;
var correctAnswer;

// The questions and answer choices appear on the page
function displayQuestion() {
    
    let q = questionList[currentQuestion].question;
    $("#quiz").html("<h2>" + q + "</h2>");
    
       
    let a = questionList[currentQuestion].answers;
    for (var i = 0; i < a.length; i++) {
        console.log(a);
        $("#quiz").append("<button class='answer-button' id='button' data-name='" + questionList[currentQuestion].answers[i]
        + "'>" + questionList[currentQuestion].answers[i] + "</button>");
    }

}

// User clicks start button
$("#start-button").on("click", function() {
    $("#start-button").hide();
    displayQuestion();
})

// User clicks on an answer choice
$(document).on("click", ".answer-button", function(e) {
    clicked(e);
  })
var clicked = function(e) {
    if ($(e.target).attr("data-name") === questionList[this.currentQuestion].correctAnswer) {
     // If it's the correct answer...
     answerCorrectly();
    }
    else {
      // If it's incorrect...
      answerIncorrectly();
    }
}

// answerCorrectly() function 
function answerCorrectly() {
    nextPage();
    $("#quiz").html("Correct!")
    correct++;
}

// answerIncorrectly() function
function answerIncorrectly() {
    nextPage();
    $("#quiz").html("Incorrect!")
    incorrect++;
}

// The next question is displayed and the timer resets
function nextPage() {
    this.currentQuestion++
    displayQuestion();

}





});