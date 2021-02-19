const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

speed.addEventListener('mousemove', function(e) {
    const y = e.pageY - this.offsetTop;//バー内の現在の高さ
    const percent = y / this.offsetHeight;
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent * 100) + '%';
    bar.style.height = height;
    const playbackRate = percent * (max - min) + min;//max値とmin値の範囲でパーセンテージに対応した数値が欲しい時の書き方
    bar.textContent = playbackRate.toFixed(2) + 'x';//小数点第二位まで
    video.playbackRate = playbackRate
})