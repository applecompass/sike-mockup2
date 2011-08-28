//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// File:            footer.js
// Defines:
// Dependencies:
// Description:     JS UI functions for Zhuomi footer
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

(function ($) {

    var Guide = {

        _click: function () {

        },

        init: function () {
            var ord = [
                "apply",
                "activate",
                "plan",
                "mypage",
                "account",
                "profile"
            ];
            var $guideButton = $("<ul id=\"slidenav\">" +
                                    "<li class=\"slidenav-prev\">" +
                                        "<a id=\"slidenav-btn-prev\" class=\"hand pos-abs txtindent\">Previous</a>" +
                                    "</li>" +
                                    "<li class=\"slidenav-next\">" +
                                        "<a id=\"slidenav-btn-next\" class=\"hand pos-abs txtindent\">Next</a>" +
                                    "</li>" +
                                "</ul>");
            var $prev = $guideButton.find("#slidenav-btn-prev"),
                $next = $guideButton.find("#slidenav-btn-next");

            // Get Current Page Index
            var arrUrl = location.pathname.split("/");
            var sFileName = (arrUrl[arrUrl.length - 1].split(".")[0]).toLowerCase();
            var iNav = 0,
                urlPrev = "#",
                urlNext = "#";
            for (var i = 0; i < ord.length; i++) {
                if (ord[i] === sFileName) {
                    iNav = i;
                    break;
                }
            }

            // Status
            if (iNav === 0) {
                $prev.hide();
                urlNext = ord[iNav + 1];
            }
            else if (iNav === ord.length - 1) {
                $next.hide();
                urlPrev = ord[iNav - 1];
            }
            else {
                urlPrev = ord[iNav - 1];
                urlNext = ord[iNav + 1];
            }

            // Append HTML
            $("body").append($guideButton);

            // Events
            $prev.click(function () {
                location.href = "./" + urlPrev + ".htm";
            });
            $next.click(function () {
                location.href = "./" + urlNext + ".htm";
            });

        }
    };

    // Document Ready.
    jQuery(function ($) {

        Guide.init();

    });

})(jQuery);