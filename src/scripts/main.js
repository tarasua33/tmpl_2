$('.home-content-latestWorks-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 750,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 560,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 350,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.home-homeSlider-container').slick({
    infinite: true,
    dots: true,
    arrows: false,
    speed: 300,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
});

$(function () {
   $(".pushRight").on("click", function () {
       $(".home .slick-next").click();
   }) ;
    $(".pushLeft").on("click", function () {
        $(".home .slick-prev").click();
    }) ;
});