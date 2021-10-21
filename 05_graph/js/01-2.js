$(function(){
    //전체값, 부분값, 글씨, 데이터양
    var progressWarp=$('.progress-bar'),
        progressBar=progressWarp.find('.bar'),
        progressText=progressWarp.find('.rate'),
        progressRate=progressText.attr('data-rate');
    progressBar.stop().animate({
        width:progressRate+'%'
    },{
        duration:1200,
        easing:'easeInOutQuint',
        complete:function(){
            $({rate:0}).animate({
                rate:progressRate
            },{
                duration:2500,
                progress:function(){
                    var now=this.rate
                    progressText.text(Math.floor(now)+'%')
                }
            })
        }
    });
});