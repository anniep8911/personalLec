$(function(){
//careers
    //변수 
    var $art = $('.careers article'),
        $atrDL = $('.careers article dl'),
        ind=0;


    //이벤트
    $art.on('click',open);
    $art.on('mouseenter',hovTop);
    $atrDL.on('click',show);
    $atrDL.find('dt').on('mouseenter',hovR);
    
    //전처리
    $art.find('dt:first').addClass('checked');
    
    //함수
    function open(){
        ind = $(this).index();
        $art.removeClass('show');
        $art.removeClass('clickTop');
        $art.eq(ind).addClass('show');
    }
    
    function hovTop(){
        cl=$(this).attr('class');
        if(cl=='show'){
            $art.removeClass('clickTop');
            
        }else{
            ind= $(this).index();
            $art.removeClass('clickTop');
            $art.eq(ind).addClass('clickTop');
        }
    }


    function show(){
        $atrDL.find('dt').removeClass('checked');
        $(this).find('dt').addClass('checked');
    }
    

    function hovR(){
        cl=$(this).attr('class');
        $atrDL.find('img').remove();
        if(cl=='checked'){
            $atrDL.find('img').remove();
        }else{
            $(this).prepend('<img src="image/click.png"/>');
        }
    }

});