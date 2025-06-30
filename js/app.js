document.addEventListener('DOMContentLoaded', () => {
        new Swiper('.mySwiper', {
          loop: true,
          slidesPerView: 'auto',
          spaceBetween: 24,
          speed: 5000,
          autoplay: {
            delay: 0,
            disableOnInteraction: false,
          },
          freeMode: true,
        });

        const loader = document.getElementById('loader');
        const page = document.getElementById('page');

        // function showLoaderThenNavigate(targetId) {
        //   loader.classList.remove('slide-up');
        //   page.classList.remove('reveal');
        //   setTimeout(() => {
        //     document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
        //     loader.classList.add('slide-up');
        //     page.classList.add('reveal');
        //   }, 500);
        // }

        // document.querySelectorAll('.nav-link').forEach(link => {
        //   link.addEventListener('click', e => {
        //     e.preventDefault();
        //     const target = link.getAttribute('data-target');
        //     showLoaderThenNavigate(target);
        //   });
        // });

        setTimeout(() => {
          loader.classList.add('slide-up');
          page.classList.add('reveal');
        }, 500);
      });

      function toggleReadMore() {
        const preview = document.getElementById('about-preview');
        const full = document.getElementById('about-full');
        if (preview.classList.contains('hidden')) {
          preview.classList.remove('hidden');
          full.classList.add('hidden');
        } else {
          preview.classList.add('hidden');
          full.classList.remove('hidden');
        }
      }