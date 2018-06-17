/*Load list Portfolio to LOCALE-STORAGE*/
$(function () {
    var list = [
        [
            {class: 'websites', img: 'img/portfolio-1.jpg'},
            {class: 'wordpress', img:'img/portfolio-2.jpg'},
            {class: 'mobileapps', img:'img/portfolio-3.jpg'},
            {class: 'icons', img:'img/portfolio-4.jpg'},
            {class: 'logos', img:'img/portfolio-5.jpg'},
            {class: 'graphics', img:'img/portfolio-6.jpg'},
            {class: 'websites', img:'img/portfolio-7.jpg'},
            {class: 'wordpress', img:'img/portfolio-8.jpg'},
            {class: 'mobileapps', img:'img/portfolio-9.jpg'},
            {class: 'icons', img:'img/portfolio-10.jpg'},
            {class: 'graphics', img:'img/portfolio-11.jpg'},
            {class: 'graphics', img:'img/portfolio-12.jpg'},
            {class: 'websites', img:'img/portfolio-13.jpg'},
            {class: 'wordpress', img:'img/portfolio-14.jpg'},
            {class: 'icons', img:'img/portfolio-15.jpg'},
            {class: 'graphics', img:'img/portfolio-16.jpg'}
        ],
        [
            {class: 'graphics', img:'img/portfolio-6.jpg'},
            {class: 'websites', img:'img/portfolio-7.jpg'},
            {class: 'wordpress', img:'img/portfolio-8.jpg'},
            {class: 'mobileapps', img:'img/portfolio-9.jpg'},
            {class: 'websites', img: 'img/portfolio-1.jpg'},
            {class: 'wordpress', img:'img/portfolio-2.jpg'},
            {class: 'websites', img:'img/portfolio-13.jpg'},
            {class: 'wordpress', img:'img/portfolio-14.jpg'},
            {class: 'icons', img:'img/portfolio-15.jpg'},
            {class: 'graphics', img:'img/portfolio-16.jpg'},
            {class: 'mobileapps', img:'img/portfolio-3.jpg'},
            {class: 'icons', img:'img/portfolio-4.jpg'},
            {class: 'logos', img:'img/portfolio-5.jpg'},
            {class: 'icons', img:'img/portfolio-10.jpg'},
            {class: 'graphics', img:'img/portfolio-11.jpg'},
            {class: 'graphics', img:'img/portfolio-12.jpg'}
        ],
        [
            {class: 'websites', img: 'img/portfolio-1.jpg'},
            {class: 'websites', img:'img/portfolio-7.jpg'},
            {class: 'wordpress', img:'img/portfolio-8.jpg'},
            {class: 'mobileapps', img:'img/portfolio-9.jpg'},
            {class: 'icons', img:'img/portfolio-10.jpg'},
            {class: 'graphics', img:'img/portfolio-11.jpg'},
            {class: 'graphics', img:'img/portfolio-12.jpg'},
            {class: 'websites', img:'img/portfolio-13.jpg'},
            {class: 'wordpress', img:'img/portfolio-14.jpg'},
            {class: 'icons', img:'img/portfolio-15.jpg'},
            {class: 'graphics', img:'img/portfolio-16.jpg'},
            {class: 'wordpress', img:'img/portfolio-2.jpg'},
            {class: 'mobileapps', img:'img/portfolio-3.jpg'},
            {class: 'icons', img:'img/portfolio-4.jpg'},
            {class: 'logos', img:'img/portfolio-5.jpg'},
            {class: 'graphics', img:'img/portfolio-6.jpg'}
        ],
        [
            {class: 'wordpress', img:'img/portfolio-14.jpg'},
            {class: 'icons', img:'img/portfolio-15.jpg'},
            {class: 'graphics', img:'img/portfolio-16.jpg'},
            {class: 'websites', img: 'img/portfolio-1.jpg'},
            {class: 'wordpress', img:'img/portfolio-2.jpg'},
            {class: 'mobileapps', img:'img/portfolio-3.jpg'},
            {class: 'icons', img:'img/portfolio-4.jpg'},
            {class: 'logos', img:'img/portfolio-5.jpg'},
            {class: 'graphics', img:'img/portfolio-6.jpg'},
            {class: 'websites', img:'img/portfolio-7.jpg'},
            {class: 'wordpress', img:'img/portfolio-8.jpg'},
            {class: 'mobileapps', img:'img/portfolio-9.jpg'},
            {class: 'icons', img:'img/portfolio-10.jpg'},
            {class: 'graphics', img:'img/portfolio-11.jpg'},
            {class: 'graphics', img:'img/portfolio-12.jpg'},
            {class: 'websites', img:'img/portfolio-13.jpg'}
        ],
        [
            {class: 'icons', img:'img/portfolio-10.jpg'},
            {class: 'graphics', img:'img/portfolio-11.jpg'},
            {class: 'graphics', img:'img/portfolio-12.jpg'},
            {class: 'websites', img:'img/portfolio-13.jpg'},
            {class: 'wordpress', img:'img/portfolio-14.jpg'},
            {class: 'icons', img:'img/portfolio-15.jpg'},
            {class: 'graphics', img:'img/portfolio-16.jpg'},
            {class: 'websites', img: 'img/portfolio-1.jpg'},
            {class: 'wordpress', img:'img/portfolio-2.jpg'},
            {class: 'mobileapps', img:'img/portfolio-3.jpg'},
            {class: 'icons', img:'img/portfolio-4.jpg'},
            {class: 'logos', img:'img/portfolio-5.jpg'},
            {class: 'graphics', img:'img/portfolio-6.jpg'},
            {class: 'websites', img:'img/portfolio-7.jpg'},
            {class: 'wordpress', img:'img/portfolio-8.jpg'},
            {class: 'mobileapps', img:'img/portfolio-9.jpg'}
        ],
    ];
    var listJSON = JSON.stringify(list);

    if (!localStorage.getItem('portfolioWorks')) {
        localStorage.setItem('portfolioWorks', listJSON);
    }
});
/*Load list Portfolio FROM LOCALE-STORAGE*/
// $(function () {
//     var $portfolio = $('#portfolio'),
//         $pag = $('#paginationPortfolio');
//     if ($portfolio[0] !== undefined) {
//         var $newItem = $('#templateItemPortfolio').clone();
//
//         var list = JSON.parse(localStorage.getItem('portfolioWorks'));
//         var currentList = list[0];
//         for (var i=0; i<currentList.length; i++) {
//             var $newItem = $('#templateItemPortfolio').clone();
//             $newItem.addClass(currentList[i].class);
//             $newItem[0].firstElementChild.setAttribute('src', currentList[i].img);
//             $newItem.removeAttr('id');
//             $newItem.removeAttr('style');
//             $portfolio.prepend($newItem);
//         }
//     }
// });