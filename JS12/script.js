const pressed = [];
const secretCode = 'wesbos';//length = 6


window.addEventListener('keyup',(e) => {
    console.log(e.key)
    pressed.push(e.key)
    //pressed.lengthが6までの場合、secretCode.lengthが6なので１文字も消えない→7文字以上になった時に初めて削除が実行される
    pressed.splice(-secretCode.length - 1/*頭の-は末尾のこと(6番目)*/, pressed.length - secretCode.length)
    //pressed.join('') => *make arrangement into a string */
    if(pressed.join('').includes(secretCode)) {
        cornify_add();
    }

    console.log(pressed)
})