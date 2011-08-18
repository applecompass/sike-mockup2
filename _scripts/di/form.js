//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// File:            form.js
// Defines:
// Dependencies:
// Description:     JS Data Interactive functions for forms
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

(function ($) {

    var Form = {

        reset: function () {
            var params = {
                    url: "http://192.168.1.100:3000/targets?user_id=1",
                    type: "GET",
                    dataType: "application/json",
                    complete: function (data) {
                        console.log("success");
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        console.log("error");
                    }
                };
            jQuery.ajax(params);
        },

        init: function () {

        }
    };

    ZM.Form = {

        init: function () {
            Form.init();

        }

    };

})(jQuery);