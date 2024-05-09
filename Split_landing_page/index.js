const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');


section1.addEventListener('mouseenter', function(){
    section1.style.width = '70%';
    section2.style.width = '30%';
});


section2.addEventListener('mouseenter', function(){
    section2.style.width = '70%';
    section1.style.width = '30%';
});

document.body.addEventListener('mouseleave', function() {
    section1.style.width = '50%';
    section2.style.width = '50%';
});