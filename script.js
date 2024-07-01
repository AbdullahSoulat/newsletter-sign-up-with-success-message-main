const bannerImage = document.getElementById('banner-image');
const signUpCard = document.getElementById('sign-up-card');
const confirmationMsg = document.getElementById('confirmation-msg');
const inputEmail = document.getElementById('email');
const confirmedEmail = document.getElementById('confirmed-email');
const invalidEmailText = document.getElementById('invalid-email');

const greyColor = 'hsl(231, 7%, 60%)';
const accentColor = 'hsl(4, 100%, 67%)';
const lowOpacityAccent = 'hsla(4, 100%, 67%, 0.1)';
const whiteColor = '#fff';
const blackColor = '#000';

function changeImage() {
    if (window.innerWidth < 950) {
        bannerImage.src = 'assets/images/illustration-sign-up-mobile.svg';
    } else {
        bannerImage.src = 'assets/images/illustration-sign-up-desktop.svg';
    }
}

window.onresize = changeImage;
window.addEventListener('DOMContentLoaded', changeImage);

function dismissMsg() {
    confirmationMsg.classList.add("hidden");
    signUpCard.classList.remove("hidden");
}

function validateEmail() {
    const emailPattern =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
    correctSynatax = emailPattern.test(inputEmail.value);

    if (correctSynatax) {
        signUpCard.classList.add("hidden");
        confirmationMsg.classList.remove("hidden");
        invalidEmailText.classList.add("hidden");
        confirmedEmail.innerHTML = inputEmail.value;
        inputEmail.style.borderColor = greyColor;
        inputEmail.style.color = blackColor;
        inputEmail.style.backgroundColor = white;
    } else {
        invalidEmailText.classList.remove("hidden");
        inputEmail.style.borderColor = accentColor;
        inputEmail.style.backgroundColor = lowOpacityAccent;
        inputEmail.style.color = accentColor;
    }
};




