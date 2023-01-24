'use strict'
// 1行目に記載している 'use strict' は削除しないでください
let counter, btnAdd;
let n;

function addCount() {
    n++;
    counter.innerHTML = n;
}

window.addEventListener("load", () => {
    counter = document.getElementById("counter");
    btnAdd = document.getElementById("btnAdd");
    n = 0;
    btnAdd.addEventListener("click", addCount);
});
