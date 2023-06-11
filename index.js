/****** VARIABLES ******/

const navMenu =  document.getElementById('nav-menu');
const navBtn = document.getElementById('nav-btn');

/****** FUNCTIONS ******/


function showNavMenu() {
    navMenu.classList.toggle('hidden');
    navBtn.classList.toggle('active-btn');
};


/****** EVENT LISTENERS ******/

navBtn.addEventListener('click', showNavMenu);
    

