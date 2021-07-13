
// iterate through table rows 
let table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
  let row = table.rows[i];
  row.cells[i].style.backgroundColor = 'red';
}


// button change body background color
let button = document.getElementById('button'); 

const changeColor = button.addEventListener('click', ()  => {
  document.body.style.backgroundColor = 'purple'
  document.body.style.color = 'white'
})


// create element 

let newArticle = document.createElement('article')

newArticle.innerHTML = 'I am an article about the awesomeness of the DOM'




document.body.insertBefore(newArticle, document.body.children[0]);


let secondArticle = newArticle.cloneNode(true); 
document.body.appendChild(secondArticle); 


// let nums = document.getElementsByClassName('badge')

// nums[0].innerText
// Number(nums[0].innerText) 
// element.classList.add("mystyle")

// CHANGE span inner text 
let nums = document.getElementsByClassName('badge')

for (let i = 0; i < nums.length; i++) {
  let num = Number(nums[i].innerText)
  if (num < 5) {
    nums[i].classList.add("badge-danger")
    nums[i].innerText += ' -----> badge-danger'
  } else if (num < 10) {
    nums[i].classList.add("badge-secondary")
    nums[i].innerText += ' -----> badge-secondary'
  } else {
    nums[i].classList.add("badge-danger")
    nums[i].innerText += ' -----> badge-danger'
  }
}

let danger = document.getElementsByClassName('badge-danger')
let secondary = document.getElementsByClassName('badge-secondary')
