/* ============================================= */
/*                   Effects                     */
/* ============================================= */

const info = document.querySelector('.info');
const textContainer = document.querySelector('general-info');
const infoTitle = document.querySelector('.info-title');
const infoText = document.querySelector('.info-text');
const projectsContainer = document.querySelector('.projects');
const skillsContainer = document.querySelector('.skills');


//Changes opacity to 1
function opacityFull(element) {
    element.style.opacity = '1';
}

//Changes translateX to 0px
function translateXNeutral(element) {
    element.style.transform = "translateX(0px)";
}

//Changes translateY to 0px;
function translateYNeutral(element) {
    element.style.transform = "translateY(0px)";
}


window.addEventListener('load', () => {
    if (info) {
        opacityFull(info);
        translateYNeutral(infoTitle);
        setTimeout(() => {opacityFull(infoTitle)}, 1000);
        setTimeout(() => {opacityFull(infoText)}, 2000);
        translateXNeutral(projectsContainer);
        if (window.innerWidth >= 1024) {
            translateYNeutral(skillsContainer);
            translateXNeutral(projectsContainer);
        }
        if (window.innerWidth < 1024) {
            translateXNeutral(skillsContainer);
            translateYNeutral(projectsContainer);
        }
    }
    
});