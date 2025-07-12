const romanticText = document.getElementById('romanticText');
const romanticPart = document.getElementById('romantic-part');
const middlePart = document.getElementById('middle-part');
const seductivePart = document.getElementById('seductive-part');
const seductiveText = document.getElementById('seductiveText');
const romanticMusic = document.getElementById('romanticMusic');
const seductiveMusic = document.getElementById('seductiveMusic');
const continueBtn = document.getElementById('continueBtn');

const romanticLines = [
  "From the moment I met you...",
  "You changed my world...",
  "You made my life beautiful...",
  "I love you so much ❤️"
];

const seductiveLines = [
  "Your touch drives me crazy...",
  "I want to feel you, slowly...",
  "You're mine. Only mine...",
  "I want you. Now. Here. 🔥",
  "Now show me how much you ",
  "love me❤️",
  "Kiss me as harder and ",
  "deeper as you can💋"
];

let romanticIndex = 0;

function typeRomanticText() {
  if (romanticIndex < romanticLines.length) {
    romanticText.innerText += romanticLines[romanticIndex] + "\n";
    romanticIndex++;
    setTimeout(typeRomanticText, 2000);
  } else {
    // Show middle part after romantic lines are done
    setTimeout(() => {
      romanticPart.classList.remove('active');
      middlePart.classList.add('active');
    }, 1000);
  }
}

typeRomanticText();

// Continue button from middle to seductive part
continueBtn.addEventListener('click', () => {
  middlePart.classList.remove('active');
  seductivePart.classList.add('active');
  romanticMusic.pause();
  seductiveMusic.play();
  showSeductiveLines();
});

function showSeductiveLines() {
  seductiveText.innerHTML = '';
  seductiveLines.forEach((line, i) => {
    setTimeout(() => {
      const div = document.createElement('div');
      div.className = 'seductive-line';
      div.textContent = line;
      seductiveText.appendChild(div);
    }, i * 2500);
  });
}
