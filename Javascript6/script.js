const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

//fetch API fetchはpromiseと呼ばれるものを返す
//thenはblob(塊？) of dataのようなものを返す
//blobはJSONデータ(JavaScriptのオブジェクトの書き方を元にしたデータ定義方法)に変換されないといけない
//!argumentは引数の意味!s
fetch(endpoint)
.then(blob => blob.json())//blob.jsonが下記の.thenで呼び出す新たなpromiseを返す
//...(spread)を用いてdata内の個々の配列を引数にすることで、citiesが定数(const)のまま、dataの個々の内容を配列でpushすることができる
.then(data => cities.push(...data));

console.log(cities)

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        //here we need to figure out if the city or state
        //matches what was searched
        //RegExp: 正規表現オブジェクトを生成する
        //giだと大文字小文字関係なくピックアップするが、'g'のみだと大文字小文字が違えばピックアップしてくれない
        const regex = new RegExp(wordToMatch, 'gi' );//変数(検索ワード)を下のコードにぶち込むために、このコードを書く
        return place.city.match(regex) || place.state.match(regex)
    })
}

//入力フォームの内容(value)を変えた際に起こるファンクション
function displayMatches() {
        const matchArray = findMatches(this.value, cities)
        const html = matchArray.map(place => {
            const regex = new RegExp(this.value, 'gi');
            const cityName = place.city.replace(regex, `<span class="hl">
            ${this.value}</span>`);
            const stateName = place.state.replace(regex, `<span class="hl">
            ${this.value}</span>`);
            return `
            <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="name">${place.population}</span>
            </li>
            `;
        }).join('');//mapは配列で返すため、.joinで得た配列を一つのstringにする
        
        suggestions.innerHTML = html;
}
const searchInput = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions')

//input内容が変わった時、displayMatchesが発動(keyupによって入力中も発動する)
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
