$(function () {
    /* 상단 팝업 */
    var pop = $('.corona_wrap');
    var popClose = pop.find('.close_btn a.coronatopclose');
    var popTodayClose = pop.find('.close_btn #todayClosedCheck_notices');
    popClose.click(function () {
        pop.hide();
    });
    function setCookie(name, value, expirehours) {
        var todayDate = new Date();
        todayDate.setHours(todayDate.getHours() + expirehours);
        document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";";
    };
    popTodayClose.click(function () {
        setCookie("ncookie", "done", 24);
        pop.hide();
    });
    cookiedata = document.cookie;
    if (cookiedata.indexOf("ncookie=done") < 0) {
        pop.show();
    } else {
        pop.hide();
    }

    /* 언어 */
    $('.language_btn').click(function () {
        $('.language_btn').hide();
        $('.lang_list').show();
        $('.lang_list ul').slideDown(300);
    });
    $('.lang_list button.close').click(function () {
        $('.lang_list ul').slideUp(300);
        setTimeout(function () {
            $('.lang_list').hide();
            $('.language_btn').show();
        }, 300);
    });

    /* 검색창 */
    var element = $('.keyword_input');
    var guideText = element.val();
    element.focus(function () {
        if (element.val() === guideText) {
            element.val('').addClass('guide');
        }
    });
    element.blur(function () {
        if (element.val() === '') {
            element.val(guideText).removeClass('guide');
        }
    });

    /* 인기검색어 */
    var slide_wrap1 = $('.keyword_area'),
        list1 = slide_wrap1.find('.keyword_list .keyword_wrap .list_wrap .list'),
        list_wrap1 = slide_wrap1.find('.keyword_wrap .list_wrap'),
        prev_btn1 = slide_wrap1.find('.keyword_slider_btn a.slider_prev'),
        next_btn1 = slide_wrap1.find('.keyword_slider_btn a.slider_next'),
        curr1 = 0;
    function slide1(tg, start, end) {
        tg.css('left', start).stop().animate({ left: end }, 300);
    };
    next_btn1.click(function (e) {
        e.preventDefault();
        var next1 = list1.eq(curr1);
        var width1 = next1.width() + 20;
        var prev1 = list1.eq(curr1 - 1);
        var width2 = prev1.width() + 20;
        if (curr1 == 0) {
            slide1(list_wrap1, 0, -width1);
        }
        if (curr1 == 1) {
            width1 += width2;
            slide1(list_wrap1, -width2, -width1);
        }
        if (curr1 == 2) {
            width1 += width2 + list1.eq(0).width() + 20;
            width2 += list1.eq(0).width() + 20;
            slide1(list_wrap1, -width2, -width1);
        }
        if (curr1 == 3) {
            width1 += width2 + list1.eq(0).width() + 20 + list1.eq(1).width() + 20;
            width2 += list1.eq(0).width() + 20 + list1.eq(1).width() + 20;
            slide1(list_wrap1, -width2, -width1);
        }
        if (curr1 > 3){
            return;
        }
        curr1++;
    });
    prev_btn1.click(function (e) {
        e.preventDefault();
        var next1 = list1.eq(curr1);
        var width1 = next1.width() + 20;
        var prev1 = list1.eq(curr1 - 1);
        var width2 = prev1.width() + 20;
        if (curr1 == 0) {
            return;
        }
        if (curr1 == 1) {
            slide1(list_wrap1, -width2, 0);
        }
        if (curr1 == 2) {
            width1 = list1.eq(0).width() + 20;
            width2 = list1.eq(0).width() + 20 + list1.eq(1).width() + 20;
            slide1(list_wrap1, -width2, -width1);
        }
        if (curr1 == 3) {
            width1 = list1.eq(0).width() + 20 + list1.eq(1).width() + 20;
            width2 = list1.eq(0).width() + 20 + list1.eq(1).width() + 20 + list1.eq(2).width() + 20;
            slide1(list_wrap1, -width2, -width1);
        }
        if (curr1 == 4) {
            width1 = list1.eq(0).width() + 20 + list1.eq(1).width() + 20 + list1.eq(2).width() + 20;
            width2 = list1.eq(0).width() + 20 + list1.eq(1).width() + 20 + list1.eq(2).width() + 20 + list1.eq(3).width() + 20;
            slide1(list_wrap1, -width2, -width1);
        }
        curr1--;
    });

    /* 메인메뉴 */
    var toggleOp = $('.mobileIndexOpen'),
        gnbNavM = $('.gnbNavM'),
        blackBG = $('.blackBG'),
        toggleCl = $('.mobileIndexClose'),
        headerTopLine = $('.header_top_line'),
        gnbM = $('.gnbM li');
    toggleOp.click(function (e) {
        e.preventDefault();
        gnbNavM.animate({ left: 0 }, 500);
        blackBG.fadeIn(500);
        headerTopLine.css('position', 'fixed').css('top', 0).css('z-index', '1112');
    });
    toggleCl.click(function (e) {
        e.preventDefault();
        gnbNavM.animate({ left: '100%' }, 500);
        blackBG.fadeOut(500);
        headerTopLine.css('position', 'relative').css('top', 0).css('z-index', '1112');
    });
    gnbM.click(function () {
        $(this).addClass('on');
        $(this).siblings().removeClass('on');
    });

    /* 메인메뉴 스크롤 */
    var headerWrapFixed = $('.header_wrap');
    var scrollAmount;
    $(window).scroll(function () {
        scrollAmount = this.pageYOffset;
        if (scrollAmount > scrollAmount / 4) {
            headerWrapFixed.addClass('fixed');
        } else {
            headerWrapFixed.removeClass('fixed');
        }
    });

    /* 메인 배너 */
    var slide_wrap2 = $('.mainbn_area'),
        list_wrpa2 = slide_wrap2.find('.mainbn_box'),
        list2 = slide_wrap2.find('.mainbn_box ul li'),
        prev_btn2 = slide_wrap2.find('.mainbn_control ul li a.slider_prev'),
        next_btn2 = slide_wrap2.find('.mainbn_control ul li a.slider_next'),
        stop_btn2 = slide_wrap2.find('.mainbn_control ul li a.slider_stop'),
        play_btn2 = slide_wrap2.find('.mainbn_control ul li a.slider_play'),
        page_num2 = slide_wrap2.find('.mainbn_control ul li span'),
        setIntervalId2,
        curr2 = 0;
    timer2();
    function timer2() {
        setIntervalId2 = setInterval(function () {
            var prev2 = list2.eq(curr2);
            slide2(prev2, 0, '-100%');
            curr2++;
            if (curr2 == list2.size()) {
                curr2 = 0;
            }
            var next2 = list2.eq(curr2);
            slide2(next2, '100%', 0);
            page_num2.text(curr2 + 1);
        }, 5000);
    };
    function slide2(tg, start, end) {
        tg.css('left', start).stop().animate({ left: end }, 500);
    };
    list_wrpa2.on({
        mouseover: function mouseover() {
            clearInterval(setIntervalId2);
        },
        mouseout: function mouseout() {
            timer2();
        }
    });
    next_btn2.click(function (e) {
        e.preventDefault();
        var prev2 = list2.eq(curr2);
        slide2(prev2, 0, '-100%');
        curr2++;
        if (curr2 == list2.size()) {
            curr2 = 0;
        }
        var next2 = list2.eq(curr2);
        slide2(next2, '100%', 0);
        page_num2.text(curr2 + 1);
    });
    prev_btn2.click(function (e) {
        e.preventDefault();
        var prev2 = list2.eq(curr2);
        slide2(prev2, 0, '100%');
        curr2--;
        if (curr2 == -list2.size()) {
            curr2 = 0;
        }
        var next2 = list2.eq(curr2);
        slide2(next2, '-100%', 0);
        if (curr2 < 0) {
            curr2 = 10;
        }
        page_num2.text(curr2 + 1);
    });
    stop_btn2.click(function (e) {
        e.preventDefault();
        $(this).hide();
        play_btn2.show();
        clearInterval(setIntervalId2);
    });
    play_btn2.click(function (e) {
        e.preventDefault();
        $(this).hide();
        stop_btn2.show();
        timer2();
    });

    /* 공지사항 */
    var tab_list = $('.notice_tab');
    tab_list.find('.tab_menu+div').hide();
    tab_list.find('div.on+div').show();
    tab_list.find('.tab_menu>a').click(tabMenu);
    function tabMenu(e) {
        e.preventDefault();
        var tg = $(this);
        if (tg.hasClass('blank') == false) {
            tg.parent('div').addClass('on');
            tg.parent('div').siblings('div').removeClass('on');
            tab_list.find('.tab_menu+div').hide();
            tab_list.find('div.on+div').show();
        }
    };

    /* notice배너 */
    var slide_wrap3 = $('.noticebn_area'),
        list_wrpa3 = slide_wrap3.find('.noticebn_box'),
        list3 = slide_wrap3.find('.noticebn_box ul li'),
        prev_btn3 = slide_wrap3.find('.noticebn_control ul li a.slider_prev'),
        next_btn3 = slide_wrap3.find('.noticebn_control ul li a.slider_next'),
        stop_btn3 = slide_wrap3.find('.noticebn_control ul li a.slider_stop'),
        play_btn3 = slide_wrap3.find('.noticebn_control ul li a.slider_play'),
        page_num3 = slide_wrap3.find('.noticebn_control ul li span'),
        setIntervalId3,
        curr3 = 0;
    timer3();
    function timer3() {
        setIntervalId3 = setInterval(function () {
            var prev3 = list3.eq(curr3);
            slide3(prev3, 0, '-100%');
            curr3++;
            if (curr3 == list3.size()) {
                curr3 = 0;
            }
            var next3 = list3.eq(curr3);
            slide3(next3, '100%', 0);
            page_num3.text(curr3 + 1);
        }, 5000);
    };
    function slide3(tg, start, end) {
        tg.css('left', start).stop().animate({ left: end }, 500);
    };
    list_wrpa3.on({
        mouseover: function mouseover() {
            clearInterval(setIntervalId3);
        },
        mouseout: function mouseout() {
            timer3();
        }
    });
    next_btn3.click(function (e) {
        e.preventDefault();
        var prev3 = list3.eq(curr3);
        slide3(prev3, 0, '-100%');
        curr3++;
        if (curr3 == list3.size()) {
            curr3 = 0;
        }
        var next3 = list3.eq(curr3);
        slide3(next3, '100%', 0);
        page_num3.text(curr3 + 1);
    });
    prev_btn3.click(function (e) {
        e.preventDefault();
        var prev3 = list3.eq(curr3);
        slide3(prev3, 0, '100%');
        curr3--;
        if (curr3 == -list3.size()) {
            curr3 = 0;
        }
        var next3 = list3.eq(curr3);
        slide3(next3, '-100%', 0);
        if (curr3 < 0) {
            curr3 = 10;
        }
        page_num3.text(curr3 + 1);
    });
    stop_btn3.click(function (e) {
        e.preventDefault();
        $(this).hide();
        play_btn3.show();
        clearInterval(setIntervalId3);
    });
    play_btn3.click(function (e) {
        e.preventDefault();
        $(this).hide();
        stop_btn3.show();
        timer3();
    });

    /* 자주찾는 서비스 */
    var slide_wrap4 = $('.service_area'),
        list4 = slide_wrap4.find('.service_box .service_inner'),
        prev_btn4 = slide_wrap4.find('.serviceslider_btn li a.slider_prev'),
        next_btn4 = slide_wrap4.find('.serviceslider_btn li a.slider_next'),
        page_num4 = slide_wrap4.find('.serviceslider_btn .serviceslider_counter span'),
        curr4 = 0;
    function slide4(tg, start, end) {
        tg.css('left', start).stop().animate({ left: end }, 500);
    };
    next_btn4.click(function (e) {
        e.preventDefault();
        if (curr4 != 3) {
            var prev3 = list4.eq(curr4);
            slide4(prev3, 0, '-100%');
            curr4++;
            if (curr4 == list4.size()) {
                curr4 = 0;
            }
            var next2 = list4.eq(curr4);
            slide4(next2, '100%', 0);
            page_num4.text(curr4 + 1);
        }
    });
    prev_btn4.click(function (e) {
        e.preventDefault();
        if (curr4 != 0) {
            var prev3 = list4.eq(curr4);
            slide4(prev3, 0, '100%');
            curr4--;
            if (curr4 == -list4.size()) {
                curr4 = 0;
            }
            var next2 = list4.eq(curr4);
            slide4(next2, '-100%', 0);
            page_num4.text(curr4 + 1);
        }
    });

    /* 행사/강좌/공모 */
    var slideShow=$('.event_list'),
        slides=slideShow.find('li'),
        slideWidth=slides.width(),
        slideBtn=$('.event_slide_btn .slide_item'),
        btnIdx=1,
        autoSlide;
    slide();
    function slide(){
        autoSlide=setInterval(function(){            
            slideShow.animate({left:-slideWidth},500,function(){
                $(this).children('li:first').insertAfter($(this).children('li:last'));
                $(this).css({left:0});
                btnIdx++;
                if(btnIdx==slides.length){btnIdx=0;}
            });
            slideBtn.find('a').removeClass('active');
            slideBtn.eq(btnIdx).find('a').addClass('active');
        },5000)
    }
    slideShow.hover(function(){
        clearInterval(autoSlide);
    },function(){
        slide();
    });

    /* 성남소식 */
    var sns_slide=$('.sns_list').bxSlider({
        minSlides: 2,
        maxSlides: 2,
        slideWidth: 280,
        slideMargin: 10,
        moveSlides: 1,
        auto: true,
        pause: 5000,
        speed: 500,
        adaptiveHeight: true,
        controls: false,
        pager: false
    });
    $('.sns_slider_btn li a').click(function(e){
        e.preventDefault();
        if($(this).hasClass('slider_prev')){
            sns_slide.goToPrevSlide();
        }
        if($(this).hasClass('slider_next')){
            sns_slide.goToNextSlide();
        }
        if($(this).hasClass('slider_stop')){
            sns_slide.stopAuto();
            $('.sns_slider_btn li a.slider_stop').hide();
            $('.sns_slider_btn li a.slider_play').show();
        }
        else{
            sns_slide.startAuto();
            $('.sns_slider_btn li a.slider_play').hide();
            $('.sns_slider_btn li a.slider_stop').show();
        }
    });

    /* 주요서비스 */
    var dl = $('.important_area dl'),
        dl1 = $('.important_area dl:nth-of-type(1)'),
        dl2 = $('.important_area dl:nth-of-type(2)'),
        dl3 = $('.important_area dl:nth-of-type(3)'),
        dl4 = $('.important_area dl:nth-of-type(4)'),
        dl5 = $('.important_area dl:nth-of-type(5)'),
        group06 = $('.group06');
    dl.click(function (e) {
        e.preventDefault();
        $(this).addClass('on');
        $(this).siblings().removeClass('on');
        $(this).find('dd ul').siblings().slideDown();
    });
    dl1.click(function () {
        group06.height(239);
    });
    dl2.click(function () {
        group06.height(272);
    });
    dl3.click(function () {
        group06.height(338);
    });
    dl4.click(function () {
        group06.height(338);
    });
    dl5.click(function () {
        group06.height(338);
    });

    /* 하단 메뉴 */
    var footer_menu = $('.familysite_group>li>a');
    footer_menu.click(function (e) {
        e.preventDefault();
        $(this).toggleClass('on');
        $(this).siblings().slideToggle(500);
    });
});