$(function () {
    var progressWarp = $(".progress-bar"),
        animationOst = $(".animation").offset().top;

    $(window).scroll(function () {
        if ($(window).scrollTop() >= animationOst-600) {
            progressAni();
        }
    });

    function progressAni() {
        progressWarp.each(function () {
            var $this = $(this),
                progressBar = $this.find(".bar"),
                progressText = $this.find(".rate"),
                progressRate = progressText.attr("data-rate"),
                isAni=false;
            progressBar.animate({width: progressRate + "%"},2500);

            var text=function(){
                if(!isAni){
                    $({rate:0}).animate({
                        rate:progressRate
                    },{
                        duration:2500,
                        progress:function(){
                            var now=this.rate
                            progressText.text(Math.floor(now)+'%')
                        },
                        complete:function(){
                            isAni=true;
                        }
                    });
                }
            };
            text();
        });
    };
});