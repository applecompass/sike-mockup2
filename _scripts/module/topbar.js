//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// File:            footer.js
// Defines:
// Dependencies:
// Description:     JS UI functions for Zhuomi footer
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

(function ($) {

    var Topbar = {

        _click: function () {
            var that = this;
            $("#topbar-menu a").click(function () {
                var el = $(this).attr("href");
                $(".topbar-content").hide();
                $("#topbar-menu > li").removeClass("active")
                $(el).show();
                that._elClose.show();
                $(this).parent("li").addClass("active");
            });
            this._elClose.click(function () {
                $(this).hide();
                $(".topbar-content").hide();
                $("#topbar-menu > li").removeClass("active")
            });
        },

        init: function () {
            this._elClose = $("#topbar-btn-close");
            this._click();
        }
    };

    // Document Ready.
    jQuery(function ($) {

        Topbar.init();

    });

})(jQuery);