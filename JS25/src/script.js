//Capture→何かを行った時に大きい要素から小さい要素の順に要素をキャプチャする
//Bubble→イベントを小さい要素から大きい要素の順に行っていく

//event capturing(capture): when you click on the element, it's going to ripple down. it actually goes from the top down, and then it captures all of those events,

//bubbling: it starts at the bottom, and then starts doing something called a bubble.
// if you're listening for a click on multiple nested elements, in this case, we're listening for a click on three, two, one, and bod, then it's going to trigger a click on all of those

//イベントが起こるまでの、captureとbubbleの順序
//the capture goes from top down, and then the events...the events haven't fired　yet. It just captures where you clicked,and is storing them. Then it will start to bubble up, which means that it's triggering the events as you go up.

//propagation: e.stopPropagation() => Stop bubbling this event up. I clicked the one that I actually wantedの意味


const divs = document.querySelectorAll('div');

function logText(e) {
    console.log(this.classList.value)
    // e.stopPropagation();// stop bubbling!
}

divs.forEach(div => {
    div.addEventListener('click', logText, {
        capture: false,// 3rd argument
        once: true//
    })
});
//capture: trueの場合 => run the function on the way down(上位の要素から順にfunctionする　今回やとone => three)
////capture: falseの場合 => run the function on the way up(下位の要素から順にfunctionする　今回やとthree => one) falseがデフォルト

//once: trueの場合：一度しかイベントを発動しない(ページリロードで元に戻る)
