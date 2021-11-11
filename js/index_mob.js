$(function(){
    var mnWrap = $('.mnWrap');
    var mainOvg =$('main .ovrGrid');
    var imgGr = $('main .imgGroup');
    var title, exp, col = '';
    var mnTitle = $('main .texts h2');
    var mnExp = $('main .texts p');
    var cntArtG = $('.cnt03 .artGroup');
    var cnt02 = $('.cnt02');

    imgGr.find('.image:last').prependTo(imgGr);
    cntArtG.find('article:last').prependTo(cntArtG);

    mainOvg.swipeleft(function(){

        imgGr.animate({
            marginLeft: -66.66+'%'
        },{
            duration: 500,
            complete: function(){
                imgGr.css('margin-left','-33.33%');
                imgGr.find('.image:first').appendTo(imgGr);
                imgGr.find('.image').css('outline','0');
                title = imgGr.find('.image').eq(2).text();
                exp = imgGr.find('.image').eq(2).attr('data-txt');
                col = imgGr.find('.image').eq(2).attr('data-color');

                mnTitle.text(title);
                mnExp.html(exp);
                mnWrap.css('background-color',col);
            }
        })
       
    });

    mainOvg.swiperight(function(){
        imgGr.animate({
            marginLeft: 0+'%'
        },{
            duration: 500,
            complete: function(){
                imgGr.css('margin-left','-33.33%');
                imgGr.find('.image:last').prependTo(imgGr);
                title = imgGr.find('.image').eq(2).text();
                exp = imgGr.find('.image').eq(2).attr('data-txt');
                mnTitle.text(title);
                mnExp.html(exp);
                col = imgGr.find('.image').eq(2).attr('data-color');
                mnWrap.css('background-color',col);
            }
        })

    });

    cntArtG.swipeleft(function(){
        cntArtG.animate({
            marginLeft: -200+'%'
        },{
            duration: 500,
            complete: function(){
                cntArtG.css('margin-left','-100%');
                cntArtG.find('article:first').appendTo(cntArtG);
            }
        });
    });

    cntArtG.swiperight(function(){
        cntArtG.animate({
            marginLeft: 0+'%'
        },{
            duration: 500,
            complete: function(){
                cntArtG.css('margin-left','-100%');
                cntArtG.find('article:last').prependTo(cntArtG);
            }
        });
    });
    
    cnt02.find('.texts>p').click(function(){
        var ph = $(this).prev().find('p').css('height');
        $(this).prev().css({height:ph});
        $(this).animate({opacity:0},500);
    });


});