let countdown;
const timerDisplay = document.querySelector('.display__time-left')
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]')

function timer(seconds) {
    //clear any existing timers
    clearInterval(countdown);

    const now = Date.now();//give us the current timestamp in milliseconds
    const then = now + seconds * 1000;// then: when it stops
    displayTimeLeft(seconds);//run this immediately once => 開始時点での秒数を表示する(setIntervalがrunするのに１秒かかるため)
    displayEndTime(then);//終わりの時間
    

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);//残りの秒数
        //check if we should stop it
        if(secondsLeft < 0) {
            clearInterval(countdown); //setIntervalを止めるために、ただreturnするのではなくcountdownに store this intervalする
            return;
        }
        //display it
        displayTimeLeft(secondsLeft)
    }, 1000)
}
//Date.now() メソッドは、UTC (協定世界時) での 1970 年 1 月 1 日 0 時 0 分 0 秒 から現在までの経過時間をミリ秒単位で返します。
//setIntervalについて
// it does not run immediately. It has to wait for the first second to elapse. => runするのに１秒かかる

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;// % => 余りを求める => 秒数を求める
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;//10秒未満(一桁秒)の場合、10の位を0にする
    document.title = display;
    timerDisplay.textContent = display;
}

//showing the ending time
function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const adjustedHour = hour > 12 ? hour - 12 : hour;
    const minutes = end.getMinutes();
    endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer() {
    const seconds = parseInt(this.dataset.time);// turn into a real number
    timer(seconds)

}

buttons.forEach(button => button.addEventListener('click', startTimer))

//HTML line17の部分をdocument.name名(今回はcustomForm)で取れる
document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minutes.value;// HTML line18(input)のvalue
    this.reset();
    timer(mins * 60);// timer needs seconds
})