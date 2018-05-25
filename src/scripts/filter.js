var $itemsArr = $(".portfolio-container-projects-list-item");

filterByType('wordpress');

function filterByType(type) {
    function hasClass(element, cls) {
        return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
    }

    for (i=0; i<$itemsArr.length; i++) {
        if (!hasClass($itemsArr[i] , type)) {
            $itemsArr[i].style.display = "none";
        } else {
            $itemsArr[i].removeAttribute("style");
        }
    }
};