$(function () {
    $('.menu-links').css({
        display: 'none'
    });
    $('.menu-nav').css({
        display: 'flex'
    });
    $('.openBars').click(function () {
        $('.menu-links').slideDown(1000);
        setTimeout(() => {
            $('.menu-nav').css({
                display: 'none'
            });
            $('.header-text h1').css({
                paddingTop: '350px'
            })
        }, 100);
    });
    $('.exitBars').click(function () {
        $('.menu-links').slideUp(1000);
        setTimeout(() => {
            $('.menu-nav').css({
                display: 'flex'
            });
            $('.header-text h1').css({
                paddingTop: '250px'
            })
        }, 500);
    });
    $('.phone-block').hide();
    $('.openPhone').click(function () {
        $('.phone-block').slideDown(1000);
    });
    $('.exitPhone').click(function () {
        $('.phone-block').slideUp(1000);
    });
})