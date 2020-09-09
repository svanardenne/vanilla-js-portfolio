/* ============================================= */
/*                 Navigation                    */
/* ============================================= */

const nav = document.querySelector(".nav");
const html = document.getElementById('html');

// Removes the navigation panel from the header when the user
// scrolls down the page
let prevScrollpos = window.pageYOffset;
window.addEventListener('scroll', (e) => {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos && window.innerWidth < 768) {
        nav.style.display ="block";
    } else {
        nav.style.display ="none";
    }
    if (nav.style.display === "none" && window.innerWidth < 768) {
        html.style.marginTop = '140px';
    } else if (nav.style.display === "block" && window.innerWidth < 768) {
        html.style.marginTop = '320px';
    }
    prevScrollpos = currentScrollPos;
});