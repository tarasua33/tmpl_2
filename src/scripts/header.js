$(function () {
    $(".toggleButton").on("click", function () {
        $(".toggleMenu").slideToggle(500, function () {
            if ($(this).css("display") === "none") {
                $(this).removeAttr("style");
            }
        })
    })
});