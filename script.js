const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const encryptButton = document.getElementById('encryptButton');
const decryptButton = document.getElementById('decryptButton');


function encryptText(text) {
  let encryptedText = '';
  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) { 
      encryptedText += String.fromCharCode(((charCode - 65 + 3) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) { 
      encryptedText += String.fromCharCode(((charCode - 97 + 3) % 26) + 97);
    } else {
      encryptedText += text[i];
    }
  }
  return encryptedText;
}


function decryptText(text) {
  let decryptedText = '';
  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) { 
      decryptedText += String.fromCharCode(((charCode - 65 - 3 + 26) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      decryptedText += String.fromCharCode(((charCode - 97 - 3 + 26) % 26) + 97);
    } else {
      decryptedText += text[i];
    }
  }
  return decryptedText;
}


function textToBinary(text) {
  let binaryText = '';
  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i);
    binaryText += charCode.toString(2).padStart(8, '0') + ' ';
  }
  return binaryText.trim();
}


encryptButton.addEventListener('click', () => {
  const inputValue = inputText.value;
  const encryptedValue = encryptText(inputValue);
  const binaryEncryptedValue = textToBinary(encryptedValue);
  outputText.value = binaryEncryptedValue;
});


decryptButton.addEventListener('click', () => {
  const inputValue = inputText.value;
  const decryptedValue = decryptText(inputValue);
  const binaryDecryptedValue = textToBinary(decryptedValue);
  outputText.value = binaryDecryptedValue;
});