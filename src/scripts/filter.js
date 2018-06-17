/*PORTFOLIO FILTER*/
$(function () {
    var $filteList = $(".portfolio-container-filter-list")                          // LIST Filter BUTTONS
    ;


    $filteList.on("click", function (e) {
        if (e.target.tagName === 'LI') {
            var selector = $(e.target).text().split(' ').join('').toLowerCase();
            filterByType(selector);
        }
    });

    function filterByType(type) {
        var $itemsArr = $(".portfolio-container-projects-list-item");                   // LIST ITEMS
        if (type === 'all') {
            for (i=0; i<$itemsArr.length; i++) {
                $itemsArr[i].removeAttribute("style");
            }
        } else {
            for (i=0; i<$itemsArr.length; i++) {
                if (!hasClass($itemsArr[i] , type)) {
                    $itemsArr[i].style.display = "none";
                } else {
                    $itemsArr[i].removeAttribute("style");
                }
            }
        }
    };


    /*FUNC FOR HAS-CLASS*/
    function hasClass(element, cls) {
        return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
    };
});