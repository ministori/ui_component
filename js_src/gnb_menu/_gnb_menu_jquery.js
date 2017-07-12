/**
 * Gnb Menu jQuery
 */

$(function(){

  $('.menu-depth1-link').on('mouseenter', function(){

    $(this).children(':after').animate({
      width : 64
    });

  });

});
