let button = document.querySelector("button");
button.addEventListener("click", getLuckyNumbers);


function getLuckyNumbers() {
    let numbers = [];

    for(let i=0; i<5; i++) {
        let r = Math.random() * 45;
        r = Math.ceil(r);
        if(r<10) r="0" + r;
        numbers.push(r);
    }

    numbers = numbers.sort();

    let div = document.querySelector("div");
    
    div.classList.remove("hide")
    div.textContent = numbers;
}

