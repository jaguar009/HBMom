(() => {
  'use strict';
  const content = window.TRIBUTE;
  if (!content) return;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const tabs = [...document.querySelectorAll('[data-year]')];
  const panel = document.querySelector('#timeline-panel');

  function selectYear(tab, focus = false) {
    const data = content.milestones[tab.dataset.year];
    if (!data) return;
    tabs.forEach(item => {
      item.setAttribute('aria-selected', String(item === tab));
      item.tabIndex = item === tab ? 0 : -1;
    });
    panel.setAttribute('aria-labelledby', tab.id);
    document.querySelector('#milestone-year').textContent = tab.dataset.year;
    document.querySelector('#milestone-title').textContent = data.title;
    document.querySelector('#milestone-description').textContent = data.description;
    document.querySelector('#milestone-source').textContent = data.source;
    const copy = document.querySelector('.milestone-copy');
    copy.classList.remove('switching');
    requestAnimationFrame(() => copy.classList.add('switching'));
    if (focus) tab.focus();
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectYear(tab));
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) { event.preventDefault(); selectYear(tabs[next], true); }
    });
  });

  const chronology = document.querySelector('#full-timeline');
  content.chronology.forEach(item => {
    const li = document.createElement('li');
    const date = document.createElement('time');
    date.textContent = item.date;
    const section = document.createElement('div');
    const title = document.createElement('h4');
    title.textContent = item.title;
    const text = document.createElement('p');
    text.textContent = item.text;
    section.append(title, text);
    item.links.forEach(([label, url]) => {
      const link = document.createElement('a');
      link.textContent = label;
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      section.append(link);
    });
    li.append(date, section);
    chronology.append(li);
  });

  const letter = document.querySelector('#letter-content');
  content.letter.forEach(paragraph => {
    const p = document.createElement('p');
    p.textContent = paragraph;
    letter.append(p);
  });
  const signature = document.querySelector('#letter-signature');
  signature.textContent = content.signature;
  signature.style.whiteSpace = 'pre-line';
  const dialog = document.querySelector('#letter-dialog');
  let opener;
  document.querySelectorAll('[data-open-letter]').forEach(button => {
    button.addEventListener('click', () => {
      opener = button;
      dialog.showModal();
      dialog.scrollTop = 0;
      document.querySelector('.close-letter').focus();
    });
  });
  document.querySelector('.close-letter').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => opener?.focus({ preventScroll: true }));

  let wishIndex = 0;
  let celebrationTimer;
  const confetti = document.querySelector('#confetti');
  const celebrateButton = document.querySelector('#celebrate-button');
  celebrateButton.addEventListener('click', () => {
    document.querySelector('#wish-text').textContent = content.wishes[wishIndex++ % content.wishes.length];
    confetti.replaceChildren();
    clearTimeout(celebrationTimer);
    document.body.classList.add('celebrating');
    if (!reducedMotion.matches) {
      const colors = ['#d5b475', '#ead8c1', '#bc798a', '#f8f4ec', '#ae8552'];
      const fragment = document.createDocumentFragment();
      for (let i = 0; i < 85; i++) {
        const piece = document.createElement('i');
        piece.className = 'confetti-piece';
        piece.style.left = `${Math.random() * 100}%`;
        piece.style.background = colors[i % colors.length];
        piece.style.borderRadius = i % 3 === 0 ? '50%' : '1px';
        piece.style.setProperty('--duration', `${3 + Math.random() * 2}s`);
        piece.style.setProperty('--delay', `${Math.random() * 0.5}s`);
        piece.style.setProperty('--drift', `${Math.random() * 180 - 90}px`);
        piece.style.setProperty('--rotation', `${Math.random() * 900 - 450}deg`);
        fragment.append(piece);
      }
      confetti.append(fragment);
    }
    celebrationTimer = setTimeout(() => {
      confetti.replaceChildren();
      document.body.classList.remove('celebrating');
    }, 5700);
  });

  if ('IntersectionObserver' in window && !reducedMotion.matches) {
    document.body.classList.add('motion-ready');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('pending');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(element => {
      element.classList.add('pending');
      observer.observe(element);
    });
    reducedMotion.addEventListener('change', event => {
      if (event.matches) {
        observer.disconnect();
        document.querySelectorAll('.pending').forEach(element => element.classList.remove('pending'));
        confetti.replaceChildren();
      }
    });
  }
})();
