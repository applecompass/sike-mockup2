//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// File:            x.js
// Defines:
// Dependencies:
// Description:     load js for x page
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Closure
(function ($) {


})(jQuery);

// Document Ready.
jQuery(function ($) {

    ZM.Form.textHint($("#applyform-email"), $("#applyform-email-hint"), true);

    $("#applyform-email").keydown(function (e) {
        if (!e) {
            e = window.event;
        }
        if (e.keyCode === 13) {
            $("#applyform-submit").click();
            return false;
        }
    });

    $("#applyform-submit").click(function () {
        var url = ZM.Config.Url.activate;
        var mail = $("#applyform-email").val();
        if (ZM.Form.mailValid(mail)) {
            location.href = url + "?mail=" + mail;
        }
        else {
            $("div.applyformbox").addClass("applyformbox-err");
        }

        return false;
    });

});

// Window Onload.
ZM.windowOnload = window.onload;
window.onload = function () {
    if (ZM.windowOnload) {
        ZM.windowOnload();
    }
    // Your code here
};