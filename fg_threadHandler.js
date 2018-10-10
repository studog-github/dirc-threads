'use strict';

let current_page = window.location.href;

// TODO: Don't scroll if the message is the first in the thread
let message_url = current_page.split("&")[0];
let href_attr = message_url.split("/")[4];
let anchors = $("a[href='" + href_attr + "']");

console.log("message_url: ", message_url);
// Google's documentation is very poor; only a single page bothers to mention that only
// certain APIs can be accessed by the content script. Everything else has to be accessed
// by having a background script handle messages
chrome.runtime.sendMessage({ op: "addUrl", url: message_url }, function(response) {
    console.log("sendMessage response: ", response);
});
// the object forms' defaults are { block: "center" } which is desired
anchors[0].scrollIntoView({});
