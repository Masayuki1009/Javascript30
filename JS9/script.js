const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log('hello')
    // Interpolated　value(差し込み)
    console.log('hello I am a %s string', '💩')
    // Styled 文章の頭に%cを挿入、第二引数にスタイルを書く
    // console.log('%c I am some great text', `font-size:50px;
    // background:red`)

    // warning!
    console.warn('OH NOOO');
    
    // Error :|
    console.error('OH SHIT!');
    
    // Info
    console.info('Wanna change my job');

    // Testing console.assert will only fire if sth is wrong
    //if it is true, nth happen
    const p = document.querySelector('p')
    console.assert(p.classList.contains('ouch'), 'that is wrong');//第二引数はwrongの際に出てくるメッセージ

    // clearing clear console
    console.clear()

    // Viewing DOM Elements
    console.log(p)
    console.dir(p);//open up info
    console.clear()

    // Grouping together
    dogs.forEach(dog => {
        console.groupCollapsed(`${dog.name}`);//`${dog.name}`でグループ化、ひとまとめにしconcoleにまとめる
        console.log(`this is ${dog.name}`)
        console.log(`${dog.name} is ${dog.age} years old`)
        console.log(`${dog.name} is ${dog.age * 7} dog years old`)
        console.groupEnd(`${dog.name}`);
    })
    // counting count how many times I have run it
    console.count('wes')
    console.count('Steve') // steve 1
    console.count('wes')// wes 2
    console.count('Steve')
    console.count('Steve')
    console.count('wes')
    console.count('wes')// wes 4
    console.count('Steve')// steve 4

    // timing
    //if you want to see how long sth takes
    console.time('fetching data')
    fetch('https://api.github.com/Masayuki1009')
        .then(data => data.json())
        .then(data => {
            console.timeEnd('fetching data')
            console.log(data)
        })

        console.table(dogs)
