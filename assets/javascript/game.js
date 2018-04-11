game = function() {
  let qArray = [];
  let minScore = 0;
  let timer = 0;

  setupGame = function() {
    qArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14];
    minScore = 0;
    timer = 30;
    $('#questionBox').html('<img src="../images/startButton.png" />');
    $('.answerBox').text("");
    $('#5050Box').html('<img src="../images/unused5050.png" />')
    $('#jumpBox').html('<img src="../images/unusedjump.png" />')
    $('#doubleBox').html('<img src="../images/unusedDouble.png" />')
  }

  displayNextQuestion = function() {
    q = qArray.shift();
    $('#questionBox').text(q.question);
    $('#answerABox').text(q.answer1);
    $('#answerBBox').text(q.answer2);
    $('#answerCBox').text(q.answer3);
    $('#answerDBox').text(q.answer4);

  }

  setupGame();
}

game()
