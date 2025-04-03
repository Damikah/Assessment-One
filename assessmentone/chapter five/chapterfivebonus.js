function playSound(id) {
    const sound = document.getElementById(id);
    sound.currentTime = 0; // restart the sound if it is already playing
    sound.play();}