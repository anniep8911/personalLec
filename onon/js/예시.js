$(function(){
    var $page = $('.page'),
        $Prev = $('.btPrev'),
        $next = $('.btNext'),
        pageHeight = $page.outerHeight(),
        p = 0,
        delta = 0,
        scrEvt = false;

        //리사이즈
    $(window).on('resize',function(){
        pageHeight = $page.outerHeight();
        console.log(pageHeight);
    });



    $(window).on('mousewheel',wheelPage);

    function wheelPage(evt){
        delta =evt.originalEvent.wheelDelta
        //console.log(delta);
        if(delta > 0 && scrEvt == false && p > 0){
            //이전페이지 보기
            prevPage();
        }else if(delta < 0 && scrEvt == false && p < 5){
            //다음페이지 보기
            nextPage();
        }
    }

    $Prev.on('click',prevPage);
    function prevPage(){
        scrEvt = true;
        if(p > 0) p--;
        $('html').stop().animate({scrollTop :pageHeight*p},function(){
            scrEvt = false;
        });
    }
    $next.on('click',nextPage);

    function nextPage(){
        //p = (p+1)%6
        //if( p < 5 ) p = p+1;
        scrEvt = true;
        if( p < 5 ) p++;

        $('html').stop().animate({scrollTop :pageHeight*p},function(){
            scrEvt =false;
        });
    }


});