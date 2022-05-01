const button = document.querySelector('.signupbtn')
const focus = document.getElementById('focus')
const clicked = document.getElementById('clicked')
const inputs = document.querySelectorAll('input')
button.addEventListener('mouseover', () => {
    button.style.cssText = "border-color: var(--yellowy-color);border: 3px solid;"
    focus.currentTime = 0;
    focus.play();

})
button.addEventListener('mouseout', () => {
    button.style.cssText = "border=0;"
})
button.addEventListener('click', () => {
    clicked.currentTime = 0;
    clicked.play();
})

inputs.forEach((input) => {
    input.addEventListener('mouseover', () => {
        focus.currentTime = 0;
        focus.play();
        input.style.cssText = "outline-color: var(--yellowy-color);"
    
    })
})


