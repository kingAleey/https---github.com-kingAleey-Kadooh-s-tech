const rediretButton = document.getElementById('buttonreset')
const popupMessage = document.getElementById('popup-message')
const okButton = document.getElementById('ok-botton')
const redirectUrl = 'index.html';

rediretButton.addEventListener('click', () => {
    popupMessage.style.display = 'block';
});

okButton.addEventListener('click', () => {
    popupMessage.style.display ='none';
    window.location.href = redirectUrl;
});