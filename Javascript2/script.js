const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate() {
    const now = new Date();

    //前提として、360(度)＝１周→degreeが360で一周になる
    // 下の+90は　.handのtransform: rotate(90deg)(デフォルト位置)を足しているもの
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;//
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;//((seconds/60)*6)はminshand刻み要因(minshandが1分あたりで急に動くのを防ぐ)
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + (mins/60 * 30) + 90;//(mins/60 * 30)はhourhand刻み要因(hourhandが1時間あたりで急に動くのを防ぐ)
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    console.log(seconds)

}

setInterval(setDate, 1000);//setDateを1000ms(1秒)ごとに繰り返す

setDate();