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

});

// Window Onload.
ZM.windowOnload = window.onload;
window.onload = function () {
    if (ZM.windowOnload) {
        ZM.windowOnload();
    }
    // Your code here
};