
// button 
let contactButton = document.getElementById('button');

const changeColor = () => {
  contactButton.style.backgroundColor = randomColor(); 
  contactButton.style.color = randomColor(); 
  document.body.style.backgroundColor = randomColor();
}

let randomColor = () => {
  let color = '#'
  let rbg = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  while(color.length < 7) {
    color += (rbg[Math.floor(Math.random() * 16)]);
  }
  return color;
}

// H2 TRANSFORM 
let subheading = document.getElementById('subheading');
// const transformHeading = () => {
//   subheading.style.fontSize = "35px"
//   subheading.style.backgroundColor = randomColor();
// }


// EVENT LISTENER
contactButton.addEventListener('click', function () {
  let twoSeconds = 2 * 1000

  setTimeout(function() {
    subheading.style.fontSize = "35px"
    subheading.style.backgroundColor = randomColor();
  }, twoSeconds)  
})


