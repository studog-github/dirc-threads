'use strict';

{
    let current_page = window.location.href;
    let message_url = current_page.split("&")[0];
    let href_attr = message_url.split("/")[4];
    let visited_message = $("a[href='" + href_attr + "']")[0];

// probably need to add a hidden form for the reply post here

    let message_hrefs = href_attr.split("=")[0] + "=";
    // First two are Next/Prev navigation items, last two are same repeated at bottom of page
    let anchors = $("a[href^='" + message_hrefs + "']").slice(2,-2);

    for (let a of anchors) {
        let p = a.parentElement;
        let new_a = document.createElement('a');
        let new_text_reply = document.createTextNode(" [ Reply ]");

        new_a.appendChild(new_text_reply);
        p.insertBefore(new_a, null);
    }

    // the object forms' defaults are { block: "center" } which is desired
    visited_message.scrollIntoView({});
}
