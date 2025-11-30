
const quiz = [
  { question: "What is the capital of France?", answer: "paris" },
  { question: "Which planet is known as the Red Planet?", answer: "mars" },
  { question: "What is 5 + 7?", answer: "12" },
  { question: "What programming language is used for web pages?", answer: "javascript" },
  { question: "Who discovered gravity?", answer: "isaac newton" },
  { question: "What is the largest mammal in the world?", answer: "blue whale" },
  { question: "Which is the fastest land animal?", answer: "cheetah" },
  { question: "Which continent is the largest?", answer: "asia" },
  { question: "What gas do plants absorb from the atmosphere?", answer: "carbon dioxide" },
  { question: "How many planets are in our solar system?", answer: "8" },
];

let score = 0;
for (let i = 0; i < quiz.length; i++) {
  let userInput = prompt(quiz[i].question);

  if (userInput === null) {
    alert("Quiz cancelled!");
    break;
  }

  userInput = userInput.toLowerCase().trim();

  if (userInput === quiz[i].answer) {
    alert("Correct! 🎉");
    score++;
  } else {
    alert(`Wrong! The correct answer is: ${quiz[i].answer}`);
  }
}

alert(`Quiz Over! Your final score is ${score} out of ${quiz.length}.`);
