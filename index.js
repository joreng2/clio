$(document).ready(function(){
    
    //스크롤시 메뉴바 색상바뀜
    $(window).scroll(function(){
        let top = $(window).scrollTop();
        if(top > 100){
        $(".head_menubar").css({"background-color":"rgb(255, 255, 255)","box-shadow":"0 1px 3px rgba(0,0,0,0.05)"});
        }else{
            $(".head_menubar").css({"background-color":"transparent","box-shadow":"none"});
        };
    });

    $(".gnb_wrap").hide();
    $(".menu_btn").click(function(){
        $(".gnb_wrap").stop().fadeIn(200);
    });

    $(".close_btn").click(function(){
        $(".gnb_wrap").stop().fadeOut(200);
    });

    // visual banner
    

    let current = 0;
    let slide_length = $(".visual_banner>li").length;
    
    function slideShow(){
        $(".visual_banner>li").stop().fadeOut();
        $(".visual_banner>li").eq(current).stop().fadeIn();
        $(".dot>li").removeClass("on");
        $(".dot>li").eq(current).addClass("on");
    }

   let autoSlide = setInterval (function(){
        if(current == slide_length-1){
            current = 0;
        }else{
            current++;
        }
        slideShow();
    },3000);


    $(".dot>li").click(function(){
        let list = $(this).index();
        $(".dot>li").removeClass("on");
        $(".dot>li").eq(list).addClass("on");

        $(".visual_banner>li").stop().fadeOut();
        $(".visual_banner>li").eq(list).stop().fadeIn(200);
    });


 
    //베스트아이템 

    //오토슬라이드
    function best_slideShow(){
        $(".best_product").stop().animate({"margin-left":"-20%"},function(){
            $(".best_product>li").first().appendTo(".best_product");
            $(".best_product").css({"margin-left":"0%"});
        });
    }
    let best_list = 0;
    let best_slide_length = $(".best_product>li").length;

    let best_autoSlide = setInterval (function(){
        if(best_list == best_slide_length-1){
            best_list = 0;
        }else{
            best_list++;
        }
        best_slideShow();
    },3000);

    //마우스 올릴때, 안올릴때 셋인터벌 클리어인터벌
    $(".best_product>li").mouseenter(function(){
        clearInterval(best_autoSlide);
    });
    
    $(".best_product>li").mouseleave(function(){
        best_autoSlide = setInterval(function(){
            if(best_list == best_slide_length-1){
                best_list = 0;
            }else{
                best_list++;
            }
            best_slideShow();
        },3000);
    });
    

//클릭 슬라이드
$(".best_arrow").click(function(){
    $(".best_product").stop().animate({"margin-left":"-20%"},function(){
        $(".best_product>li").first().appendTo(".best_product");
        $(".best_product").css({"margin-left":"0%"});
    })
});


    
//뉴아이템 탭
$(".new_tab_menu>li").click(function(){
    let new_list = $(this).index();

    $(".new_tab_menu>li").removeClass("btnOn");
    $(".new_tab_menu>li").eq(new_list).addClass("btnOn");

    $(".new_tab_content>li").stop().fadeOut();
    $(".new_tab_content>li").eq(new_list).stop().fadeIn();
});

//기프트 캐러셀

 //오토슬라이드
 function gift_slideShow(){
    $(".gift_pd").stop().animate({"margin-left":"-39%"},function(){
        $(".gift_pd>li").first().appendTo(".gift_pd");
        $(".gift_pd").css({"margin-left":"0%"});

            //가운데 오는 li에 클래스를 붙이고 떼기
    $(".gift_pd>li").removeClass("gift_center");
    $(".gift_pd>li").eq(1).addClass("gift_center");
    });
}
let gift_list = 0;
let gift_slide_length = $(".gift_pd>li").length;

let gift_autoSlide = setInterval (function(){
    if(gift_list == gift_slide_length-1){
        gift_list = 0;
    }else{
        gift_list++;
    }
    gift_slideShow();

},3000);

//마우스 올릴때, 안올릴때 셋인터벌 클리어인터벌
// $(".gift_pd>li").mouseenter(function(){
//     clearInterval(gift_autoSlide);
// });
// $(".gift_arrow").mouseenter(function(){
//     clearInterval(gift_autoSlide);
// });

// $(".gift_pd>li").mouseleave(function(){
    gift_autoSlide = setInterval(function(){
        if(gift_list == gift_slide_length-1){
            gift_list = 0;
        }else{
            gift_list++;
        }
        gift_slideShow();
    },3000);
// });

//클릭슬라이드
$(".left_arw").click(function(){
    $(".gift_pd").stop().animate({"margin-left":"39%"},function(){
        $(".gift_pd>li").last().prependTo(".gift_pd");
        $(".gift_pd").css({"margin-left":"0%"});
    });
    //가운데 오는 li에 클래스를 붙이고 떼기
    $(".gift_pd>li").removeClass("gift_center");
    $(".gift_pd>li").eq(0).addClass("gift_center");

});

$(".right_arw").click(function(){
    $(".gift_pd").stop().animate({"margin-left":"-39%"},function(){
        $(".gift_pd>li").first().appendTo(".gift_pd");
        $(".gift_pd").css({"margin-left":"0%"});
    });

//가운데 오는 li에 클래스를 붙이고 떼기
    $(".gift_pd>li").removeClass("gift_center");
    $(".gift_pd>li").eq(2).addClass("gift_center");

});


//웜앤쿨
$(window).scroll( function(){
    $('.warm_cool_txt').each( function(i){
        
        var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 2;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        if( bottom_of_window > bottom_of_element-300 ){
            $(this).animate({'opacity':'1','margin-left':'0px'},1000);
        }
    }); 
    
});

$(window).scroll(function(){
    let top = $(window).scrollTop();
    let imgTop = $(".warm_cool_img>div").offset().top;

    if(top >= imgTop-350){
        $(".left_cool").animate({"opacity":"1","margin-left":"19.2%"},800);
        $(".right_warm").animate({"opacity":"1","margin-right":"19.2%"},800);
    }
});


//이벤트
    //오토슬라이드
    function ev_slideShow(){
        $(".event_box").stop().animate({"margin-left":"-21.5%"},function(){
            $(".event_box>li").first().appendTo(".event_box");
            $(".event_box").css({"margin-left":"0%"});
        });
    }
    let ev_list = 0;
    let ev_slide_length = $(".event_box>li").length;

    let ev_autoSlide = setInterval (function(){
        if(ev_list == ev_slide_length-1){
            ev_list = 0;
        }else{
            ev_list++;
        }
        ev_slideShow();
    },3000);

    //마우스 올릴때, 안올릴때 셋인터벌 클리어인터벌
    // $(".event_box>li").mouseenter(function(){
    //     clearInterval(ev_autoSlide);
    // });
    
    // $(".event_box>li").mouseleave(function(){
        ev_autoSlide = setInterval(function(){
            if(ev_list == ev_slide_length-1){
                ev_list = 0;
            }else{
                ev_list++;
            }
            ev_slideShow();
        },3000);
    // });

    
//클릭슬라이드

$(".event_arrow").click(function(){
    $(".event_box").stop().animate({"margin-left":"-21.5%"},function(){
        $(".event_box>li").first().appendTo(".event_box");
        $(".event_box").css({"margin-left":"0%"});
    })
});


//sns
$(window).scroll(function(){
    let top = $(window).scrollTop();
    let snsTop = $(".sns_content").offset().top;

    if(top > snsTop -300){
        $(".sns_1").animate({"opacity":"1","margin-right":"130px"},800);
        $(".sns_2").animate({"opacity":"1","margin-left":"30px"},800);
    }
});

});