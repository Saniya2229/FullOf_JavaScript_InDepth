document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const questionContainer = document.getElementById("question-container");
  const choicesList = document.getElementById("choices-list");
  const questionText = document.getElementById("question-text");
  const resultContainer = document.getElementById("result-container");
  const scoreText = document.getElementById("score");
  const restartBtn = document.getElementById("restart-btn");

  let currentQuestionIndex = 0;
  let correctAnswers = 0;
  let totalAttempts = 0;
  let quizLocked = false;

  // Sample Questions
  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Berlin", "Madrid", "Paris", "Rome"],
      correct: 2,
    },
    {
      question: "Which language is used in React?",
      choices: ["Java", "C++", "JavaScript", "Python"],
      correct: 2,
    },
    {
      question: "2 + 2 equals to?",
      choices: ["3", "4", "5", "22"],
      correct: 1,
    },
  ];

  startBtn.addEventListener("click", startQuiz);
  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion();
  });
  restartBtn.addEventListener("click", startQuiz);

  function startQuiz() {
    startBtn.classList.add("hidden");
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    currentQuestionIndex = 0;
    correctAnswers = 0;
    totalAttempts = 0;
    setNextQuestion();
  }

  function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
  }

  function showQuestion(question) {
    questionText.innerText = question.question;
    question.choices.forEach((choice, index) => {
      const li = document.createElement("li");
      li.innerText = choice;
      li.classList.add("choice");
      li.dataset.index = index;
      li.addEventListener("click", () => selectAnswer(li, question.correct));
      choicesList.appendChild(li);
    });
  }

  function selectAnswer(selectedLi, correctIndex) {
    if (quizLocked) return;
    quizLocked = true;

    totalAttempts++;

    const allChoices = document.querySelectorAll(".choice");
    allChoices.forEach((li) => li.classList.add("disabled"));

    if (parseInt(selectedLi.dataset.index) === correctIndex) {
      selectedLi.classList.add("correct");
      selectedLi.innerHTML += " ✔️";
      correctAnswers++;
    } else {
      selectedLi.classList.add("wrong");
      selectedLi.innerHTML += " ❌";
      // Show the correct one
      allChoices.forEach((li) => {
        if (parseInt(li.dataset.index) === correctIndex) {
          li.classList.add("correct");
          li.innerHTML += " ✔️";
        }
      });
    }

    if (currentQuestionIndex < questions.length - 1) {
      nextBtn.classList.remove("hidden");
    } else {
      showScore();
    }
  }

  function resetState() {
    quizLocked = false;
    nextBtn.classList.add("hidden");
    choicesList.innerHTML = "";
  }

  function showScore() {
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreText.innerText = `You answered ${correctAnswers} out of ${totalAttempts} correctly.`;
  }
});
