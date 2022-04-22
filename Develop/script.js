
// Date and Time Display
let passDate = document.getElementById('currentDay')
let currentDate = moment().format('dddd, MMM Do YYYY');
let titleEl = document.getElementById('title')

setInterval(function() {
    passDate.textContent = moment().format('dddd, MMM Do YYYY');
    if (passDate > currentDate) {
        titleEl.style.backgroundColor = "red";
    } 
},






// // Save Task Button click on function

// let input = []

// let saveTaskBtn = document.getElementById('btn')
// saveTaskBtn.addEventListener('click', function(){
    
//     let inputTitle = document.getElementById('title').value
//     input.push(inputTitle)
    
//     localStorage.setItem('Mylist', JSON.stringify(input))
// })

console.log(currentDate)