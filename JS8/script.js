const canvas = document.querySelector('#draw')
//ctx = where we do all of our drawings for our canvas.
//getContextキャンパスに描画するためのコンテキスト(CanvasRenderingContext2Dオブジェクトなど)を取得するメソッド
const ctx =　canvas.getContext('2d') //絵を描く部分のことで、contextと呼ばれる

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 50;

let isDrawing = false;
//indicates Where do you start the line from? & Where do you end?
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

//called whenever I move my mouse on top of the canvas.
function draw(e) {
    if(!isDrawing) return;//stop the function from running when they are not moused down
    console.log(e)
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();//reset current Path
    ctx.moveTo(lastX, lastY);//新しいサブパス(パスを構成する線の一本)の開始点を座標指定する
    ctx.lineTo(e.offsetX, e.offsetY);//座標を指定してラインを引く
    ctx.stroke();//現在のパスを輪郭表示する
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++;
    if(hue >= 360) {
        hue = 0;
    }
    //lineWidth 1 to 100, flip the direction 1=>100, 100=>1
if(ctx.lineWidth >= 50 || ctx.lineWidth <= 1) {
    direction = !direction;
}
if(direction) {// same as if direction is true
    ctx.lineWidth++;//if direction is true
} else {
    ctx.lineWidth--;//if direction is true
}
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
//マウスが画面外に行った場合
canvas.addEventListener('mouseout', () => isDrawing = false);


console.log("hello ryuichi");
console.log("hello masayuki");
console.log("hello heyheyheyhey");

console.log("gotoubunnohanayome");