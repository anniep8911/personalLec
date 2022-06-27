$(function(){
    //변수 
    var $btnTop =  $('.ftrWrap .iconTop'),
    $btnLogo = $('.hdrWrap h1'),
    $hdrMenu = $('.hdrWrap .nav li'),
    $cntWrap = $('.cntWrap'),
    $mnWrap = $('.mnWrap');
    $scrWordChange = $('footer h2'),
    $scrWord=['careers','skill','portfolio','top'],
    cnt=0,
    top=0,
    delta=0,
    pageHeight = [],
    flag=false;
        
        //액션
    $btnTop.on('click',toTop);
    $btnLogo.on('click',toTop);
    $hdrMenu.on('click',move);
    $(window).on('DOMMouseScroll mousewheel wheel',check);
    
    if (performance.navigation.type == 1) {  $('html').stop().animate({scrollTop:0}, 1000); };
    function toTop(){
        $('html').stop().animate({scrollTop:0}, 1000);
        $hdrMenu.removeClass('checked');
        $hdrMenu.eq(0).addClass('checked');
    cnt=0;
    $scrWordChange.text('scroll down to see '+$scrWord[0]);
    }
    
    function check(evt){
        delta = evt.originalEvent.wheelDelta;
        if(delta > 0 && flag == false && cnt > 0){
            prevPage();
        }else if(delta < 0 && flag == false && cnt < 5){
            nextPage();

        }
    }
    
    function prevPage(){
        flag=true;
        if(cnt > 0) cnt--;
        $('html').stop().animate({scrollTop: $cntWrap.eq(cnt).offset().top},function(){
            flag=false; 
        });
        $hdrMenu.removeClass('checked');
        $hdrMenu.eq(cnt).addClass('checked');
        if(cnt>=3){
            $scrWordChange.text('scroll top please');
        }else{
            $scrWordChange.text('scroll down to see '+$scrWord[cnt]);
        }
    }
    
    function nextPage(){
        flag=true;
        if(cnt < 3 ) cnt++;
        $('html').stop().animate({scrollTop: $cntWrap.eq(cnt).offset().top},function(){
            flag=false; 
        });
        $hdrMenu.removeClass('checked');
        $hdrMenu.eq(cnt).addClass('checked');
        if(cnt>=3){
            $scrWordChange.text('scroll top please');
        }else{
            $scrWordChange.text('scroll down to see '+$scrWord[cnt]);
        }
    }
      
    function move(){
        var ind = $(this).index();
        $('html').stop().animate({scrollTop:$cntWrap.eq(ind).offset().top},1000);
        $hdrMenu.removeClass('checked');
        $(this).addClass('checked');
        cnt=ind;
    };
    
});
