'use strict';

{
    let current_page = window.location.href;
    let message_url = current_page.split("&")[0];
    let href_attr = message_url.split("/")[4];
    let visited_message = $("a[href='" + href_attr + "']")[0];

    // the object forms' defaults are { block: "center" } which is desired
    visited_message.scrollIntoView({});
}
