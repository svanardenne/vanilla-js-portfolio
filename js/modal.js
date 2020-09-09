/* ============================================= */
/*               Modal Container                 */
/* ============================================= */

const overlay = document.querySelector('.overlay');
const modalWindow = document.querySelector('.modal-container');
const projectLink = document.querySelector('.project-link');


//Adds modal window to screen on click
projectLink.addEventListener('click', () => {
    overlay.style.display = "block";
});


//Removes modal window when the user clicks outside of the modal window
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.style.display = "none";
    }
});