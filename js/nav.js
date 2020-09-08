/* ============================================= */
/*                 Navigation                    */
/* ============================================= */

const nav = document.querySelector(".nav");
const html = document.getElementById('html');

console.log(html)

// Removes the navigation panel from the header when the user
// scrolls down the page
window.addEventListener('scroll', (e) => {
    let offset = window.pageYOffset;
    if (offset > 0 && window.innerWidth < 768) {
        nav.style.display ="none";
    } else {
        nav.style.display ="block";
    }
    if (nav.style.display === "none" && window.innerWidth < 768) {
        html.style.marginTop = '140px';
    } else if (nav.style.display === "block" && window.innerWidth < 768) {
        html.style.marginTop = '320px';
    }
});



