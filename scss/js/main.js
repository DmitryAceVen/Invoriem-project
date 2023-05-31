$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items:3,
        dots:false,
        loop:true,
          responsive : {
            // breakpoint from 0 up
            0 : {
                items:2,
                margin:32,
            },
            // breakpoint from 480 up
            601 : {
              items:3,
              margin:32,
            },
            // breakpoint from 768 up
            1001 : {
              items:3,
              margin:48,
            }
      }
    });
  });

  /*Video*/

  const videoBtn = document.querySelector('#video-btn');
  const videoPicture = document.querySelector('.video__picture');
  const videoWrapper = document.querySelector('.video');
  const video = document.querySelector('#video-file');

  videoWrapper.addEventListener('click',function() {
    if (video.paused){
        videoPicture.classList.add('hidden');
        videoWrapper.classList.remove('video-overlay');
        videoBtn.classList.add('none');

        video.play()
    }
    else {
        videoWrapper.classList.add('video-overlay');
        videoBtn.classList.remove('none');
        video.pause()
    }

  });

  /*Mobile nav*/

  const openNavBtn = document.querySelector('#openMobileNav');
  const mobilNav = document.querySelector('#mobilNav');
  const closeNav = document.querySelector('#closeNav')
  openNavBtn.onclick = function () {
    mobilNav.classList.remove('none');
    document.body.classList.add('no-scroll');
  }
  closeNav.onclick = function () {
    mobilNav.classList.add('none');
    document.body.classList.remove('no-scroll')
  }