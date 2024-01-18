
import inquirer from "inquirer";
import quizData from "./quizData.mjs";



function runQuiz() {
  let score = 0;

  function askQuestion(index) {
    if (index === quizData.length) {
      console.log(`Quiz completed! Your score: ${score}/${quizData.length}`);
      return;
    }

    const currentQuestion = quizData[index];

    inquirer
      .prompt([
        {
          type: "list",
          name: "answer",
          message: currentQuestion.question,
          choices: currentQuestion.options,
        },
      ])
      .then((answers) => {
        const userAnswer = answers.answer;
        const correctAnswer = currentQuestion.correctAnswer;

        if (userAnswer === correctAnswer) {
          console.log("Correct!\n");
          score++;
        } else {
          console.log(`Incorrect! Correct answer: ${correctAnswer}\n`);
        }

        askQuestion(index + 1);
      });
  }

  // Start the quiz by asking the first question
  askQuestion(0);
}

// Run the quiz when the script is executed
runQuiz();
