/* ============================================= */
/*                   Projects                    */
/* ============================================= */

const projects = document.getElementById('projects');
const overlay = document.querySelector('.overlay');
const modalWindow = document.querySelector('.modal-container');
const projectLink = document.querySelector('.project-link');
let modalIndex = 0;

//Array with project card info
const projectArray = [
    {
        projectLink: "http://svanardenne.github.io/elder-gods-brewing",
        projectTitle: "React.js Landing Page",
        projectImage: "img/elder-gods-landing.png",
        projectText: 'Landing page created with React.js and Bootstrap'
    },
    {
        projectLink: "http://svanardenne.github.io/fullstack-project-5",
        projectTitle: "Employee Directory",
        projectImage: "img/employee-directory.png",
        projectText: 'An employee directory with information generated randomly from randomuser.me using the Fetch API'
    },
    {
        projectLink: "http://svanardenne.github.io/fullstack-project-2",
        projectTitle: "Student Directory",
        projectImage: "img/fs-project-2.png",
        projectText: 'A student directory using data pagination and filtering techniques'
    },
    {
        projectLink: "http://svanardenne.github.io/fullstack-project-4",
        projectTitle: "Phrase Hunter",
        projectImage: "img/fs-project-4.png",
        projectText: 'Word guessing game created using JavaScript classes'
    },
    {
        projectLink: "http://svanardenne.github.io/techdegree-project-7",
        projectTitle: "Dashboard",
        projectImage: "img/project-7.png",
        projectText: 'A dashboard designed with focus on CSS grid, CSS flexbox, Chart.js, and overall Javascript interactivity.'
    },
    {
        projectLink: "http://svanardenne.github.io/techdegree-project-5",
        projectTitle: "Interactive Photo Gallery",
        projectImage: "img/project-5.png",
        projectText: 'An interactive photo gallery utilizing Jquery, Sass, and a Lightbox plugin'
    },
    {
        projectLink: "http://svanardenne.github.io/fullstack-project-1",
        projectTitle: "Random Quote Generator",
        projectImage: "img/fs-project-1.png",
        projectText: 'A random quote generator using arrays, object literals; complete with timer'
    },
    {
        projectLink: "http://svanardenne.github.io/techdegree-project-3",
        projectTitle: "Online Registration Form",
        projectImage: "img/project-3.png",
        projectText: 'A responsive form using flexbox'
    }
]


/* ============================================= */
/*                  Functions                    */
/* ============================================= */

//Creates card content and adds it to the innerHTML of the "Projects" Section
function createCards() {
    let inner = '';
    for (let i = 0; i < projectArray.length; i++) {
        let projectTitle = projectArray[i].projectTitle;
        let projectImage = projectArray[i].projectImage;
        let projectText = projectArray[i].projectText;
        inner += `
            <div class="project" data-index="${i}">
                <h4 class="project-title">${projectTitle}</h4>
                <img src="${projectImage}">
                <p class="project-text">${projectText}</p>
            </div>
        `
    }
    if (projects) {
        projects.innerHTML = inner;
    }
}

//Modal Content
function displayModal(index) {
    let content = '';
    let projectLink = projectArray[index].projectLink;
    let projectTitle = projectArray[index].projectTitle;
    let projectImage = projectArray[index].projectImage;
    let projectText = projectArray[index].projectText;
    content += `
        <div class="project">
            <div class="modal-content-container">
                <h2 class="project-title">${projectTitle}</h3>
                <img class="project-image" src="${projectImage}" alt="${projectTitle}">
                <p class="project-text">${projectText}</p>
                <a class="modal-link" href="${projectLink}" target="_blank">Project Page</a>
            </div>
            <span class="left-arrow">&lt;</span>
            <span class="right-arrow">></span>
        </div>
    `
    return content;
}


/* ============================================= */
/*               Modal Container                 */
/* ============================================= */

//Calls createCards on page load
window.addEventListener('load', createCards());

//Adds modal window to screen on click for the project link
projectLink.addEventListener('click', () => {
    modalIndex = 0;
    overlay.style.display = "block";
    setTimeout(() => {
        overlay.style.opacity = "1";
    }, 100);
    modalWindow.innerHTML = displayModal(modalIndex);
});

//Adds modal window to screen on click for the project cards
const project = document.getElementsByClassName('project');
if (projects) {
    projects.addEventListener('click', (e) => {
        let click = e.target.parentNode;
        for (let i = 0; i < project.length; i++) {
            if (click === project[i]) {
                const card = e.target.closest(".project");
                const index = card.getAttribute('data-index');
                modalIndex = index;
                overlay.style.display = "block";
                setTimeout(() => {
                    overlay.style.opacity = "1";
                }, 100);
                modalWindow.innerHTML = displayModal(i);
            }
        }
    });
}

//Removes modal window when the user clicks outside of the modal window
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.style.opacity = "0";
        setTimeout(() => {
            overlay.style.display = "none";
        }, 500);
    }
});

// Create slideshow functionality for the modal card
modalWindow.addEventListener('click', (e) => {
    const rightArrow = document.querySelector('.right-arrow');
    const leftArrow = document.querySelector('.left-arrow');
    if (e.target === rightArrow) {
        if (modalIndex < projectArray.length -1) {
            modalIndex++;
            modalWindow.innerHTML = displayModal(modalIndex);
        } else if (modalIndex == projectArray.length -1) {
            modalIndex = 0;
            modalWindow.innerHTML = displayModal(modalIndex);
        }
    } else if (e.target === leftArrow) {
        if (modalIndex > 0) {
            modalIndex--;
            modalWindow.innerHTML = displayModal(modalIndex);
        } else if (modalIndex == 0) {
            modalIndex = projectArray.length -1;
            modalWindow.innerHTML = displayModal(modalIndex);
        }
    }
});
