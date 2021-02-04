const checkboxes = document.querySelectorAll('.inbox input[type = "checkbox"]')

let lastChecked;//最初にチェックされたもの(変数にするのは、2つ目をクリックした際に1つ目がどれかを知るため) letの理由は何度も割り当てられるため

function handleCheck(e) {
    //check if they had the shift key down
    //AND check that they are checking it(check not unchecking it)
    let inBetween = false;
    if(e.shiftKey && this.checked) {//両方console.logより確認可
        //go ahead and do what we please
        //loop over every single checkbox
        checkboxes.forEach(checkbox => {
            console.log(checkbox)
            if(checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log('start to check them inbetween!')
            }
            if(inBetween) {
                checkbox.checked = true;
            }
        })
    }

    lastChecked = this;
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', handleCheck);
})