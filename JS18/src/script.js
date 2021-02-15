//took timeNodes by Array
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));//厳密にはtimeNodesは配列ではないため

//mapped it which means I made it from an array of list items and into an array of strings.
const seconds = timeNodes.map(node => node.dataset.time)
.map(timeCode => {
    const [mins, secs] = timeCode.split(':').map(parseFloat);//split data-time into mins and seconds
    //parsefloatについて that will do is it's going to run the parse float function against every item(mins, secs) in the result array. そんでminsとsecsがstringなのをnumberに変える
    return (mins * 60) + secs;
}).reduce((total, vidseconds) => total + vidseconds)
//reduceメソッド => 配列データの各要素を累積して1つの値にする
//配列.reduce(function(累積値, 要素) { })
//returnの短縮系の書き方

//So our numbers are all adding up. Now we want to add them together. So how would I do that? Well, reduce is a really good way So if map takes in an array and exports an array, a reduce will take in an array and return anything you want. It could be a number, it could be a string, it could be an object. In our case, we are going to take all of these numbers and reduce them down into one big number

let secondsLeft = seconds;
let hours = Math.floor(secondsLeft / 3600);// Math.floor() 関数は与えられた数値以下の最大の整数を返す
secondsLeft = secondsLeft % 3600/*余りを出す */;// => 3538

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60/*余りを出す */;// => 3538
console.log(secondsLeft)



