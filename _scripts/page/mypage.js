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

    var objPlanList = new ZM.PlanList({ $container: $("div.planlist-container"), visibleNum: 6 });
    objPlanList
        .render(testPlanListData)
        .select(function (i) { console.log("select " + i); }, 0)
        .nav(function (i) { console.log("move to " + i + " paragraph"); });

    ZM.Form.textHint($("#publishbox-input"), $("#publishbox-input-hint"));

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

});

// Window Onload.
ZM.windowOnload = window.onload;
window.onload = function () {
    if (ZM.windowOnload) {
        ZM.windowOnload();
    }
    // Your code here
};