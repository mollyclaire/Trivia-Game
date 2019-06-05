$(document).ready(function() {

// Create object with question and answers
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
var correctAnswer;
var correct = 0;
var incorrect = 0;
var unanswered; 
var currentQuestion = 0;
var sec = 30;
var s = 5;



// Create function for a 30 sec timer that applies to only one question
var timerThirty = setInterval(function() {
    $("#quiz").text(sec--);
    if (sec == -1) {
        clearInterval(timerThirty);
    }
    }, 30000);

// Create function for a 5 sec timer that applies to the "score page"
var timerFive = setInterval(function() {
    $("#quiz").text(s--);
    if (s == -1) {
        clearInterval(timerFive);
    }
    }, 1000);

// $("#start-button").on("click", function() {
//     displayQuestion();
//     // timerThirty();
//   })

  $(document).on("click", "#start-button", function() {
    displayQuestion();
  })

// Display question and answer choices function
function displayQuestion() {
    
    let q = questionList[currentQuestion].question;
    // for (var i = 0; i < q.length; i++) {
    //     console.log(q);
    // }
    $("#quiz").html("<h1>" + q + "</h1>");

       
    let a = questionList[currentQuestion].answers;
    for (var i = 0; i < a.length; i++) {
        console.log(a);
        // $("#answers").text(a);
        $("#quiz").append("<button class='answer-button' id='button' data-name='" + questionList[currentQuestion].answers[i]
        + "'>" + questionList[currentQuestion].answers[i] + "</button>");
    }
    
        $("#question").text(q);
        timerThirty();
        

    }


// What happens when a user clicks on an answer (30 sec timer stops, if the user selects the right answer or wrong answer)
var clicked = function(e) {
    clearInterval(timer);
    if ($(e.target).attr("data-name") === questions[this.currentQuestion].correctAnswer) {
     answerCorrectly();
    }
    else {
      answerIncorrectly();
    }
  }

// The next question is displayed and the timer resets
function nextQuestion() {
    this.currentQuestion++
    displayQuestion();
    timerFive();
}
nextQuestion();

// I still need to create the conditional for answerCorrectly() function {}

// I still need to create the conditionals for answerIncorrectly() function{}

// Click functions
// Answer button
$(document).on("click", ".answer-button", function(e) {
    clicked(e);
  })
// Start button 
// $(document).on("click", "#start-button", function() {
//     displayQuestion();
//   })


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


});