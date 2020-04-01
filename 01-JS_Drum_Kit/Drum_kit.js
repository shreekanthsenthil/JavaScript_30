function add_transition(e) {
    var keycode = e.keyCode;
    const audio = document.querySelector('audio[data-key="'+ keycode + '"]');
    const key = document.querySelector('.key[data-key="'+ keycode + '"]');
    if(!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

function remove_transition(e) {
    if(e.propertyName !== 'transform') return;
    console.log(e.propertyName);
    e.target.classList.remove('playing');
}

window.addEventListener("keydown", add_transition);

const keys = document.querySelectorAll(".keys");
keys.forEach(key => key.addEventListener('transitionend',remove_transition));