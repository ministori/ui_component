/**
 * Accordion menu CSS
 */

/**
 * Accordion menu jQuery
 */

/*
 ※ show/hide 형태의 아코디언 메뉴
 ※ CSS 코딩 : styling, hide

  1. 마우스 클릭했을 때 sub 메뉴가 show / hide
  2. 클릭한 1 depth 의 sub 메뉴가 보일 때 다른 1 depth의 sub 메뉴는 안보여야 함.
  3. sub 메뉴가 보일 때 화살표는 윗방향 화살표로 변경
  4. sub 메뉴가 안보이게 될 때 화살표는 아랫방향 화살표로 변경

 */

/*
  ※ sub 메뉴의 영역이 늘어났다/줄어들었다 형태의 아코디언 메뉴
  ※ CSS 코딩 : styling, 줄어듬(높이 : 0)

  1. 마우스를 클릭했을 때, sub 메뉴의 상태에 따라 sub 메뉴가 늘어남/줄어듬
  2. 클릭한 1 depth의 sub 메뉴가 늘어날 때 다른 1 depth의 sub 메뉴는 줄어들어야 함.
  3. sub 메뉴가 보일 때 화살표는 윗방향 화살표로 변경
  4. sub 메뉴가 안보이게 될 때 화살표는 아랫방향 화살표로 변경

 */

$(function(){

  // 선언부
  function init(){
    // 처음 로딩되었을 때 상태
    $('.lnb-depth1-link').data({'open' : 'false'});

    // each() : 요소 개수만큼 반복하는 함수
    $('.lnb-depth2').each(function(index){
      $(this).data({'height' : $(this).height()}).css({height : 0});
    });

  }

  // 실행부
  init();

  $('.lnb-depth1-link').on('click', function(e){

    e.preventDefault();

    if( $(this).data('open') == 'false' ){

      /*
       $(this).next().stop().animate({key : value},시간,콜백함수)

       ** jQuery DOM을 단계별로 찾아갈 때,

       : 첫번 째 인수의 value 부분에 $(this) 를 사용하면 처음 찾은 $(this)를 의미
       : 콜백함수 부분에 $(this)를 사용하면 최종으로 찾은 DOM요소가 $(this)가 됨.
       */
      $(this).next().stop().animate({
        height : $(this).next().data('height')
      });

      $(this).parent().siblings().children('.lnb-depth2').stop().animate({
        height : 0
      });

      $(this).data({'open' : 'true'});
      $(this).parent().siblings().children('.lnb-depth1-link').data('open', 'false');

    } else {

      $(this).next().stop().animate({
        height : 0
      });
      $(this).data({'open' : 'false'});

    }



  });

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9hY2NfbWVudV9jc3MuanMiLCJfYWNjX21lbnVfanF1ZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYWNjX21lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQWNjb3JkaW9uIG1lbnUgQ1NTXHJcbiAqL1xyXG4iLCIvKipcclxuICogQWNjb3JkaW9uIG1lbnUgalF1ZXJ5XHJcbiAqL1xyXG5cclxuLypcclxuIOKAuyBzaG93L2hpZGUg7ZiV7YOc7J2YIOyVhOy9lOuUlOyWuCDrqZTribRcclxuIOKAuyBDU1Mg7L2U65SpIDogc3R5bGluZywgaGlkZVxyXG5cclxuICAxLiDrp4jsmrDsiqQg7YG066at7ZaI7J2EIOuVjCBzdWIg66mU64m06rCAIHNob3cgLyBoaWRlXHJcbiAgMi4g7YG066at7ZWcIDEgZGVwdGgg7J2YIHN1YiDrqZTribTqsIAg67O07J28IOuVjCDri6TrpbggMSBkZXB0aOydmCBzdWIg66mU64m064qUIOyViOuztOyXrOyVvCDtlaguXHJcbiAgMy4gc3ViIOuplOuJtOqwgCDrs7Tsnbwg65WMIO2ZlOyCtO2RnOuKlCDsnJfrsKntlqUg7ZmU7IK07ZGc66GcIOuzgOqyvVxyXG4gIDQuIHN1YiDrqZTribTqsIAg7JWI67O07J206rKMIOuQoCDrlYwg7ZmU7IK07ZGc64qUIOyVhOueq+uwqe2WpSDtmZTsgrTtkZzroZwg67OA6rK9XHJcblxyXG4gKi9cclxuXHJcbi8qXHJcbiAg4oC7IHN1YiDrqZTribTsnZgg7JiB7Jet7J20IOuKmOyWtOuCrOuLpC/spITslrTrk6Tsl4jri6Qg7ZiV7YOc7J2YIOyVhOy9lOuUlOyWuCDrqZTribRcclxuICDigLsgQ1NTIOy9lOuUqSA6IHN0eWxpbmcsIOykhOyWtOuTrCjrhpLsnbQgOiAwKVxyXG5cclxuICAxLiDrp4jsmrDsiqTrpbwg7YG066at7ZaI7J2EIOuVjCwgc3ViIOuplOuJtOydmCDsg4Htg5zsl5Ag65Sw6528IHN1YiDrqZTribTqsIAg64qY7Ja064KoL+ykhOyWtOuTrFxyXG4gIDIuIO2BtOumre2VnCAxIGRlcHRo7J2YIHN1YiDrqZTribTqsIAg64qY7Ja064KgIOuVjCDri6TrpbggMSBkZXB0aOydmCBzdWIg66mU64m064qUIOykhOyWtOuTpOyWtOyVvCDtlaguXHJcbiAgMy4gc3ViIOuplOuJtOqwgCDrs7Tsnbwg65WMIO2ZlOyCtO2RnOuKlCDsnJfrsKntlqUg7ZmU7IK07ZGc66GcIOuzgOqyvVxyXG4gIDQuIHN1YiDrqZTribTqsIAg7JWI67O07J206rKMIOuQoCDrlYwg7ZmU7IK07ZGc64qUIOyVhOueq+uwqe2WpSDtmZTsgrTtkZzroZwg67OA6rK9XHJcblxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgLy8g7ISg7Ja467aAXHJcbiAgZnVuY3Rpb24gaW5pdCgpe1xyXG4gICAgLy8g7LKY7J2MIOuhnOuUqeuQmOyXiOydhCDrlYwg7IOB7YOcXHJcbiAgICAkKCcubG5iLWRlcHRoMS1saW5rJykuZGF0YSh7J29wZW4nIDogJ2ZhbHNlJ30pO1xyXG5cclxuICAgIC8vIGVhY2goKSA6IOyalOyGjCDqsJzsiJjrp4ztgbwg67CY67O17ZWY64qUIO2VqOyImFxyXG4gICAgJCgnLmxuYi1kZXB0aDInKS5lYWNoKGZ1bmN0aW9uKGluZGV4KXtcclxuICAgICAgJCh0aGlzKS5kYXRhKHsnaGVpZ2h0JyA6ICQodGhpcykuaGVpZ2h0KCl9KS5jc3Moe2hlaWdodCA6IDB9KTtcclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIC8vIOyLpO2Wieu2gFxyXG4gIGluaXQoKTtcclxuXHJcbiAgJCgnLmxuYi1kZXB0aDEtbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiggJCh0aGlzKS5kYXRhKCdvcGVuJykgPT0gJ2ZhbHNlJyApe1xyXG5cclxuICAgICAgLypcclxuICAgICAgICQodGhpcykubmV4dCgpLnN0b3AoKS5hbmltYXRlKHtrZXkgOiB2YWx1ZX0s7Iuc6rCELOy9nOuwse2VqOyImClcclxuXHJcbiAgICAgICAqKiBqUXVlcnkgRE9N7J2EIOuLqOqzhOuzhOuhnCDssL7slYTqsIgg65WMLFxyXG5cclxuICAgICAgIDog7LKr67KIIOynuCDsnbjsiJjsnZggdmFsdWUg67aA67aE7JeQICQodGhpcykg66W8IOyCrOyaqe2VmOuptCDsspjsnYwg7LC+7J2AICQodGhpcynrpbwg7J2Y66+4XHJcbiAgICAgICA6IOy9nOuwse2VqOyImCDrtoDrtoTsl5AgJCh0aGlzKeulvCDsgqzsmqntlZjrqbQg7LWc7KKF7Jy866GcIOywvuydgCBET03smpTshozqsIAgJCh0aGlzKeqwgCDrkKguXHJcbiAgICAgICAqL1xyXG4gICAgICAkKHRoaXMpLm5leHQoKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgaGVpZ2h0IDogJCh0aGlzKS5uZXh0KCkuZGF0YSgnaGVpZ2h0JylcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oJy5sbmItZGVwdGgyJykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgIGhlaWdodCA6IDBcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAkKHRoaXMpLmRhdGEoeydvcGVuJyA6ICd0cnVlJ30pO1xyXG4gICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oJy5sbmItZGVwdGgxLWxpbmsnKS5kYXRhKCdvcGVuJywgJ2ZhbHNlJyk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICQodGhpcykubmV4dCgpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICBoZWlnaHQgOiAwXHJcbiAgICAgIH0pO1xyXG4gICAgICAkKHRoaXMpLmRhdGEoeydvcGVuJyA6ICdmYWxzZSd9KTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgfSk7XHJcblxyXG59KTsiXX0=
