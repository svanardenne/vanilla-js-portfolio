/* ============================================= */
/*                 Navigation                    */
/* ============================================= */

const nav = document.querySelector(".nav");

// Removes the navigation panel from the header when the user
// scrolls down the page
window.addEventListener('scroll', (e) => {
    let offset = window.pageYOffset;
    if (offset > 0 && window.innerWidth < 768) {
        nav.style.display ="none";
    } else {
        nav.style.display ="block";
    }
});
