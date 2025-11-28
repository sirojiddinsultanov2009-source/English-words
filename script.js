// --- WORD SETS ---
const sets = {
    day2: [
        ["consider", "mulohaza qilmoq"],
        ["fly", "uchmoq"],
        ["believe", "ishonmoq"],
        ["follow", "kuzatmoq"],
        ["solve", "hal qilmoq"],
        ["cut", "kesmoq"],
        ["speak", "gapirmoq"],
        ["open", "ochmoq"],
        ["dream", "orzu qilmoq"],
        ["come", "kelmoq"],
        ["pay", "to'lamoq"],
        ["send", "jo'natmoq"],
        ["touch", "tegmoq"],
        ["spend", "sarflamoq"],
        ["headbutt", "kalla qo'ymoq"],
        ["choose", "tanlamoq"],
        ["play", "o'ynamoq"],
        ["listen", "eshitmoq"],
        ["think", "o'ylamoq"],
        ["lie", "aldamoq"],
        ["press", "bosmoq"],
        ["close", "yopmoq"],
        ["ban", "taqiqlamoq"],
        ["pinch", "chimchilamoq"],
        ["enter", "kirmoq"],
        ["burn", "yonmoq"],
        ["change", "o'zgartirmoq"],
        ["relax", "dam olmoq"],
        ["get up", "uyg'onmoq"],
        ["drink", "ichmoq"],
        ["sit", "o‘tirmoq"],
        ["live", "yashamoq"],
        ["wake up", "uyg‘onmoq"],
        ["stand", "o‘rnidan turmoq"],
        ["sleep", "uxlamoq"],
    ],

    day3: [
        ["elephant", "fil"],
        ["blacksmith", "temirchi"],
        ["user", "foydalanuvchi"],
        ["nose", "burun"],
        ["noise", "shovqin"],
        ["skyscraper", "osmono‘par bino"],
        ["time", "vaqt"],
        ["holiday", "ta’til"],
        ["train", "poyezd"],
        ["death", "o‘lim"],
        ["smoke", "tutun"],
        ["eagle", "burgut"],
        ["truth", "haqiqat"],
        ["path", "yo‘lak"],
        ["sin", "gunoh"],
        ["thin", "ingichka"],
        ["head", "bosh"],
        ["throat", "tomoq"],
        ["meat", "go‘sht"],
        ["method", "uslub"],
        ["curtain", "parda"],
        ["fee", "to‘lov"],
        ["abroad", "xorij"],
        ["tradition", "urf-odat"],
        ["butter", "sariyog‘"],
        ["lifestyle", "hayot tarzi"],
        ["language", "til"],
        ["prime minister", "bosh vazir"],
        ["bridge", "ko'prik"],
        ["salt", "tuz"],
        ["grey", "kulrang"],
        ["parking lot", "avtoturargoh"],
        ["earring", "zirak"],
        ["classmate", "sinfdosh"],
        ["necklace", "marjon"],
    ],

    day4: [
        ["welder", "payvandlovchi"],
        ["plumber", "santexnik"],
        ["builder", "quruvchi"],
        ["secretary", "kotib"],
        ["artist", "rassom"],
        ["optician", "ko‘zoynakchi"],
        ["coach", "murabbiy"],
        ["judge", "sudya"],
        ["nurse", "hamshira"],
        ["lawyer", "huquqshunos"],
        ["minister", "vazir"],
        ["mayor", "hokim"],
        ["groom", "otboqar"],
        ["waiter", "ofitsiant"],
        ["surgeon", "jarroh"],
        ["beggar", "tilanchi"],
        ["bodyguard", "tansoqchi"],
        ["barman", "barmen"],
        ["spy", "josus"],
        ["shepherd", "cho‘pon"],
        ["peasant", "dehqon"],
        ["gardener", "bog‘bon"],
        ["merchant", "savdogar"],
        ["official", "hodim"],
        ["clerk", "kotib"],
        ["scholar", "olim"],
        ["seller", "sotuvchi"],
        ["writer", "yozuvchi"],
        ["poet", "shoir"],
        ["barber", "sartarosh"],
        ["dancer", "raqqos"],
        ["accountant", "buxgalter"],
        ["firefighter", "o‘t o‘chiruvchi"],
        ["hairdresser", "sartarosh"],
        ["carpenter", "duradgor"],
    ],

    day5: [
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
        ["edible", "yesa bo‘ladigan"],
        ["cautious", "ehtiyotkor"],
        ["natural", "tabiiy"],
        ["strong", "kuchli"],
        ["brave", "mard"],
        ["pretty", "go'zal"],
        ["salty", "sho'r"],
        ["weak", "kuchsiz"],
        ["strict", "talabchan"],
        ["empty", "bo‘m-bo‘sh"],
        ["full", "to‘q"],
        ["fat", "semiz"],
        ["ugly", "xunuk"],
    ],

    day6: [
        ["mutual", "ikki tomonlama"],
        ["trump", "kuzir"],
        ["naivety", "soddalik"],
        ["generate", "yaratmoq"],
        ["give birth", "tug‘moq"],
        ["perform", "ijro etmoq"],
        ["realize", "anglamoq"],
        ["release", "qo‘yib yubormoq"],
        ["inform", "xabar bermoq"],
        ["typical", "oddiy"],
        ["borrow", "qarzga olmoq"],
        ["contain", "o‘z ichiga olmoq"],
        ["dedicate", "bag‘ishlamoq"],
        ["lease", "ijaraga bermoq"],
        ["suspicious", "shubhali"],
        ["reckless", "beg‘am"],
        ["cabbage", "karam"],
        ["lipstick", "lab bo‘yog‘i"],
        ["pupil", "qorachiq"],
        ["prohibit", "taqiqlamoq"],
        ["favorite", "sevimli"],
        ["colorful", "rangli"],
        ["shame", "uyat"],
        ["pray", "ibodat qilmoq"],
        ["crucial", "muhim"],
        ["unripe", "pishmagan"],
        ["similar", "o‘xshash"],
        ["aggressive", "tajovuzkor"],
        ["seat-belt", "kamar"],
        ["prom", "bitiruv kechasi"],
    ]
};

let currentSet = [...sets.day2];
let currentIndex = 0;


// --- LOAD SET ---
function loadSet(name) {
    currentSet = [...sets[name]];
    currentIndex = 0;
    renderCard();
}


// --- TABS SWITCH ---
document.querySelectorAll(".tabs button").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".tabs .active")?.classList.remove("active");
        btn.classList.add("active");
        loadSet(btn.dataset.set);
    });
});


// --- RENDER CARD ---
function renderCard() {
    const [word, translate] = currentSet[currentIndex];

    document.getElementById("card-container").innerHTML = `
        <div class="card" id="card">

            <div class="card-side front">
                <button class="flip-btn" onclick="flipCard()">↻</button>
                <button class="sound-btn" onclick="speak('${word}')">🔊</button>

                <h2>${word}</h2>
                <small>Word ${currentIndex + 1} of ${currentSet.length}</small>

                <div class="buttons">
                    <button class="dont-know" onclick="dontKnow()">Don't know</button>
                    <button class="know" onclick="nextCard()">Know</button>
                </div>
            </div>

            <div class="card-side back">
                <button class="flip-btn" onclick="flipCard()">↻</button>
                

                <h2>${translate}</h2>
                <small>Translation</small>

                <div class="buttons">
                    <button class="dont-know" onclick="dontKnow()">Don't know</button>
                    <button class="know" onclick="nextCard()">Know</button>
                </div>
            </div>

        </div>
    `;
}


// --- ACTIONS ---
function flipCard() {
    document.getElementById("card").classList.toggle("flip");
}

function nextCard() {
    currentIndex++;
    if (currentIndex >= currentSet.length) currentIndex = 0;
    renderCard();
}

function dontKnow() {
    currentSet.push(currentSet[currentIndex]); // повтор позже
    nextCard();
}


// --- SPEECH ---
function speak(text) {
    speechSynthesis.cancel();

    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";
    utter.rate = 0.9;

    speechSynthesis.speak(utter);
}


// Первичная загрузка
renderCard();
