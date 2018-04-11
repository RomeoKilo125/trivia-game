game = function() {

  let qArray = [];
  let score = 0;
  let minScore = 0;
  let timer = 0;
  let q = '';
  setupGame = function() {
    qArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14];
    score = 0;
    minScore = 0;
    timer = 30;
    $('#questionBox').html('<img id="startButton" src="assets/images/startButton.png" />');
    $('.answerBox').text("answers go here");
    $('#5050Box').html('<img src="assets/images/unused5050.png" />')
    $('#jumpBox').html('<img src="assets/images/unusedjump.png" />')
    $('#doubleBox').html('<img src="assets/images/unusedDouble.png" />')
  }

  displayNextQuestion = function() {
    q = qArray.shift();
    $('#questionBox').text(q.question);
    $('#answerABox').text(q.answer1);
    $('#answerBBox').text(q.answer2);
    $('#answerCBox').text(q.answer3);
    $('#answerDBox').text(q.answer4);
    // setInterval(1000)

  }

  winGame = function() {
    alert("congratulations! you win!");
  }

  loseGame = function() {
    alert("you are the weakest link, good bye!");
  }

  evaluateAnswer = function(response) {
    if (response === q.correctAnswer()) {
      score = q.value;
      timer = 30;
      switch (q.value) {
        case 5000:
        case 10000:
          minScore = q.value;
          break;
        case 1000000:
          winGame();
          return;
          break;
        default:
      }
      displayNextQuestion();
    } else {
      if (x2) {
        x2 = false;
        return;
      }
      loseGame();
      return;
    }

  }

  setupGame();

  $('#startButton').on("click", displayNextQuestion);

  $('.answerBox').on("click", function() {
    evaluateAnswer($(this).text());
  });

}

game()
