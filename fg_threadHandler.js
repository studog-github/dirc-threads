'use strict';

{
    let current_page = window.location.href;
    let message_url = current_page.split("&")[0];
    let href_attr = message_url.split("/")[4];
    let visited_message = $("a[href='" + href_attr + "']")[0];

    let message_hrefs = href_attr.split("=")[0] + "=";
    // First two are Next/Prev navigation items, last two are same repeated at bottom of page
    let anchors = $("a[href^='" + message_hrefs + "']").slice(2,-2);

    for (let a of anchors) {
        let p = a.parentElement;
        let new_text_reply = document.createTextNode("Reply");
        let new_text_quote = document.createTextNode("Quote");

        p.insertBefore(new_text_reply, null);
        p.insertBefore(new_text_quote, null);
    }

    // the object forms' defaults are { block: "center" } which is desired
    visited_message.scrollIntoView({});
}
