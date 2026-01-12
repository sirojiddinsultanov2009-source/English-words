/* ================= helpers ================= */
const open = el => el.classList.add("active");
const close = el => el.classList.remove("active");

/* ================= overlays ================= */
const startBtn = document.getElementById("startBtn");

const mainOverlay = document.getElementById("mainOverlay");
const wordsOverlay = document.getElementById("wordsOverlay");
const topicsOverlay = document.getElementById("topicsOverlay");
const testsOverlay = document.getElementById("testsOverlay");
const topicTestsOverlay = document.getElementById("topicTestsOverlay");
const presentTestOverlay = document.getElementById("presentTestOverlay");

/* ================= WORDS STATE (FIX #1) ================= */
let currentSet = [];
let currentIndex = 0;
let isFlipped = false;
let isSetSelected = false;

/* ================= navigation ================= */
startBtn.onclick = () => open(mainOverlay);

document.getElementById("closeMain").onclick = () => close(mainOverlay);

document.getElementById("wordsBtn").onclick = () => {
  close(mainOverlay);
  open(wordsOverlay);

  // сброс состояния
  isSetSelected = false;
  currentSet = [];
  currentIndex = 0;
  isFlipped = false;

  const container = document.getElementById("card-container");
  if (container) {
    container.innerHTML = `<p style="color:#555">Выберите день</p>`;
  }

  document.querySelector(".tabs .active")?.classList.remove("active");
  document.querySelector(".tabs")?.classList.remove("hidden");
};

document.getElementById("topicsBtn").onclick = () => {
  close(mainOverlay);
  open(topicsOverlay);
};

document.getElementById("testsBtn").onclick = () => {
  close(mainOverlay);
  open(testsOverlay);
};

document.getElementById("backFromWords").onclick = () => {
  close(wordsOverlay);
  open(mainOverlay);
  document.querySelector(".tabs")?.classList.remove("hidden");
};

document.getElementById("backFromTopics").onclick = () => {
  close(topicsOverlay);
  open(mainOverlay);
};

document.getElementById("backFromTests").onclick = () => {
  close(testsOverlay);
  open(mainOverlay);
};

document.getElementById("topicTestsBtn").onclick = () => {
  close(testsOverlay);
  open(topicTestsOverlay);
};

document.getElementById("backFromTopicTests").onclick = () => {
  close(topicTestsOverlay);
  open(testsOverlay);
};

document.getElementById("presentSimpleBtn").onclick = () => {
  close(topicTestsOverlay);
  open(presentTestOverlay);
};

/* ================= tests ================= */
let score = 0;

document.querySelectorAll("[data-correct]").forEach(btn => {
  btn.onclick = () => {
    if (btn.classList.contains("correct")) return;
    btn.classList.add("correct");
    score++;
  };
});

document.getElementById("finishTest").onclick = () => {
  alert(`Твой результат: ${score} / 2`);
  score = 0;
  close(presentTestOverlay);
};

/* ================= WORDS DATA ================= */
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
    ],

  day7: [
        ["mosquito", "chivin"],
        ["effort", "harakat"],
        ["anthem", "madhiya"],
        ["criminal", "jinoyatchi"],
        ["jackal", "chiyabo'ri"],
        ["sharp", "o‘tkir"],
        ["sledge", "chana"],
        ["farmer", "fermer"],
        ["shark", "akula"],
        ["liar", "yolg‘onchi"],
        ["fork", "vilka"],
        ["aggressive", "tajavuzkor"],
        ["alive", "tirik"],
        ["wealth", "boylik"],
        ["blood", "qon"],
        ["cinema", "kinoteatr"],
        ["dead", "o‘lik"],
        ["cute", "yoqimtoy"],
        ["pineapple", "ananas"],
        ["blind", "ko‘r"],
        ["squirrel", "olmahon"],
        ["shy", "uyatchan"],
        ["damp", "ho'l"],
        ["bully", "bezori"],
        ["chef", "bosh oshpaz"],
        ["butcher", "qassob"],
        ["cheap", "arzon"],
        ["devil", "iblis"],
        ["curly", "jingalak"],
        ["ferry", "qayiq"],
    ],

  day8: [
        ["advertisement", "reklama"],
        ["poem", "she’r"],
        ["curtain", "parda"],
        ["magenta", "qirmizi (rang)"],
        ["forest", "o‘rmon"],
        ["great", "ajoyib"],
        ["fever", "isitma"],
        ["striped", "yo'l-yo'l"],
        ["air conditioner", "konditsioner"],
        ["ring", "uzuk"],
        ["cloudy", "bulutli"],
        ["minor", "ahamiyatsiz"],
        ["vital", "ahamiyatli"],
        ["squeeze", "siqmoq"],
        ["river", "daryo"],
        ["button", "tugma"],
        ["queen", "qirolicha"],
        ["sing", "kuylash"],
        ["clothes", "kiyim"],
        ["culture", "madaniyat"],
        ["busy", "band"],
        ["generous", "saxiy"],
        ["mean", "ochko'z"],
        ["polite", "odobli"],
        ["chase", "quvlamoq"],
        ["picture", "rasm"],
        ["letter", "xat"],
        ["sun", "quyosh"],
        ["shine", "charaqlamoq"],
        ["dress", "ko‘ylak"],
    ],

  day9: [
        ["endangered", "xavf ostida qolgan"],
        ["extinct", "qirilib ketgan"],
        ["get lost", "yo'qolib qolmoq"],
        ["concession", "yon berish"],
        ["wrap", "o'ramoq"],
        ["awful", "juda yomon"],
        ["despise", "nafratlanmoq"],
        ["run out of", "tugab qolmoq"],
        ["humilate", "ho'rlanmoq"],
        ["backround", "kelib chiqish"],
        ["litter", "chiqindi"],
        ["permanent", "doimiy"],
        ["satelitte", "dun'iy yo'ldosh"],
        ["beneath", "ostida, tagida"],
        ["barrier", "to'siq"],
        ["amazing", "hayratlanarli"],
        ["complaint", "norozilik"],
        ["steel", "po'lat"],
        ["sudden", "kutilmagan"],
        ["decay", "chirish"],
    ],

    day10: [
        ["doorman", "eshikni ochib yopuvchi"],
        ["qualitative", "sifatli"],
        ["last", "davom etmoq"],
        ["carry", "tashimoq"],
        ["rumor", "mish-mish"],
        ["bully", "bezori"],
        ["invincible", "yengilmas"],
        ["push", "itarmoq"],
        ["charity", "hayriya"],
        ["negotiation", "muzokara"],
        ["belongings", "biso't, ko'ch-ko'ron"],
        ["copper", "mis"],
        ["obvious", "yaqqol, ravshan"],
        ["chase", "quvlamoq"],
        ["insult", "haqorat qilmoq"],
        ["dreadful", "dahshatli"],
        ["disgusting", "jirkanch"],
        ["widen", "kengaytirmoq"],
        ["quicken", "tezlashtirmoq"],
        ["circumstance", "vaziyat, holat"],
    ],

    verbs: [
        ["be", "was/were — been"],
        ["become", "became — become"],
        ["begin", "began — begun"],
        ["bring", "brought — brought"],
        ["buy", "bought — bought"],
        ["choose", "chose — chosen"],
        ["come", "came — come"],
        ["do", "did — done"],
        ["drink", "drank — drunk"],
        ["drive", "drove — driven"],
        ["eat", "ate — eaten"],
        ["fall", "fell — fallen"],
        ["feel", "felt — felt"],
        ["find", "found — found"],
        ["fly", "flew — flown"],
        ["forget", "forgot — forgotten"],
        ["get", "got — got(gotten)"],
        ["give", "gave — given"],
        ["go", "went — gone"],
        ["have", "had — had"],
        ["hear", "heard — heard"],
        ["keep", "kept — kept"],
        ["know", "knew — known"],
        ["leave", "left — left"],
        ["lend", "lent — lent"],
        ["let", "let — let"],
        ["lose", "lost — lost"],
        ["make", "made — made"],
        ["meet", "met — met"],
        ["pay", "paid — paid"],
        ["put", "put — put"],
        ["read", "read — read"],
        ["run", "ran — run"],
        ["say", "said — said"],
        ["see", "saw — seen"],
        ["sell", "sold — sold"],
        ["send", "sent — sent"],
        ["sing", "sang — sung"],
        ["sit", "sat — sat"],
        ["sleep", "slept — slept"],
        ["speak", "spoke — spoken"],
        ["stand", "stood — stood"],
        ["swim", "swam — swum"],
        ["take", "took — taken"],
        ["teach", "taught — taught"],
        ["tell", "told — told"],
        ["think", "thought — thought"],
        ["understand", "understood — understood"],
        ["wear", "wore — worn"],
        ["write", "wrote — written"]
]

};

/* ================= WORDS LOGIC ================= */
function loadSet(name) {
  currentSet = [...sets[name]];
  currentIndex = 0;
  isFlipped = false;
  isSetSelected = true;
  renderCard();
}

function renderCard() {
  const container = document.getElementById("card-container");
  if (!container) return;

  if (!isSetSelected) {
    container.innerHTML = `<p style="color:#555">Выберите день</p>`;
    return;
  }

  if (!currentSet.length) {
    container.innerHTML = `<p>Нет слов</p>`;
    return;
  }

  const [word, translate] = currentSet[currentIndex];

  container.innerHTML = `
    <div class="card ${isFlipped ? "flipped" : ""}">
      <div class="front">
        <button data-action="flip">↻</button>
        <button data-action="sound">🔊</button>

        <h2>${word}</h2>
        <small>${currentIndex + 1} / ${currentSet.length}</small>

        <button data-action="dont">Don't know</button>
        <button data-action="next">Know</button>
      </div>

      <div class="back">
        <button data-action="flip">↻</button>

        <h2>${translate}</h2>

        <button data-action="dont">Don't know</button>
        <button data-action="next">Know</button>
      </div>
    </div>
  `;
}

/* ================= EVENTS ================= */
document.addEventListener("click", e => {
  const { set, action } = e.target.dataset;

  if (set) {
    document.querySelector(".tabs .active")?.classList.remove("active");
    e.target.classList.add("active");

    loadSet(set);
    document.querySelector(".tabs")?.classList.add("hidden");
  }

  if (!action) return;

  if (action === "flip") {
    isFlipped = !isFlipped;
    renderCard();
  }

  if (action === "next") {
    currentIndex++;
    if (currentIndex >= currentSet.length) {
      document.getElementById("card-container").innerHTML =
        `<h3 style="color:#27c94d">🎉 Все слова выучены!</h3>`;
      return;
    }
    isFlipped = false;
    renderCard();
  }

  if (action === "dont") {
    currentSet.push(currentSet[currentIndex]);
    currentIndex++;
    isFlipped = false;
    renderCard();
  }

  if (action === "sound") {
    speak(currentSet[currentIndex][0]);
  }
});

/* ================= speech ================= */
function speak(text) {
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US";
  u.rate = 0.9;
  speechSynthesis.speak(u);
}

const presentSimpleOverlay = document.getElementById("presentSimpleOverlay");
const openPresentSimpleBtn = document.getElementById("openPresentSimple");
const backFromPresentSimple = document.getElementById("backFromPresentSimple");

openPresentSimpleBtn.onclick = () => {
  close(topicsOverlay);
  open(presentSimpleOverlay);
};

backFromPresentSimple.onclick = () => {
  close(presentSimpleOverlay);
  open(topicsOverlay);
};

const presentContiniousOverlay = document.getElementById("presentContiniousOverlay");
const openPresentContiniousBtn = document.getElementById("openPresentContinious");
const backFromPresentContinious = document.getElementById("backFromPresentContinious");

openPresentContiniousBtn.onclick = () => {
  close(topicsOverlay);
  open(presentContiniousOverlay);
};

backFromPresentContinious.onclick = () => {
  close(presentContiniousOverlay);
  open(topicsOverlay);
};

// Present Perfect
const presentPerfectOverlay = document.getElementById("presentPerfectOverlay");
const openPresentPerfectBtn = document.getElementById("openPresentPerfect");
const backFromPresentPerfect = document.getElementById("backFromPresentPerfect");

openPresentPerfectBtn.onclick = () => {
  close(topicsOverlay);
  open(presentPerfectOverlay);
};

backFromPresentPerfect.onclick = () => {
  close(presentPerfectOverlay);
  open(topicsOverlay);
};

// Present Perfect Continuous
const presentPerfectContiniousOverlay = document.getElementById("presentPerfectContiniousOverlay");
const openPresentPerfectContiniousBtn = document.getElementById("openPresentPerfectContinious");
const backFromPresentPerfectContinious = document.getElementById("backFromPresentPerfectContinious");

openPresentPerfectContiniousBtn.onclick = () => {
  close(topicsOverlay);
  open(presentPerfectContiniousOverlay);
};

backFromPresentPerfectContinious.onclick = () => {
  close(presentPerfectContiniousOverlay);
  open(topicsOverlay);
};

// Past Simple
const pastSimpleOverlay = document.getElementById("pastSimpleOverlay");
const openPastSimpleBtn = document.getElementById("openPastSimple");
const backFromPastSimple = document.getElementById("backFromPastSimple");

openPastSimpleBtn.onclick = () => { close(topicsOverlay); open(pastSimpleOverlay); };
backFromPastSimple.onclick = () => { close(pastSimpleOverlay); open(topicsOverlay); };

// Past Continuous
const pastContinuousOverlay = document.getElementById("pastContinuousOverlay");
const openPastContinuousBtn = document.getElementById("openPastContinuous");
const backFromPastContinuous = document.getElementById("backFromPastContinuous");

openPastContinuousBtn.onclick = () => { close(topicsOverlay); open(pastContinuousOverlay); };
backFromPastContinuous.onclick = () => { close(pastContinuousOverlay); open(topicsOverlay); };

// Past Perfect
const pastPerfectOverlay = document.getElementById("pastPerfectOverlay");
const openPastPerfectBtn = document.getElementById("openPastPerfect");
const backFromPastPerfect = document.getElementById("backFromPastPerfect");

openPastPerfectBtn.onclick = () => { close(topicsOverlay); open(pastPerfectOverlay); };
backFromPastPerfect.onclick = () => { close(pastPerfectOverlay); open(topicsOverlay); };

// Past Perfect Continuous
const pastPerfectContinuousOverlay = document.getElementById("pastPerfectContinuousOverlay");
const openPastPerfectContinuousBtn = document.getElementById("openPastPerfectContinuous");
const backFromPastPerfectContinuous = document.getElementById("backFromPastPerfectContinuous");

openPastPerfectContinuousBtn.onclick = () => { close(topicsOverlay); open(pastPerfectContinuousOverlay); };
backFromPastPerfectContinuous.onclick = () => { close(pastPerfectContinuousOverlay); open(topicsOverlay); };

// Future Simple
const futureSimpleOverlay = document.getElementById("futureSimpleOverlay");
const openFutureSimpleBtn = document.getElementById("openFutureSimple");
const backFromFutureSimple = document.getElementById("backFromFutureSimple");

openFutureSimpleBtn.onclick = () => { close(topicsOverlay); open(futureSimpleOverlay); };
backFromFutureSimple.onclick = () => { close(futureSimpleOverlay); open(topicsOverlay); };

// Future Continuous
const futureContinuousOverlay = document.getElementById("futureContinuousOverlay");
const openFutureContinuousBtn = document.getElementById("openFutureContinuous");
const backFromFutureContinuous = document.getElementById("backFromFutureContinuous");

openFutureContinuousBtn.onclick = () => { close(topicsOverlay); open(futureContinuousOverlay); };
backFromFutureContinuous.onclick = () => { close(futureContinuousOverlay); open(topicsOverlay); };

// Future Perfect
const futurePerfectOverlay = document.getElementById("futurePerfectOverlay");
const openFuturePerfectBtn = document.getElementById("openFuturePerfect");
const backFromFuturePerfect = document.getElementById("backFromFuturePerfect");

openFuturePerfectBtn.onclick = () => { close(topicsOverlay); open(futurePerfectOverlay); };
backFromFuturePerfect.onclick = () => { close(futurePerfectOverlay); open(topicsOverlay); };

// Future Perfect Continuous
const futurePerfectContinuousOverlay = document.getElementById("futurePerfectContinuousOverlay");
const openFuturePerfectContinuousBtn = document.getElementById("openFuturePerfectContinuous");
const backFromFuturePerfectContinuous = document.getElementById("backFromFuturePerfectContinuous");

openFuturePerfectContinuousBtn.onclick = () => { close(topicsOverlay); open(futurePerfectContinuousOverlay); };
backFromFuturePerfectContinuous.onclick = () => { close(futurePerfectContinuousOverlay); open(topicsOverlay); };
