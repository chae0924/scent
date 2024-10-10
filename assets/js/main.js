/**
* Template Name: Yummy
* Template URL: https://bootstrapmade.com/yummy-bootstrap-restaurant-website-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/




(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();



// shopSwiper
        const shopSwiper = new Swiper('#shopSwiper .swiper-container', {
            slidesPerView: 3, // 한 번에 보여줄 슬라이드 수
            spaceBetween: 30, // 슬라이드 간 간격
            centeredSlides: false, // 가운데 모드
            loop: true, // 반복
           loopedSlides: 9, // 슬라이드 수
            autoplay: { // 자동 슬라이드
                delay: 3000, // 슬라이드 전환 간격 (밀리초)
                disableOnInteraction: false, // 사용자 인터랙션 후에도 자동 재생 유지
            },
            pagination: { // 페이지네이션
                el: '.shop-swiper-pagination',
                clickable: true,
            },
            navigation: { // 네비게이션
                nextEl: '#shopSwiper .swiper-button-next',
                prevEl: '#shopSwiper .swiper-button-prev',
            },
            breakpoints: {
            // 모바일 사이즈
            0: {
                slidesPerView: 1, // 모바일에서 보여줄 슬라이드 수
            },
            // 태블릿 사이즈
            768: {
                slidesPerView: 2, // 태블릿에서 보여줄 슬라이드 수
            },
            // 기본 (데스크탑) 사이즈
            1024: {
                slidesPerView: 3, // 데스크탑에서 보여줄 슬라이드 수
            },
          },
        });

// bestSwiper
const bestSwiper = new Swiper('#bestSwiper .swiper-container', {
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 수
  spaceBetween: 30, // 슬라이드 간 간격
  centeredSlides: false, // 가운데 모드
  loop: true, // 반복
  loopedSlides: 5, // 슬라이드 수
  autoplay: { // 자동 슬라이드
      delay: 3000, // 슬라이드 전환 간격 (밀리초)
      disableOnInteraction: false, // 사용자 인터랙션 후에도 자동 재생 유지
  },
  pagination: { // 페이지네이션
      el: '.best-swiper-pagination',
      clickable: true,
  },
  navigation: { // 네비게이션
      nextEl: '#bestSwiper .swiper-button-next',
      prevEl: '#bestSwiper .swiper-button-prev',
  },
  breakpoints: {
   // 모바일 사이즈
   0: {
       slidesPerView: 1, // 모바일에서 보여줄 슬라이드 수
   },
   // 태블릿 사이즈
   768: {
       slidesPerView: 2, // 태블릿에서 보여줄 슬라이드 수
   },
   // 기본 (데스크탑) 사이즈
   1024: {
       slidesPerView: 3, // 데스크탑에서 보여줄 슬라이드 수
   },
 },
});

// newSwiper
const newSwiper = new Swiper('#newSwiper .swiper-container', {
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 수
  spaceBetween: 30, // 슬라이드 간 간격
  // centeredSlides: false, // 가운데 모드
  loop: true, // 반복
 //  loopedSlides: 3, // 슬라이드 수
  autoplay: { // 자동 슬라이드
      delay: 3000, // 슬라이드 전환 간격 (밀리초)
      disableOnInteraction: false, // 사용자 인터랙션 후에도 자동 재생 유지
  },
  pagination: { // 페이지네이션
      el: '.new-swiper-pagination',
      clickable: true,
  },
  navigation: { // 네비게이션
      nextEl: '#newSwiper .swiper-button-next',
      prevEl: '#newSwiper .swiper-button-prev',
  },
  breakpoints: {
   // 모바일 사이즈
   0: {
       slidesPerView: 1, // 모바일에서 보여줄 슬라이드 수
   },
   // 태블릿 사이즈
   768: {
       slidesPerView: 2, // 태블릿에서 보여줄 슬라이드 수
   },
   // 기본 (데스크탑) 사이즈
   1024: {
       slidesPerView: 3, // 데스크탑에서 보여줄 슬라이드 수
   },
 },
});

// saleSwiper
const saleSwiper = new Swiper('#saleSwiper .swiper-container', {
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 수
  spaceBetween: 30, // 슬라이드 간 간격
  centeredSlides: false, // 가운데 모드
  loop: true, // 반복
  loopedSlides: 4, // 슬라이드 수
  autoplay: { // 자동 슬라이드
      delay: 3000, // 슬라이드 전환 간격 (밀리초)
      disableOnInteraction: false, // 사용자 인터랙션 후에도 자동 재생 유지
  },
  pagination: { // 페이지네이션
      el: '.sale-swiper-pagination',
      clickable: true,
  },
  navigation: { // 네비게이션
      nextEl: '#saleSwiper .swiper-button-next',
      prevEl: '#saleSwiper .swiper-button-prev',
  },
  breakpoints: {
   // 모바일 사이즈
   0: {
       slidesPerView: 1, // 모바일에서 보여줄 슬라이드 수
   },
   // 태블릿 사이즈
   768: {
       slidesPerView: 2, // 태블릿에서 보여줄 슬라이드 수
   },
   // 기본 (데스크탑) 사이즈
   1024: {
       slidesPerView: 3, // 데스크탑에서 보여줄 슬라이드 수
   },
 },
});


// hero section img random
const imageCount = 9; // 사용할 이미지 수
      const basePath = './bby/img/product/hero_'; // 이미지 경로 기본 부분
      const imageExtension = '.png'; // 이미지 파일 확장자

      // 랜덤 이미지 선택 함수
      function getRandomImage() {
          const randomIndex = Math.floor(Math.random() * imageCount) + 1; // 1부터 9까지의 랜덤 인덱스
          const paddedIndex = String(randomIndex).padStart(2, '0'); // 2자리로 패딩
          return basePath + paddedIndex + imageExtension;
      }

      // 페이지 로드 시 랜덤 이미지 설정
      window.onload = function() {
          document.getElementById('randomImage').src = getRandomImage();
      };

      const phrases = [
            "세상에 단 하나뿐인 향, <br>Scent",
            "당신만의 특별한 향, <br>Scent",
            "당신을 위해 디자인된 향, <br>Scent",
            "당신의 매력을 더해줄 향, <br>Scent"
        ];

        // 랜덤 인덱스 생성
        const randomIndex = Math.floor(Math.random() * phrases.length);
        
        // 랜덤 문장을 h1 태그에 설정
        document.getElementById('scent-title').innerHTML = phrases[randomIndex];




