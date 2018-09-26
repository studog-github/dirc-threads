'use strict';

//alert("DIRC Threads Helper active");

let divs = $("div[class^='Column1']")

console.log(divs);

for (let d of divs) {
// jquery way to select text from current element?
    if (d.childNodes[0].textContent == "Subject") {
        continue;
    }
    console.log(d.childNodes[0].textContent);
// select a from children
// get URL bit
// construct thread URL
// replace text with anchor
}
