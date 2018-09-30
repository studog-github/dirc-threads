'use strict';

let current_page = window.location.href;
//console.log("= " + current_page + " =");

if (current_page.indexOf("https://www.dripinvesting.org/boards/BoardMsgs.asp?BID=") == 0) {
    // The first div is the Subject/Author/Date header line
    let divs = $("div[class^='Column1']").slice(1);

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
} else if (current_page.indexOf("https://www.dripinvesting.org/boards/Read.asp?MID=") == 0) {
    let href_attr = current_page.split("&")[0].split("/")[4];
    let anchors = $("a[href='" + href_attr + "']");
    anchors[0].scrollIntoView(true);
}
