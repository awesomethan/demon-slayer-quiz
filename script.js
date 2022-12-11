const startButtonElement = document.getElementById("startButton");
const nextButtonElement = document.getElementById("nextButton");
const finishButtonElement = document.getElementById("finishButton");
const textElement = document.getElementById("text");
const questionContainerElement = document.getElementById("questionContainer");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answerButtons");
const messageElement = document.getElementById("message");
const questionCountElement = document.getElementById("questionCount");

const questions = [
  {
    question:
      "To defeat Rui, Lower Moon 5, Tanjiro uses 'Dead Calm', the Eleventh Form.",
    answers: [
      { text: "a. True", correct: false },
      { text: "b. False", correct: true }
    ],
    id: 0
  },
  {
    question: "How many younger siblings did big bro Tanjiro have?",
    answers: [
      { text: "a. 6", correct: false },
      { text: "b. 4", correct: false },
      { text: "c. 5", correct: true },
      { text: "d. 7", correct: false }
    ],
    id: 1
  },
  {
    question:
      "Why doesn't Tanjiro help Rengoku during his fight against Akaza?",
    answers: [
      {
        text: "a. He thinks that Rengoku is strong enough to defeat Akaza, so it'd be better if he doesn't get in the way",
        correct: false,
      },
      {
        text: "b. He was stabbed and exhausted, so his movement is extremely limited",
        correct: false,
      },
      {
        text: "c. Rengoku ordered him to stay where he is so his wound wouldn't reopen and become fatal",
        correct: false,
      },
      { text: "d. Both b. and c.", correct: true }
    ],
    id: 2
  },
  {
    question:
      "Why doesn't Rengoku accept Akaza's offer to become a demon, live eternally, and become even stronger?",
    answers: [
      {
        text: "a. Rengoku is confident that he could kill Akaza",
        correct: false,
      },
      {
        text: "b. Rengoku wants to irritate Akaza since he hates him",
        correct: false,
      },
      {
        text: "c. Rengoku believes that growing old and dying are part of the beauty of being a human, an ephemeral creture",
        correct: true,
      },
      { text: "d. None of the above", correct: false }
    ],
    id: 3
  },
  {
    question: "Why does Uzui have 3 wives?",
    answers: [
      {
        text: "a. Uzui is a filthy scumbag who likes to play women",
        correct: false,
      },
      {
        text: "b. The head of Uzui's family assigned him 3 wives as his family practises polygamy",
        correct: true,
      },
      {
        text: "c. He likes all 3 of them but couldn't pick one, so he chose to marry all 3 women",
        correct: false,
      },
      { text: "d. None of the above", correct: false }
    ],
    id: 4
  },
  {
    question: "What is Tanjiro's strongest Water Breathing form?",
    answers: [
      { text: "a. Water Breathing: Tenth Form - Constant Flux", correct: true },
      {
        text: "b. Water Breathing: Tenth Form - Flowing Dance",
        correct: false,
      },
      {
        text: "c. Water Breathing: Fourth Form - Striking Tide",
        correct: false,
      },
      {
        text: "d. Water Breathing: Ninth Form - Splashing Water Flow, Turbulent",
        correct: false
      },
    ],
    id: 5
  },
  {
    question: "Why does Tanjiro show sympathy towards demons?",
    answers: [
      {
        text: "a. Every shounen protagonist is a nice dude...duh",
        correct: false,
      },
      {
        text: "b. Tanjiro wants to be respected by Muzan Kibutsuji",
        correct: false,
      },
      {
        text: "c. Because all demons were human at some point, he believes that no demon can be completely evil",
        correct: true,
      },
      {
        text: "d. Tanjiro believes that demons are still good beings, even though they have killed many humans",
        correct: false
      },
    ],
    id: 6
  },
  {
    question: "Which of the following has Inosuke not called Tanjiro before?",
    answers: [
      { text: "a. Kamaboko Gonpachiro", correct: false },
      { text: "b. Monjiro", correct: false },
      { text: "c. Santaro", correct: false },
      {
        text: "d. None of the above; Inosuke has called Tanjiro all of the above names at least once!",
        correct: true
      },
    ],
    id: 7
  },
  {
    question:
      "Why does Zenitsu only use 'Thunder Breathing: First Form - Thunderclap and Flash'?",
    answers: [
      {
        text: "a. He cannot manage the other Thunder Breathing forms",
        correct: true,
      },
      {
        text: "b. There is only one form of Thunder Breathing",
        correct: false,
      },
      {
        text: "c. 'Gramps' only taught him the first form of Thunder Breathing",
        correct: false,
      },
      { text: "d. None of the above", correct: false }
    ],
    id: 8
  },
  {
    question:
      "Shinobu and Muichiro are the only 2 Hashira who cannot decapitate demons.",
    answers: [
      { text: "a. True", correct: false },
      { text: "b. False", correct: true }
    ],
    id: 9
  },
  {
    question:
      "Why does Rui make a pretend family and even want to make Nezuko his younger sister?",
    answers: [
      {
        text: "a. He feels lonely as a demon and wants some company",
        correct: false,
      },
      { text: "b. He seeks for a 'family bond'", correct: true },
      {
        text: "c. Muzan assigned him a mission to create more demons",
        correct: false,
      },
      {
        text: "d. He is bored of killing and devouring humans, so he decides to transform them into demons instead and just call them his family",
        correct: false
      },
    ],
    id: 10
  },
  {
    question: "Why does Giyu protect Tanjiro and Nezuko from Shinobu?",
    answers: [
      { text: "a. He thinks Nezuko's cute", correct: false },
      {
        text: "b. He thinks that Nezuko is strong and can help the Demon Slayer Corps fight against demons",
        correct: false,
      },
      {
        text: "c. He was ordered by the former Water Hashira, Sakonji Urokodaki, to protect the siblings",
        correct: false,
      },
      { text: "d. None of the above", correct: true }
    ],
    id: 11
  },
  {
    question:
      "Which of the following characters has a keen sense of smell, like Tanjiro?",
    answers: [
      { text: "a. Sakonji Urokodaki", correct: true },
      { text: "b. Zenitsu Agatsuma", correct: false },
      { text: "c. Inosuke Hashibira", correct: false },
      { text: "d. Giyu Tomioka", correct: false }
    ],
    id: 12
  },
  {
    question:
      "How is Inosuke able to keep fighting in the battle against Upper Moon Six demons Gyutaro and Daki, even though he was stabbed by Gyutaro?",
    answers: [
      {
        text: "a. Inosuke is able to shift the position of his internal organs, so he did not suffer fatal damage",
        correct: false,
      },
      {
        text: "b. Through 'Total Concentration Breathing', Inosuke is able to temporarily stop the bleeding and prevent the poison from circulating",
        correct: false,
      },
      {
        text: "c. Poison doesn't work on Inosuke since he grew up on a harsh mountainside",
        correct: false,
      },
      { text: "d. Both a. and c.", correct: true }
    ],
    id: 13
  },
  {
    question:
      "Tanjiro, Inosuke, and Uzui are all stabbed by Gyutaro's poisonous sickles. How do they all survive?",
    answers: [
      { text: "a. Total Concentration Breathing", correct: false },
      {
        text: "b. They all have strong bodies, so the poison is not lethal to them",
        correct: false,
      },
      {
        text: "c. Nezuko's Blood Demon Art ignites the poison in their bodies, which burns it away",
        correct: true,
      },
      { text: "d. Both a. and c.", correct: false }
    ],
    id: 14
  },
  {
    question: "Who turned Gyutaro and Daki into demons?",
    answers: [
      { text: "a. Muzan Kibutsuji", correct: false },
      { text: "b. Doma (Upper Moon Two)", correct: true },
      { text: "c. Akaza (Upper Moon Three)", correct: false },
      { text: "d. None of the above", correct: false }
    ],
    id: 15
  },
  {
    question:
      "Why does Gyutaro not regret becoming a demon and killing and devouring hundreds of people for over a century?",
    answers: [
      {
        text: "He is a sadistic demon who revels at others' defeat and pain",
        correct: false,
      },
      {
        text: "He wants to take revenge on those who insulted, tormented, and abused him when he was young",
        correct: false,
      },
      {
        text: "He wants to escape his life of poverty and filth",
        correct: false,
      },
      { text: "All of the above", correct: true }
    ],
    id: 16
  }
];

const messages = [
  "It was Giyu Tomioka, the Water Hashira, who uses 'Dead Calm' to completely nullify Rui's threads",
  "Only a true demon slayer simp would know the answer to this question :)",
  "The train conductor stabs Tanjiro when he and Inosuke are trying to slay Enmu, Lower Moon 1...what an idiot honestly",
  "Rengoatku is such a gigachad",
  "Uzui had no choice but still loves and protects all 3 of his wives...quite respectable in my opinion",
  "This move was vital in Tanjiro's fight against Rui",
  "Tanjiro is so kind and pure <3",
  "Inosuke's memory of names is indeed very questionable",
  "He only knows one form, but he honed it to perfection",
  "Shinobu is the only one who cannot decapitate a demon; though Muichiro is young, he is OP (only manga readers know)",
  "Rui's backstory ;(",
  "Giyu thinks that Nezuko may be different since she does not eat Tanjiro and even protects him, even though she's a starving demon",
  "A minor detail that you may have missed or forgotten about :)",
  "Although Inosuke could have used Total Concentration Breathing to temporarily heal the wound, he did not use it in this case",
  "Total Concentration Breathing can slow the poison circulation, but not completely neutralize it...plot armor comes to the rescue again LOL",
  "Ngl Doma's eyes are really pretty",
  "I don't blame him for turning out the way he is...his childhood really was tragic",
];

let shuffledQuestions, questionIndex, score, messageId;

startButtonElement.addEventListener("click", startGame);
nextButtonElement.addEventListener("click", updateQuestion);
finishButtonElement.addEventListener("click", finishGame);

function startGame() {
  textElement.classList.add("hide");
  startButtonElement.classList.add("hide");
  questionContainerElement.classList.remove("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  questionIndex = 0;
  score = 0;
  updateQuestion();
}

function updateQuestion() {
  resetState();
  showQuestion(shuffledQuestions[questionIndex]);
  questionIndex++;
  questionCountElement.innerText = "Question " + questionIndex + " of " + questions.length;
}

function resetState() {
  nextButtonElement.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
  messageElement.innerText = "";
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  messageId = question.id;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("button");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatus(button, button.dataset.correct);
  });
  if (correct) {
    score++;
  }
  messageElement.innerText = messages[messageId];
  if (questionIndex < shuffledQuestions.length) {
    nextButtonElement.classList.remove("hide");
  } else {
    finishButtonElement.classList.remove("hide");
  }
}

function setStatus(element, state) {
  clearStatus(element);
  if (state) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatus(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

function finishGame() {
  questionContainerElement.classList.add("hide");
  messageElement.innerText = "";
  finishButtonElement.classList.add("hide");
  questionCountElement.innerText = "";
  textElement.classList.remove("hide");
  textElement.innerText =
    "Congrats for completing the entire quiz! You answered " +
    score +
    " out of " +
    questions.length +
    " questions correctly, which means you got a " +
    ((score / questions.length) * 100).toFixed(1) +
    "%! Hope you had fun, and feel free to play again by clicking 'Restart'!";
  startButtonElement.innerText = "Restart";
  startButtonElement.classList.remove("hide");
}
