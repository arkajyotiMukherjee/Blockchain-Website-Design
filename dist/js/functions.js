let showOnce = 1;

let modal = $('.modal');


let closebtn = $('.close');

$(window).scroll(function () {
  var wScroll = $(this).scrollTop()

  if ($(window).width() > 800) {
    $('.heading').css({
      'transform': 'translate(0px, ' + wScroll / 10 + '%)'
    })

  }


  if(wScroll > $('.team').offset().top - ($(window).height() / 1.2)){

    $('.team figure').each(function (i) {
        setTimeout(function () {
            $('.team figure').eq(i).addClass('is-showing')
        }, (700 * Math.exp(i*0.14) - 700))
    })
  }




    if(wScroll > $('.large-window').offset().top - $(window).height()){

    var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll/5);

    $('.large-window').css({'background-position' : 'center '+ (wScroll - $('.large-window').offset().top) +'px'})

    $('.window-tint').css({'opacity': opacity})
  }



  if (wScroll > $('.blog-posts').offset().top - $(window).height() && ($(window).width() > 800)) {

    var offset = Math.min(0, wScroll - $('.blog-posts').offset().top + $(window).height() - 400)

    $('.post-1').css({
      'transform': 'translate(' + offset + 'px,' + Math.abs(offset * 0.3) + 'px)'
    })

    $('.post-3').css({
      'transform': 'translate(' + Math.abs(offset) + 'px,' + Math.abs(offset * 0.3) + 'px)'
    })
  } else {
    $('.post-1').css({
      'transform': 'translate(' + 0 + 'px)'
    })

    $('.post-3').css({
      'transform': 'translate(' + 0 + 'px)'
    })
  }



  if ((Math.ceil(wScroll) > (($(document).height() - $(window).height()) - 100)) && showOnce === 1) {
    showOnce = 0;
    modal.css("display", "block");
  }

})


closebtn.click(function () {
  modal.css("display", "none");
})

$(window).click(function (event) {
  if ($(event.target).hasClass('modal')) {
    modal.css("display", "none");
  }
})



