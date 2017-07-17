/**
 * Image Sliding CSS
 */

$(function(){

  // 선언부
  function init(){
    $('.css-sliding-view-image').eq(0).addClass('current');
    $('.css-sliding-view-image').eq(1).addClass('next');
    $('.css-sliding-view-image').eq(2).addClass('prev');

    //marginCtrlWrap();
    //paging();
  }

  var currentIndex = 0;
  var nextIndex = 0;

  function moveLeft(){
    if(nextIndex >= $('.css-sliding-view-image').length){
      nextIndex = 0;
    }

    $('.css-sliding-view-image').eq(currentIndex-1).removeClass('prev').addClass('next');
    $('.css-sliding-view-image').eq(currentIndex).removeClass('current').addClass('prev');
    $('.css-sliding-view-image').eq(nextIndex).removeClass('next').addClass('current');

    currentIndex = nextIndex;
    nextIndex++;
  }

  // 실행부
  init();

  $('.css-sliding-arrow.right').on('click', function(){
    nextIndex = currentIndex + 1;
    if( !$('.css-sliding-view-image').is(':animated') ){
      moveLeft();
    }
  });

});