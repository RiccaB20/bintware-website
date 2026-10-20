  // WAVEFORM
  (function(){
    const wave = document.getElementById('wave');
    if(!wave) return;
    const N = 64;
    const frag = document.createDocumentFragment();
    for(let i=0;i<N;i++){
      const b = document.createElement('span');
      b.className = 'bar';
      const center = Math.abs(i - N/2) / (N/2);
      const h = Math.max(0.25, (1 - center*center) * (0.5 + Math.random()*0.8));
      b.style.setProperty('--h', h.toFixed(2));
      b.style.setProperty('--d', (0.6 + Math.random()*1.1).toFixed(2) + 's');
      b.style.animationDelay = (-Math.random()*2) + 's';
      frag.appendChild(b);
    }
    wave.appendChild(frag);
  })();

  // CALL TIMER
  (function(){
    const el = document.getElementById('callTimer');
    if(!el) return;
    let s = 42;
    setInterval(()=>{
      if(document.hidden) return;
      s++;
      const m = String(Math.floor(s/60)).padStart(2,'0');
      const ss = String(s%60).padStart(2,'0');
      el.textContent = `${m}:${ss}`;
    },1000);
  })();

  // CHART BARS
  (function(){
    const c = document.getElementById('chart');
    if(!c) return;
    const N = 24;
    const frag = document.createDocumentFragment();
    for(let i=0;i<N;i++){
      const b = document.createElement('span');
      b.className = 'bar';
      const h = 20 + Math.round(40 + Math.sin(i/2)*30 + Math.random()*20);
      b.style.height = Math.min(h,100) + '%';
      b.style.opacity = (0.35 + (h/120)).toFixed(2);
      frag.appendChild(b);
    }
    c.appendChild(frag);
  })();

  // REVEAL ON SCROLL (Chrome-safe: preserves sticky headers and hash navigation)
  (function(){
    const SELECTORS = '.section-head, .feature .viz, .use, .work-card, .metric, .price-row, .contact-card, .use-rest, .arch-explainer';
    const els = document.querySelectorAll(SELECTORS);
    if(!els.length) return;
    if(!('IntersectionObserver' in window)){
      els.forEach(el => el.classList.add('is-visible'));
      return;
    }
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e => {
        if(e.isIntersecting){
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, {threshold:0.04, rootMargin:'0px 0px -20px 0px'});

    els.forEach(el => {
      const rect = el.getBoundingClientRect();
      if(rect.top < vh * 0.95){
        el.classList.add('is-visible');
      } else {
        el.classList.add('fade-in');
        io.observe(el);
      }
    });
  })();

  // MOBILE NAV TOGGLE
  (function(){
    const nav = document.querySelector('nav.top');
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('nav.top .links');
    if(!toggle || !links) return;
    function setOpen(open){
      links.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Chiudi menu' : 'Apri menu');
    }
    toggle.addEventListener('click', () => setOpen(!links.classList.contains('is-open')));
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setOpen(false)));
    document.addEventListener('keydown', (e) => {
      if(e.key === 'Escape' && links.classList.contains('is-open')){
        setOpen(false);
        toggle.focus();
      }
    });
    document.addEventListener('click', (e) => {
      if(links.classList.contains('is-open') && nav && !nav.contains(e.target)){
        setOpen(false);
      }
    });
  })();

  // Smooth scroll for hash links (reveals target section immediately)
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const id = a.getAttribute('href').slice(1);
      if(!id) return;
      const el = document.getElementById(id);
      if(el){
        e.preventDefault();
        document.querySelectorAll('.fade-in:not(.is-visible)').forEach(node => node.classList.add('is-visible'));
        el.scrollIntoView({behavior:'smooth', block:'start'});
        if(history.pushState){
          history.pushState(null, '', '#' + id);
        }
      }
    });
  });

  // GA4 CONVERSION TRACKING (Google Calendar & Contact clicks)
  (function(){
    document.addEventListener('click', (e) => {
      const a = e.target.closest('a[href]');
      if(!a || typeof gtag !== 'function') return;
      const href = a.getAttribute('href') || '';
      if(href.includes('calendar.app.google')){
        gtag('event', 'book_call_click', {
          'event_category': 'conversion',
          'event_label': location.pathname,
          'link_url': href
        });
        gtag('event', 'generate_lead', {
          'method': 'google_calendar',
          'page_path': location.pathname
        });
      } else if(href.startsWith('mailto:') || href.startsWith('tel:')){
        gtag('event', 'contact_click', {
          'method': href.startsWith('mailto:') ? 'email' : 'phone',
          'page_path': location.pathname
        });
      }
    });
  })();

  // COOKIE CONSENT BANNER — GDPR / Consent Mode v2
  (function(){
    const KEY = 'bw_consent';

    // Esposta globalmente per permettere all'utente di cambiare scelta dalla privacy
    window.bwCookieReset = function(){
      localStorage.removeItem(KEY);
      location.reload();
    };

    const stored = localStorage.getItem(KEY);

    if (stored === 'granted') {
      if (typeof gtag === 'function') {
        gtag('consent', 'update', { 'analytics_storage': 'granted' });
      }
      return;
    }
    if (stored === 'denied') return;

    function show(){
      const b = document.createElement('div');
      b.className = 'cookie-banner';
      b.setAttribute('role','dialog');
      b.setAttribute('aria-label','Consenso cookie');
      b.innerHTML =
        '<p class="cb-text">Usiamo Google Analytics per capire come navighi il sito (cookie analitici). Puoi accettare o rifiutare — il sito funziona ugualmente. <a href="/privacy.html">Dettagli</a>.</p>' +
        '<div class="cb-actions">' +
          '<button type="button" class="cb-reject">Rifiuta</button>' +
          '<button type="button" class="cb-accept">Accetta</button>' +
        '</div>';
      document.body.appendChild(b);

      function decide(value){
        try { localStorage.setItem(KEY, value); } catch(e){}
        if (value === 'granted' && typeof gtag === 'function') {
          gtag('consent', 'update', { 'analytics_storage': 'granted' });
        }
        b.remove();
      }
      b.querySelector('.cb-accept').addEventListener('click', function(){ decide('granted'); });
      b.querySelector('.cb-reject').addEventListener('click', function(){ decide('denied'); });
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', show);
    } else {
      show();
    }
  })();
