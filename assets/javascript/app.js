// User clicks "Start" button to begin
// Create object with question and answers
var questions = [
    {question: "1. What art form was born because of the collapse of social and moral values during WWI?",
    choices: ["Cubism", "Etruscan Art", "Pop Art", "Dada"],
    correctAnswer: 3},
    {question: "2. Scenes from an American's everyday life were shown through which of these art movements?",
    choices: ["Abstract Expressionism", "Modernism", "Impressionism", "American Scene Painting"],
    correctAnswer: 3},
    {question: "3. What style of painting leaves a very thick layer of paint on the canvas?",
    choices: ["Impasto", "Pointillism", "Hatching", "Sfumato"],
    correctAnswer: 0},
    {question: "4. What style of painting most emphasizes an immediate visual image of a scene?",
    choices: ["Expressionism", "Impressionism", "Photorealism", "Idealism"],
    correctAnswer: 1},
    {question: "5. Which art movement emphasizes the expression of imagination, free of the restraints of reason?",
    choices: ["Realism", "Expressionism", "Surrealism", "Constructivism"],
    correctAnswer: 2}
]

// Put first question and answers on the page with jQuery
// Include timer that applies to only one question
// User clicks on an answer
    // If it's wrong...
        // The text where the question and answers is replaced with "Incorrect!," the correct answer, and an image
        // After a few seconds, the next question appears
    // If it's correct...
        // The text where the question and answers is replaced with "Correct!" and an image
// If the user does NOT click on an answer and the timer runs out
    // The next question is displayed
// After all questions have been presented, display the user's score and a "Start Over" button