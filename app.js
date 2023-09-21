function generateRandomHexCode() {
  let characters = "0123456789ABCDEF";
  let hexCode = "#";

  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * 16);
    hexCode += characters[randomIndex];
  }

  return hexCode;
}

let randomHexCode = generateRandomHexCode();
console.log(randomHexCode); // Exempel: #2FA8E6

function generateAlphabet() {
  for (let i = 65; i <= 90; i++) {
    // ASCII-koderna för A till Z
    let letter = String.fromCharCode(i);

    let hex = generateRandomHexCode();
    // console.log(letter);
    let div = document.createElement("div");

    div.classList.add("box");

    div.innerHTML += `<h1> ${letter} </h1>`;

    div.style.backgroundColor = hex;

    const parentDiv = document.getElementById("allBoxes");

    parentDiv.appendChild(div);
  }
}

generateAlphabet();
