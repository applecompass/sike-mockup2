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

    !function () {
        var $prong = $("div#publishbox > span.publishbox-prong");
        var defaultLeft = parseInt($prong.position().left);
        var planSelectCallback = function (order, plan_id) {

            var $planlistUl = $("div.planlist-container").find("ul.planlist");
            var $planlistLi = $planlistUl.find(" > li");
            var $planlistLiDelegate = $planlistLi.eq(1);
            var liWidth = $planlistLiDelegate.width();
            var liMarginLeft = parseInt($planlistLiDelegate.css("margin-left"));
            var liSpan = liWidth + liMarginLeft;

            $prong.animate(
                    {
                        left: defaultLeft + liSpan * (order % 5)
                    },
                    400,
                    function () {
                        // Animation complete.
                    });
        };

        var objPlanList = new ZM.PlanList({ $container: $("div.planlist-container"), visibleNum: 5 });
        objPlanList
        .render(testPlanListData)
        .select(planSelectCallback, 0)
        .nav(function (i) { console.log("move to " + i + " paragraph"); });
    } ();

    ZM.Form.textHint($("#publishbox-input"), $("#publishbox-input-hint"));

    !function () {
        var burnSlider = function (defaultVal, maxVal) {
            var $elValue = $("#publishbox-time");
            $elValue.text(defaultVal);
            $("#publishbox-dragbar").slider({
                range: "min",
                value: defaultVal,
                min: 0,
                max: maxVal,
                slide: function (event, ui) {
                    $elValue.text(ui.value);
                }
            });
        };
        burnSlider(50, 180);
    } ();

});

// Window Onload.
ZM.windowOnload = window.onload;
window.onload = function () {
    if (ZM.windowOnload) {
        ZM.windowOnload();
    }
    // Your code here
};