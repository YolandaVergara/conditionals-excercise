const nameButton = document.querySelector(".button");
const inputName = document.querySelector(".name");
const questionButton = document.querySelector(".button-question");

function getName() {
  const name = inputName.value;
  const welcome = document.querySelector(".say-hello");
  const welcomeName = (name === "") ? welcome.innerHTML = `Bienvenid@, invitad@` : welcome.innerHTML = `Bienvenid@, ${name}`;
};

const randomNumber = function () {
  return Math.floor(Math.random() * 8);
};

const answerQuestion = function () {
  const answer = document.querySelector(".answer");

  switch (randomNumber()) {
    case 0:
      answer.innerHTML = 'It is certain';
      break;
    case 1:
      answer.innerHTML = 'It is decidedly so';
      break;
    case 2:
      answer.innerHTML = 'Reply hazy try again';
      break;
    case 3:
      answer.innerHTML = 'Cannot predict now';
      break;
    case 4:
      answer.innerHTML = 'Do not count on it';
      break;
    case 5:
      answer.innerHTML = 'My sources say no';
      break;
    case 6:
      answer.innerHTML = 'Outlook not so good';
      break;
    case 7:
      answer.innerHTML = 'Signs point to yes';
      break;
    default:
      answer.innerHTML = 'Invalid answer';
  }
};

nameButton.addEventListener("click", getName);
questionButton.addEventListener("click", answerQuestion);