(() => {
  const navbar = document.getElementById('navbar');
  const brand = document.getElementById('brand');
  const wrapper = document.getElementById('navbar-wrapper');
  const menuToggle = document.querySelector('.brand-toggle');

  if (navbar && brand && wrapper) {
    let stickyOffset = 0;

    const measureNavbar = () => {
      const height = navbar.offsetHeight;
      wrapper.style.height = `${height}px`;
      stickyOffset = wrapper.offsetTop + height;
    };

    const updateNavbar = () => {
      const isSticky = window.scrollY >= stickyOffset;
      navbar.classList.toggle('sticky', isSticky);
      brand.classList.toggle('hide', !isSticky);
      if (isSticky) brand.classList.add('fade');
      if (!isSticky && navbar.classList.contains('open')) {
        navbar.classList.replace('open', 'close');
        menuToggle?.setAttribute('aria-expanded', 'false');
      }
    };

    menuToggle?.addEventListener('click', () => {
      const isOpen = navbar.classList.toggle('open');
      navbar.classList.toggle('close', !isOpen);
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    window.addEventListener('scroll', updateNavbar, { passive: true });
    window.addEventListener('resize', () => {
      measureNavbar();
      updateNavbar();
    });

    measureNavbar();
    updateNavbar();
  }

  const gallery = document.getElementById('gallery');
  const galleryImages = document.querySelectorAll('.gallery-image');

  galleryImages.forEach((image) => {
    if (image.complete) image.classList.add('fade');
    else image.addEventListener('load', () => image.classList.add('fade'), { once: true });
  });

  if (gallery && window.jQuery?.fn?.lightGallery) {
    window.jQuery(gallery).lightGallery({
      selector: '.gallery-image',
      speed: 200,
      mode: 'lg-fade',
      download: false
    });
  }
})();

