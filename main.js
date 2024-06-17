const fs = require('fs');

const filePath = process.argv[2];

function readFileAsync(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(`Error reading file ${filePath}: ${err}`);
        return;
      }
      resolve(data);
    });
  });
}

function modifyText(text) {
  return new Promise((resolve, reject) => {
    // Convert text to uppercase
    const upperCaseText = text.toUpperCase();
    // Reverse the text
    const reversedText = upperCaseText.split('').reverse().join('');
    resolve(reversedText);
  });
}

// Main logic
readFileAsync(filePath)
  .then((data) => modifyText(data))
  .then((modifiedText) => {
    console.log("Modified Text:");
    console.log(modifiedText);
  })
  .catch((error) => {
    console.error(error);
  });
