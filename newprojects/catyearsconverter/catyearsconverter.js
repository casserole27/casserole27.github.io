function catAge(humanYears) {
    let catYears;
    
    if (humanYears == 1) {
        catYears = 15;
    } else if (humanYears == 2) {
        catYears = 24;
    } else if (humanYears >= 3) {
        catYears = (humanYears - 2) * 4 + 24; 
    } 

    return catYears;
};

let reveal = document.getElementById('submit-info');

function revealInfo() {
    let revealCatImage = document.getElementById('cat-image');
    revealCatImage.style.display = 'block';
    let userInput = document.getElementById('input-box').value;
    let ageInCatYears = catAge(userInput);
    let ageString = `Your cat is ${ageInCatYears} years old.`;
    document.getElementById('placeholder').innerHTML = ageString;
    
}

reveal.addEventListener('click', revealInfo);

