/**
 * Gnb Menu CSS
 */

$(function(){

  var timeID; // setInterval, clearInterval에서 사용할 변수

  $('.css-menu-depth1-link').on('mouseenter', function(){

    // removeClass 하기위해 실행되고 있는 setInterval 취소
    clearInterval(timeID);

    // promise() : 앞선 동작이 모두 끝난 후 특정 기능을 실행 시킬때 사용
    $(this).next().addClass('on').promise().done(function(){

      var $depth2Wrap = $(this).parent().siblings().children('.css-menu-depth2-wrap');

      // setTimeout() : ~초 이후에 한번만 실행

      /*

       1. 타이머 함수 실행 횟수/취소
       2. 실행문의 횟수/시간 을 실행/취소

       를 고려해서 알고리즘 만들기

       1. 일반 코딩

          setInterval(function(){
            실행문
          }, 단위시간);

          - 단위시간마다 setInterval과 실행문이 매번 실행

          Ex) 단위시간 1000(1초), 회수 10 => 10초동안 setInterval 10번 실행, 실행문 10번 실행

              3.5초 시점에서 clearInter 실행 => setInterval 3번, 실행문 3번 실행

       2. 시간이 취소되는 기능 구현 코딩

          var i = 0;
          setInterval(function(){
            if( i == 10 ){
              실행문
            }
            i++;
          }, 단위시간);

          - 단위시간마다 setInterval은 매번 실행, 실행문은 i가 10일때 한번 실행

          Ex) 3.5초 시점에서 clearInterval 실행 => setInterval 3번, 실행문 0번(실행 취소)

       */

      var count = 0;

      timeID = setInterval(function(){
        if( count == 300 ){
          $depth2Wrap.removeClass('on');
        }
        count++;
      }, 1);

    });

  });

  $('.css-menu-depth1').on('mouseleave', function(){

    $('.css-menu-depth2-wrap').removeClass('on');

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9nbmJfbWVudV9jc3MuanMiLCJfZ25iX21lbnVfanF1ZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ25iX21lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogR25iIE1lbnUgQ1NTXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICB2YXIgdGltZUlEOyAvLyBzZXRJbnRlcnZhbCwgY2xlYXJJbnRlcnZhbOyXkOyEnCDsgqzsmqntlaAg67OA7IiYXHJcblxyXG4gICQoJy5jc3MtbWVudS1kZXB0aDEtbGluaycpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAvLyByZW1vdmVDbGFzcyDtlZjquLDsnITtlbQg7Iuk7ZaJ65CY6rOgIOyeiOuKlCBzZXRJbnRlcnZhbCDst6jshoxcclxuICAgIGNsZWFySW50ZXJ2YWwodGltZUlEKTtcclxuXHJcbiAgICAvLyBwcm9taXNlKCkgOiDslZ7shKAg64+Z7J6R7J20IOuqqOuRkCDrgZ3rgpwg7ZuEIO2KueyglSDquLDriqXsnYQg7Iuk7ZaJIOyLnO2CrOuVjCDsgqzsmqlcclxuICAgICQodGhpcykubmV4dCgpLmFkZENsYXNzKCdvbicpLnByb21pc2UoKS5kb25lKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICB2YXIgJGRlcHRoMldyYXAgPSAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oJy5jc3MtbWVudS1kZXB0aDItd3JhcCcpO1xyXG5cclxuICAgICAgLy8gc2V0VGltZW91dCgpIDogfuy0iCDsnbTtm4Tsl5Ag7ZWc67KI66eMIOyLpO2WiVxyXG5cclxuICAgICAgLypcclxuXHJcbiAgICAgICAxLiDtg4DsnbTrqLgg7ZWo7IiYIOyLpO2WiSDtmp/siJgv7Leo7IaMXHJcbiAgICAgICAyLiDsi6TtlonrrLjsnZgg7Zqf7IiYL+yLnOqwhCDsnYQg7Iuk7ZaJL+y3qOyGjFxyXG5cclxuICAgICAgIOulvCDqs6DroKTtlbTshJwg7JWM6rOg66as7KaYIOunjOuTpOq4sFxyXG5cclxuICAgICAgIDEuIOydvOuwmCDsvZTrlKlcclxuXHJcbiAgICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICDsi6TtlonrrLhcclxuICAgICAgICAgIH0sIOuLqOychOyLnOqwhCk7XHJcblxyXG4gICAgICAgICAgLSDri6jsnITsi5zqsITrp4jri6Qgc2V0SW50ZXJ2YWzqs7wg7Iuk7ZaJ66y47J20IOunpOuyiCDsi6TtlolcclxuXHJcbiAgICAgICAgICBFeCkg64uo7JyE7Iuc6rCEIDEwMDAoMey0iCksIO2ajOyImCAxMCA9PiAxMOy0iOuPmeyViCBzZXRJbnRlcnZhbCAxMOuyiCDsi6TtloksIOyLpO2WieusuCAxMOuyiCDsi6TtlolcclxuXHJcbiAgICAgICAgICAgICAgMy417LSIIOyLnOygkOyXkOyEnCBjbGVhckludGVyIOyLpO2WiSA9PiBzZXRJbnRlcnZhbCAz67KILCDsi6TtlonrrLggM+uyiCDsi6TtlolcclxuXHJcbiAgICAgICAyLiDsi5zqsITsnbQg7Leo7IaM65CY64qUIOq4sOuKpSDqtaztmIQg7L2U65SpXHJcblxyXG4gICAgICAgICAgdmFyIGkgPSAwO1xyXG4gICAgICAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgaWYoIGkgPT0gMTAgKXtcclxuICAgICAgICAgICAgICDsi6TtlonrrLhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICB9LCDri6jsnITsi5zqsIQpO1xyXG5cclxuICAgICAgICAgIC0g64uo7JyE7Iuc6rCE66eI64ukIHNldEludGVydmFs7J2AIOunpOuyiCDsi6TtloksIOyLpO2WieusuOydgCBp6rCAIDEw7J2865WMIO2VnOuyiCDsi6TtlolcclxuXHJcbiAgICAgICAgICBFeCkgMy417LSIIOyLnOygkOyXkOyEnCBjbGVhckludGVydmFsIOyLpO2WiSA9PiBzZXRJbnRlcnZhbCAz67KILCDsi6TtlonrrLggMOuyiCjsi6Ttlokg7Leo7IaMKVxyXG5cclxuICAgICAgICovXHJcblxyXG4gICAgICB2YXIgY291bnQgPSAwO1xyXG5cclxuICAgICAgdGltZUlEID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuICAgICAgICBpZiggY291bnQgPT0gMzAwICl7XHJcbiAgICAgICAgICAkZGVwdGgyV3JhcC5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY291bnQrKztcclxuICAgICAgfSwgMSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcuY3NzLW1lbnUtZGVwdGgxJykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICQoJy5jc3MtbWVudS1kZXB0aDItd3JhcCcpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG5cclxuICB9KTtcclxuXHJcbn0pOyIsIi8qKlxyXG4gKiBHbmIgTWVudSBqUXVlcnlcclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG5cclxuICAkKCcubWVudS1kZXB0aDEtbGluaycpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuICAgIC8vIGRlcHRoMSBib3JkZXIg64qY7Ja064KY64qUIOuqqOyFmCDtmqjqs7xcclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5tZW51LWRlcHRoMS1ib3JkZXInKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgIHdpZHRoOjY0XHJcbiAgICB9LCAzMDApO1xyXG5cclxuICAgIC8vIGRlcHRoMiDrqZTribQg64qY7Ja064KY64qUIOuqqOyFmCDtmqjqs7xcclxuICAgIHZhciBkZXB0aDFJbmRleCA9ICQodGhpcykuaW5kZXgoJy5tZW51LWRlcHRoMS1saW5rJyk7XHJcbiAgICB2YXIgbW90aW9uSGVpZ2h0ID0gNTQ7XHJcblxyXG4gICAgaWYoIGRlcHRoMUluZGV4ID09IDEgKXtcclxuICAgICAgbW90aW9uSGVpZ2h0ID0gODA7XHJcbiAgICB9XHJcblxyXG4gICAgJCh0aGlzKS5uZXh0KCcubWVudS1kZXB0aDItd3JhcCcpLmNzcyh7J3otaW5kZXgnIDogMTB9KS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgIGhlaWdodDptb3Rpb25IZWlnaHQsXHJcbiAgICAgIG9wYWNpdHkgOiAxXHJcbiAgICB9LCAzMDAsIGZ1bmN0aW9uKCl7XHJcbiAgICAgIC8vICQodGhpcykgPT4gLm1lbnUtZGVwdGgyLXdyYXBcclxuICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCcubWVudS1kZXB0aDItd3JhcCcpLmNzcyh7J3otaW5kZXgnIDogMH0pLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICBoZWlnaHQgOiAwLFxyXG4gICAgICAgIG9wYWNpdHkgOiAwXHJcbiAgICAgIH0sIDIwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5tZW51LWRlcHRoMS1saW5rJykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpe1xyXG4gICAgLy8gZGVwdGgxIGJvcmRlciDspITslrTrk5zripQg66qo7IWY7Zqo6rO8XHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcubWVudS1kZXB0aDEtYm9yZGVyJykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICB3aWR0aCA6IDBcclxuICAgIH0sIDMwMCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJy5tZW51LWRlcHRoMScpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKXtcclxuICAgIC8vIGRlcHRoMiDrqZTribQg7KSE7Ja065Oc64qUIOuqqOyFmCDtmqjqs7xcclxuICAgICQoJy5tZW51LWRlcHRoMi13cmFwJykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICBoZWlnaHQgOiAwLFxyXG4gICAgICBvcGFjaXR5IDogMFxyXG4gICAgfSwgMzAwKTtcclxuICB9KTtcclxuXHJcblxyXG5cclxuXHJcbn0pO1xyXG4iXX0=
