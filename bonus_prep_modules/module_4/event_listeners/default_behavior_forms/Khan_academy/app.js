


// Step 1: Find the element we want the event on
// Step 2: Define the event listener function
// Step 3: Attach event listener to element

/*
// PROCESSING FORMS AND EVENTS EXERCISE

  let button = document.getElementById('button'); 
  

  let onButtonClick = function () {
    let name = document.getElementById('name').value;
    let language = document.getElementById('lang').value;
    document.getElementById('message').textContent = `${name} speaks ${language}!` 
  }

  button.addEventListener('click', onButtonClick); 

  */


/*

// Mad Libs Challenge

let libButton = document.getElementById('lib-button');

let libIt = function () {
  let noun = document.getElementById('noun').value; 
  let adjective = document.getElementById('adjective').value; 
  let person = document.getElementById('person').value;
  let storyDiv = document.getElementById("story");
  storyDiv.textContent = `${noun} ${adjective} ${person}`; 
};

libButton.addEventListener('click', libIt);

 */


let ohnoesEl = document.getElementById("ohnoes");
let audioEl = document.createElement("audio");

const onOhNoesClick = function (event) {
  event.preventDefault();
  audioEl.src = 'https://www.kasandbox.org/programming-sounds/rpg/giant-no.mp3'; 
  audioEl.autoplay = true; 
  document.body.appendChild(audioEl)
}

ohnoesEl.addEventListener("click", onOhNoesClick);