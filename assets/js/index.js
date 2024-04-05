//--------------------------------------------------------------------------------------//
//                                 Quiz Questions                                       //
//--------------------------------------------------------------------------------------//

const questions = [
  {
    prompt:
      "Which of the following is the default value of an instance variable?",
    options: ["null", "0", "Depends on the type of variable", "Not assigned"],
    correctAnswer: "Depends on the type of variable",
  },
  {
    prompt: "What is the output of this code: console.log(3 > 2 > 1);",
    options: ["True", "False"],
    correctAnswer: "False",
  },
  {
    prompt: "Inside which HTML element do we put the JavaScript?",
    options: ["<script>", "<js>", "<scripting>", "<javascript>"],
    correctAnswer: "<script>",
  },
  {
    prompt: "What is the output of the this code: console.log(typeof Nan);?",
    options: ["NaN", "number", "null", "undefined"],
    correctAnswer: "number",
  },
  {
    prompt:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    options: [
      "<script href='\"xxx.js\"'>",
      "<script src='\"xxx.js\"'>",
      "<script name='\"xxx.js\"'>",
    ],
    correctAnswer: "<script src='\"xxx.js\"'>",
  },
  {
    prompt: "How do you find the number with the highest value of x and y?",
    options: ["Math.ceil(x, y)", "top(x, y)", "ceil(x, y)", "Math.max(x, y)"],
    correctAnswer: "Math.max(x, y)",
  },
];

//--------------------------------------------------------------------------------------//
//                                Start the quiz                                        //
//--------------------------------------------------------------------------------------//

document.getElementById("start").addEventListener("click", function () {
  document.getElementById("quiz-start").style.display = "none";
  document.getElementById("questions").style.display = "block";
  document.getElementById("timer").textContent = "70";
  document.getElementById("timer").style.color = "green";
  startTimer();
  displayQuestion(0);
});

//--------------------------------------------------------------------------------------//
//                           Displays the first question                                //
//--------------------------------------------------------------------------------------//

function displayQuestion(index) {
  const question = questions[index];
  document.querySelector("h2").textContent = question.prompt;
  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";
  question.options.forEach(function (option) {
    const button = document.createElement("button");
    button.className = "option";
    button.textContent = option;
    button.addEventListener("click", function () {
      checkAnswer(this.textContent, question.correctAnswer);
      if (index < questions.length - 1) {
        displayQuestion(index + 1);
      } else {
        document.getElementById("questions").style.display = "none";
        document.getElementById("quiz-end").style.display = "block";
      }
    });
    optionsContainer.appendChild(button);
  });
}

//--------------------------------------------------------------------------------------//
//                                Checks answers                                        //
//--------------------------------------------------------------------------------------//

function checkAnswer(selectedAnswer, correctAnswer) {
  let answerResult = document.getElementById("answer-result");
  if (!answerResult) {
    const newAnswerResult = document.createElement("div");
    newAnswerResult.id = "answer-result";
    document.getElementById("questions").appendChild(newAnswerResult);
    answerResult = newAnswerResult;
  }
  if (selectedAnswer === correctAnswer) {
    answerResult.textContent = "Correct!!";
    answerResult.style.color = "green";
  } else {
    answerResult.textContent = "Wrong! The correct answer was " + correctAnswer;
    answerResult.style.color = "red";
    reduceTimer();
  }
}

//--------------------------------------------------------------------------------------//
//                                  Timer settings                                      //
//--------------------------------------------------------------------------------------//

let time;

function startTimer() {
  const timerElement = document.getElementById("timer");
  const timerDiv = document.querySelector(".timer");
  time = parseInt(timerElement.textContent);
  const timerInterval = setInterval(function () {
    const quizEnd = document.getElementById("quiz-end");
    if (getComputedStyle(quizEnd).display !== "none") {
      // Stop the timer
      clearInterval(timerInterval);
      // Set the final score to the remaining time
      document.getElementById("final-score").textContent = time;
      return;
    }
    time--;
    timerElement.textContent = time;
    if (time > 48) {
      timerElement.style.color = "green";
    }
    if (time <= 48) {
      timerElement.style.color = "orange";
    }
    if (time <= 10) {
      timerElement.style.color = "red";
    }
    if (time <= 0) {
      clearInterval(timerInterval);
      document.getElementById("questions").style.display = "none";
      document.getElementById("game-over").style.display = "block";
      timerDiv.innerHTML = "<p>Time has run out!!!</p>";
      timerDiv.style.color = "red";
    }
  }, 1000);
}

function reduceTimer() {
  time -= 10; // This will now correctly reduce the global time variable
  document.getElementById("timer").textContent = time;
}

//--------------------------------------------------------------------------------------//
//                                   Score Data                                         //
//--------------------------------------------------------------------------------------//

document.getElementById("submit-score").addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const finalScore = parseInt(
    document.getElementById("final-score").textContent
  );
  let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  highScores.push({ name, finalScore });

  // Sort the high scores in descending order
  highScores.sort((a, b) => b.finalScore - a.finalScore);

  // Store the updated highScores array into localStorage
  localStorage.setItem("highScores", JSON.stringify(highScores));

  // Hide the quiz-end div
  document.getElementById("quiz-end").style.display = "none";

  // Display the highscore div
  document.getElementById("highscore").style.display = "block";

  // Clear the highscores-list
  const highScoresList = document.getElementById("highscore-list");
  highScoresList.innerHTML = "";

  // Add all the high scores to the highscores-list
  highScores.forEach((score) => {
    const scoreItem = document.createElement("li");
    scoreItem.textContent = `${score.name} - ${score.finalScore}`;
    highScoresList.appendChild(scoreItem);
  });
});

//--------------------------------------------------------------------------------------//
//                         Button - clear scores functionality                          //
//--------------------------------------------------------------------------------------//

document.getElementById("clear").addEventListener("click", function () {
  // Clear the localStorage
  localStorage.removeItem("highScores");

  // Clear the highscores-list
  const highScoresList = document.getElementById("highscore-list");
  highScoresList.innerHTML = "";
});

//--------------------------------------------------------------------------------------//
//                           Button - Submit scores functionality                       //
//--------------------------------------------------------------------------------------//

document.getElementById("submit-score").addEventListener("click", function () {
  var highscoreDiv = document.getElementById("highscore");
  if (window.getComputedStyle(highscoreDiv).display !== "none") {
    document.body.classList.add("highscore-active");
  }
});

//--------------------------------------------------------------------------------------//
//                            Button - restart functionality                            //
//--------------------------------------------------------------------------------------//

document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("click", function (event) {
    if (event.target.id === "restart") {
      // Hide the highscore div
      document.getElementById("highscore").style.display = "none";

      // Show the quiz-start div
      document.getElementById("quiz-start").style.display = "block";

      // Show the highscores button
      document.getElementById("highscores").style.display = "block";

      // Change the background of the body back to original
      document.body.classList.remove("highscore-active");
    }
  });
});

//--------------------------------------------------------------------------------------//
//                            Button - start functionality                              //
//--------------------------------------------------------------------------------------//

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("start").addEventListener("click", function () {
    // Hide the highscores button
    document.getElementById("highscores").style.display = "none";
  });

  document.getElementById("highscores").addEventListener("click", function () {
    // Hide the quiz-start div
    document.getElementById("quiz-start").style.display = "none";

    // Show the highscore div
    document.getElementById("highscore").style.display = "block";

    // Change the background of the body
    document.body.classList.add("highscore-active");
  });
});

//--------------------------------------------------------------------------------------//
//                      Button - game over restart functionality                        //
//--------------------------------------------------------------------------------------//

document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("click", function (event) {
    const timerDiv = document.querySelector(".timer");
    if (event.target.id === "gorestart") {
      // Hide the highscore div
      document.getElementById("game-over").style.display = "none";

      // Show the quiz-start div
      document.getElementById("quiz-start").style.display = "block";

      // Show the highscores button
      document.getElementById("highscores").style.display = "block";

      // Change the background of the body back to original
      document.body.classList.remove("highscore-active");

      // Set the timer message back to "Time:"
      timerDiv.innerHTML = "<p>Time:<span id='timer'>0</span></p>";
      timerDiv.style.color = "black";
    }
  });
});
