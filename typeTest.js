let timer = document.getElementById("timer");
let quoteDisplay = document.getElementById("quoteDisplay");
let url = "https://apis.ccbp.in/random-quote";
let submitBtn = document.getElementById("submitBtn");
let quoteInput = document.getElementById("quoteInput");
let result = document.getElementById("result");
let resetBtn = document.getElementById("resetBtn");
let loading = document.getElementById("spinner");
let speedTypingTest = document.getElementById("speedTypingTest");

speedTypingTest.classList.add("d-none");
loading.classList.remove("d-none");

let options = {
    method: "GET"
};

fetch(url, options)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
        let {
            content
        } = jsonData;
        loading.classList.add("d-none");
        speedTypingTest.classList.remove("d-none");
        quoteDisplay.textContent = content;
    });

let counter = 0;
let uniqueId = setInterval(function() {
    counter = counter + 1;
    timer.textContent = counter;
}, 1000);

submitBtn.onclick = function() {
    if (quoteDisplay.textContent === quoteInput.value) {
        clearInterval(uniqueId);
        result.textContent = "You typed in " + timer.textContent + " seconds";
    } else {
        result.textContent = "You typed incorrect sentence";
    }
};

resetBtn.onclick = function() {
    speedTypingTest.classList.add("d-none");
    loading.classList.remove("d-none");

    quoteInput.value = "";
    result.textContent = "";
    clearInterval(uniqueId);

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let {
                content
            } = jsonData;
            loading.classList.add("d-none");
            speedTypingTest.classList.remove("d-none");
            quoteDisplay.textContent = content;
        });

    counter = 0;
    uniqueId = setInterval(function() {
        counter = counter + 1;
        timer.textContent = counter;
    }, 1000);

};