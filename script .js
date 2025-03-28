const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});


function showPopup(content) {
    document.getElementById('popup-content').innerText = content;
    document.getElementById('popup').style.display = 'block';
}
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}



document.querySelector('a[href="#data-side"]').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    document.querySelector('section').scrollIntoView({
        behavior: 'smooth', 
        block: 'start' 
    });
});


document.querySelector('a[href="#radio-side"]').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    document.querySelector('section').scrollIntoView({
        behavior: 'smooth', 
        block: 'start' 
    });
});
    