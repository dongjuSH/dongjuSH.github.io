$(function(){
    //전체값, 부분값, 글씨, 데이터양
    var progressWarp=$('.progress-bar'),
        progressBar=progressWarp.find('.bar'),
        progressText=progressWarp.find('.rate'),
        progressRate=progressText.attr('data-rate');
    progressBar.animate({width:progressRate+'%'},2500);
    var timer=setInterval(textAni,1000/10);
    function textAni(){
        var currentWidth=progressBar.width()/progressWarp.width()*100;
        progressText.text(Math.ceil(currentWidth)+'%');
        //if(currentWidth==progressRate){clearInterval(timer);}
        console.log(currentWidth);
    };
    setTimeout(function(){
        clearInterval(timer);
    },2500);
});