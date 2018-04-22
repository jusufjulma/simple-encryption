//Let's encrypt some strings

var switchPosition = 0;
function switchType() {
  if (switchPosition == 0) {
    document.getElementById('message-field').type = 'password';
    document.getElementById('hide-option').innerHTML = "I want to see it.";
    switchPosition++;
  }else if (switchPosition == 1) {
    document.getElementById('message-field').type = 'text';
    document.getElementById('hide-option').innerHTML = "I want it hidden!";
    switchPosition--;
  }else{
    alert('WTF is going on...')}
}

// Babby's first secret language
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ']

var numberCode = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11',
 '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22',
 '23', '24', '25', '26', '27']

function encryptor(){ // first info from field and into lowercase symbols
  let message = document.getElementById('message-field').value.toLowerCase();
  console.log(message+' - this is where we start');
  let letterArray = message.split(""); // this breaks the message into an array
  console.log(letterArray);

  let question = prompt("Give your preferred encryption method: \
  1 - Babby's first \
  2 - lol no other options");
  if (question == 1) {
    let cryptedMessage = babbyAlgo(letterArray);
    document.getElementById('encrypted').innerHTML = cryptedMessage;

  }else{
    alert("Kamoon hei.")} // end of method choice

} // end of encryptor

function babbyAlgo(x){
  console.log("Babby chosen.");
  let cryptedMessage = [];
  console.log(x);
  for (var i = 0; i < x.length; i++) {
    for (var j = 0; j < alphabet.length; j++) {
      if (x[i] == alphabet[j]) { // this creates the new array
        cryptedMessage.push(j+1+" "); // adds value to array
      } // end of if
    } // end of var j for-loop
  } // end of first for-loop
  cryptedMessage = cryptedMessage.join("");
  return cryptedMessage;
} // end of babbyAlgo


function decryptor(){
  let message = document.getElementById('decrypt-field').value; // info from input
  let numberArray = message.split(" "); // this breaks the message into an array
  console.log(numberArray);
  let decryptedMessage = babbyDeAlgo(numberArray);
  document.getElementById('decrypted').innerHTML = decryptedMessage;
}

function babbyDeAlgo(x){
  console.log("BabbyDeAlgo online");
  let decryptedMessage = [];
  for (var i = 0; i < x.length; i++) {
    for (var j = 0; j < numberCode.length+1; j++) {
      if (x[i] == j) { // this creates the new array
        decryptedMessage.push(alphabet[j-1]); // adds value to array
      } // end of if
    } // end of var j for-loop
  } // end of first for-loop
  console.log(decryptedMessage);
  decryptedMessage = decryptedMessage.join("");
  // decryptedMessage = decryptedMessage.trim(" ");
  console.log(decryptedMessage);
  return decryptedMessage;

}


// EOF
