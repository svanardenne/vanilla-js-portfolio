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
        projectLink: "http://svanardenne.github.io/techdegree-project-1",
        projectTitle: "Personal Profile",
        projectImage: "img/project-1.png",
        projectText: 'A personal profile page utilizing basic HTML and CSS.'
    },
    {
        projectLink: "http://svanardenne.github.io/techdegree-project-2",
        projectTitle: "Mobile-First Responsive Layout",
        projectImage: "img/project-2.png",
        projectText: 'Personal profile page utilizing floats and media queries for layout and fixed positioning for a sticky footer.'
    },
    {
        projectLink: "http://svanardenne.github.io/techdegree-project-3",
        projectTitle: "Personal Profile",
        projectImage: "img/project-3.png",
        projectText: 'A personal profile page utilizing basic HTML and CSS'
    },
    {
        projectLink: "http://svanardenne.github.io/techdegree-project-4",
        projectTitle: "Personal Profile",
        projectImage: "img/project-4.png",
        projectText: 'A personal profile page utilizing basic HTML and CSS'
    },
    {
        projectLink: "http://svanardenne.github.io/techdegree-project-5",
        projectTitle: "Personal Profile",
        projectImage: "img/project-5.png",
        projectText: 'A personal profile page utilizing basic HTML and CSS'
    },
    {
        projectLink: "http://svanardenne.github.io/techdegree-project-6",
        projectTitle: "Personal Profile",
        projectImage: "img/project-6.png",
        projectText: 'A personal profile page utilizing basic HTML and CSS'
    },
    {
        projectLink: "http://svanardenne.github.io/techdegree-project-7",
        projectTitle: "Personal Profile",
        projectImage: "img/project-7.png",
        projectText: 'A personal profile page utilizing basic HTML and CSS'
    },
    {
        projectLink: "http://svanardenne.github.io/techdegree-project-8",
        projectTitle: "Personal Profile",
        projectImage: "img/project-8.png",
        projectText: 'A personal profile page utilizing basic HTML and CSS'
    }
]


/* ============================================= */
/*                  Functions                    */
/* ============================================= */

//Creates card content and adds it to the innerHTML of the "Projects" Section
function createCards() {
    let inner = '';
    for (let i = 0; i < projectArray.length; i++) {
        let projectLink = projectArray[i].projectLink;
        let projectTitle = projectArray[i].projectTitle;
        let projectImage = projectArray[i].projectImage;
        let projectText = projectArray[i].projectText;
        inner += `
            <div class="project" data-index="${i}">
                <h3 class="project-title">${projectTitle}</h3>
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
            <a class="project-link" href="${projectLink}" target="_blank">
                <h3 class="project-title">${projectTitle}</h3>
                <img src="${projectImage}">
                <p class="project-text">${projectText}</p>
            </a>
            <span class="left-arrow"><</span>
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
    overlay.style.display = "block";
    modalWindow.innerHTML = displayModal(0);
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
                console.log(modalIndex);
                overlay.style.display = "block";
                modalWindow.innerHTML = displayModal(i);
            }
        }
    });
}

//Removes modal window when the user clicks outside of the modal window
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.style.display = "none";
    }
});

// Create slideshow functionality for the modal card
modalWindow.addEventListener('click', (e) => {
    const rightArrow = document.querySelector('.right-arrow');
    const leftArrow = document.querySelector('.left-arrow');
    if (e.target === rightArrow) {
        if (modalIndex < 7) {
            modalIndex++;
            modalWindow.innerHTML = displayModal(modalIndex);
        } else if (modalIndex === 7) {
            modalIndex = 0;
            modalWindow.innerHTML = displayModal(modalIndex);
        }
    } else if (e.target === leftArrow) {
        if (modalIndex > 0) {
            modalIndex--;
            modalWindow.innerHTML = displayModal(modalIndex);
        } else if (modalIndex === 0) {
            modalIndex = 7;
            modalWindow.innerHTML = displayModal(modalIndex);
        }
    }
});
