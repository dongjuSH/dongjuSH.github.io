$(function(){
    //팝업
    const pop=$('#layer_popup');
    $('button.btn_base').click(function(){
        pop.hide();
    });
    function setCookie(name,value,expirehours){
        var todayDate=new Date();
        todayDate.setHours(todayDate.getHours()+expirehours);
        document.cookie=name+"="+escape(value)+"; path=/; expires="+todayDate.toGMTString()+";"
    };
    $('#chk_id01').click(function(){
        setCookie("ncookie","done",24);
        pop.hide();
    });
    cookiedata=document.cookie;
    if(cookiedata.indexOf("ncookie=done")<0){
        pop.show();
        } else{
        pop.hide();
    }

    //검색창
    let element=$('.guide_text');
    let guideText=element.val();
    element.focus(function(){
        if(element.val()===guideText){
            element.val('').addClass('guide');
        }
    });
    element.blur(function(){
        if(element.val()===''){
            element.val(guideText).removeClass('guide');
        }
    });

    //실시간 검색어
    const list=$('.keyword_overlay ol li');
    let current=0;
    function keywordMove(){
        let keyword=setInterval(function(){
            const prev=list.eq(current);
            move(prev,0,'-100%');
            current++;
            if(current>=list.size()){current=0;};
            const next=list.eq(current);
            move(next,'100%',0);
        },3000);
        list.mouseover(function(){
            list.eq(current).addClass('on');
        });
        $('.keyword_overlay').mouseover(function(){
            clearInterval(keyword);
        });
    };
    keywordMove();
    function move(tg,start,end){
        tg.css('top',start).stop().animate({top:end},500);
    };
    $('.keyword_overlay').hover(function(){
        $(this).addClass('active');
    }, function(){
        list.removeClass('on');
        $(this).removeClass('active');
        keywordMove();
    });

    //cmn배너
    $('.banner_img').slick({
        slideToShow: 1
    });
    $('.cmn_banner .prev').on('click',function(e){
        $('.banner_img').slick('slickPrev');
        e.preventDefault();
    });
    $('.cmn_banner .next').on('click',function(e){
        $('.banner_img').slick('slickNext');
        e.preventDefault();
    });

    //최신앨범
    $('.hover').hover(function(){
        $(this).find('.overlay').fadeIn(200);
        $(this).find('+.singer').fadeOut(200);
    }, function(){
        $(this).find('.overlay').fadeOut(200);
        $(this).find('+.singer').fadeIn(200);
    });

    var tit_wrap=$('.sub_list li .overlay .tit_wrap');
    tit_wrap.hover(function(){
        $(this).find('span').css('max-width','none');
        $(this).find('.marquee').marquee({
            duration: 3000,
            gap: 40,
            delayBeforeStart: 0,
            direction: 'left',
            duplicated: true,
            startVisible: true
        });    
    }, function(){
        $(this).find('span').css('max-width','118px');
        $(this).find('.marquee').marquee('destroy');
    });

    $('.new_album_artist button').click(function(){
        $(this).toggleClass('on');
        let state=$(this).find('+.popup').css('display');
        if(state==='none'){
            $(this).find('+.popup').fadeIn(500);
        } else{
            $(this).find('+.popup').fadeOut(500);
        }
        $('.close_btn').click(function(){
            $('.new_album_artist .popup').fadeOut(500);
            $('.new_album_artist button').removeClass('on');
        });
    });

    var subList=$('.sub_list'), leftBtn=$('.new_album .slider_btn a.prev'), rightBtn=$('.new_album .slider_btn a.next'), menuBtn=$('.new_album_cate li'), menuBtn01=$('.new_album_cate li.menu01'), menuBtn02=$('.new_album_cate li.menu02'), menuBtn03=$('.new_album_cate li.menu03'), pageNum=$('.new_album .page_num strong'), newListWrap=$('.new_album .list_wrap'), num=0, check=false;
    function slide(tg,start,end){
        newListWrap.css('overflow','hidden');
        tg.css('left',start).stop().animate({left:end},500,function(){check=false;});
    }
    rightBtn.click(function(e){
        e.preventDefault();
        if(check==false){
            var prev=subList.eq(num);
            slide(prev,0,'-100%');
            num++;
            if(num==subList.size()){num=0;}
            var next=subList.eq(num);
            next.addClass('on');
            slide(next,'100%',0);
            setTimeout(function(){
                prev.removeClass('on');
                newListWrap.css('overflow','visible');
            },500);
            check=true;
        }
        pageNum.text(num+1);
        if(num>=1){
            leftBtn.removeClass('off');
            leftBtn.addClass('on');
        }
        if(num==8){
            $(this).removeClass('on');
            $(this).addClass('off');
        }
        if(num==3){
            menuBtn.removeClass('on');
            menuBtn02.addClass('on');
        }
        if(num==6){
            menuBtn.removeClass('on');
            menuBtn03.addClass('on');
        }
    });
    leftBtn.click(function(e){
        e.preventDefault();
        if(check==false){
            var prev=subList.eq(num);
            slide(prev,0,'100%');
            num--;
            if(num==-subList.size()){num=0;}
            var next=subList.eq(num);
            next.addClass('on');
            slide(next,'-100%',0);
            setTimeout(function(){
                prev.removeClass('on');
                newListWrap.css('overflow','visible');
            },500);
            check=true;
        }
        pageNum.text(num+1);
        if(num==0){
            $(this).removeClass('on');
            $(this).addClass('off');
        }
        if(num<=8){
            rightBtn.removeClass('off');
            rightBtn.addClass('on');
        }
        if(num==2){
            menuBtn.removeClass('on');
            menuBtn01.addClass('on');
        }
        if(num==5){
            menuBtn.removeClass('on');
            menuBtn02.addClass('on');
        }
    });
    menuBtn01.click(function(e){
        e.preventDefault();
        var tg=$(this), i=tg.index();
        menuBtn.removeClass('on');
        tg.addClass('on');
        if(num>i){slide2(i)}
        else{slide1(i)}
        pageNum.text(num+1);
        leftBtn.addClass('off').removeClass('on');
        rightBtn.addClass('on').removeClass('off');
        setTimeout(function(){
            newListWrap.css('overflow','visible');
        },500);
    });
    menuBtn02.click(function(e){
        e.preventDefault();
        var tg=$(this), i=tg.index()+2;
        menuBtn.removeClass('on');
        tg.addClass('on');
        if(num>i){slide2(i)}
        else{slide1(i)}
        pageNum.text(num+1);
        leftBtn.addClass('on').removeClass('off');
        rightBtn.addClass('on').removeClass('off');
        setTimeout(function(){
            newListWrap.css('overflow','visible');
        },500);
    });
    menuBtn03.click(function(e){
        e.preventDefault();
        var tg=$(this), i=tg.index()+4;
        menuBtn.removeClass('on');
        tg.addClass('on');
        if(num>i){slide2(i)}
        else{slide1(i)}
        pageNum.text(num+1);
        leftBtn.addClass('on').removeClass('off');
        rightBtn.addClass('on').removeClass('off');
        setTimeout(function(){
            newListWrap.css('overflow','visible');
        },500);
    });
    function slide1(i){
        if(num==i) return;
        newListWrap.css('overflow','hidden');
        var currentEl=subList.eq(num);
        setTimeout(function(){
            currentEl.removeClass('on');
        },500);
        var nextEl=subList.eq(i).addClass('on');
        currentEl.css('left','0').stop().animate({left:'-100%'},500);
        nextEl.css('left','100%').stop().animate({left:'0'},500);
        num=i;
    };
    function slide2(i){
        if(num==i) return;
        newListWrap.css('overflow','hidden');
        var currentEl=subList.eq(num);
        setTimeout(function(){
            currentEl.removeClass('on');
        },500);
        var nextEl=subList.eq(i).addClass('on');
        currentEl.css('left','0').stop().animate({left:'100%'},500);
        nextEl.css('left','-100%').stop().animate({left:'0'},500);
        num=i;
    };

    //이벤트 리스트 슬라이드
    $('.event_list').slick({
        slideToShow: 1,
        autoplay: true,
        autoplaySpeed: 4500,
        dots: true,
        pauseOnHover:true,
        infinite: true
    });
    $('.stop_btn').on('click',function(e){
        $('.event_list').slick('slickPause');
        e.preventDefault();
        $('.stop_btn').hide();
        $('.play_btn').show();
    });
    $('.play_btn').on('click',function(e){
        $('.event_list').slick('slickPlay');
        e.preventDefault();
        $('.play_btn').hide();
        $('.stop_btn').show();
    });

    //인기 있어요
    $('.hot_issue .slider_btn a.next').click(function(e){
        e.preventDefault();
        $('.issue_list.first').hide();
        $('.issue_list.second').show();
        $(this).removeClass('on');
        $(this).addClass('off');
        $('.hot_issue .slider_btn a.prev').removeClass('off');
        $('.hot_issue .slider_btn a.prev').addClass('on');
        $('.hot_issue .page_num strong').text(2);
    });
    $('.hot_issue .slider_btn a.prev').click(function(e){
        e.preventDefault();
        $('.issue_list.first').show();
        $('.issue_list.second').hide();
        $(this).removeClass('on');
        $(this).addClass('off');
        $('.hot_issue .slider_btn a.next').removeClass('off');
        $('.hot_issue .slider_btn a.next').addClass('on');
        $('.hot_issue .page_num strong').text(1);
    });

    //멜론차트
    $('.chart_wrap>ul>li>a').click(function(e){
        e.preventDefault();
        $(this).parent('li').addClass('on');
        $(this).parent('li').siblings('li').removeClass('on');
    });
    $('li.rank_item').hover(function(){
        $(this).addClass('active');
        $(this).siblings('li.rank_item').removeClass('active');
    }, function(){
        $(this).addClass('active');
    });
    $('.wrap_artist button').click(function(){
        let state=$(this).find('+.popup').css('display');
        if(state==='none'){
            $(this).find('+.popup').show();
        } else{
            $(this).find('+.popup').hide();
        }
        $('.close_btn').click(function(){
            $('.wrap_artist button+.popup').hide();
        });
    });

    //top버튼
    const btt=$('.back-to-top');
    let scrollAmount;
    $(window).scroll(function(){
        scrollAmount=this.pageYOffset;
        if(scrollAmount>scrollAmount/4){
            btt.addClass('visible');
        } else{
            btt.removeClass('visible');
        }
    });
    btt.hover(function(){
        $('.back-to-top span').addClass('none');
    }, function(){
        $('.back-to-top span').removeClass('none');
    });

    //모바일 토글 메뉴
    $('.menu-toggle-btn').click(function(){
        $('.gnbmenuM').css('display','block');
        $('.gnbmenuM').animate({right:0},600);
        $('.blackBG').animate({opacity:.7},600);
        $('.blackBG').css('display','block');
    });
    $('.mobile_close .close_btn').click(function(){
        $('.gnbmenuM').animate({right:-480},600);
        setTimeout(function(){
            $('.gnbmenuM').css('display','none');
        },600);
        $('.blackBG').animate({opacity:0},600);
        setTimeout(function(){
            $('.blackBG').css('display','none');
        },600);
    });
});