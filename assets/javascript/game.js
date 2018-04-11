game = function() {

  let qArray = [];
  let score = 0;
  let minScore = 0;
  let timer = 0;
  let q = '';
  let used5050 = false;
  let usedJump = false;
  let usedDouble = false;
  let x2 = false;
  let objTimer

  setupGame = function() {
    objTimer ? clearInterval(objTimer) : '';
    qArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14];
    score = 0;
    minScore = 0;
    timer = 30;
    used5050 = false;
    usedJump = false;
    usedDouble = false;
    $('#questionBox').html('<img id="startButton" src="assets/images/startButton.png" />');
    $('.answerBox').removeClass("correct");
    $('.answerBox').text("answers go here");
    $('#timeBox').text(timer);
    // $('#5050Box').html('<img src="assets/images/unused5050.png" />')
    // $('#jumpBox').html('<img src="assets/images/unusedjump.png" />')
    // $('#doubleBox').html('<img src="assets/images/unusedDouble.png" />')
    $('#startButton').on("click", displayNextQuestion);
  }

  countTime = function() {
    timer--;
    $('#timeBox').text(timer);
    timer === 0 ? loseGame() : '';
  }

  displayNextQuestion = function() {
    objTimer ? clearInterval(objTimer) : '';
    $('#scoreBox').text("$" + score);
    timer = 30;
    $('#timeBox').text(timer);
    q = qArray.shift();
    console.log(q.correctAnswer());
    $('#questionBox').text(q.question);
    $('#answerABox').text(q.answer1);
    $('#answerBBox').text(q.answer2);
    $('#answerCBox').text(q.answer3);
    $('#answerDBox').text(q.answer4);
    objTimer = setInterval(countTime, 1000)

  }

  showCorrect = function() {
    let arr = ['#answerABox', '#answerBBox', '#answerCBox', '#answerDBox'];
    for (i = 0; i < arr.length; i++) {
      if ($(arr[i]).text() === q.correctAnswer()) {
        $(arr[i]).addClass("correct");
        arr.splice(i, 1);
        break;
      }
    }
    for (i = 0; i < arr.length; i++) {
      $(arr[i]).text("");
    }
    setTimeout(function() {
      $('.answerBox').removeClass("correct");
    }, 2000);
  }

  winGame = function() {
    showCorrect();
    $('#questionBox').html("<h1>CONGRATULATIONS!\n$1,000,000")
    setupGame();
  }

  loseGame = function() {
    showCorrect()
    $('#questionBox').text("I'm sorry that was incorrect.")
    if (minScore > 0) {
      $('#questionBox').append("\nBUT you're leaving with " + minScore);
    }
    setTimeout(setupGame, 2000);
  }

  evaluateAnswer = function(response) {
    clearInterval(objTimer);
    if (response === q.correctAnswer()) {
      score = q.value;
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
      showCorrect();
      setTimeout(displayNextQuestion, 2000);
    } else {
      if (x2) {
        x2 = false;
        return;
      }
      loseGame();
      return;
    }

  }

  doubleDip = function() {
    if (usedDouble) {
      return;
    }
    console.log("doubleDip");
    usedDouble = true;
    x2 = true;
  }

  fiftyFifty = function() {
    if (used5050) {
      return;
    }
    console.log("5050");
    used5050 = true;
    let arr = ['#answerABox', '#answerBBox', '#answerCBox', '#answerDBox'];
    for (i = 0; i < arr.length; i++) {
      if ($(arr[i]).text() === q.correctAnswer()) {
        arr.splice(i, 1);
        break;
      }
    }
    let elt = Math.floor(Math.random() * arr.length);
    arr.splice(elt, 1);
    for (i = 0; i < arr.length; i++) {
      $(arr[i]).text("");
    }
  }

  jump = function() {
    if (usedJump) {
      return;
    }
    usedJump = true;
    displayNextQuestion();
  }

  setupGame();

  $('.answerBox').on("click", function() {
    evaluateAnswer($(this).text());
  });

  $('#5050Box').on("click", fiftyFifty);
  $('#jumpBox').on("click", jump);
  $('#doubleBox').on("click", doubleDip);
}

game()
