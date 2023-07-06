var questions = [
    {
        question: "Html stands for _____________",
        option: ["hyper markup", "JS", "hyper text markup language", "cascading style sheet"],
        correctAns: "hyper text markup language"
    },
    {
        question: "JS stands for _____________",
        option: ["java script", "hyper text markup language", "css", "html"],
        correctAns: "java script"
    },
    {
        question: "CSS stands for _____________",
        option: ["cascading style sheet", "hyper text markup language", "Java Script", "html"],
        correctAns: "cascading style sheet"
    },

    {
        question: "RAM stands for _____________",
        option: ["random access memoery", "hyper text markup language", "html", "html"],
        correctAns: "random access memoery"
    },
    {
        question: "ROM stands for _____________",
        option: ["read only memory", "hyper text markup language", "html", "html"],
        correctAns: "read only memory"
    }
]

var currentQueNo = document.getElementById("currentQueNo");
var totalQues = document.getElementById("totalQues");
var dispQuestion = document.getElementById("dispQuestion");
var answerParent = document.getElementById("answerParent");
var indexVal = 0;

function renderQue() {
    var obj = questions[indexVal];
    dispQuestion.innerHTML = obj.question;
    totalQues.innerHTML = questions.length;
    currentQueNo.innerHTML = indexVal + 1;

    for (var i = 0; i < obj.option.length; i++) {
        answerParent.innerHTML += `<div class = "col-md-6">
        <div class = "py-2">
        <button onclick = "chkAns ('${obj.correctAns}' , '${obj.option[i]}' )" class="btn btn-primary fs-5 w-100">${obj.option[i]}</button>
        </div>
        </div>`;

    }
}

function nextQue() {
    indexVal++;
    renderQue();
}
function chkAns(a, b) {
    if (a == b) {
        marks = marks + 1;
    }
    console.log(marks);
    nextQue();
}
renderQue();