/* Get Our Elements */
const player = document.querySelector('.player');
//.playerの中身＝実質全てが上のコードによって取れることになる(だから下はplayer.query...になってる)
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build out functions */
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

console.log(video.currentTime)

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  console.log(icon);
  toggle.textContent = icon;
}

function skip() {
 video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;//currentTimeもdurationも元々videoが持ってるproperty(検証→elementsでvideoクリック→properties→videovideo.player__video.viewer)
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX/*バークリック時のx軸の長さ(relative)*/ / progress.offsetWidth/*バー全体の長さ */)/*0.5などの小数点でパーセント表示*/ * video.duration;//(e.offset..) ✖︎ video.duration(ビデオ全体の長さの数値)によってビデオ全体の長さからみたパーセンテージの部分までscrubされる
  video.currentTime = scrubTime;
}

/* Hook up the event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);//timeupdate イベントは、currentTime 属性で示される時刻が更新されたときに発生します。

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);