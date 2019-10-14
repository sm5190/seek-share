database = firebase.database();

  var ref = database.ref('messages');
  ref.on('value', gotData);
  function gotData(data) {

    var scorelistings = selectAll('.scorelisting');
   for (var i = 0; i < scorelistings.length; i++) {
     scorelistings[i].remove();
  }

  //console.log(data.val());
  var messages = data.val();
  var keys = Object.keys(messages);
  //console.log(keys);
  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
    var initials = messages[k].name;
    var score = messages[k].message;
    //console.log(initials, score);
    var li = createElement('TR', '<tr><td>'+initials  +'</td><td>' + score +'</td></tr>');
    li.class('scorelisting');
    li.parent('scorelist');
  }
}
function draw() {
  background(0);
  textAlign(CENTER);
  textSize(32);
  fill(255);
  text(score, width / 2, height / 2);
}
