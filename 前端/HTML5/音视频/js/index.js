function init() {
    document._video = document.getElementById("video");
};
document.addEventListener("DOMContentLoaded", init, false);

function load() {
    document._video.load();
};
function play() {
    document._video.play();
};
function pause() {
    document._video.pause();
};
function currentTimePlusTen() {
    document._video.currentTime += 10;
};
function currentTimeMinusTen() {
    document._video.currentTime -= 10;
};
function currentTimeFifty() {
    document._video.currentTime = 50;
};
function playbackRatePlusPlus() {
    document._video.playbackRate++;
};
function playbackRateMinusMinus() {
    document._video.playbackRate--;
};
function playbackRatePlus() {
    document._video.playbackRate += 0.1;
};
function playbackRateMinus() {
    document._video.playbackRate -= 0.1;
};
function volumePlus() {
    document._video.volume += 0.1;
};
function volumeMinus() {
    document._video.volume -= 0.1;
};
function volumeMuted() {
    document._video.muted = true;
};
function volumePlay() {
    document._video.muted = false;
};