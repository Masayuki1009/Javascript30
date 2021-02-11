const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];
//JSON.parse(localStorage.getItem('items'))は48.60行目に対応するためのもの


function addItem(e) {
    e.preventDefault();// stop the page from reloading
    const text = (this/*form要素 */.querySelector('[name=item]')).value;
    const item = {
        text: text,
        done: false
    }
    items.push(item);
    populateList(items, itemsList);//ふたつの引数
    localStorage.setItem('items', JSON.stringify(items));//items = localstrageのkey JSON.stringify(items) => itemsをstring型にする
    //setItem => put sth into localstrage and update
    
    this.reset();//thisは上と同じでform要素, reset()はinput欄を空にする
}
//localstrageではvalueをkeyでしか保存できない

//need a list of plates to populate(第一引数), and a place to put the HTML (第二引数)
//submitした後、platesList(itemsList)をHTMLでリストに表示するようにする
function populateList(plates = [], platesList) {//ふたつの引数
    platesList.innerHTML = plates.map((plate, i) => {
        return `
        <li>
        <input type="checkBox" data-index = ${i} id = "item${i}" ${plate.done ? "checked" : ""} value = "${plate.text}">
            <label for= "item${i}">${plate.text}</label>
        </li>
        `;
        //上記のinputのidとlabel forの"item${i}"は同じもの(互いをリンクさせるために用いる) "Item ${i}", and that's how when you click on the label the input will check itself. That's how we link the two
    }).join('');//stringで返す

}
// map: フィルターをかけ一つの配列で返す　a map will take in an array of raw data and return an array of some other data.
//この場合ではtake in the objects and return a string from each one.


//event delegation
//where we listen for a click on something higher, and then inside of it we check if
function toggleDone(e) {
    if(!e.target.matches('input')) return;//skip this unless it is in input
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = ! items[index].done;// if this is true, it's going to be the opposite(false), If this is false, it's going to be the opposite(true)
    localStorage.setItem('items', JSON.stringify(items));//
    populateList(items, itemsList);//60行目と同じ結果、itemsにはJSON.parse(localStorage.getItem('items'))が返ってくる()
}

addItems.addEventListener('submit', addItem)
//preventDefaultの補足
//by default, a form is just going to reload the page or send the data to an external　source, generally what's your server side. In this case, we're going to be doing an　all client side, so prevent the default of that happening


itemsList.addEventListener('click', toggleDone)



populateList(items, itemsList);// when the page loads
// 上のitemsは3行目のJSON.parse(localStorage.getItem('items'))
//on page load, before we do any of this stuff, our Items is going to be populated






