let words = [
 ["mutual", "ikki tomonlama"],
    ["trump", "kuzir"],
    ["naivety", "soddalik"],
    ["generate", "yaratmoq"],
    ["give birth", "tug'am"],
    ["perform", "Ijro etmoq"],
    ["realize", "anglamoq"],
    ["release", "qo'yib yubormoq"],
    ["inform", "ma'lumot bermoq"],
    ["typical", "oddiy"],
    ["borrow", "qarzga olmoq"],
    ["contain", "o'z ichiga olmoq"],
    ["dedicate", "beg'ishlamoq"],
    ["lease", "ijaraga bermoq"],
    ["suspicious", "shubhali"],
    ["reckless", "beg'am"],
    ["cabbage", "karam"],
    ["lipstick", "lab bo'yog'i"],
    ["pupil", "qorachiq"],
    ["prohibit", "taqiqlamoq"],
    ["colorful", "ranli"],
    ["shame", "uyat"],
    ["pray", "ibodat qilmoq"],
    ["crucial", "muhim"],
    ["unripe", "pishmagan"],
    ["similar", "o'xshash"],
    ["aggressive", "tajavuskor"],
    ["seat-belt", "kamar"],
    ["prom", "bitiruv kechasi"]
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

