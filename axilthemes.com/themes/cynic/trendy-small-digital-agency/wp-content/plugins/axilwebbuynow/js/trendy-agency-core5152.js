jQuery(function ($) {

    /*-- Strict mode enabled --*/
    "use strict";
    var buyNow = '<a class="custom-btn btn-big grad-style-ef btn-fixed" href="https://themeforest.net/checkout/from_item/20779317?license=regular" target="_blank" rel="noopener"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Buy Now</a>'
    $('body').append($(buyNow));

    $('.btn-fixed').css({
        'position': 'fixed',
        'right': '25px',
        'bottom': '25px',
        'z-index': '9999'
    });

}(jQuery));