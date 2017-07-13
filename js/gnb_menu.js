/**
 * Gnb Menu CSS
 */

$(function(){

  $('.css-menu-depth1-link').on('mouseenter', function(){

    $(this).next().addClass('on');

  });

});
/**
 * Gnb Menu jQuery
 */

$(function(){


  $('.menu-depth1-link').on('mouseenter', function(){
    // depth1 border 늘어나는 모션 효과
    $(this).children('.menu-depth1-border').stop().animate({
      width:64
    }, 300);

    // depth2 메뉴 늘어나는 모션 효과
    var depth1Index = $(this).index('.menu-depth1-link');
    var motionHeight = 54;

    if( depth1Index == 1 ){
      motionHeight = 80;
    }

    $(this).next('.menu-depth2-wrap').css({'z-index' : 10}).stop().animate({
      height:motionHeight,
      opacity : 1
    }, 300, function(){
      // $(this) => .menu-depth2-wrap
      $(this).parent().siblings().children('.menu-depth2-wrap').css({'z-index' : 0}).stop().animate({
        height : 0,
        opacity : 0
      }, 200);
    });

  });

  $('.menu-depth1-link').on('mouseleave', function(){
    // depth1 border 줄어드는 모션효과
    $(this).children('.menu-depth1-border').stop().animate({
      width : 0
    }, 300);
  });

  $('.menu-depth1').on('mouseleave', function(){
    // depth2 메뉴 줄어드는 모션 효과
    $('.menu-depth2-wrap').stop().animate({
      height : 0,
      opacity : 0
    }, 300);
  });




});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9nbmJfbWVudV9jc3MuanMiLCJfZ25iX21lbnVfanF1ZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImduYl9tZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEduYiBNZW51IENTU1xyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgJCgnLmNzcy1tZW51LWRlcHRoMS1saW5rJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICQodGhpcykubmV4dCgpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICB9KTtcclxuXHJcbn0pOyIsIi8qKlxyXG4gKiBHbmIgTWVudSBqUXVlcnlcclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG5cclxuICAkKCcubWVudS1kZXB0aDEtbGluaycpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuICAgIC8vIGRlcHRoMSBib3JkZXIg64qY7Ja064KY64qUIOuqqOyFmCDtmqjqs7xcclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5tZW51LWRlcHRoMS1ib3JkZXInKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgIHdpZHRoOjY0XHJcbiAgICB9LCAzMDApO1xyXG5cclxuICAgIC8vIGRlcHRoMiDrqZTribQg64qY7Ja064KY64qUIOuqqOyFmCDtmqjqs7xcclxuICAgIHZhciBkZXB0aDFJbmRleCA9ICQodGhpcykuaW5kZXgoJy5tZW51LWRlcHRoMS1saW5rJyk7XHJcbiAgICB2YXIgbW90aW9uSGVpZ2h0ID0gNTQ7XHJcblxyXG4gICAgaWYoIGRlcHRoMUluZGV4ID09IDEgKXtcclxuICAgICAgbW90aW9uSGVpZ2h0ID0gODA7XHJcbiAgICB9XHJcblxyXG4gICAgJCh0aGlzKS5uZXh0KCcubWVudS1kZXB0aDItd3JhcCcpLmNzcyh7J3otaW5kZXgnIDogMTB9KS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgIGhlaWdodDptb3Rpb25IZWlnaHQsXHJcbiAgICAgIG9wYWNpdHkgOiAxXHJcbiAgICB9LCAzMDAsIGZ1bmN0aW9uKCl7XHJcbiAgICAgIC8vICQodGhpcykgPT4gLm1lbnUtZGVwdGgyLXdyYXBcclxuICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCcubWVudS1kZXB0aDItd3JhcCcpLmNzcyh7J3otaW5kZXgnIDogMH0pLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICBoZWlnaHQgOiAwLFxyXG4gICAgICAgIG9wYWNpdHkgOiAwXHJcbiAgICAgIH0sIDIwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5tZW51LWRlcHRoMS1saW5rJykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpe1xyXG4gICAgLy8gZGVwdGgxIGJvcmRlciDspITslrTrk5zripQg66qo7IWY7Zqo6rO8XHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcubWVudS1kZXB0aDEtYm9yZGVyJykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICB3aWR0aCA6IDBcclxuICAgIH0sIDMwMCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJy5tZW51LWRlcHRoMScpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKXtcclxuICAgIC8vIGRlcHRoMiDrqZTribQg7KSE7Ja065Oc64qUIOuqqOyFmCDtmqjqs7xcclxuICAgICQoJy5tZW51LWRlcHRoMi13cmFwJykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICBoZWlnaHQgOiAwLFxyXG4gICAgICBvcGFjaXR5IDogMFxyXG4gICAgfSwgMzAwKTtcclxuICB9KTtcclxuXHJcblxyXG5cclxuXHJcbn0pO1xyXG4iXX0=
