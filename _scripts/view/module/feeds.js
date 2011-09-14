//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// File:            topbar.js
// Defines:
// Dependencies:
// Description:     JS UI functions for Zhuomi Top Bar
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

(function ($) {

    var $box = $("#feedsbox");
    var fn = function () {
        $box.find(".feeds-btn-like").bind({
            "click": function () {
                var $el = $(this);
                if (!$el.hasClass("active")) {
                    $el.addClass("active");
                    $el.prev().show();
                }
                var $count = $el.prev().find(".feeds-likecount");
                var count = $count.text();
                $count.text("");
                $count.text(parseInt(count) + 1);
            }
        });
    }

    // Dom Ready
    $(fn);

})(jQuery);