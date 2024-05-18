const toggleMenu = document.querySelector('.toggle-menu')
const openMenu = document.querySelector('ul');
const toggleMenuIcon = document.querySelector('.toggle-menu i');

toggleMenu.onclick = function() {
    openMenu.classList.toggle('responsive');

    const isOpen = openMenu.classList.contains('responsive');

    if(isOpen) {
        toggleMenuIcon.classList = 'fa-solid fa-xmark';
    } else {
        toggleMenuIcon.classList = 'fa-solid fa-bars'
    }
}