//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// File:            announcement.js
// Defines:
// Dependencies:
// Description:     JS UI functions for Zhuomi Top Bar
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

(function ($) {

    var fn = function () {
        var $container = $("#titlebar-tip");
        var $close = $container.find("a.titlebar-tip-btn-close");
        $close.bind("click", function () {
            $container.hide("fast");
        });
    } ();

    // Dom Ready
    $(fn);

})(jQuery);