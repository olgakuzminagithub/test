$('.header-top-line-carousel').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 780,
            settings: {
                dots: false,
            }
        },
        {
            breakpoint: 600,
            settings: {
                dots: false,
            }
        },
    ]
});

$('.header-banner-carousel').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
});

$('.product-carousel').slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1230,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 4,
                centerMode: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                arrows: false,
            }
        }
    ]

});

$('.insta-carousel').slick({
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                arrows: false,
            }
        }
    ]
});

$('.use-carousel').slick({
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                arrows: false,
            }
        }
    ]
});