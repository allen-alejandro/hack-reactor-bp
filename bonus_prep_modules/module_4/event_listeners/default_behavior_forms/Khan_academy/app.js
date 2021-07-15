


// Step 1: Find the element we want the event on
// Step 2: Define the event listener function
// Step 3: Attach event listener to element


  let button = document.getElementById('button'); 
  

  let onButtonClick = function () {
    let name = document.getElementById('name').value;
    let language = document.getElementById('lang').value;
    document.getElementById('message').textContent = `${name} speaks ${language}!` 
  }

  button.addEventListener('click', onButtonClick); 