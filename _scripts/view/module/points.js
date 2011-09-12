//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// File:            topbar.js
// Defines:
// Dependencies:
// Description:     JS UI functions for Zhuomi Top Bar
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

(function ($) {

    $("#signature").bind({
        "click": function () {
            $(this).addClass("active");
        },
        "blur": function () {
            $(this).removeClass("active");
            // TODO: Submit signature data.
        }
    });

})(jQuery);