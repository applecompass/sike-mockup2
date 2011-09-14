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

    ZM.PlanList = function (args) {
        this.$planlistContainer = args.$container || $("div.planlist-container");
        this.visibleNum = args.visibleNum || 1;
        this.duration = args.duration || 400;

        this.$planlistUl = this.$planlistContainer.find("ul.planlist");
        this.$planlistLi = this.$planlistUl.find(" > li");
    };

    ZM.PlanList.prototype.nav = function (callback) {
        var $planlistContainer = this.$planlistContainer;
        var $planlistUl = this.$planlistUl;
        var $planlistLi = this.$planlistLi;

        var $dotNav = $("<div class='dotnav-container txtalign-c'>" +
                                "<ul class='dotnav hor'>" +
                                    "<li class='active'>0</li>" +
                                "</ul>" +
                            "</div>");

        var visibleNum = this.visibleNum,
                duration = this.duration;

        var _l = $planlistLi.length;


        if (_l > visibleNum) {
            var $planlistLiDelegate = $planlistLi.eq(1);
            var liWidth = $planlistLiDelegate.width();
            var liMarginLeft = parseInt($planlistLiDelegate.css("margin-left"));
            var ulWidth = 0,
                    containerWith = 0;
            var paragraphCount = Math.ceil(_l / visibleNum - 1);

            ulWidth = liWidth * _l + liMarginLeft * (_l - 1);
            containerWith = liWidth * visibleNum + liMarginLeft * (visibleNum - 1);

            $planlistContainer.width(containerWith);
            $planlistUl.width(ulWidth);

            for (var i = 0; i < paragraphCount; i++) {
                $dotNav.find(" > ul.dotnav").append("<li>" + (i + 1) + "</li>");
            }

            var paragraphWidth = containerWith + liMarginLeft;

            var $dotNavLi = $dotNav.find(" > ul.dotnav > li");

            $dotNavLi.bind("click", function () {
                var order = $(this).text();
                $planlistUl.animate(
                        {
                            left: -(order * paragraphWidth)
                        },
                        duration,
                        function () {
                            // Animation complete.
                            typeof callback === "function" ? callback.call(null, order) : null;
                        });
                $dotNavLi.removeClass("active");
                $(this).addClass("active");
            });
        }
        // Append Dot Nav
        $planlistContainer.after($dotNav);

        return this;
    };

    ZM.PlanList.prototype.select = function (callback, defaultVal) {
        var $planlistContainer = this.$planlistContainer;
        var $planlistUl = this.$planlistUl;
        var $planlistLi = this.$planlistLi;

        $planlistLi.live("click", function () {
            $planlistLi.removeClass("active");
            $(this).addClass("active");
            typeof callback === "function" ? callback.call(null, $(this).attr("order"), $(this).attr("pid")) : null;
        });
        if (defaultVal !== undefined) {
            $planlistLi.eq(defaultVal).click();
        }

        return this;
    };

    ZM.PlanList.prototype.render = function (data) {
        var htmlPlanListLiTemp = "<li order='{0}' pid='{1}'>" +
                                    "<a class='hand txtalign-c'>" +
                                        "<img src='{2}' width='73' height='73' />" +
                                        "<span class='mgry txt-xl'>{3}</span>" +
                                    "</a>" +
                                "</li>";
        var htmlPlanListLi = "";
        var $planlistUl = this.$planlistUl;
        for (var i = 0; i < testPlanListData.length; i++) {
            htmlPlanListLi = htmlPlanListLiTemp.format(i, data[i].planId.toString(), ZM.Config.Url.icons + data[i].planImgUrl, data[i].planName);
            $planlistUl.append(htmlPlanListLi);
        }
        $planlistUl.find(" > li:first").addClass("first");
        this.$planlistLi = $planlistUl.find(" > li");

        return this;
    }

})(jQuery);
