/* ============================================= */
/*                 Navigation                    */
/* ============================================= */

const html = document.getElementById('html');
const mainHeader = document.querySelector('.main-header');

// Toggles the navigation panel when the user
// scrolls up or down on mobile screens
if (window.innerWidth < 768) {
    let prevScrollpos = window.pageYOffset;
    window.addEventListener('scroll', () => {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            mainHeader.style.maxHeight = '362px';
        } else {
            mainHeader.style.maxHeight = '80px';
        }
        prevScrollpos = currentScrollPos;
    });
}