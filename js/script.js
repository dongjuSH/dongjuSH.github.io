$(function(){
    //fullpage
    var wrap=$('#wrap'),
        header=$('#header'),
        lnbList=$('.lnb ul li');
    wrap.fullpage({
        scrollingSpeed: 800,
        autoScrolling: true,
        scrollBar: true,
		scrollHorizontally: true,
        afterLoad: function(origin, destination, direction){
            if(destination.index==0){
                header.removeClass('fixed');
                header.find('h1.logo .fixed_logo').hide();
                header.find('h1.logo .main_logo').fadeIn(500);
                lnbList.find('a').removeClass('on');
            }
            else{
                header.addClass('fixed');
                header.find('h1.logo .main_logo').hide();
                header.find('h1.logo .fixed_logo').fadeIn(500);
            }
            if(destination.index==1){
                lnbPage1.find('a').addClass('on');
                lnbPage1.siblings('li').find('a').removeClass('on');
                section2.find('.container_wrap>div').stop().animate({opacity:1},100);
            }
            if(destination.index==2){
                lnbPage2.find('a').addClass('on');
                lnbPage2.siblings('li').find('a').removeClass('on');
                var percentWrap=section3.find('li.per');
                if(!percentWrap.hasClass('active')){
                    percentAni();
                    percentWrap.addClass('active');
                }
                function percentAni(){
                    percentWrap.each(function(){
                        var percentText=$(this).find('.percent'),
                            percentRate=percentText.attr('data-rate');
                        $(this).animate({height:percentRate+"%",opacity:1},1200);
                        $({rate:0}).animate({rate:percentRate},{
                            duration: 1200,
                            progress: function(){
                                var now=this.rate;
                                percentText.text(Math.floor(now)+'%');
                            }
                        });
                    });
                };
            }
            if(destination.index==3){
                lnbPage3.find('a').addClass('on');
                lnbPage3.siblings('li').find('a').removeClass('on');
                section4.find('.left_area').stop().animate({left:0},1000);
                section4.find('.right_area').stop().animate({left:0},1000);
            }
            if(destination.index==4){
                lnbPage4.find('a').addClass('on');
                lnbPage4.siblings('li').find('a').removeClass('on');
                section5.find('.left_area').stop().animate({left:0},1000);
                section5.find('.right_area').stop().animate({left:0},1000);
            }
            if(destination.index==5){
                lnbPage5.find('a').addClass('on');
                lnbPage5.siblings('li').find('a').removeClass('on');
                section6.find('.left_area').stop().animate({left:0},1000);
                section6.find('.right_area').stop().animate({left:0},1000);
            }
            if(destination.index==6){
                lnbPage6.find('a').addClass('on');
                lnbPage6.siblings('li').find('a').removeClass('on');
                section7.find('.study .container_wrap .coding').stop().animate({opacity:1},200);
                section7.find('.study .container_wrap .graphic').stop().delay(300).animate({opacity:1},200);
                section7.find('.study .container_wrap .video').stop().delay(600).animate({opacity:1},200);
            }
            if(destination.index==7){
                lnbPage7.find('a').addClass('on');
                lnbPage7.siblings('li').find('a').removeClass('on');
            }
        }
    });

    //menu scroll
    var logo=$('h1.logo'),
        lnbPage1=$('nav.lnb ul li.page01'),
        lnbPage2=$('nav.lnb ul li.page02'),
        lnbPage3=$('nav.lnb ul li.page03'),
        lnbPage4=$('nav.lnb ul li.page04'),
        lnbPage5=$('nav.lnb ul li.page05'),
        lnbPage6=$('nav.lnb ul li.page06'),
        lnbPage7=$('nav.lnb ul li.page07'),
        section2=$('#section02'),
        section3=$('#section03'),
        section4=$('#section04'),
        section5=$('#section05'),
        section6=$('#section06'),
        section7=$('#section07'),
        section8=$('#section08');
    logo.click(function(e){
        e.preventDefault();
        $('html').stop().animate({scrollTop:0},500,'easeInOutQuad');
    });
    lnbPage1.click(function(e){
        e.preventDefault();
        $(this).find('a').addClass('on');
        $('html').stop().animate({scrollTop:section2.offset().top},500,'easeInOutQuad');
    });
    lnbPage2.click(function(e){
        e.preventDefault();
        $(this).find('a').addClass('on');
        $('html').stop().animate({scrollTop:section3.offset().top},500,'easeInOutQuad');
    });
    lnbPage3.click(function(e){
        e.preventDefault();
        $(this).find('a').addClass('on');
        $('html').stop().animate({scrollTop:section4.offset().top},500,'easeInOutQuad');
    });
    lnbPage4.click(function(e){
        e.preventDefault();
        $(this).find('a').addClass('on');
        $('html').stop().animate({scrollTop:section5.offset().top},500,'easeInOutQuad');
    });
    lnbPage5.click(function(e){
        e.preventDefault();
        $(this).find('a').addClass('on');
        $('html').stop().animate({scrollTop:section6.offset().top},500,'easeInOutQuad');
    });
    lnbPage6.click(function(e){
        e.preventDefault();
        $(this).find('a').addClass('on');
        $('html').stop().animate({scrollTop:section7.offset().top},500,'easeInOutQuad');
    });
    lnbPage7.click(function(e){
        e.preventDefault();
        $(this).find('a').addClass('on');
        $('html').stop().animate({scrollTop:section8.offset().top},500,'easeInOutQuad');
    });

    /* skills */
    var studyLink=$('.skills .study_link');
    studyLink.click(function(e){
        e.preventDefault();
        $('html').stop().animate({scrollTop:section6.offset().top},500,'easeInOutQuad');
    });

    //project
    var pro_slide=$('.project_slide .slide_wrap>div'),
        pro_img=pro_slide.find('.project_img img');
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
        window.open('http://ehdwn661.dothome.co.kr/project/project01/html/mobile','프로젝트1팝업','width=395, height=736, left=50, top=50, scrollbars=0, toolbar=0, menubar=no');
    });
    $('.pro02_pop').click(function(){
        window.open('http://ehdwn661.dothome.co.kr/project/project02','프로젝트2팝업','width=395, height=736, left=50, top=50, scrollbars=0, toolbar=0, menubar=no');
    });
    $('.pro03_pop').click(function(){
        window.open('http://ehdwn661.dothome.co.kr/project/project03','프로젝트3팝업','width=395, height=736, left=50, top=50, scrollbars=0, toolbar=0, menubar=no');
    });
});