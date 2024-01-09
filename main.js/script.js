var quotes = [
  "“Be the change that you wish to see in the world“.― Mahatma Gandhi",
"“In three words I can sum up everything I've learned about life: it goes on.”― Robert Frost",
"“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”― Maya Angelou",
"“A friend is someone who knows all about you and still loves you.”― Elbert Hubbard",
"“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”― Martin Luther King Jr.",
"“Live as if you were to die tomorrow. Learn as if you were to live forever.”― Mahatma Gandhi",
"“We accept the love we think we deserve.”― Stephen Chbosky,",
"“Without music, life would be a mistake.”― Friedrich Nietzsche.",
"“It is better to be hated for what you are than to be loved for what you are not.”― Andre Gide.",
"“Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.”― Bill Keane"];
   

function addQuotes(){
  var select=Math.floor(Math.random()*10);
  console.log(select);
  var oldNumber=select;
  do{select = Math.floor(Math.random()*10)}
  while (oldNumber===select);
  oldNumber = select
document.getElementById('demo').innerHTML=quotes[select];

}


