document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  // Projects dropdown in the nav: opens on hover (desktop, via CSS) and
  // on click/tap. A click-opened menu stays open until the toggle is
  // clicked again, a link is chosen, the user clicks elsewhere, or Escape
  // is pressed.
  var dropdown = document.querySelector('.nav-dropdown');
  var dropdownToggle = document.querySelector('.nav-dropdown-toggle');
  if (dropdown && dropdownToggle) {
    var closeDropdown = function () {
      dropdown.classList.remove('open');
      dropdownToggle.setAttribute('aria-expanded', 'false');
    };
    dropdownToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen = dropdown.classList.toggle('open');
      dropdownToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    document.addEventListener('click', function (e) {
      if (!dropdown.contains(e.target)) closeDropdown();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeDropdown();
    });
  }

  // If an artwork image fails to load, show a labelled placeholder
  // instead of a broken-image icon.
  document.querySelectorAll('.art-frame img').forEach(function (img, i) {
    img.addEventListener('error', function () {
      var frame = img.closest('.art-frame');
      if (!frame || frame.classList.contains('img-missing')) return;
      frame.classList.add('img-missing', 'ph-' + ((i % 6) + 1));
      var ph = document.createElement('div');
      ph.className = 'ph';
      var tag = document.createElement('span');
      tag.className = 'ph-tag';
      tag.textContent = img.getAttribute('src');
      ph.appendChild(tag);
      frame.appendChild(ph);
      img.remove();
    });
  });

  // Rotate thumbnails inside each homepage browse card.
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('.browse-slideshow').forEach(function (slideshow, cardIndex) {
    var imgs = slideshow.querySelectorAll('img');
    if (imgs.length <= 1) return;
    var current = 0;
    if (prefersReducedMotion) return; // show first frame only, no motion
    setInterval(function () {
      imgs[current].classList.remove('is-active');
      current = (current + 1) % imgs.length;
      imgs[current].classList.add('is-active');
    }, 2600 + (cardIndex % 4) * 300); // slight offset per card so they don't sync
  });
});
