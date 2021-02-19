const slider = document.querySelector('.items');
let isDown = false;//クリックされているかどうかのvaluable
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;//slider.offsetleft => .items(slider)の空間とそこより外側(左)の部分の空白部分のこと
    scrollLeft = slider.scrollLeft;//Element.scrollLeft プロパティは、要素の内容が左端からスクロールするピクセル数を取得または設定します。
    console.log(scrollLeft)
})
slider.addEventListener('mouseleave', () =>{
    isDown = false;
    slider.classList.remove('active');
})
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
})
slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;// stop the function
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;//how far have we deviated from that initial space(every pixel moved, you're gonna scroll the slider 2 pixels)
    console.log(walk)
    console.log({x ,startX})
    slider.scrollLeft = scrollLeft - walk;
});

//scrollLeftについて
// 8:51~ The other thing we need to log at the time of click is the scroll. Because let's say I'm scrolled 200 pixels in and then I want to scroll to the left and to the right of this div. Then we need to figure out where the initial scroll was when we started it. And that's what this other variable is for, which is scroll left


