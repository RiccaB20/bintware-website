  // WAVEFORM
  (function(){
    const wave = document.getElementById('wave');
    if(!wave) return;
    const N = 64;
    for(let i=0;i<N;i++){
      const b = document.createElement('span');
      b.className = 'bar';
      const center = Math.abs(i - N/2) / (N/2);
      const h = Math.max(0.25, (1 - center*center) * (0.5 + Math.random()*0.8));
      b.style.setProperty('--h', h.toFixed(2));
      b.style.setProperty('--d', (0.6 + Math.random()*1.1).toFixed(2) + 's');
      b.style.animationDelay = (-Math.random()*2) + 's';
      wave.appendChild(b);
    }
  })();

  // CALL TIMER
  (function(){
    const el = document.getElementById('callTimer');
    if(!el) return;
    let s = 42;
    setInterval(()=>{
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
    for(let i=0;i<N;i++){
      const b = document.createElement('span');
      b.className = 'bar';
      const h = 20 + Math.round(40 + Math.sin(i/2)*30 + Math.random()*20);
      b.style.height = Math.min(h,100) + '%';
      b.style.opacity = (0.35 + (h/120)).toFixed(2);
      c.appendChild(b);
    }
  })();

  // REVEAL ON SCROLL
  (function(){
    const SELECTORS = '.section-head, .feature, .use, .work-card, .metric, .price-row, .contact-card, .use-rest, .arch-explainer, .voice-panel';
    const els = document.querySelectorAll(SELECTORS);
    if(!els.length) return;
    if(!('IntersectionObserver' in window)){
      els.forEach(el => el.classList.add('is-visible'));
      return;
    }
    els.forEach(el => el.classList.add('fade-in'));
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e => {
        if(e.isIntersecting){
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, {threshold:0.08, rootMargin:'0px 0px -40px 0px'});
    els.forEach(el => io.observe(el));
  })();

  // PRICE LIST · upgrade toggle
  (function(){
    const total = document.getElementById('infra-total');
    if(!total) return;
    const BASE = 250;
    const STATE = {vm:false, db:false};
    const PRICES = {vm:75, db:150};

    window.toggleUpgrade = function(type){
      STATE[type] = !STATE[type];
      const btn = document.getElementById('upg-' + type);
      if(btn){btn.classList.toggle('active', STATE[type])}
      let sum = BASE;
      Object.keys(STATE).forEach(k => { if(STATE[k]) sum += PRICES[k] });
      total.textContent = sum;
    };
  })();

  // Smooth scroll for hash links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const id = a.getAttribute('href').slice(1);
      if(!id) return;
      const el = document.getElementById(id);
      if(el){e.preventDefault(); window.scrollTo({top: el.offsetTop - 70, behavior:'smooth'})}
    });
  });

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
