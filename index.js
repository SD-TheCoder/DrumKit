function playSound(alphabet) {
    if (alphabet == 'w') {
        let sound1 = new Audio('sounds/crash.mp3');
        sound1.play();
    } else if (alphabet == 'a') {
        let sound2 = new Audio('sounds/kick-bass.mp3');
        sound2.play();
    } else if (alphabet == 's') {
        let sound3 = new Audio('sounds/snare.mp3');
        sound3.play();
    } else if (alphabet == 'd') {
        let sound4 = new Audio('sounds/tom-1.mp3');
        sound4.play();
    } else if (alphabet == 'j') {
        let sound5 = new Audio('sounds/tom-2.mp3');
        sound5.play();
    } else if (alphabet == 'k') {
        let sound6 = new Audio('sounds/tom-3.mp3');
        sound6.play();
    } else if (alphabet == 'l') {
        let sound7 = new Audio('sounds/tom-4.mp3');
        sound7.play();
    }
}

let allBtns = document.querySelectorAll('.drum');
allBtns = Array.from(allBtns);
for (let i in allBtns) {
    allBtns[i].addEventListener('click', function (event) {
        let letter_that_I_click = event.target.innerHTML;
        playSound(letter_that_I_click);
        buttonAnimation(letter_that_I_click);
    })
}

document.addEventListener('keydown', function (event) {
    let key_pressed = event.key;
    playSound(key_pressed);
    buttonAnimation(key_pressed);
})


function buttonAnimation(keys_) {
    let final_key_toStyle = document.querySelector("." + keys_);
    final_key_toStyle.classList.add('pressed');
    setTimeout(function () {
        final_key_toStyle.classList.remove('pressed');
    }, 100)
}