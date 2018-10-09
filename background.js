'use strict';

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    // stuff
console.log("-= onMessage(", message, ", ", sendResponse, ")");
    if (message.op == "addUrl") {
        chrome.history.addUrl({ url: message.url });
        sendResponse("added: " + message.url);
    } else if (message.op == "closePort") {
        chrome.runtime.Port.disconnect();
        sendResponse("closed");
    } else {
        console.log("Unknown message: ", message);
        sendResponse("unknown");
    };
});
