const dropdown = document.getElementById('Option-head');
const dropdownMenu = document.getElementById('dropdown-content');
const closeTab = document.getElementById('close-tab');
const spinDropdown = document.getElementById('spin-dropdown');
const changeBackground = document.getElementById('change-background');
const container = document.getElementById('dropdown');

var i = 0;
const backgrounColors = [
    "linear-gradient(to bottom, #1a1a66, #004d99, #0099cc)",
    "linear-gradient(to bottom, #660033, #99004d, #cc0066)",
    "linear-gradient(to bottom, #004d66, #0080cc, #00bfff)",
];

var rotate = 0;


var isOpen = false;

dropdown.addEventListener('click', toggle = function () {
    if (isOpen) {
        dropdownMenu.style.transitionDuration = '0.5s';
        dropdownMenu.style.opacity = '0'; // Fade out the menu
        setTimeout(() => {
            dropdownMenu.style.display = 'none';
        }, 500); // Wait for the transition to complete before hiding
        isOpen = false;
    } else {
        dropdownMenu.style.display = 'block';
        setTimeout(() => {
            dropdownMenu.style.transitionDuration = '0.5s';
            dropdownMenu.style.opacity = '1';
        }, 10); // Wait for a small delay before starting the transition
        isOpen = true;
    }
});

closeTab.addEventListener('click', function(){
    window.close();
});

spinDropdown.addEventListener('click', function(){
    dropdownMenu.style.transitionDuration = '0.5s';
        dropdownMenu.style.opacity = '0'; // Fade out the menu
        setTimeout(() => {
            dropdownMenu.style.display = 'none';
            dropdown.removeEventListener('click', toggle);
            container.style.transitionDuration = '1s';
            rotate += 360;
            container.style.transform = `rotate(${rotate}deg)`;
            dropdown.addEventListener('click', toggle);
        }, 500); // Wait for the transition to complete before hiding
        isOpen = false;
});


changeBackground.addEventListener('click', function(){
    i = (i+1)%backgrounColors.length;
    document.body.style.background = backgrounColors[i];
});