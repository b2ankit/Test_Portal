function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("Who is the “Father of Computer” ?", ["Barbara Liskov", "Larry Page","Elon Musk", "Charles Babbage"], "Charles Babbage"),
    new Question("Which city is also called as Pink City in India ?", ["Kolkata", "Bihar", "Jaipur", "Delhi"], "Jaipur"),
    new Question("When we can cross the road ?", ["Red Signal", "Yellow Signal","Green Signal", "Black Signal"], "Green Signal"),
    new Question("Which of the following fruits has no seed ?", ["Watermelon", "Guava", "Orange ", "Banana"], "Banana"),
    new Question("Chandigarh is famous for ________ ?", ["Rivers", "Mountains", "Rose Garden", "All of the above"], "Rose Garden"),
    new Question("Which of the following is not a blood group ?",["A","B","O","K"],"K"),
    new Question("Which state is famous for Beaches in India ?",["Mumbai","Goa","Adaman","shillong"],"Goa"),
    new Question("65×65= _____ ?",["4225","4125","4025","4325"],"4225"),
    new Question("Who is the richest person in India ?",["Lakshmi Mittal","Ratan Tata","Mukesh Ambani","Anil Ambani"],"Mukesh Ambani"),
    new Question("Choose the correct answer, Khasmir is a: ______ ?",["Village","Union Territory","Metropolitan","None of these"],"Union Territory")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();