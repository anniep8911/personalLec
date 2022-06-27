$(function(){

//skills 
    //변수
    var $dropP =$('.skills .sectDrop'),
        $dragP =$('.skills .sectDrag'),
        $dropArt = $dropP.find('article'),
        $dragArt = $dragP.find('article'),
        $hdrMenu = $('.hdrWrap .nav li'),
        $skillName=[],
        $skillPer=[],
        $skillD1=[],
        $skillD2=[],
        $skillD3=[],
        $toolName=[],
        $toolPer=[],
        $toolD1=[],
        $toolD2=[];

    //데이터 처리
    $.getJSON('data/skills.json',dataA).fail(function(){console.log('fail')});
    function dataA(data){
    	for(var i=0; i <= data.skillName.length-1; i++){
    		$skillName[i]=data.skillName[i];
    		$skillPer[i]=data.skillPercnet[i];	
    		$skillD1[i]=data.skillDetail1[i];
    		$skillD2[i]=data.skillDetail2[i];
    		$skillD3[i]=data.skillDetail3[i];
    	}
    	
    	for(var i=0; i <= data.toolName.length-1; i++){
    		$toolName[i]=data.toolName[i];
    		$toolPer[i]=data.toolPercent[i];
    		$toolD1[i]=data.toolDetail1[i];
    		$toolD2[i]=data.toolDetail2[i];
    	}
    }

    //전처리
    // $dropP.find('h3').css({fontSize:'25px', height:'100px', marginTop:'200px'});
    
    //이벤트
    $dropArt.on('click',zIndex);
    $dropArt.on('mouseenter',clk);
    $dropArt.on('mouseleave',cll);
    $dragArt.draggable({
        revert:true,
        revertDurtation:200,
        containment:'.skills',
        zIndex:50,
        drag: function(){
            $dragArt.removeClass('drag');
            $(this).addClass('drag');
        }
    });

    $dropP.droppable({
        accept:$dragArt,
        drop: skill
    });

    //함수
    function zIndex(){
        navName=['skills','tools'];
        ind = $(this).index();
        $hdrMenu.eq(2).text(navName[ind]);
        $dropArt.removeClass('show');
        $(this).addClass('show');
        $dropP.find('h3').text('오른쪽에서 아이콘을 드래그하여 여기에 드롭해주세요.!')
        // $dropP.find('h3').css({fontSize:'25px', height:'100px', marginTop:'200px'});
        $dropP.find('ul').css({display:'none'});
        $dropP.find('div').css({display:'none'});
        $dragP.find('.artWrap').removeClass('show');
        $dragP.find('.artWrap').eq(ind).addClass('show');
        if(ind==0){
            $dropP.droppable({
            accept:$dragArt,
            drop: skill
            });

        }else{
            $dropP.droppable({
                accept:$dragArt,
                drop: tool
                });
        }        
    }
    
    function skill(){
        //CSS세팅
        $dropP.find('ul').css({display:'block'});
        $dropP.find('div').css({display:'block'});
        $dropP.find('.skill ul').css({listStyle:'square'});
        $dropP.find('.skill div:first').addClass('percent');
        $dropP.find('.skill div:last').addClass('graph');
        $dropP.find('.percent span').text(0);
        $dropP.find('.percent').css({width:'0%'});
        
        //내용
        $('.drag').animate({opacity:0},0,function(){
            $dragArt.css({opacity:1});
            ind=$(this).index();
            $dropP.find('h3').text($skillName[ind]);
            $dropP.find('ul li').eq(0).text($skillD1[ind]);
            $dropP.find('ul li').eq(1).text($skillD2[ind]);
            $dropP.find('ul li').eq(2).text($skillD3[ind]);
            
            $({percent:0}).stop().animate({percent:$skillPer[ind]},{
                duration: 1000,
                progress: function(){
                    per = parseInt(this.percent);
                    $dropP.find('.percent span').text(per);
                    $dropP.find('.percent').css({width:per+'%'});
                }
            });
        });
   }

   function tool(){
       //CSS세팅

       $dropP.find('ul').css({display:'block'});
       $dropP.find('div').css({display:'block'});
       $dropP.find('.skill ul').css({listStyle:'square'});
       
       //내용
       $('.drag').animate({opacity:0},0,function(){
           $dragArt.css({opacity:1});
           ind=$(this).index();
           $dropP.find('h3').html($toolName[ind]);
           $dropP.find('.tool ul').css({listStyle:'square'});
           $dropP.find('.tool ul li').eq(0).html($toolD1[ind]);
           $dropP.find('.tool ul li').eq(1).html($toolD2[ind]);
           $dropP.find('.tool ul li').eq(2).remove();
       });
   }
    
    function clk(){
        if($(this).hasClass('show')){
            $dropArt.removeClass('clickR');
        }else{
            $(this).addClass('clickR');
        }
    }

    function cll(){
        $dropArt.removeClass('clickR');
    }

    
});