game = function() {

  let money = []
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
    stopTime();
    gameRunning = false;
    qArray = pool;
    score = 0;
    minScore = 0;
    timer = 30;
    used5050 = false;
    usedJump = false;
    usedDouble = false;
    $('#questionBox').html('<h1>Start</h1>');
    $('#questionBox').addClass("starting");
    $('.answerBox').removeClass("correct right chosen active");
    $('.lifeline').removeClass("used paused");
    $('.answerBox').text("");
    $('#scoreBox').text("$0");
    $('#timeBox').text(timer);
    $('#5050Box').removeClass("used");
    $('#jumpBox').removeClass("used");
    $('#doubleBox').removeClass("used");
    $('#questionBox').on("click", displayNextQuestion);
  }

  startTime = function() {
    objTimer = setInterval(countTime, 1000);
  }

  countTime = function() {
    timer--;
    $('#timeBox').text(timer);
    timer === 0 ? loseGame() : '';
  }

  stopTime = function() {
    clearInterval(objTimer);
  }

  displayNextQuestion = function() {
    !gameRunning ? gameRunning = true : '';
    stopTime();
    console.log(money)
    $('#questionBox').off("click");
    $('.answerBox').off("click");
    $('#questionBox').removeClass("starting");
    $('.lifeline, .answerBox').addClass("paused");
    $('#scoreBox').text("$" + score);
    $('.answerBox').text("");
    timer = 30;
    $('#timeBox').text(timer);
    let qIndex = Math.floor(Math.random() * qArray.length);
    q = qArray[qIndex];
    qArray.splice(qIndex, 1);
    q.value = money.shift();
    console.log(q.correctAnswer());
    $('#questionBox').text(q.question);
    setTimeout(function() {
      $('#answerABox').text(q.answer1);
      $('#answerABox').addClass("active");
    }, 1000);
    setTimeout(function() {
      $('#answerBBox').text(q.answer2);
      $('#answerBBox').addClass("active");
    }, 2000);
    setTimeout(function() {
      $('#answerCBox').text(q.answer3);
      $('#answerCBox').addClass("active");
    }, 3000);
    setTimeout(function() {
      $('#answerDBox').text(q.answer4);
      $('#answerDBox').addClass("active");
    }, 4000);
    setTimeout(function() {
      startTime()
      $('.lifeline, .answerBox').removeClass("paused");
      $('.lifeline, .answerBox').addClass("active");
      $('.answerBox').on("click", function() {
        $(this).addClass("chosen");
        let response = $(this).text();
        setTimeout(function() {
          evaluateAnswer(response);
        }, 1000)
      });
    }, 4000);
  }

  showCorrect = function() {
    let arr = ['#answerABox', '#answerBBox', '#answerCBox', '#answerDBox'];
    for (i = arr.length - 1; i >= 0; i--) {
      if ($(arr[i]).text() === q.correctAnswer()) {
        if ($(arr[i]).hasClass("chosen")) {
          $(arr[i]).removeClass("chosen");
          $(arr[i]).addClass("correct");
        } else {
          $(arr[i]).addClass("right");
        }
        arr.splice(i, 1);
      }
      $(arr[i]).removeClass("chosen");
    }
    for (i = 0; i < arr.length; i++) {
      $(arr[i]).removeClass("active");
      $(arr[i]).text("");
    }
    setTimeout(function() {
      $('.answerBox').removeClass("correct right chosen active");
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
    stopTime();
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
      x2 ? x2 = false : '';
      setTimeout(displayNextQuestion, 2000);
    } else {
      if (x2) {
        x2 = false;
        startTime()
        return;
      }
      loseGame();
      return;
    }
    $('#5050Box').hasClass("paused") ? $('#5050Box').removeClass("paused") : '';
    $('#jumpBox').removeClass("paused") ? $('#jumpBox').removeClass("paused") : '';

  }

  doubleDip = function() {
    if (usedDouble || !gameRunning || $('#doubleBox').hasClass("paused")) {
      return;
    }
    $('#doubleBox').addClass("used");
    console.log("doubleDip");
    stopTime();
    !$('#5050Box').hasClass("used") ? $('#5050Box').addClass("paused") : '';
    !$('#jumpBox').hasClass("used") ? $('#jumpBox').addClass("paused") : '';
    usedDouble = true;
    x2 = true;
  }

  fiftyFifty = function() {
    if (used5050 || !gameRunning || $('#5050Box').hasClass("paused")) {
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
    if (usedJump || !gameRunning || $('#jumpBox').hasClass("paused")) {
      return;
    }
    $('#jumpBox').addClass("used");
    usedJump = true;
    money.unshift(q.value)
    displayNextQuestion();
  }

  setupGame();

  $('#5050Box').on("click", fiftyFifty);
  $('#jumpBox').on("click", jump);
  $('#doubleBox').on("click", doubleDip);


}

game()
