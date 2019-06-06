$(document).ready(function () {

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
    var intervalID;
    var isQuestionDisplayed = false;

    // The questions and answer choices appear on the page
    function displayQuestion() {
        isQuestionDisplayed = true;
        var q = questionList[currentQuestion].question;
        $("#quiz").html("<h2>" + q + "</h2>");
        var a = questionList[currentQuestion].answers;
        for (var i = 0; i < a.length; i++) {
            console.log(a);
            $("#quiz").append("<button class='answer-button' id='button' data-name='" + questionList[currentQuestion].answers[i]
                + "'>" + questionList[currentQuestion].answers[i] + "</button>");
        }
        questionTimer(25);
    };

    // User clicks start button
    $("#start-button").on("click", function () {
        $("#start-button").hide();
        displayQuestion();
    })

    // User clicks on an answer choice
    $(document).on("click", ".answer-button", function (e) {
        clicked(e);
    })

    // Clicked answer functions which calculates whether the question is right or wrong -- NEED HELP HERE
    var clicked = function (e) {
        if ($(e.target).attr("data-name") === questionList[currentQuestion].correctAnswer) {
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
        isQuestionDisplayed = false;
        $("#quiz").html("Correct!")
        correct++;
        questionTimer(5);
        // I think I need to add currentQuestion++ here
    }

    // answerIncorrectly() function
    function answerIncorrectly() {
        isQuestionDisplayed = false;
        $("#quiz").html("Incorrect!")
        incorrect++;
        questionTimer(5);
        // I think I need to add currentQuestion++ here
    }

    // Function created by tutor... not sure why!
    function nextPage() {
        currentQuestion++;
        displayQuestion();

    }

    // Question timer function (if 25 sec runs out, stop timer and run the answerIncorrectly function)
    function questionTimer(totalTime) {
        $("#timer").text("Time remaining: " + totalTime);
        intervalID = setInterval(function () {
            totalTime--;
            $("#timer").text("Time remaining: " + totalTime);
            if (totalTime === 0) {
                clearInterval(intervalID);
                if (isQuestionDisplayed) {
                    answerIncorrectly();
                }
                else {
                    nextPage();
                }
            }
        }, 1000);
    };
});