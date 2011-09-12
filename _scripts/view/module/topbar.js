//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// File:            topbar.js
// Defines:
// Dependencies:
// Description:     JS UI functions for Zhuomi Top Bar
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

(function ($) {

    var topbar = function () {
        var $menu = $("#topbar-menu"),
            $close = $("#topbar-btn-close");

        // Expand/Close Events
        $("#topbar-menu a").click(function () {
            var that = this;
            var el = $(this).attr("href");
            if ($(el).css("display") === "none") {
                $menu.find(" > li").removeClass("active")
                $(that).parent("li").addClass("active");
                $(el).show("fast", function () {
                    $close.show();
                });
            }
            else {
                $close.hide();
                $(el).hide("fast", function () {
                    $menu.find(" > li").removeClass("active")
                });
            }
        });
        $close.click(function () {
            $(this).hide();
            $(".topbar-content").hide("fast", function () {
                $menu.find(" > li").removeClass("active");
            });
        });
    };

    // Document Ready.
    $(topbar);

})(jQuery);