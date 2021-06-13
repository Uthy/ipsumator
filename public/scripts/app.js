let qotm = document.querySelector("#qotm-text"),
    author = document.querySelector("#qotm-author");
fetch("https://type.fit/api/quotes").then(function(t) { return t.json() }).then(function(t) {
    let e = Math.floor(Math.random() * t.length);
    qotm.innerHTML = t[e].text, author.innerHTML = t[e].author, null == t[e].author && (author.innerHTML = "Captain Anonymous")
});
let optionParagraphs = document.querySelector("#paragraphs"),
    optionSentences = document.querySelector("#sentences");
const generate = document.querySelector("#generate"),
    copy = document.querySelector("#copy");
let output = document.querySelector(".ipsumnator-output");
const selectType = document.querySelector("#type");
let countContainer = document.querySelector("#count");
const selectTopic = document.querySelector("#topic");
let topic, type, count, data, message = document.querySelector("#message");
const firebaseConfig = {
    apiKey: "AIzaSyBGLB89rebBtSakKrPG2ENp-JjJCMJKf_Q",
    authDomain: "ipsumator.firebaseapp.com",
    projectId: "ipsumator",
    storageBucket: "ipsumator.appspot.com",
    messagingSenderId: "1022942153368",
    appId: "1:1022942153368:web:62f92fac7120fb5b791eed",
    measurementId: "G-T77HEV8X5P"
};
const randomOutput = function() { if ("random" === topic) { return paragraphs[Math.round(Math.random() * (paragraphs.length - 1))] } { const t = paragraphs.filter(t => t.topic === `${topic}`); return t[Math.round(Math.random() * (t.length - 1))] } };

function generateOutput() {
    type = selectType.value, topic = selectTopic.value, count = countContainer.value;
    let t = Array.from({ length: `${count}` }, () => `<p>${randomOutput().text}</p>`);
    const e = [];
    for (var n = 0; n < t.length; n++) {
        if ("p" === type) current = `<p>${randomOutput().text}</p>`;
        else if ("s" === type) {
            const t = /[^\.!\?]+/g,
                e = `${randomOutput().text}`.match(t);
            let n = `<p>${e[Math.round(Math.random()*(e.length-1))].trim()}.</p>`;
            current = n
        } - 1 === e.indexOf(current) ? e.push(current) : n--
    }
    output.innerHTML = " ", output.innerHTML = e.join("")
}

function copyClipboard() {
    copy.innerHTML = "Copied", setTimeout(function() { copy.innerHTML = "Copy" }, 1e3);
    var t = window.getSelection(),
        e = document.createRange();
    e.selectNodeContents(output), t.removeAllRanges(), t.addRange(e), document.execCommand("Copy")
}
generate.addEventListener("click", function(t) { t.preventDefault(), generateOutput() }), copy.addEventListener("click", function(t) { t.preventDefault(), copyClipboard() }), countContainer.addEventListener("change", () => { countContainer.value > 1 ? (optionParagraphs.textContent = "Paragraphs", optionSentences.textContent = "Sentences") : (countContainer.value = 1) && (optionParagraphs.textContent = "Paragraph", optionSentences.textContent = "Sentence") });
var checkbox = document.querySelector("#switch");
checkbox.addEventListener("change", function() { this.checked ? (trans(), document.documentElement.setAttribute("data-theme", "dark")) : (trans(), document.documentElement.setAttribute("data-theme", "light")) });
let trans = () => { document.documentElement.classList.add("transition"), window.setTimeout(() => { document.documentElement.classList.remove("transition") }, 1e3) };
anime({ targets: ".slide-up", translateY: [100, 0], duration: 1200, opacity: [0, 1], easing: "easeOutExpo", delay: 300 }), anime({ targets: ".slide-up-delayed", translateX: [100, 0], duration: 1200, opacity: [0, 1], delay: (t, e) => 300 + 100 * e });