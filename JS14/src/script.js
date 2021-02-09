//   //people don't understand what the
// difference between a reference and a copy is especially when you get into nested data.


  // start with strings, numbers and booleans
  //ここのパートは問題なし

    // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // and we want to make a copy of it.
    const team = players
    console.log(players, team)

    // You might think we can just do something like this:
    team[3] = 'Masayuki';
// ここでconsole.log(players) => ['Wes', 'Sarah', 'Ryan', 'Masayuki']
//理由は↓
// we updated team but TODO: team is not the array. Team is just a reference to the original array which is "players". So when
// you edit that original array or when you update any of the arrays, it's always going to go back to the reference where it was which is not the same as what we did here with numbers, strings, and booleans

// TODO: まとめ：上のteam配列ではなく、ただの元の配列playersのreference(playersを参考にしているだけ)。だから元の配列をいじった場合、stringや数字、booleanと違い常に参照元に影響を与える


    // however what happens when we update that array?

    // now here is the problem!

    // oh no - we have edited the original array too!

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!
    const team2 = players.slice();
    //sliceの引数がない場合、対象の配列をそのままコピーする
    
    
    // So, how do we fix this? We take a copy instead!
    
    // one way
    
    // or create a new array and concat the old one in
    const team3 = [].concat(players);
    //
    //上の表現は両方とも同じで、playersと同じ配列をコピーする

    // or use the new ES6 Spread
    const team4 = [...players]
    console.log(team4)

    const team5 = Array.from(players)

    //spread take every item out of your iterable and put it into
    //TODO: team2, 3, 4, 5はどれもplayersをもとに新しい配列を生成しており、それぞれ中身を変えても、元のplayersには影響を与えない

    // now when we update it, the original one isn't changed

    // The same thing goes for objects, let's say we have a person object

    // with Objects
    const person = {
      name: 'Wes Bos',
      age: 80
    };

    // and think we make a copy:
    // const captain = person;
    // captain.number = 99;
    //TODO: これはcopyじゃなくてreference, 上のconst team = playersの構造と同じで、元のオブジェクト(=person)に影響与えている

    // how do we take a copy instead?
    const cap2 = Object.assign({}, person/*コピーしたいオブジェクト*/, {number: 99}/*新しく加えるproperty*/)
    console.log(cap2)

    // We will hopefully soon see the object ...spread
    // const cap3 = {...person} object's spread is
    // not in Javascript yet


    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

    const wes = {
        name: 'wes',
        age: 100,
        social: {
            twiter: '@wesbos',
            facebook: 'wesbos.developer'
        }
    }

    const dev2 = JSON.parse(JSON.stringify(wes))
    //wesオブジェクトを(JSON.stringify(wes))でstringにし、JSON.parseで文字列を JSON として解析し、文字列によって記述されている JavaScript の値やオブジェクトを構築(元の形、オブジェクトに戻す)。TODO: これがあれば上記のsocialなどのさらに一段階深い階層の部分まで踏み込めるが(Object.assignとかでは一段階目までしか踏み込めない)、まぁそこまで使う機会ない