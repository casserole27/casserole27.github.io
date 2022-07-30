function catAge(humanYears) {
    let catYears;
    
    if (humanYears === 1) {
        catYears = 15;
    } else if (humanYears === 2) {
        catYears = 24;
    } else if (humanYears >= 3) {
        catYears = (humanYears - 2) * 4 + 24; 
    } 

    return catYears;
};

let reveal = document.getElementById('submit-info');
//let revealAge = document.getElementById('placeholder');
let revealCatImage = document.getElementById('cat-image');

function revealInfo() {
    revealCatImage.style.display = 'block';
}

reveal.addEventListener('click', revealInfo);

