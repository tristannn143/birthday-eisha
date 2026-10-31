const birthdaySong = document.getElementById("birthdaySong");

function openLetter() {
    document.getElementById("letter").style.display = "flex";
    document.getElementById("overlay").style.display = "block";
}

function closeLetter() {
    document.getElementById("letter").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function showCake() {
    document.getElementById("letter").style.display = "none";
    document.getElementById("cakePopup").style.display = "flex";

    birthdaySong.currentTime = 0;
    birthdaySong.play();
}

function closeCake() {
    document.getElementById("cakePopup").style.display = "none";
    document.getElementById("overlay").style.display = "none";

    birthdaySong.pause();
    birthdaySong.currentTime = 0;
}

function playMusic() {
    birthdaySong.play();
}

function pauseMusic() {
    birthdaySong.pause();
}