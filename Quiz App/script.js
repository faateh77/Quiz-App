
var quizQuestions = [
    {
      questionText: "What is the capital of Pakistan?",
      answerOptions: ["Karachi", "Multan", "Islamabad", "Peshawar"],
      answer: "Islamabad"
    },
    {
      questionText: "Facebook is discovered by",
      answerOptions: [
        "Elon Musk",
        "Warren Buffet",
        "Bill Gates",
        "Mark Zuckerburg"
      ],
      answer: "Mark Zuckerburg"
    },
    {
      questionText: "HTML stands for",
      answerOptions: ["hyper text markup language", "hyper text mark language", "human translated markup language", "hyper mark language"],
      answer: "hyper text markup language"
    },
    {
        questionText: "Capital of Australia",
        answerOptions: ["canberra", "sydney", "melbourne", "adelaide"],
        answer: "canberra"
      },
      {
        questionText: "Who is the current prime minister of Pakistan?",
        answerOptions: ["Shahbaz Sharif", "Imran Khan", "Yousuf Raza Gillani", "Asif Ali Zardari"],
        answer: "canberra"
      }
  ];
  
  var currentQuestion = 0; 
  var currentScore = 0;
  

  var quizContainer = document.querySelector(".quiz-container");
  var questionDisplay = document.querySelector(".question");
  var answerList = document.querySelector(".answer-list");
  var score = document.querySelector(".quiz-score");
  
  
  var createQuizQuestion = quizQuestion => {
    createQuestionText(quizQuestion.questionText);
    createAnswerButtons(quizQuestion.answerOptions);
  };
  
  var createQuizScore = () => {
    questionDisplay.style.display = "none";
    answerList.style.display = "none";

    score.style.display = "block";
    score.textContent =
      "You scored " + currentScore + " out of " + quizQuestions.length;
  };
  
  var createQuestionText = questionText => {
 
    questionDisplay.textContent = "Q)" + questionText;
  };
  
  var createAnswerButtons = answerOptions => {
    
    answerList.innerHTML = "";
  
 
    answerOptions.map(answerOption => {
 
      var answerItemDiv = document.createElement("div");
      answerItemDiv.className = "answer-item";
  
   
      var answerButton = document.createElement("button");
      answerButton.textContent = answerOption;
  

      handleAnswerButtonClick();
  
      answerButton.addEventListener("click", () => {
       
        var question = quizQuestions[currentQuestion];

        if (question.answer === answerButton.textContent) {
          currentScore += 1;
        }
  
    
        currentQuestion += 1;
  
        if (quizQuestions[currentQuestion]) {
          createQuizQuestion(quizQuestions[currentQuestion]);
        } else {
          createQuizScore();
        }
      });
  
      
      answerItemDiv.appendChild(answerButton);
  
      answerList.appendChild(answerItemDiv);
    });
  };
  
  var handleAnswerButtonClick = answerButton => {};
  
  (function() {
    createQuizQuestion(quizQuestions[0]);
  })();
  