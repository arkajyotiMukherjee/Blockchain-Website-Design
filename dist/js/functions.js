$(window).scroll(function(){var e=$(this).scrollTop();if($(".globe").css({transform:"translate(0px, "+e/10+"%)"}),$(".logo").css({transform:"translate(0px, -"+e/100+"%)"}),e>$(".team").offset().top-$(window).height()/1.2&&$(".team figure").each(function(e){setTimeout(function(){$(".team figure").eq(e).addClass("is-showing")},700*Math.exp(.14*e)-700)}),e>$(".advisors").offset().top-$(window).height()/1.2&&$(".advisors figure").each(function(e){setTimeout(function(){$(".advisors figure").eq(e).addClass("is-showing")},700*Math.exp(.14*e)-700)}),e>$(".large-window").offset().top-$(window).height()){var t=(e-$(".large-window").offset().top+400)/(e/5);$(".large-window").css({"background-position":"center "+(e-$(".large-window").offset().top)+"px"}),$(".window-tint").css({opacity:t})}if(e>$(".blog-posts").offset().top-$(window).height()){var o=Math.min(0,e-$(".blog-posts").offset().top+$(window).height()-400);$(".post-1").css({transform:"translate("+o+"px,"+Math.abs(.3*o)+"px)"}),$(".post-3").css({transform:"translate("+Math.abs(o)+"px,"+Math.abs(.3*o)+"px)"})}}),particlesJS("particles-js",{particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:"#000"},shape:{type:"circle",stroke:{width:0,color:"#000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#000",opacity:.4,width:1},move:{enable:!0,speed:1,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:1},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0});