let words = [
    ["clean", "toza"],
    ["dirty", "kir"],
    ["calm", "yuvosh"],
    ["rude", "qo'pol"],
    ["mean", "baxil"],
    ["polite", "odobli"],
    ["hot", "issiq"],
    ["easygoing", "yengil tabiat"],
    ["complicated", "murakkab"],
    ["shallow", "sayoz"],
    ["deep", "chuqur"],
    ["greedy", "ochko'z"],
    ["vain", "kekkaygan"],
    ["selfish", "egoist"],
    ["dynamic", "serharakat"],
    ["outgoing", "kirishimli"],
    ["edible", "yesa bo'ladigan"],
    ["cautious", "ehtiyotkor"],
    ["natural", "tabiy"],
    ["strong", "kuchli"],
    ["brave", "mard"],
    ["pretty", "go'zal"],
    ["salty", "sho'r"],
    ["weak", "kuchsiz"],
    ["strict", "talabchan"],
    ["empty", "bo'm bo'sh"],
    ["full", "to'q"],
    ["fat", "semiz"],
    ["ugly", "xunuk"]
];

const card = document.getElementById("card");
const cardInner = document.getElementById("cardInner");
const flipBtn = document.getElementById("flipBtn");

const wordText = document.getElementById("word");
const translationText = document.getElementById("translation");

const btnKnow = document.getElementById("know");
const btnDont = document.getElementById("dontknow");

function showCard() {
    if (words.length === 0) {
        wordText.textContent = "Barcha so'zlarni bilding! 🎉";
        translationText.textContent = "";
        btnKnow.style.display = "none";
        btnDont.style.display = "none";
        flipBtn.style.display = "none";
        return;
    }

    card.classList.remove("show-back");
    card.classList.add("fade");

    wordText.textContent = words[0][0];
    translationText.textContent = words[0][1];
}

flipBtn.addEventListener("click", () => {
    card.classList.toggle("show-back");
});

btnKnow.addEventListener("click", () => {
    words.shift();
    showCard();
});

btnDont.addEventListener("click", () => {
    const w = words.shift();
    words.push(w);
    showCard();
});

showCard();