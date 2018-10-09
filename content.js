'use strict';

let current_page = window.location.href;

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
        new_a.onclick = function() {
            // Google's documentation is very poor; only a single page bothers to mention
            // that only certain APIs can be accessed by the content script. Everything
            // else has to be accessed by having a background script handle messages
            chrome.runtime.sendMessage({ op: "addUrl", url: target.href }, function(response) {
                console.log("sendMessage response: ", response);
            });
            // Return value indicates whether the default action should occur (true) or not (false)
            return true;
        };
        d.insertBefore(new_a, target.nextSibling);
    }
} else if (current_page.indexOf("https://www.dripinvesting.org/boards/Read.asp?MID=") == 0) {
// TODO: Don't scroll if the message is the first in the thread
    let message_url = current_page.split("&")[0];
    let href_attr = message_url.split("/")[4];
    let anchors = $("a[href='" + href_attr + "']");
    anchors[0].scrollIntoView(true);
    //anchors[0].addClass("visited");
console.log(anchors[0]);
console.log(message_url);
    //chrome.history.addUrl(message_url);
}
