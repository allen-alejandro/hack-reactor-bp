
// ------- BUTTON 1 ---------
let contactButton1 = document.getElementById('button1');

const changeColor = () => {
  contactButton1.style.backgroundColor = randomColor(); 
  contactButton1.style.color = randomColor(); 
  document.body.style.backgroundColor = randomColor();
}

// --------- RANDOM COLOR FUNCTION ---------
let randomColor = () => {
  let color = '#'
  let rbg = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  while(color.length < 7) {
    color += (rbg[Math.floor(Math.random() * 16)]);
  }
  return color;
}

// --------- H2 TRANSFORM ---------
let subheading = document.getElementById('subheading');
// const transformHeading = () => {
//   subheading.style.fontSize = "35px"
//   subheading.style.backgroundColor = randomColor();
// }


// ---------BUTTON 1 EVENT LISTENER ---------
contactButton1.addEventListener('click', function () {
  let twoSeconds = 2 * 1000

  setTimeout(function() {
    subheading.style.fontSize = "35px"
    subheading.style.backgroundColor = randomColor();
  }, twoSeconds)  
})


// ------- BUTTON 2 (WHOA) EVENT LISTENER ---------
let button2 = document.getElementById('button2');
let title = document.getElementById('title')
let counter = document.getElementById('counter')

button2.addEventListener('click', function() {
  let count = 0; 
  button2.innerHTML = 'STOP'

  let myTimer = setInterval(() => {
    count++
    title.style.backgroundColor = randomColor()
    counter.innerHTML = count; 
    if (count >= 15) {
      clearInterval(myTimer)
    }
  }, 200);

  contactButton1.addEventListener('click', function () {
    clearInterval(myTimer)
    button2.innerHTML = 'START'
  })
  
})





