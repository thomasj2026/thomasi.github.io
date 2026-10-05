(function () {
  var places = window.TRAVEL_PLACES || [];
  var base = window.TRAVEL_BASE || '';
  var mount = document.getElementById('travel-globe');
  var panel = document.getElementById('travel-panel');
  var list = document.getElementById('travel-list');
  if (!mount || !panel) return;
  if (typeof Globe === 'undefined') {
    mount.textContent = 'The globe could not be loaded. Check your internet connection and refresh.';
    return;
  }

  var selected = null;
  var buttons = {};

  var globe = Globe()(mount)
    .globeImageUrl('https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg')
    .bumpImageUrl('https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png')
    .backgroundImageUrl('https://cdn.jsdelivr.net/npm/three-globe/example/img/night-sky.png')
    .pointsData(places)
    .pointLat('lat')
    .pointLng('lng')
    .pointAltitude(0.03)
    .pointRadius(0.55)
    .pointColor(function (d) { return d === selected ? '#ffffff' : '#ffb703'; })
    .pointLabel(function (d) { return d.name + ', ' + d.region; })
    .onPointClick(function (d) { select(d); })
    .ringColor(function () { return function (t) { return 'rgba(255,183,3,' + (1 - t) + ')'; }; })
    .ringMaxRadius(3)
    .ringPropagationSpeed(2)
    .ringRepeatPeriod(1200);

  var controls = globe.controls();
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.5;
  controls.addEventListener('start', function () { controls.autoRotate = false; });
  globe.pointOfView({ lat: 25, lng: -30, altitude: 2.4 });

  function resize() {
    var w = mount.clientWidth;
    globe.width(w).height(Math.max(340, Math.min(520, Math.round(w * 0.9))));
  }
  resize();
  window.addEventListener('resize', resize);

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text) e.textContent = text;
    return e;
  }

  function buildGallery(p) {
    var photos = p.photos || [];
    if (!photos.length) return el('p', 'travel__hint', 'Photos coming soon.');
    var g = el('div', 'gallery');
    g.tabIndex = 0;
    var vp = el('div', 'gallery__viewport');
    g.appendChild(vp);
    var slides = [];
    photos.forEach(function (ph, i) {
      var f = el('figure', 'gallery__slide' + (i === 0 ? ' is-active' : ''));
      var img = new Image();
      img.src = base + '/images/travel/' + p.slug + '/' + (ph.file || ph);
      img.alt = ph.alt || ph.caption || p.name;
      img.loading = 'lazy';
      f.appendChild(img);
      if (ph.caption) f.appendChild(el('figcaption', null, ph.caption));
      vp.appendChild(f);
      slides.push(f);
    });

    var idx = 0;
    var count = null;
    function show(n) {
      slides[idx].classList.remove('is-active');
      idx = (n + slides.length) % slides.length;
      slides[idx].classList.add('is-active');
      if (count) count.textContent = (idx + 1) + ' / ' + slides.length;
    }

    var fs = el('button', 'gallery__btn gallery__fs');
    fs.type = 'button';
    fs.title = 'Full screen';
    fs.setAttribute('aria-label', 'Toggle full screen');
    fs.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"/></svg>';
    vp.appendChild(fs);
    fs.addEventListener('click', function () {
      var on = document.fullscreenElement === g || document.webkitFullscreenElement === g || g.classList.contains('is-fullscreen');
      if (on) {
        if (document.exitFullscreen) document.exitFullscreen();
        else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
        g.classList.remove('is-fullscreen');
      } else if (g.requestFullscreen) g.requestFullscreen();
      else if (g.webkitRequestFullscreen) g.webkitRequestFullscreen();
      else g.classList.add('is-fullscreen');
      g.focus();
    });

    if (slides.length > 1) {
      var prev = el('button', 'gallery__btn gallery__btn--prev', '❮');
      var next = el('button', 'gallery__btn gallery__btn--next', '❯');
      prev.type = next.type = 'button';
      prev.setAttribute('aria-label', 'Previous image');
      next.setAttribute('aria-label', 'Next image');
      prev.addEventListener('click', function () { show(idx - 1); });
      next.addEventListener('click', function () { show(idx + 1); });
      count = el('div', 'gallery__count', '1 / ' + slides.length);
      vp.appendChild(prev);
      vp.appendChild(next);
      vp.appendChild(count);
      g.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') show(idx - 1);
        if (e.key === 'ArrowRight') show(idx + 1);
        if (e.key === 'Escape') g.classList.remove('is-fullscreen');
      });
    }
    return g;
  }

  function renderPanel(p) {
    panel.innerHTML = '';
    panel.appendChild(el('h3', 'travel__title', p.name));
    panel.appendChild(el('p', 'travel__region', p.region));
    if (p.note) panel.appendChild(el('p', 'travel__note', p.note));
    panel.appendChild(buildGallery(p));
  }

  function select(p) {
    selected = p;
    controls.autoRotate = false;
    globe.pointsData(places);
    globe.ringsData([p]);
    globe.pointOfView({ lat: p.lat, lng: p.lng, altitude: 0.7 }, 1000);
    renderPanel(p);
    Object.keys(buttons).forEach(function (k) {
      buttons[k].classList.toggle('is-active', k === p.slug);
    });
  }

  if (list) {
    places.forEach(function (p) {
      var b = el('button', 'travel__chip', p.name);
      b.type = 'button';
      b.addEventListener('click', function () { select(p); });
      list.appendChild(b);
      buttons[p.slug] = b;
    });
  }
})();
