'use strict';

{
    let current_page = window.location.href;
    let message_url = current_page.split("&")[0];

    // Google's documentation is very poor; only a single page bothers to mention that only
    // certain APIs can be accessed by the content script. Everything else has to be accessed
    // by having a background script handle messages
    chrome.runtime.sendMessage({ op: "addUrl", url: message_url }, function(response) {
        console.log("sendMessage response: ", response);
    });
}
