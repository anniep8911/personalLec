$(function(){
    var btnRight = $('.mnWrap .btn .right');
    var btnLeft = $('.mnWrap .btn .left');
    var mnImgGr = $('main .imgGroup');
    var viewBtn = $('.cnt02 article button');

    mnImgGr.css('margin-left', 'calc(100% / 3 *-1)');
    mnImgGr.find('.image:last').prependTo(mnImgGr);

    var ctnTxt = mnImgGr.find('.image').eq(1).text();
    var ctnNote = mnImgGr.find('.image').eq(1).attr('data-txt');
    var cntBg = mnImgGr.find('.image').eq(1).attr('data-color');
    $('main .texts h2').text(ctnTxt);
    $('main .texts p').html(ctnNote);
    $('.mnWrap').css('background-color',cntBg);
    
    
    btnRight.click(function(){
        mnImgGr.stop().animate({
            marginLeft:'-66.66%'
        },500,function(){
            mnImgGr.css('margin-left', 'calc(100% / 3 *-1)');
            mnImgGr.find('.image:first').appendTo(mnImgGr);
            ctnTxt = mnImgGr.find('.image').eq(1).text();
            ctnNote = mnImgGr.find('.image').eq(1).attr('data-txt');
            cntBg = mnImgGr.find('.image').eq(1).attr('data-color');
            $('main .texts h2').text(ctnTxt);
            $('main .texts p').html(ctnNote);
            $('.mnWrap').css('background-color',cntBg);
        });
    });


    btnLeft.click(function(){
        mnImgGr.stop().animate({
            marginLeft:'0%'
        },500,function(){
            mnImgGr.css('margin-left', 'calc(100% / 3 *-1)');
            mnImgGr.find('.image:last').prependTo(mnImgGr);
            ctnTxt = mnImgGr.find('.image').eq(1).text();
            ctnNote = mnImgGr.find('.image').eq(1).attr('data-txt');
            cntBg = mnImgGr.find('.image').eq(1).attr('data-color');
            $('main .texts h2').text(ctnTxt);
            $('main .texts p').html(ctnNote);
            $('.mnWrap').css('background-color',cntBg);
        });
    });







    var cnt02art = $('.cnt02 article');
    for(var i = 0; i < 7 ; i++){
        var ph = parseInt(cnt02art.eq(i).find('p').css('height'));
        var txtH = parseInt(cnt02art.eq(i).find('.txt').css('height'));

        if(ph > txtH){
            cnt02art.eq(i).find('button').css('display','block');
        }
    }


    $('.artTop>article').click(function(){
        $('.artTop>article').removeClass('sel');
        $(this).addClass('sel');
    });

    $('.artBtm>article').click(function(){
        $('.artBtm>article').removeClass('sel');
        $(this).addClass('sel');
    });

    viewBtn.click(function(){
        var val = $(this).text();
        var ph= $(this).prev().find('p').css('height');
        $(this).prev().animate({
            height: ph
        },{
            duration: 500,
            complete : function(){
                $(this).next().css({
                    opacity: 0
                });
            }
        });

    });


    
    var artTop =[];

    $(window).scroll(function(){
        var now =$(this).scrollTop();

        for(var i = 0; i <= 6 ; i++){
            artTop[i]= parseInt(cnt02art.eq(i).offset().top) - 800;

            if(i % 2 == 0){
                if(now >= artTop[i] && now <= artTop[i+1]){
                    cnt02art.eq(i).find('.ovrGrid').css({
                       left:0
                    });

                    cnt02art.eq(i).find('.texts').css({
                        top:0,
                        opacity:1
                    });
                }else if(now >= artTop[6]){
                    cnt02art.eq(6).find('.ovrGrid').css({
                        left:0
                    });

                    cnt02art.eq(6).find('.texts').css({
                        top:0,
                        opacity:1
                    });
                    
                }

            }else{
                if(now >= artTop[i] && now <= artTop[i+1]){
                    cnt02art.eq(i).find('.ovrGrid').css({
                       right:0
                    });
                    cnt02art.eq(i).find('.texts').css({
                        top:0,
                        opacity:1
                    });
                }
                
            }

        }
        
    });

    var cnt03ArtG = $('.cnt03 .artGroup');
    
    cnt03ArtG.find('article:last').prependTo(cnt03ArtG);
    cnt03ArtG.css('margin-left','-20%');

    $('.cnt03 .left').click(function(){
        cnt03ArtG.animate({
            marginLeft: '0%'
        },{
            duration: 500,
            complete: function(){
                cnt03ArtG.find('article:last').prependTo(cnt03ArtG);
                cnt03ArtG.css('margin-left','-20%');
            }
        })
    });

    $('.cnt03 .right').click(function(){
        cnt03ArtG.animate({
            marginLeft: '-40%'
        },{
            duration: 500,
            complete: function(){
                cnt03ArtG.find('article:first').appendTo(cnt03ArtG);
                cnt03ArtG.css('margin-left','-20%');
            }
        })
    });

});