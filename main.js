//Let's encrypt some strings

var switchPosition = 0;
function switchType() {
  if (switchPosition == 0) {
    document.getElementById('message-field').type = 'password';
    document.getElementById('hide-option').innerHTML = "a";
    switchPosition++;
  }else if (switchPosition == 1) {
    document.getElementById('message-field').type = 'text';
    document.getElementById('hide-option').innerHTML = "*";
    switchPosition--;
  }else{
    alert('WTF is going on...')}}

var radioPosition = 0;
$(".encrypt-container-right input[name=algo]").click(function(){
  radioPosition = ($("input[name='algo']:checked").val());
  console.log(radioPosition);
  if (radioPosition == 2) {
    $(".cipher-dropdown").css({"display": "table-row"})
  }else {
    $(".cipher-dropdown").css({"display": "none"})
  }
});

// Babby's first secret language
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ']

var numberCode = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11',
 '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22',
 '23', '24', '25', '26', '27']

 var kurwat = ['KUrwA', 'kurWa', 'kuRWA', 'Kurwa', 'kUrwa', 'KurWa', 'kurwA', 'KURWA', 'KUrWA',
'kurwa', 'KuRwA', 'KurWA', 'KurwA', 'kurWA', 'KURWa', 'KUrwa', 'kuRwA', 'KuRWA',
'KURwA', 'hinger', 'hingeR', 'hingEr', 'hinGer', 'hiNger', 'hInger', 'Hinger', 'rosta']

function encryptor(){ // first info from field and into lowercase symbols
  let message = document.getElementById('message-field').value.toLowerCase();
  let letterArray = message.split(""); // this breaks the message into an array

  if (radioPosition == 1) {
    let cryptedMessage = babbyAlgo(letterArray);
    console.log('Mik vittu'+cryptedMessage);
    document.getElementById('encrypted').innerHTML = cryptedMessage;
  }else if (radioPosition == 2){
    let cryptedMessage = caesarCipher(letterArray);
    document.getElementById('encrypted').innerHTML = cryptedMessage;
  }else if (radioPosition == 3){
    let cryptedMessage = kurwaTor(letterArray);
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
        cryptedMessage.push(numberCode[j]+" "); // adds value to array +"separator"
      } // end of if
    } // end of var j for-loop
  } // end of first for-loop
  cryptedMessage = cryptedMessage.join("");
  return cryptedMessage;
} // end of babbyAlgo


function decryptor(){ // This is the button
  let message = document.getElementById('decrypt-field').value; // info from input
  let numberArray = message.split(" "); // this breaks the message into an array
  if (radioPosition == 1) {
    let decryptedMessage = babbyDeAlgo(numberArray);
    document.getElementById('decrypted').innerHTML = decryptedMessage;
  }else if (radioPosition == 3) {
    let decryptedMessage = deKurwaTor(numberArray);
    document.getElementById('decrypted').innerHTML = decryptedMessage;
  }else{
    document.getElementById('decrypted').innerHTML = "Something is not right.";
  }
}

function babbyDeAlgo(x){
  console.log("BabbyDeAlgo online");
  let decryptedMessage = [];
  for (var i = 0; i < x.length; i++) {
    for (var j = 0; j < numberCode.length; j++) {
      if (x[i] == numberCode[j]) { // this creates the new array
        decryptedMessage.push(alphabet[j]+""); // adds value to array
      } // end of if
    } // end of var j for-loop
  } // end of first for-loop
  console.log(decryptedMessage);
  decryptedMessage = decryptedMessage.join("");
  return decryptedMessage;
}

function caesarCipher(x){
  let cipherArray = alphabet;
  let cryptedMessage = [];
  let cipherKey = 4;
  for (var i = 0; i < cipherKey; i++) {
  cipherArray.splice(0, 0, cipherArray.pop());
  }
  console.log(cipherArray);
  for (var i = 0; i < x.length; i++) {
    for (var j = 0; j < cipherArray.length; j++) {
      if (x[i] == cipherArray[j]) { // this creates the new array
        cryptedMessage.push(cipherArray[j-1]); // adds value to array
      } // end of if
    } // end of var j for-loop
  } // end of first for-loop
  console.log(cryptedMessage);
  return cryptedMessage;
}

function kurwaTor(x){
  console.log("O KURWA!");
  let cryptedMessage = [];
  for (var i = 0; i < x.length; i++) {
    for (var j = 0; j < alphabet.length; j++) {
      if (x[i] == alphabet[j]) { // this creates the new array
        cryptedMessage.push(kurwat[j]+" "); // adds value to array +"separator"
      } // end of if
    } // end of var j for-loop
  } // end of first for-loop
  cryptedMessage = cryptedMessage.join("");
  return cryptedMessage;
}

function deKurwaTor(x){
  console.log("kurwa...");
  let decryptedMessage = [];
  for (var i = 0; i < x.length; i++) {
    for (var j = 0; j < kurwat.length; j++) {
      if (x[i] == kurwat[j]) { // this creates the new array
        decryptedMessage.push(alphabet[j]+""); // adds value to array
      } // end of if
    } // end of var j for-loop
  } // end of first for-loop
  decryptedMessage = decryptedMessage.join("");
  return decryptedMessage;
}

// EOF
