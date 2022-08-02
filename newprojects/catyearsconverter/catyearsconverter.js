let placeholder = document.getElementById('placeholder');

function catAge(humanYears) {
    let catYears;
    
    if (humanYears === 1 || humanYears === 0) {
        catYears = 15;
    } else if (humanYears === 2) {
        catYears = 24;
    } else if (humanYears >= 3) {
        catYears = (humanYears - 2) * 4 + 24;
    } else if (humanYears < 0) {
        document.getElementById('input-box').value = "How about a paw-sitive number?"   
    } else {
        document.getElementById('input-box').value = "Stop kitten around and enter a number!"
    } 
     
    return catYears;
};

let reveal = document.getElementById('submit-info');
let revealCatImage = document.getElementById('cat-image');

function revealInfo() {
    revealCatImage.style.display = 'block';
    let userInput = document.getElementById('input-box').value;
    let ageInCatYears = catAge(userInput);
    let ageString = `Your cat is ${ageInCatYears} years old.`;
    placeholder.innerHTML = ageString;
     
}

reveal.addEventListener('click', revealInfo);

let reset = document.getElementById('reset-info');

function resetInfo() {
    document.getElementById('input-box').value = '';
    revealCatImage.style.display = 'none';
    document.getElementById('placeholder').innerHTML = '';
};

reset.addEventListener('click', resetInfo);

