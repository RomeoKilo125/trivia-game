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
  let objTimer;
  let gameRunning = false;

  setupGame = function() {
    objTimer ? clearInterval(objTimer) : '';
    gameRunning = false;
    qArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14];
    score = 0;
    minScore = 0;
    timer = 30;
    used5050 = false;
    usedJump = false;
    usedDouble = false;
    $('#questionBox').html('<h1>Start</h1>');
    $('#questionBox').addClass("starting");
    $('.answerBox').removeClass("correct right chosen");

    $('.answerBox').text("");
    $('#scoreBox').text("$0");
    $('#timeBox').text(timer);
    $('#5050Box').removeClass("used");
    $('#jumpBox').removeClass("used");
    $('#doubleBox').removeClass("used");
    $('#questionBox').on("click", displayNextQuestion);
  }

  countTime = function() {
    timer--;
    $('#timeBox').text(timer);
    timer === 0 ? loseGame() : '';
  }

  displayNextQuestion = function() {
    !gameRunning ? gameRunning = true : '';
    objTimer ? clearInterval(objTimer) : '';
    $('#questionBox').off("click");
    $('#questionBox').removeClass("starting");
    $('#scoreBox').text("$" + score);
    timer = 30;
    $('#timeBox').text(timer);
    q = qArray.shift();
    console.log(q.correctAnswer());
    $('#questionBox').text(q.question);
    setTimeout(function() {$('#answerABox').text(q.answer1)}, 1000);
    setTimeout(function() {$('#answerBBox').text(q.answer2)}, 2000);
    setTimeout(function() {$('#answerCBox').text(q.answer3)}, 3000);
    setTimeout(function() {$('#answerDBox').text(q.answer4)}, 4000);
    objTimer = setTimeout(function() {setInterval(countTime, 1000)}, 4000);

  }

  showCorrect = function() {
    let arr = ['#answerABox', '#answerBBox', '#answerCBox', '#answerDBox'];
    for (i = 0; i < arr.length; i++) {
      if ($(arr[i]).text() === q.correctAnswer()) {
        if ($(arr[i]).hasClass("chosen")) {
          $(arr[i]).removeClass("chosen");
          $(arr[i]).addClass("correct");
        } else {
          $(arr[i]).addClass("right");
        }
        arr.splice(i, 1);
        break;
      }
      $(arr[i]).removeClass("chosen");
    }
    for (i = 0; i < arr.length; i++) {
      $(arr[i]).text("");
    }
    setTimeout(function() {
      $('.answerBox').removeClass("correct right chosen");
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
    if (usedDouble || !gameRunning) {
      return;
    }
    $('#doubleBox').addClass("used");
    console.log("doubleDip");
    usedDouble = true;
    x2 = true;
  }

  fiftyFifty = function() {
    if (used5050 || !gameRunning) {
      return;
    }
    $('#5050Box').addClass("used");
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
    if (usedJump || !gameRunning) {
      return;
    }
    $('#jumpBox').addClass("used");
    usedJump = true;
    displayNextQuestion();
  }

  setupGame();

  $('.answerBox').on("click", function() {
    $(this).addClass("chosen");
    let response = $(this).text();
    setTimeout(function() {
      evaluateAnswer(response);
    }, 1000)
  });

  $('#5050Box').on("click", fiftyFifty);
  $('#jumpBox').on("click", jump);
  $('#doubleBox').on("click", doubleDip);
}

game()
