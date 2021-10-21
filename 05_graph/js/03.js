$(function () {
    //전체값 , 부분값, 글씨, 데이터양
    var progressWarp = $(".progress-bar"),
        animation = $(".animation"),
        animationOst = $(".animation").offset().top - 700;

    $(window).scroll(function () {
        if ($(window).scrollTop() >= animationOst) {
            if (!animation.hasClass("active")) {
                progressAni();
                animation.addClass('active')
            }
        }
    });
    function progressAni() {
        progressWarp.each(function () {
            var $this = $(this),
                progressBar = $this.find("circle"),
                progressText = $this.find("h2"),
                progressRate = progressText.attr("data-num");

            $({ rate: 0 }).animate(
                { rate: progressRate },
                {
                    duration: 1500,
                    progress: function () {
                        var now = this.rate;
                        console.log(now);
                        var amount = 628 - (628 * now) / 100;
                        progressText.text(Math.floor(now));
                        progressBar.css({ strokeDashoffset: amount });
                    },
                }
            );
        });
    }
});
