/****** VARIABLES ******/

const navMenu =  document.getElementById('nav-menu');
const navBtn = document.getElementById('nav-btn');

/****** FUNCTIONS ******/


function showNavMenu() {
    console.log('button clicked')
    navMenu.classList.toggle('hidden');
    navBtn.classList.toggle('active-btn');
};


/****** EVENT LISTENERS ******/

navBtn.addEventListener('click', showNavMenu);
    

