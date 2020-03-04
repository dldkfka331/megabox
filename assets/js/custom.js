(function($){
     /* 배너 이미지 슬라이드*/
     var mySwiper = new Swiper('.swiper-container', {
        navigation: {
           nextEl: '.swiper-button-next',
           prevEl: '.swiper-button-prev',
        },
        pagination: {
           el: '.swiper-pagination',
           type: 'bullets',
        },
        autoplay: {
           delay: 5000,
        },
     })

     /* 영화 차트 이미지 슬라이드*/
     var mySwiper = new Swiper('.swiper-container2', {
        slidesPerView: 4,
        spaceBetween: 24,
        // mousewheel: {
        //    invert: true,
        // },
        keyboard: {
           enabled: true,
           onlyInViewport: false,
        },
        // autoplay: {
        //    delay: 6000,
        // },
        breakpoints: {
           600: {
              slidesPerView: 1.4,
              spaceBetween: 24
           },
           768: {
              slidesPerView: 2,
              spaceBetween: 24
           },
           960: {
              slidesPerView: 3,
              spaceBetween: 24
           }
        }
     })

     /* 영화 차트 탭 메뉴 */
     let movieBtn = $(".movie_tit > ul > li");
     let movieCont = $(".movie_chart > div");

     movieCont.hide().eq(0).show();
     $(movieBtn).click(function (e) {
        e.preventDefault();
        let target = $(this);
        let index = target.index();
        movieBtn.removeClass("active");
        target.addClass("active");
        movieCont.css("display", "none");
        movieCont.eq(index).css("display", "block")
     })

     /* 공지사항 탭메뉴 */
     var tabMenu = $(".notice");
     tabMenu.find("ul > li > ul").hide();
     tabMenu.find("li.active > ul").show();
     function tabList(e){
        e.preventDefault();
        var target = $(this);
        target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
     }
     
     tabMenu.find("ul > li > a").click(tabList).focus(tabList)
    
    
    
    //sub01
    
    /* 영화 부분 탭메뉴 */
    let movieListTit = $('.movie_list_tit ul li');
    movieListTit.click(function(){
        movieListTit.removeClass('active');
       $(this).addClass('active');
    });
    

})(jQuery);