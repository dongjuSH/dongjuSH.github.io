$(function () {
    /* 상단 팝업 */
    var pop = $('.corona_wrap'),
        popClose = pop.find('.close_btn a.coronatopclose'),
        popTodayClose = pop.find('.close_btn #todayClosedCheck_notices');
    popClose.click(function () {
        pop.hide();
        if(popTodayClose.is(":checked")){
            setCookie("ncookie", "done", 24);
            pop.hide();
        }
    });
    function setCookie(name, value, expirehours) {
        var todayDate = new Date();
        todayDate.setHours(todayDate.getHours() + expirehours);
        document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";";
    };
    cookiedata = document.cookie;
    if (cookiedata.indexOf("ncookie=done") < 0) {
        pop.show();
    } else {
        pop.hide();
    }

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
        if (curr4 == 0) {
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
        if (curr4 == 1) {
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

    /* 성남소식 */
    var slide_wrap5 = $('.sns_area'),
        list_wrpa5 = slide_wrap5.find('.snsbn_box'),
        list5 = slide_wrap5.find('.snsbn_box ul'),
        prev_btn5 = slide_wrap5.find('.sns_tit .sns_slider_btn a.slider_prev'),
        next_btn5 = slide_wrap5.find('.sns_tit .sns_slider_btn a.slider_next'),
        stop_btn5 = slide_wrap5.find('.sns_tit .sns_slider_btn a.slider_stop'),
        play_btn5 = slide_wrap5.find('.sns_tit .sns_slider_btn a.slider_play'),
        setIntervalId5,
        curr5 = 0;
    timer5();
    function timer5() {
        setIntervalId5 = setInterval(function () {
            var prev5 = list5.eq(curr5);
            slide5(prev5, 0, '-100%');
            curr5++;
            if (curr5 == list5.size()) {
                curr5 = 0;
            }
            var next5 = list5.eq(curr5);
            slide5(next5, '100%', 0);
        }, 5000);
    };
    function slide5(tg, start, end) {
        tg.css('left', start).stop().animate({ left: end }, 500);
    };
    list_wrpa5.on({
        mouseover: function mouseover() {
            clearInterval(setIntervalId5);
        },
        mouseout: function mouseout() {
            timer5();
        }
    });
    next_btn5.click(function (e) {
        e.preventDefault();
        var prev5 = list5.eq(curr5);
        slide5(prev5, 0, '-100%');
        curr5++;
        if (curr5 == list5.size()) {
            curr5 = 0;
        }
        var next5 = list5.eq(curr5);
        slide5(next5, '100%', 0);
    });
    prev_btn5.click(function (e) {
        e.preventDefault();
        var prev5 = list5.eq(curr5);
        slide5(prev5, 0, '100%');
        curr5--;
        if (curr5 == -list5.size()) {
            curr5 = 0;
        }
        var next5 = list5.eq(curr5);
        slide5(next5, '-100%', 0);
    });
    stop_btn5.click(function (e) {
        e.preventDefault();
        $(this).hide();
        play_btn5.show();
        clearInterval(setIntervalId5);
    });
    play_btn5.click(function (e) {
        e.preventDefault();
        $(this).hide();
        stop_btn5.show();
        timer5();
    });

    /* TOP버튼 */
    var btt = $('#back-to-top');
    var scrollAmount;
    $(window).scroll(function () {
        scrollAmount = this.pageYOffset;
        if (scrollAmount > scrollAmount / 4) {
            btt.addClass('visible');
        } else {
            btt.removeClass('visible');
        }
    });
    btt.click(function (e) {
        e.preventDefault();
        var scrollInterval = setInterval(function () {
            if (scrollAmount != 0) {
                window.scrollBy(0, -60);
            } else {
                clearInterval(scrollInterval);
            }
        }, 10);
    });

    /* 메인 메뉴 */
    var gnb = $('.gnb_line');
    var scroll;
    $(window).scroll(function () {
        scroll = this.pageYOffset;
        if (scroll > 250) {
            gnb.addClass('top');
        } else {
            gnb.removeClass('top');
        }
    });

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

    /* 하단 메뉴 */
    var footerMenu = $('.familysite_group div');
    footerMenu.click(function () {
        var state = $(this).find('+ul').css('display');
        if (state === 'none') {
            $(this).addClass('active');
            $(this).find('+ul').addClass('active');
            $(this).parent('li').siblings('li').children('div').removeClass('active');
            $(this).parent('li').siblings('li').children('ul').css({ height: 0, paddingTop: 0, paddingBottom: 0 }).removeClass('active');
            $('.familysite_group li:nth-child(n+1):nth-child(-n+2) ul.active').animate({ height: 270, paddingTop: 20, paddingBottom: 20 }, 400);
            $('.familysite_group li:nth-child(n+3):nth-child(-n+4) ul.active').animate({ height: 120, paddingTop: 20, paddingBottom: 20 }, 400);
        } else {
            $(this).removeClass('active');
            setTimeout(function () {
                $('.familysite_group ul.active').removeClass('active');
            }, 400);
            $('.familysite_group li ul.active').animate({ height: 0, paddingTop: 0, paddingBottom: 0 }, 400);
        }
    });

    /* 서브페이지 메뉴 */
    var mainA = $('.lnbwrap ul li.main>a');
    var subA = $('.lnbwrap ul li.sub>a');
    var class_click = 'click';
    var class_active = 'active';
    mainA.click(function (e) {
        e.preventDefault();
        if ($(this).hasClass('blank') == false) {
            $(this).addClass(class_click);
            $(this).parent('li').siblings('li').children('a').removeClass(class_click);
        }
    });
    subA.click(function (e) {
        e.preventDefault();
        if ($(this).hasClass('blank') == false) {
            $(this).addClass(class_active);
            $(this).parent('li').siblings('li').children('a').removeClass(class_active);
        }
    });

    /* 행사/강좌/공모 datepicker */
    /* $( "#startDt, #endDt" ).datepicker({
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: '년',
        showOn: "button",
        buttonImage: "../images/news/date_ico.png",
        buttonImageOnly: true,
        buttonText: "Select date"
    }); */

    /* 여권민원 슬라이드 */
    var sliderwrap = $('.passport_map'),
        banner = sliderwrap.find('img'),
        leftBtn = sliderwrap.find('.slider_btn>a.prev'),
        rightBtn = sliderwrap.find('.slider_btn>a.next'),
        button = sliderwrap.find('.paper_box .paper_btn'),
        current = 0;
    function move(tg, start, end) {
        tg.css('left', start).stop().animate({ left: end }, 500);
    };
    rightBtn.click(function (e) {
        e.preventDefault();
        var prev = banner.eq(current);
        var prevBtn = button.eq(current).find('a');
        prevBtn.removeClass('on');
        move(prev, 0, '-100%');
        current++;
        if (current == banner.size()) {
            current = 0;
        }
        var next = banner.eq(current);
        var nextBtn = button.eq(current).find('a');
        nextBtn.addClass('on');
        move(next, '100%', 0);
    });
    leftBtn.click(function (e) {
        e.preventDefault();
        var prev = banner.eq(current);
        var prevBtn = button.eq(current).find('a');
        prevBtn.removeClass('on');
        move(prev, 0, '100%');
        current--;
        if (current == -banner.size()) {
            current = 0;
        }
        var next = banner.eq(current);
        var nextBtn = button.eq(current).find('a');
        nextBtn.addClass('on');
        console.log(nextBtn);
        move(next, '-100%', 0);
    });
    button.click(function (e) {
        e.preventDefault();
        var tg = $(this);
        var i = tg.index();
        button.find('a').removeClass('on');
        tg.find('a').addClass('on');
        if (current > i) {
            move2(i);
        } else {
            move1(i);
        }
    });
    function move1(i) {
        if (current == i) return;
        var currentEl = banner.eq(current);
        var nextEl = banner.eq(i);
        currentEl.css('left', '0').stop().animate({ left: '-100%' }, 500);
        nextEl.css('left', '100%').stop().animate({ left: '0' }, 500);
        current = i;
    };
    function move2(i) {
        if (current == i) return;
        var currentEl = banner.eq(current);
        var nextEl = banner.eq(i);
        currentEl.css('left', '0').stop().animate({ left: '100%' }, 500);
        nextEl.css('left', '-100%').stop().animate({ left: '0' }, 500);
        current = i;
    };
});