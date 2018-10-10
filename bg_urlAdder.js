'use strict';

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.op == "addUrl") {
        chrome.history.addUrl({ url: message.url });
        sendResponse("added: " + message.url);
    } else {
        console.log("Unknown message: ", message);
        sendResponse("unknown");
    };
});
