$(function(){
    //fullpage
    var wrap=$('#wrap'),
        header=$('#header');
    wrap.fullpage({
        scrollingSpeed: 800,
        autoScrolling: true,
        scrollBar: true,
		scrollHorizontally: true,
        afterLoad: function(origin, destination, direction){
            if(destination.index!=0){
                header.addClass('fixed');
                header.find('h1.logo .main_logo').hide();
                header.find('h1.logo .fixed_logo').fadeIn(500);
            }
            else{
                header.removeClass('fixed');
                header.find('h1.logo .fixed_logo').hide();
                header.find('h1.logo .main_logo').fadeIn(500);
            }
            if(destination.index==1){
                section2.find('.container_wrap>div').stop().animate({opacity:1},100);
            }
            if(destination.index==2){
                section3.find('li.html').stop().animate({height:'90%', opacity:1},300);
                section3.find('li.js').stop().delay(300).animate({height:'75%', opacity:1},300);
                section3.find('li.jq').stop().delay(600).animate({height:'80%', opacity:1},300);
                section3.find('li.ps').stop().delay(900).animate({height:'65%', opacity:1},300);
                section3.find('li.pr').stop().delay(1200).animate({height:'60%', opacity:1},300);
            }
            if(destination.index==3){
                section4.find('.left_area').stop().animate({left:0},1000);
                section4.find('.right_area').stop().animate({left:0},1000);
            }
        }
    });

    //menu scroll
    var logo=$('h1.logo'),
        lnbPage1=$('nav.lnb ul li.page01'),
        lnbPage2=$('nav.lnb ul li.page02'),
        lnbPage3=$('nav.lnb ul li.page03'),
        lnbPage4=$('nav.lnb ul li.page04'),
        section2=$('#section02'),
        section3=$('#section03'),
        section4=$('#section04'),
        section5=$('#section05');
    logo.click(function(e){
        e.preventDefault();
        $('html').stop().animate({scrollTop:0},500,'easeInOutQuad');
    });
    lnbPage1.click(function(e){
        e.preventDefault();
        $('html').stop().animate({scrollTop:section2.offset().top},500,'easeInOutQuad');
    });
    lnbPage2.click(function(e){
        e.preventDefault();
        $('html').stop().animate({scrollTop:section3.offset().top},500,'easeInOutQuad');
    });
    lnbPage3.click(function(e){
        e.preventDefault();
        $('html').stop().animate({scrollTop:section4.offset().top},500,'easeInOutQuad');
    });
    lnbPage4.click(function(e){
        e.preventDefault();
        $('html').stop().animate({scrollTop:section5.offset().top},500,'easeInOutQuad');
    });

    //project
    var pro_list=$('.project_list'),
        pro_menu=pro_list.find('li'),
        pro_slide=$('.project_slide .slide_wrap>div'),
        current=pro_slide.index();
    function movePrev(i){
        if(current==i) return;
        var currentEl=pro_slide.eq(current);
        var nextEl=pro_slide.eq(i);
        currentEl.css('left','0').stop().animate({left:'-100%'},500);
        nextEl.css('left','100%').stop().animate({left:'0'},500);
        current=i;
    };
    function moveNext(i){
        if(current==i) return;
        var currentEl=pro_slide.eq(current);
        var nextEl=pro_slide.eq(i);
        currentEl.css('left','0').stop().animate({left:'100%'},500);
        nextEl.css('left','-100%').stop().animate({left:'0'},500);
        current=i;
    };
    pro_menu.click(function(){
        var target=$(this),
            i=target.index();
        target.addClass('on').siblings().removeClass('on');
        if(current>i){moveNext(i)}
        else(movePrev(i))
    });

    var pro_img=pro_slide.find('.project_img img');
    pro_img.hover(function(){
        var height=$(this).height()-310;
        $(this).stop().animate({top:-height},5000);
    }, function(){
        $(this).stop().animate({top:0},5000);
    });
    var pro_M=pro_slide.find('.mockup img.mobile');
    pro_M.hover(function(){
        var pro_imgM=$(this).parent('span').siblings('span.project_img_mobile').find('img');
        height=pro_imgM.height()-280;
        pro_imgM.stop().animate({top:-height},5000);
    }, function(){
        var pro_imgM=$(this).parent('span').siblings('span.project_img_mobile').find('img');
        pro_imgM.stop().animate({top:0},5000);
    });
    $('.pro01_pop').click(function(){
        window.open('http://ehdwn661.dothome.co.kr/project/project01/html/mobile','프로젝트1팝업','width=414, height=736, left=50, top=50, scrollbars=0, toolbar=0, menubar=no');
    });
    $('.pro02_pop').click(function(){
        window.open('http://ehdwn661.dothome.co.kr/project/project02','프로젝트2팝업','width=414, height=736, left=50, top=50, scrollbars=0, toolbar=0, menubar=no');
    });
});