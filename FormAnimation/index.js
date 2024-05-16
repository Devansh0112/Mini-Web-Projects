const createAccountBtn = document.getElementById('create-account-btn');
const alreadyAccountBtn = document.getElementById('already-have-account');
const block = document.getElementById('shadow');

createAccountBtn.addEventListener('click', function(){
    block.style.transitionDuration = '0.5s';
    block.style.left = '769px';
});

alreadyAccountBtn.addEventListener('click', function(){
    block.style.left = '217px';
});