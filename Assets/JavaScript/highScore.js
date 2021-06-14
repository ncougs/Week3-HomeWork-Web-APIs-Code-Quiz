var displayHighScoreEL = document.querySelector("#displayHighScores");
var goBackEL = document.querySelector("#restartQuiz");
var resetScoresEL = document.querySelector("#clearScores");


function addHighScores () {

    var counter = 1;

    var highScores = JSON.parse(localStorage.getItem("highScoreList"));

    if (highScores == null) {
        return;
    }
    else {

        highScores.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
        
        highScores.forEach(element => {

            var newListEL = document.createElement("li");
            newListEL.textContent = counter + ".    " +  element.initials.toUpperCase().trim() + " - " + element.score; 
            newListEL.setAttribute("class", "highScore");
        
            displayHighScoreEL.appendChild(newListEL);

            counter = counter + 1;
        });
    return;
    };
};

function goBack () {
    location.href = "index.html";   
};

function resetScores () {
    localStorage.setItem("highScoreList", null);

    var scoreListEL =  document.querySelectorAll(".highScore");

    if (scoreListEL.length === 0) {
        return;
    }
    else {

        for (i=0; i < scoreListEL.length; i++) {
            scoreListEL[i].remove();
        };

    };
return;    
};



addHighScores()
goBackEL.addEventListener("click", goBack);
resetScoresEL.addEventListener("click", resetScores);

