/*

Notes to author: 
1.
In catAge(), I changed === to ==, to allow numbers and strings be comparable.
Using === was returning 'undefined' when the age was set to 1 or 2. Maybe === is too literal? 

2.
Changed your revealInfo() function to be part of a bigger one, that reveals the cat image,
but also calculates the age (using catAge()), and then post that result to the page by changing the innerHTML of your paragraph element.

3.
The age calculation doesn't quite update when you write a new value.
Unless you put a value into the box and THEN reload the page.
Not sure how to fix this. It kind of links into note 4, about resetting the form, without having to reload the page.

4.
TO DO -
I think you wanted a way to reset the page. This should be easy enough to do.
Make a "reset" button, and when you click it, run a new function that changes all the values back to their defaults.

*/

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
//let revealAge = document.getElementById('placeholder');
let revealCatImage = document.getElementById('cat-image');

function revealInfo() {
    revealCatImage.style.display = 'block';
}

let userInput = document.getElementById('input-box').value;

function runProgramme() {
    revealInfo();
    let ageInCatYears = catAge(userInput);
    let ageString = `Your cat is ${ageInCatYears} years old.`;
    document.getElementById('placeholder').innerHTML = ageString;
}

reveal.addEventListener('click', runProgramme);
