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

    $('.css-sliding-view-image').eq(currentIndex-1).removeClass('prev ani').addClass('next');
    $('.css-sliding-view-image').eq(currentIndex).removeClass('current ani').addClass('prev ani');
    $('.css-sliding-view-image').eq(nextIndex).removeClass('next').addClass('current ani');

    currentIndex = nextIndex;
    nextIndex++;
  }

  function moveRight(){
    if(nextIndex >= $('.css-sliding-view-image').length){
      nextIndex = 0;
    }

    $('.css-sliding-view-image').eq(currentIndex-1).removeClass('prev ani').addClass('next');
    $('.css-sliding-view-image').eq(currentIndex).removeClass('current ani').addClass('prev ani');
    $('.css-sliding-view-image').eq(nextIndex).removeClass('next').addClass('current ani');

    currentIndex = nextIndex;
    nextIndex--;
  }

  // 실행부
  init();

  var activeClick = function(){
    nextIndex = currentIndex + 1;
    moveLeft();
    setTimeout(function(){
      // 재귀함수
      $('.css-sliding-arrow.right').one('click', activeClick);
    }, 1000);
  };


  $('.css-sliding-arrow.right').one('click', function(){
    activeClick('left');
  });

  $('.css-sliding-arrow.left').one('click', function(){
    activeClick('right');
  });

});