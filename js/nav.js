/* ============================================= */
/*                 Navigation                    */
/* ============================================= */

const nav = document.querySelector(".nav");
const html = document.getElementById('html');

// Toggles the navigation panel when the user
// scrolls up or down on mobile screens
if (window.innerWidth < 768) {
    let prevScrollpos = window.pageYOffset;
    window.addEventListener('scroll', () => {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
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
}