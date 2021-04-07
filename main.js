// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
const hihat = new Audio('sounds/hi-hat.mp3');
const kickdrum = new Audio('sounds/kick-drum.mp3');
const snaredrum = new Audio('sounds/snare-drum.mp3');

let currentCount = 0;
// This function is called every 600ms
function update() {
const hiHat = document.querySelector ('#hi-hat');
const metronome = document.querySelector ('#metronome');
const kickDrum = document.querySelector ('#kick-drum');
const snareDrum = document.querySelector ('#snare-drum');

currentCount ++;



if (metronome.checked){
    if (currentCount % 4 === 0){
    tock.play();

} else {
    // Play the 'tick' sound
    tick.play();}
} else if (hiHat.checked){
    const timingInput = document.querySelector ('#hi-hat-timing')
    hiHat.play();
} else if (kickDrum.checked){
    kickdrum.play();
} else if (snareDrum.checked){
    snaredrum.play ();
}

const updatedMetronomeCount = document.querySelector ('#metronome-count');
updatedMetronomeCount.innerText = currentCount;
}


// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
