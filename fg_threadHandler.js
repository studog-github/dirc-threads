'use strict';

{
    let current_page = window.location.href;

    // TODO: Don't scroll if the message is the first in the thread
    let message_url = current_page.split("&")[0];
    let href_attr = message_url.split("/")[4];
    let anchors = $("a[href='" + href_attr + "']");

    // the object forms' defaults are { block: "center" } which is desired
    anchors[0].scrollIntoView({});
}
