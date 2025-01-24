const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
const increaseBtn = document.getElementById('increase');
const countLabel = document.getElementById('countLabel');
let count = 0;

// increaseBtn.onclick = function() {
//     count += 1;
//     countLabel.textContent = count;
// }

// decreaseBtn.onclick = function() {
//     count -= 1;
//     countLabel.textContent = count;
// }

// resetBtn.onclick = function() {
//     count = 0;
//     countLabel.textContent = count;
// }


// using add eventlistener
decreaseBtn.addEventListener('click', function() {
    count -= 1;
    countLabel.textContent = count;
})

increaseBtn.addEventListener('click', function() {
    count += 1;
    countLabel.textContent = count;
})

resetBtn.addEventListener('click', function() {
    count = 0;
    countLabel.textContent = count;    
})