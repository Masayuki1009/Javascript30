const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

//sortのわかりやすい説明↓
//It's sort of like it gives you two apples in either hand(下記でいうaとb), and you're like, "Which one is bigger?" Then the bigger one you move to the top, and the other one you move to the bottom.

//アルファベット順で並べるためにsortの際にaとtheとanを省く
function strip(bandName) {
    return bandName.replace(/^/* ^○ →?行頭の○(エスケープ処理) */(a |the |an )/i/*	検索の際に大文字と小文字を区別しないの意、通称フラグと呼ぶ */, '').trim();
}
//replace() メソッドは、pattern にマッチした文字列の一部またはすべてを replacement で置き換えた新しい文字列を返します
//trim() メソッドは、文字列の両端の空白を削除します(この場合上記のa, the, anを消したスペース)。このコンテクストでの空白には、空白文字（スペースやタブ、ノーブレークスペースなど）とすべての改行文字（LF や CR など）を含みます。

const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);
//returnのみを行う場合、こういう風に短縮系の書き方ができる(下の短縮系)
    //const sortedBands = bands.sort((a, b) =>{
    // if(strip(a) > strip(b)) {//even though they're not numbers. It's still going to work with strings, because they're alphabetical
    // return 1;
    // } else {
    // return -1;
    // }
    //})
document.querySelector('#bands').innerHTML =
sortedBands
.map(band => `<li>${band}</li>`)
.join('')

console.log(sortedBands);