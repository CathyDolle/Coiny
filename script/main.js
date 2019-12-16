/*`
WELCOME
*/
// Slider Welcome
const welcomeSlider1 = document.querySelector('.js-welcome-slider-1')
const welcomeSlider2 = document.querySelector('.js-welcome-slider-2')
const welcomeSlider3 = document.querySelector('.js-welcome-slider-3')
// SubTitle
const welcomeSubtitle = document.querySelector('.js-welcome-subtitle')
// Picture
const welcomePicture = document.querySelector('.js-welcome-picture')
// Text
const welcomeText = document.querySelector('.js-welcome-text')
// Description
const welcomeDescription = document.querySelector('.js-welcome-description')

welcomeSlider1.addEventListener('click', () => {
    welcomeSlider1.style.background = "white"
    welcomeSlider2.style.background = "rgba(0, 0, 0, 0.171)"
    welcomeSlider3.style.background = "rgba(0, 0, 0, 0.171)"
    // subtitle
    welcomeSubtitle.innerHTML = "Helping those in need"
    // picture
    welcomePicture.src = "images/welcome.svg"
    // description
    welcomeDescription.classList.remove('hidden')
    // text
    welcomeText.classList.add('hidden')
})

welcomeSlider2.addEventListener('click', () => {
    welcomeSlider2.style.background = "white"
    welcomeSlider3.style.background = "rgba(0, 0, 0, 0.171)"
    welcomeSlider1.style.background = "rgba(0, 0, 0, 0.171)"
    // subtitle
    welcomeSubtitle.innerHTML = "Helping made <br> Easier"
    // picture
    welcomePicture.src = "images/welcome2.svg"
    // description
    welcomeDescription.classList.add('hidden')
    // text
    welcomeText.classList.remove('hidden')
})

welcomeSlider3.addEventListener('click', () => {
    welcomeSlider3.style.background = "white"
    welcomeSlider2.style.background = "rgba(0, 0, 0, 0.171)"
    welcomeSlider1.style.background = "rgba(0, 0, 0, 0.171)"
})