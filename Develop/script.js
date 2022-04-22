
// Date and Time Display
let currentDate = document.getElementById('currentDay')
setInterval(function() {
    currentDate.textContent = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
}, 1000)

// Save Task Button click on function

let saveTaskBtn = document.getElementById('btn')
saveTaskBtn.addEventListener('click', function(){
    console.log('You clicked')
})


