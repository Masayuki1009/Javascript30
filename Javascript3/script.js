const inputs = document.querySelectorAll('.controls input')

function handleUpdate() {
    const suffix = this.dataset.sizing || '';// base colorのinputには　data-が存在しないため、|| ''(or nothing)を設けないとundefinedが返ってくるから
    document.documentElement.style.setProperty(`--${this.name}`/* --spacing, --blur, --base */, this.value/* 数値(10) */ + suffix/* px,　これがないと機能しない */)
    console.log(`--${this.name}`/* --spacing, --blur, --base */ ,this.value/* 数値(10) */ /* px */)
}

inputs.forEach(input =>  {
    input.addEventListener('change', handleUpdate)
})
inputs.forEach(input =>  {
    input.addEventListener('mousemove', handleUpdate)
})
