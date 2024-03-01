const pw1 = document.querySelector("#password1");
const pw2 = document.querySelector("#password2");
const message = document.querySelector("#message");

pw2.addEventListener("focusout", checksame);

function checksame() {
    if (pw1.value !== pw2.value) {
        message.textContent = "❗Key Phrases DO NOT MATCH!";
        message.style.display = "block";
        pw2.style.backgroundColor = "#fff0f3";
        pw2.value = "";
        pw2.focus();

    }
    else {
        message.style.display = "none";
        pw2.style.backgroundColor = "#fff";
        pw2.style.color = "#000"
    }
}

const rangevalue = document.getElementById("rate-value");
const range = document.getElementById("page-rating");

// RANGE event listener
range.addEventListener("change", displayRatingValue);
range.addEventListener("input", displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}
