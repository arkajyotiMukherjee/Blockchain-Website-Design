let showOnce = 1;

//Subcription message
let modal = $('.modal');


let closebtn = $('.close');

$(window).scroll(function () {
  var wScroll = $(this).scrollTop()

  //top parallax
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


  //Blog posts

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


  //scroll to the bottom

  if ((Math.ceil(wScroll) > (($(document).height() - $(window).height()) - 100)) && showOnce === 1) {
    showOnce = 0;
    modal.css("display", "block");
  }

})

// When the user clicks on <span> (x), close the modal

closebtn.click(function () {
  modal.css("display", "none");
})

// When the user clicks anywhere outside of the modal, close it
$(window).click(function (event) {
  if ($(event.target).hasClass('modal')) {
    modal.css("display", "none");
  }
})


/* ---- particles.js config ---- */

// particlesJS("particles-js", {
//     "particles": {
//       "number": {
//         "value": 80,
//         "density": {
//           "enable": true,
//           "value_area": 800
//         }
//       },
//       "color": {
//         "value": "#000"
//       },
//       "shape": {
//         "type": "circle",
//         "stroke": {
//           "width": 0,
//           "color": "#000"
//         },
//         "polygon": {
//           "nb_sides": 5
//         },
//         "image": {
//           "src": "img/github.svg",
//           "width": 100,
//           "height": 100
//         }
//       },
//       "opacity": {
//         "value": 0.5,
//         "random": false,
//         "anim": {
//           "enable": false,
//           "speed": 1,
//           "opacity_min": 0.1,
//           "sync": false
//         }
//       },
//       "size": {
//         "value": 3,
//         "random": true,
//         "anim": {
//           "enable": false,
//           "speed": 40,
//           "size_min": 0.1,
//           "sync": false
//         }
//       },
//       "line_linked": {
//         "enable": true,
//         "distance": 150,
//         "color": "#000",
//         "opacity": 0.4,
//         "width": 1
//       },
//       "move": {
//         "enable": true,
//         "speed": 1,
//         "direction": "none",
//         "random": false,
//         "straight": false,
//         "out_mode": "out",
//         "bounce": false,
//         "attract": {
//           "enable": false,
//           "rotateX": 600,
//           "rotateY": 1200
//         }
//       }
//     },
//     "interactivity": {
//       "detect_on": "canvas",
//       "events": {
//         "onhover": {
//           "enable": true,
//           "mode": "grab"
//         },
//         "onclick": {
//           "enable": true,
//           "mode": "push"
//         },
//         "resize": true
//       },
//       "modes": {
//         "grab": {
//           "distance": 140,
//           "line_linked": {
//             "opacity": 1
//           }
//         },
//         "bubble": {
//           "distance": 400,
//           "size": 40,
//           "duration": 2,
//           "opacity": 8,
//           "speed": 3
//         },
//         "repulse": {
//           "distance": 200,
//           "duration": 1
//         },
//         "push": {
//           "particles_nb": 4
//         },
//         "remove": {
//           "particles_nb": 2
//         }
//       }
//     },
//     "retina_detect": true
//   });