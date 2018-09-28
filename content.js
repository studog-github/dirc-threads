'use strict';

// The first div is the Subject/Author/Date header line
let divs = $("div[class^='Column1']").slice(1);

//console.log(divs);

for (let d of divs) {
    let target = d.childNodes[1];
    let new_url = target.href + "&Thread=Yes";
    let new_a = document.createElement('a');
    let new_text = document.createTextNode("thread");

    new_a.style.fontVariant = "small-caps";
    new_a.appendChild(new_text);
    new_a.href = new_url;
    d.insertBefore(new_a, target.nextSibling);
}
