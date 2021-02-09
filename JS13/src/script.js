function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

const sliderImages = document.querySelectorAll('.slide-in')

function checkSlide(e) {
    sliderImages.forEach(sliderImage => {
        //half way through the image
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        //bottom of the image
        const imageBottom = sliderImage.offsetTop + sliderImage.height;

        const isHalfShown = slideInAt > sliderImage.offsetTop;
        //slideInAtは sliderImage.heightの半分引いているため、上の式が成立する = 画像の半分を通過していることになる
        const isNotScrolledPast = window.scrollY < imageBottom;
        console.log(window.scrollY)
        console.log(imageBottom)
        //画像の半分を通過しており、かつ画像全体を過ぎ去っていない場合
        if(isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active');
        } else {
            sliderImage.classList.remove('active');
        }
    });
}

//window.scrollY => 現在垂直方向にスクロールしているピクセル数を返す
//window.innerHeight => 現在のウィンドウの内部の高さをピクセル単位で返す
//offsetParent =>「直近の、動的に位置が調整される自分を囲う要素」
//isNotScrolledPast => check if that image,if we're not scrolled past it.
//.sliderImage.offsetTop => tell us the
// top of this image is how far from the top of the actual window



window.addEventListener('scroll', debounce(checkSlide))