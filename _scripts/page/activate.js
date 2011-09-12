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

    var $elMail = $("#fb-mail");
    var $elName = $("#fb-username");
    var $elPass = $("#fb-password");
    var $elSubmit = $("#fb-createuser");
    var $elChk = $("#fb-chk-protocal");

    var rq = ZM.Base.getRequest();
    if (rq) {
        var mail = rq["mail"];
        $elMail.val(mail);
    }

    var validEmail = function () {
        $elMail.blur(function () {
            var txt = this.value;
            if (txt !== "") {
                if (!ZM.Form.mailValid(txt)) {
                    $(this).next().show().find(".fb-tip-msg").empty().append(ZM.Config.Msg.Format.mail);
                }
                else {
                    $(this).next().hide();
                }
            }
            else {
                $(this).next().hide();
            }
        });
    };

    var validUserName = function () {
        var $el = $elName;
        $el.blur(function () {
            var txt = this.value;
            if (txt.length >= 12) {
                $(this).next().show().find(".fb-tip-msg").empty().append(ZM.Config.Msg.Format.username.format(ZM.Config.Value.maxUsername));
            }
            else {
                $(this).next().hide();
            }
        });
    };

    var validPassword = function () {
        var $el = $elPass;
        $el.blur(function () {
            var txt = this.value,
                    l = txt.length;
            if (l > 12 || l < 6) {
                $(this).next().show().find(".fb-tip-msg").empty().append(ZM.Config.Msg.Format.password);
            }
            else {
                $(this).next().hide();
            }
        });
    };

    var validNull = function () {
        var result = true;
        if ($elMail[0].value === "") {
            $elMail.next().show().find(".fb-tip-msg").empty().append(ZM.Config.Msg.Valid.mail);
            result = false;
        }
        if ($elName[0].value === "") {
            $elName.next().show().find(".fb-tip-msg").empty().append(ZM.Config.Msg.Valid.username);
            result = false;
        }
        if ($elPass[0].value === "") {
            $elPass.next().show().find(".fb-tip-msg").empty().append(ZM.Config.Msg.Valid.password);
            result = false;
        }
        return result;
    };

    var check = function () {
        var isAgree = $elChk[0].checked;
        if (isAgree) {
            $elSubmit.addClass("outerglow btn-join");
            $elSubmit.removeClass("btn-join-disable");
        }
        else {
            $elSubmit.removeClass("outerglow btn-join");
            $elSubmit.addClass("btn-join-disable");
        }
        $elChk.change(function () {
            var isAgree = this.checked;
            if (isAgree) {
                $elSubmit.addClass("outerglow btn-join");
                $elSubmit.removeClass("btn-join-disable");
            }
            else {
                $elSubmit.removeClass("outerglow btn-join");
                $elSubmit.addClass("btn-join-disable");
            }
        });
    };

    var submit = function () {
        $elSubmit.click(function () {
            if ($elChk[0].checked) {
                if (validNull()) {
                    console.log("pass");
                }
            }
            return false;
        });
    };

    validEmail();
    validUserName();
    validPassword();
    check();
    submit();

});

// Window Onload.
ZM.windowOnload = window.onload;
window.onload = function () {
    if (ZM.windowOnload) {
        ZM.windowOnload();
    }
    // Your code here
};