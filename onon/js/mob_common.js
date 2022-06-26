$(function () {
    //변수
    var $totop = $('.ftrWrap footer'),
        $portWrap = $('.portfolio .artGroup'),
        $htmlWidth = $('html').width(),
        site=[],
        $carr = $('.careers section article'),
        $sks = $('.skills section article div');

        $portWrap.find('article').prepend('<a></a>');
        

        $.getJSON('data/site.json',data).fail(function(){console.log('fail')});
        
            function data(d){
                for(i=0;i<=d.href.length-1;i++){
                    site[i]=d.href[i];
                    $portWrap.find('article').eq(i+1).find('a').attr('href',site[i]);
                }
            }
           
        $carr.on('click',careers);
        $sks.on('click',skills);

        function careers(){
            $carr.removeClass('show');
            $(this).addClass('show');
        }
        function skills(){
            $sks.removeClass('checked');
            $(this).addClass('checked');
        }


        
    //함수
    function top(){
        $('html').animate({scrollTop:0}, 1000);
    }

    //모바일 태블릿 구분
    if ($htmlWidth <= 1024) {
        //전처리
        $portWrap.css({marginLeft: '-100%'});
        $portWrap.find('article:last').prependTo($portWrap);

        //이벤트
        $totop.on('click', top);
        $portWrap.on('swipeleft swiperight', swipe);
        
        //함수
        function swipe(e) {
            switch (e.type) {
                case "swipeleft":swLeft();
                break;
                case "swiperight":swRight();
                break;
                default:console.log('나올수없는 값');
            }
            function swLeft() {
                $portWrap.stop().animate({marginLeft:'-200%'},500,'linear',function(){
                    $portWrap.css({marginLeft:'-100%'});
                    $portWrap.find('article:first').appendTo($portWrap);
                });
            }
            function swRight() {
                $portWrap.stop().animate({ marginLeft: '0%'},500,'linear', function(){
                    $portWrap.css({marginLeft: '-100%'});
                    $portWrap.find('article:last').prependTo($portWrap);
                });
            }
        }

    } else {
        //전처리
        $portWrap.css({marginLeft: '-45%'});
        $portWrap.find('article:last').prependTo($portWrap);

        //이벤트
        $totop.on('click', top);
        $portWrap.on('swipeleft swiperight', swipe);

        //함수
        function swipe(e) {
            switch (e.type) {
                case "swipeleft":swLeft();
                break;
                case "swiperight":swRight();
                break;
                default:console.log('나올수없는 값');
            }
            function swLeft() {
                $portWrap.stop().animate({marginLeft:'-90%'},500,'linear',function(){
                    $portWrap.css({marginLeft:'-45%'});
                    $portWrap.find('article:first').appendTo($portWrap);
                });
            }
            function swRight() {
                $portWrap.stop().animate({ marginLeft: '0%'},500,'linear', function(){
                    $portWrap.css({marginLeft: '-45%'});
                    $portWrap.find('article:last').prependTo($portWrap);
                });
            }
        }

    }

});