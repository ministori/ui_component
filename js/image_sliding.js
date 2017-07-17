/**
 * Image Sliding CSS
 */

$(function(){

  // 선언부
  function init(){
    $('.css-sliding-view-image').eq(0).addClass('center');
    $('.css-sliding-view-image').eq(1).addClass('right');
    $('.css-sliding-view-image').eq(2).addClass('left');

    //marginCtrlWrap();
    //paging();
  }

  var currentIndex = 0;
  var nextIndex = 0;
  var prevIndex = 0;

  function moveLeft(){
    if(nextIndex >= $('.css-sliding-view-image').length){
      nextIndex = 0;
    }

    // eq()에 음수 값을 넣어 주면 뒷 순서부터 차례대로 매칭시킴
    $('.css-sliding-view-image').eq(currentIndex-1).removeClass('left ani').addClass('right');
    $('.css-sliding-view-image').eq(currentIndex).removeClass('center ani').addClass('left ani');
    $('.css-sliding-view-image').eq(nextIndex).removeClass('right').addClass('center ani');

    currentIndex = nextIndex;
    nextIndex++;
  }

  function moveRight(){
    if(nextIndex <= -1){
      nextIndex = $('.css-sliding-view-image').length-1;
    }

    if( prevIndex >= $('.css-sliding-view-image').length ){
      prevIndex = 0;
    }

    $('.css-sliding-view-image').eq(prevIndex).removeClass('right ani').addClass('left');
    $('.css-sliding-view-image').eq(currentIndex).removeClass('center ani').addClass('right ani');
    $('.css-sliding-view-image').eq(nextIndex).removeClass('left').addClass('center ani');

    currentIndex = nextIndex;
    prevIndex = currentIndex + 1;
    nextIndex--;
  }

  // 실행부
  init();

  var activeClick = function(direction){

    var dir = direction;

    if( dir == 'right' ){
      nextIndex = currentIndex + 1;
      moveLeft();
    } else {
      nextIndex = currentIndex - 1;
      prevIndex = currentIndex + 1;
      moveRight();
    }

    var $selector = $('.css-sliding-arrow.' + dir); // $('.css-sliding-arrow.right')

    setTimeout(function(){
      // 재귀함수
      $selector.one('click', function(){
        activeClick(dir);
      });

/*
      if(dir == 'left'){
        $('.css-sliding-arrow.right').one('click', function(){
          activeClick(dir);
        });
      } else {
        $('.css-sliding-arrow.left').one('click', function(){
          activeClick(dir);
        });
      }
*/
    }, 1000);

  };

  $('.css-sliding-arrow.right').one('click', function(){
    activeClick('right');
  });

  $('.css-sliding-arrow.left').one('click', function(){
    activeClick('left');
  });

});
/**
 * Image Sliding Jquery
 */

$(function(){

  // 선언부
  function init(){
    $('.js-sliding .view-image').eq(0).css({left : 0});
    $('.js-sliding .view-image').eq(1).css({left : 400});
    $('.js-sliding .view-image').eq(2).css({left : -400});

    marginCtrlWrap();
    paging();
  }

  var currentIndex = 0;
  var nextIndex = 0;
  var timeID;
  var checkID;

  function moveLeft(){
    if(nextIndex >= $('.js-sliding .view-image').length){
      nextIndex = 0;
    }
    $('.js-sliding .view-image').eq(currentIndex).stop().animate({left:-400}, 2000, 'easeOutBounce');
    $('.js-sliding .view-image').eq(nextIndex).css({left:400}).stop().animate({left:0}, 2000, 'easeOutBounce');
    currentIndex = nextIndex;
    nextIndex++;
  }

  function moveRight(){
    if(nextIndex <= -1){
      nextIndex = $('.view-image').length-1;
    }
    $('.js-sliding .view-image').eq(currentIndex).stop().animate({left:400}, 2000, 'easeOutBounce');
    $('.js-sliding .view-image').eq(nextIndex).css({left:-400}).stop().animate({left:0}, 2000, 'easeOutBounce');

    currentIndex = nextIndex;
    nextIndex--;
  }

  function autoRolling(){
    timeID = setInterval(function(){
      nextIndex = currentIndex + 1;
      moveLeft();
    }, 3000);
  }

  function marginCtrlWrap(){

    var wrapWidth = $('.js-sliding .control-wrap').width();

    $('.js-sliding .control-wrap').css({
      'margin-left' : -( wrapWidth / 2 )
    });

  }

  function paging(){

    var imgNumber = $('.js-sliding .view-image').length; // size() 개수 구하는 함수

    for(var i=0; i<imgNumber; i++){

      $('.js-sliding .paging').append('<li class="paging-item"><a href="#" class="paging-link">' + (i+1) + '</a></li>');

    }

  }

  // 실행부
  init();
  autoRolling();

  $('.arrow.right').on('click', function(){
    clearInterval( timeID );
    clearInterval( checkID );
    var count = 0;
    checkID = setInterval(function(){
      if(count == 5){
        autoRolling();
        clearInterval(checkID);
      }
      console.log(count);
      count++;
    }, 1000);
    nextIndex = currentIndex + 1;
    if( !$('.view-image').is(':animated') ){
      moveLeft();
    }
  });

  $('.arrow.left').on('click', function(){
    clearInterval( timeID );
    clearInterval( checkID );
    var count = 0;
    checkID = setInterval(function(){
      if(count == 5){
        autoRolling();
        clearInterval(checkID);
      }
      console.log(count);
      count++;
    }, 1000);
    nextIndex = currentIndex - 1;
    if( !$('.view-image').is(':animated') ){
      moveRight();
    }
  });

  $(document).on('click', '.btn-control.pause', function(e){
    clearInterval(timeID);
    $(e.target).removeClass('pause').addClass('play');
    $(e.target).text('Play');
  });

  $(document).on('click', '.btn-control.play', function(e){
    autoRolling();
    $(e.target).removeClass('play').addClass('pause');
    $(e.target).text('Pause');
  });

  $(document).on('click', '.paging-item', function(e){
    e.preventDefault();
    var indexNumber = $(this).index('.paging-item');
    if( currentIndex != indexNumber ){

      if( currentIndex == 0 ){

        if( indexNumber == $('.view-image').length-1 ){
          nextIndex = currentIndex - 1;
          if( !$('.view-image').is(':animated') ){
            moveRight();
          }
        } else {
          nextIndex = currentIndex + 1;
          if( !$('.view-image').is(':animated') ){
            moveLeft();
          }
        }

      } else if( currentIndex == $('.view-image').length-1 ){

        if( indexNumber == 0 ){
          nextIndex = currentIndex + 1;
          if( !$('.view-image').is(':animated') ){
            moveLeft();
          }
        } else {
          nextIndex = currentIndex - 1;
          if( !$('.view-image').is(':animated') ){
            moveRight();
          }
        }

      } else {

        if( currentIndex < indexNumber ){
          nextIndex = currentIndex + 1;
          if( !$('.view-image').is(':animated') ){
            moveLeft();
          }
        } else {
          nextIndex = currentIndex - 1;
          if( !$('.view-image').is(':animated') ){
            moveRight();
          }
        }

      }

    }

  });

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9pbWFnZV9zbGlkaW5nX2Nzcy5qcyIsIl9pbWFnZV9zbGlkaW5nX2pxdWVyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW1hZ2Vfc2xpZGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBJbWFnZSBTbGlkaW5nIENTU1xyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgLy8g7ISg7Ja467aAXHJcbiAgZnVuY3Rpb24gaW5pdCgpe1xyXG4gICAgJCgnLmNzcy1zbGlkaW5nLXZpZXctaW1hZ2UnKS5lcSgwKS5hZGRDbGFzcygnY2VudGVyJyk7XHJcbiAgICAkKCcuY3NzLXNsaWRpbmctdmlldy1pbWFnZScpLmVxKDEpLmFkZENsYXNzKCdyaWdodCcpO1xyXG4gICAgJCgnLmNzcy1zbGlkaW5nLXZpZXctaW1hZ2UnKS5lcSgyKS5hZGRDbGFzcygnbGVmdCcpO1xyXG5cclxuICAgIC8vbWFyZ2luQ3RybFdyYXAoKTtcclxuICAgIC8vcGFnaW5nKCk7XHJcbiAgfVxyXG5cclxuICB2YXIgY3VycmVudEluZGV4ID0gMDtcclxuICB2YXIgbmV4dEluZGV4ID0gMDtcclxuICB2YXIgcHJldkluZGV4ID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gbW92ZUxlZnQoKXtcclxuICAgIGlmKG5leHRJbmRleCA+PSAkKCcuY3NzLXNsaWRpbmctdmlldy1pbWFnZScpLmxlbmd0aCl7XHJcbiAgICAgIG5leHRJbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXEoKeyXkCDsnYzsiJgg6rCS7J2EIOuEo+yWtCDso7zrqbQg65K3IOyInOyEnOu2gO2EsCDssKjroYDrjIDroZwg66ek7Lmt7Iuc7YK0XHJcbiAgICAkKCcuY3NzLXNsaWRpbmctdmlldy1pbWFnZScpLmVxKGN1cnJlbnRJbmRleC0xKS5yZW1vdmVDbGFzcygnbGVmdCBhbmknKS5hZGRDbGFzcygncmlnaHQnKTtcclxuICAgICQoJy5jc3Mtc2xpZGluZy12aWV3LWltYWdlJykuZXEoY3VycmVudEluZGV4KS5yZW1vdmVDbGFzcygnY2VudGVyIGFuaScpLmFkZENsYXNzKCdsZWZ0IGFuaScpO1xyXG4gICAgJCgnLmNzcy1zbGlkaW5nLXZpZXctaW1hZ2UnKS5lcShuZXh0SW5kZXgpLnJlbW92ZUNsYXNzKCdyaWdodCcpLmFkZENsYXNzKCdjZW50ZXIgYW5pJyk7XHJcblxyXG4gICAgY3VycmVudEluZGV4ID0gbmV4dEluZGV4O1xyXG4gICAgbmV4dEluZGV4Kys7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtb3ZlUmlnaHQoKXtcclxuICAgIGlmKG5leHRJbmRleCA8PSAtMSl7XHJcbiAgICAgIG5leHRJbmRleCA9ICQoJy5jc3Mtc2xpZGluZy12aWV3LWltYWdlJykubGVuZ3RoLTE7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoIHByZXZJbmRleCA+PSAkKCcuY3NzLXNsaWRpbmctdmlldy1pbWFnZScpLmxlbmd0aCApe1xyXG4gICAgICBwcmV2SW5kZXggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgICQoJy5jc3Mtc2xpZGluZy12aWV3LWltYWdlJykuZXEocHJldkluZGV4KS5yZW1vdmVDbGFzcygncmlnaHQgYW5pJykuYWRkQ2xhc3MoJ2xlZnQnKTtcclxuICAgICQoJy5jc3Mtc2xpZGluZy12aWV3LWltYWdlJykuZXEoY3VycmVudEluZGV4KS5yZW1vdmVDbGFzcygnY2VudGVyIGFuaScpLmFkZENsYXNzKCdyaWdodCBhbmknKTtcclxuICAgICQoJy5jc3Mtc2xpZGluZy12aWV3LWltYWdlJykuZXEobmV4dEluZGV4KS5yZW1vdmVDbGFzcygnbGVmdCcpLmFkZENsYXNzKCdjZW50ZXIgYW5pJyk7XHJcblxyXG4gICAgY3VycmVudEluZGV4ID0gbmV4dEluZGV4O1xyXG4gICAgcHJldkluZGV4ID0gY3VycmVudEluZGV4ICsgMTtcclxuICAgIG5leHRJbmRleC0tO1xyXG4gIH1cclxuXHJcbiAgLy8g7Iuk7ZaJ67aAXHJcbiAgaW5pdCgpO1xyXG5cclxuICB2YXIgYWN0aXZlQ2xpY2sgPSBmdW5jdGlvbihkaXJlY3Rpb24pe1xyXG5cclxuICAgIHZhciBkaXIgPSBkaXJlY3Rpb247XHJcblxyXG4gICAgaWYoIGRpciA9PSAncmlnaHQnICl7XHJcbiAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICAgIG1vdmVMZWZ0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xyXG4gICAgICBwcmV2SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xyXG4gICAgICBtb3ZlUmlnaHQoKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgJHNlbGVjdG9yID0gJCgnLmNzcy1zbGlkaW5nLWFycm93LicgKyBkaXIpOyAvLyAkKCcuY3NzLXNsaWRpbmctYXJyb3cucmlnaHQnKVxyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgLy8g7J6s6reA7ZWo7IiYXHJcbiAgICAgICRzZWxlY3Rvci5vbmUoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBhY3RpdmVDbGljayhkaXIpO1xyXG4gICAgICB9KTtcclxuXHJcbi8qXHJcbiAgICAgIGlmKGRpciA9PSAnbGVmdCcpe1xyXG4gICAgICAgICQoJy5jc3Mtc2xpZGluZy1hcnJvdy5yaWdodCcpLm9uZSgnY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgYWN0aXZlQ2xpY2soZGlyKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcuY3NzLXNsaWRpbmctYXJyb3cubGVmdCcpLm9uZSgnY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgYWN0aXZlQ2xpY2soZGlyKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4qL1xyXG4gICAgfSwgMTAwMCk7XHJcblxyXG4gIH07XHJcblxyXG4gICQoJy5jc3Mtc2xpZGluZy1hcnJvdy5yaWdodCcpLm9uZSgnY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgYWN0aXZlQ2xpY2soJ3JpZ2h0Jyk7XHJcbiAgfSk7XHJcblxyXG4gICQoJy5jc3Mtc2xpZGluZy1hcnJvdy5sZWZ0Jykub25lKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBhY3RpdmVDbGljaygnbGVmdCcpO1xyXG4gIH0pO1xyXG5cclxufSk7IiwiLyoqXHJcbiAqIEltYWdlIFNsaWRpbmcgSnF1ZXJ5XHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAvLyDshKDslrjrtoBcclxuICBmdW5jdGlvbiBpbml0KCl7XHJcbiAgICAkKCcuanMtc2xpZGluZyAudmlldy1pbWFnZScpLmVxKDApLmNzcyh7bGVmdCA6IDB9KTtcclxuICAgICQoJy5qcy1zbGlkaW5nIC52aWV3LWltYWdlJykuZXEoMSkuY3NzKHtsZWZ0IDogNDAwfSk7XHJcbiAgICAkKCcuanMtc2xpZGluZyAudmlldy1pbWFnZScpLmVxKDIpLmNzcyh7bGVmdCA6IC00MDB9KTtcclxuXHJcbiAgICBtYXJnaW5DdHJsV3JhcCgpO1xyXG4gICAgcGFnaW5nKCk7XHJcbiAgfVxyXG5cclxuICB2YXIgY3VycmVudEluZGV4ID0gMDtcclxuICB2YXIgbmV4dEluZGV4ID0gMDtcclxuICB2YXIgdGltZUlEO1xyXG4gIHZhciBjaGVja0lEO1xyXG5cclxuICBmdW5jdGlvbiBtb3ZlTGVmdCgpe1xyXG4gICAgaWYobmV4dEluZGV4ID49ICQoJy5qcy1zbGlkaW5nIC52aWV3LWltYWdlJykubGVuZ3RoKXtcclxuICAgICAgbmV4dEluZGV4ID0gMDtcclxuICAgIH1cclxuICAgICQoJy5qcy1zbGlkaW5nIC52aWV3LWltYWdlJykuZXEoY3VycmVudEluZGV4KS5zdG9wKCkuYW5pbWF0ZSh7bGVmdDotNDAwfSwgMjAwMCwgJ2Vhc2VPdXRCb3VuY2UnKTtcclxuICAgICQoJy5qcy1zbGlkaW5nIC52aWV3LWltYWdlJykuZXEobmV4dEluZGV4KS5jc3Moe2xlZnQ6NDAwfSkuc3RvcCgpLmFuaW1hdGUoe2xlZnQ6MH0sIDIwMDAsICdlYXNlT3V0Qm91bmNlJyk7XHJcbiAgICBjdXJyZW50SW5kZXggPSBuZXh0SW5kZXg7XHJcbiAgICBuZXh0SW5kZXgrKztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1vdmVSaWdodCgpe1xyXG4gICAgaWYobmV4dEluZGV4IDw9IC0xKXtcclxuICAgICAgbmV4dEluZGV4ID0gJCgnLnZpZXctaW1hZ2UnKS5sZW5ndGgtMTtcclxuICAgIH1cclxuICAgICQoJy5qcy1zbGlkaW5nIC52aWV3LWltYWdlJykuZXEoY3VycmVudEluZGV4KS5zdG9wKCkuYW5pbWF0ZSh7bGVmdDo0MDB9LCAyMDAwLCAnZWFzZU91dEJvdW5jZScpO1xyXG4gICAgJCgnLmpzLXNsaWRpbmcgLnZpZXctaW1hZ2UnKS5lcShuZXh0SW5kZXgpLmNzcyh7bGVmdDotNDAwfSkuc3RvcCgpLmFuaW1hdGUoe2xlZnQ6MH0sIDIwMDAsICdlYXNlT3V0Qm91bmNlJyk7XHJcblxyXG4gICAgY3VycmVudEluZGV4ID0gbmV4dEluZGV4O1xyXG4gICAgbmV4dEluZGV4LS07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhdXRvUm9sbGluZygpe1xyXG4gICAgdGltZUlEID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuICAgICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4ICsgMTtcclxuICAgICAgbW92ZUxlZnQoKTtcclxuICAgIH0sIDMwMDApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWFyZ2luQ3RybFdyYXAoKXtcclxuXHJcbiAgICB2YXIgd3JhcFdpZHRoID0gJCgnLmpzLXNsaWRpbmcgLmNvbnRyb2wtd3JhcCcpLndpZHRoKCk7XHJcblxyXG4gICAgJCgnLmpzLXNsaWRpbmcgLmNvbnRyb2wtd3JhcCcpLmNzcyh7XHJcbiAgICAgICdtYXJnaW4tbGVmdCcgOiAtKCB3cmFwV2lkdGggLyAyIClcclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBhZ2luZygpe1xyXG5cclxuICAgIHZhciBpbWdOdW1iZXIgPSAkKCcuanMtc2xpZGluZyAudmlldy1pbWFnZScpLmxlbmd0aDsgLy8gc2l6ZSgpIOqwnOyImCDqtaztlZjripQg7ZWo7IiYXHJcblxyXG4gICAgZm9yKHZhciBpPTA7IGk8aW1nTnVtYmVyOyBpKyspe1xyXG5cclxuICAgICAgJCgnLmpzLXNsaWRpbmcgLnBhZ2luZycpLmFwcGVuZCgnPGxpIGNsYXNzPVwicGFnaW5nLWl0ZW1cIj48YSBocmVmPVwiI1wiIGNsYXNzPVwicGFnaW5nLWxpbmtcIj4nICsgKGkrMSkgKyAnPC9hPjwvbGk+Jyk7XHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC8vIOyLpO2Wieu2gFxyXG4gIGluaXQoKTtcclxuICBhdXRvUm9sbGluZygpO1xyXG5cclxuICAkKCcuYXJyb3cucmlnaHQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgY2xlYXJJbnRlcnZhbCggdGltZUlEICk7XHJcbiAgICBjbGVhckludGVydmFsKCBjaGVja0lEICk7XHJcbiAgICB2YXIgY291bnQgPSAwO1xyXG4gICAgY2hlY2tJRCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcbiAgICAgIGlmKGNvdW50ID09IDUpe1xyXG4gICAgICAgIGF1dG9Sb2xsaW5nKCk7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChjaGVja0lEKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhjb3VudCk7XHJcbiAgICAgIGNvdW50Kys7XHJcbiAgICB9LCAxMDAwKTtcclxuICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICBpZiggISQoJy52aWV3LWltYWdlJykuaXMoJzphbmltYXRlZCcpICl7XHJcbiAgICAgIG1vdmVMZWZ0KCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICQoJy5hcnJvdy5sZWZ0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIGNsZWFySW50ZXJ2YWwoIHRpbWVJRCApO1xyXG4gICAgY2xlYXJJbnRlcnZhbCggY2hlY2tJRCApO1xyXG4gICAgdmFyIGNvdW50ID0gMDtcclxuICAgIGNoZWNrSUQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG4gICAgICBpZihjb3VudCA9PSA1KXtcclxuICAgICAgICBhdXRvUm9sbGluZygpO1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoY2hlY2tJRCk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coY291bnQpO1xyXG4gICAgICBjb3VudCsrO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xyXG4gICAgaWYoICEkKCcudmlldy1pbWFnZScpLmlzKCc6YW5pbWF0ZWQnKSApe1xyXG4gICAgICBtb3ZlUmlnaHQoKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5idG4tY29udHJvbC5wYXVzZScsIGZ1bmN0aW9uKGUpe1xyXG4gICAgY2xlYXJJbnRlcnZhbCh0aW1lSUQpO1xyXG4gICAgJChlLnRhcmdldCkucmVtb3ZlQ2xhc3MoJ3BhdXNlJykuYWRkQ2xhc3MoJ3BsYXknKTtcclxuICAgICQoZS50YXJnZXQpLnRleHQoJ1BsYXknKTtcclxuICB9KTtcclxuXHJcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5idG4tY29udHJvbC5wbGF5JywgZnVuY3Rpb24oZSl7XHJcbiAgICBhdXRvUm9sbGluZygpO1xyXG4gICAgJChlLnRhcmdldCkucmVtb3ZlQ2xhc3MoJ3BsYXknKS5hZGRDbGFzcygncGF1c2UnKTtcclxuICAgICQoZS50YXJnZXQpLnRleHQoJ1BhdXNlJyk7XHJcbiAgfSk7XHJcblxyXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcucGFnaW5nLWl0ZW0nLCBmdW5jdGlvbihlKXtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHZhciBpbmRleE51bWJlciA9ICQodGhpcykuaW5kZXgoJy5wYWdpbmctaXRlbScpO1xyXG4gICAgaWYoIGN1cnJlbnRJbmRleCAhPSBpbmRleE51bWJlciApe1xyXG5cclxuICAgICAgaWYoIGN1cnJlbnRJbmRleCA9PSAwICl7XHJcblxyXG4gICAgICAgIGlmKCBpbmRleE51bWJlciA9PSAkKCcudmlldy1pbWFnZScpLmxlbmd0aC0xICl7XHJcbiAgICAgICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xyXG4gICAgICAgICAgaWYoICEkKCcudmlldy1pbWFnZScpLmlzKCc6YW5pbWF0ZWQnKSApe1xyXG4gICAgICAgICAgICBtb3ZlUmlnaHQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4ICsgMTtcclxuICAgICAgICAgIGlmKCAhJCgnLnZpZXctaW1hZ2UnKS5pcygnOmFuaW1hdGVkJykgKXtcclxuICAgICAgICAgICAgbW92ZUxlZnQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICB9IGVsc2UgaWYoIGN1cnJlbnRJbmRleCA9PSAkKCcudmlldy1pbWFnZScpLmxlbmd0aC0xICl7XHJcblxyXG4gICAgICAgIGlmKCBpbmRleE51bWJlciA9PSAwICl7XHJcbiAgICAgICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xyXG4gICAgICAgICAgaWYoICEkKCcudmlldy1pbWFnZScpLmlzKCc6YW5pbWF0ZWQnKSApe1xyXG4gICAgICAgICAgICBtb3ZlTGVmdCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xyXG4gICAgICAgICAgaWYoICEkKCcudmlldy1pbWFnZScpLmlzKCc6YW5pbWF0ZWQnKSApe1xyXG4gICAgICAgICAgICBtb3ZlUmlnaHQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBpZiggY3VycmVudEluZGV4IDwgaW5kZXhOdW1iZXIgKXtcclxuICAgICAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICAgICAgICBpZiggISQoJy52aWV3LWltYWdlJykuaXMoJzphbmltYXRlZCcpICl7XHJcbiAgICAgICAgICAgIG1vdmVMZWZ0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCAtIDE7XHJcbiAgICAgICAgICBpZiggISQoJy52aWV3LWltYWdlJykuaXMoJzphbmltYXRlZCcpICl7XHJcbiAgICAgICAgICAgIG1vdmVSaWdodCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG5cclxufSk7Il19
