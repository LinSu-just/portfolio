(() => {
  const buttonArea = document.querySelector('.buttons');
  const body = document.body;
  let leaveTimer;
  if (buttonArea) {
    const lookAtButtons = () => { clearTimeout(leaveTimer); body.classList.add('is-looking-at-buttons'); };
    const lookAway = () => { clearTimeout(leaveTimer); leaveTimer = setTimeout(() => body.classList.remove('is-looking-at-buttons'), 140); };
    buttonArea.addEventListener('pointerenter', lookAtButtons);
    buttonArea.addEventListener('pointerleave', lookAway);
    buttonArea.addEventListener('focusin', lookAtButtons);
    buttonArea.addEventListener('focusout', event => { if (!buttonArea.contains(event.relatedTarget)) lookAway(); });
  }

  const reveals = document.querySelectorAll('.reveal');
  const about = document.querySelector('#about');
  if (!('IntersectionObserver' in window)) {
    reveals.forEach(element => element.classList.add('is-visible'));
    return;
  }
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: .16, rootMargin: '0px 0px -8% 0px' });
  reveals.forEach(element => revealObserver.observe(element));

  if (about) {
    new IntersectionObserver(([entry]) => {
      body.classList.toggle('is-about-visible', entry.isIntersecting);
      if (entry.isIntersecting) {
        body.classList.remove('is-projects-visible', 'is-services-visible', 'is-contacts-visible');
      }
    }, { threshold: .45 }).observe(about);
  }
  const projects = document.querySelector('#projects');
  if (projects) {
    new IntersectionObserver(([entry]) => {
      body.classList.toggle('is-projects-visible', entry.isIntersecting);
      if (entry.isIntersecting) {
        body.classList.remove('is-about-visible', 'is-services-visible', 'is-contacts-visible');
      }
    }, { threshold: .3 }).observe(projects);
  }
  const services = document.querySelector('#services');
  const contacts = document.querySelector('#contacts');
  const activeSectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      body.classList.toggle('is-services-visible', entry.target === services);
      body.classList.toggle('is-contacts-visible', entry.target === contacts);
      body.classList.remove('is-about-visible', 'is-projects-visible');
    });
  }, { threshold: .28 });
  if (services) activeSectionObserver.observe(services);
  if (contacts) activeSectionObserver.observe(contacts);
  const hero = document.querySelector('.hero');
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let scrollFrame = 0;
  const updateHeroExit = () => {
    scrollFrame = 0;
    if (!hero || reduceMotion) return;
    const fadeDistance = Math.max(520, innerHeight * .72);
    const progress = Math.min(1, Math.max(0, scrollY / fadeDistance));
    hero.style.setProperty('--hero-exit', progress.toFixed(4));
    hero.style.pointerEvents = progress > .92 ? 'none' : '';
  };
  const scheduleHeroExit = () => {
    if (!scrollFrame) scrollFrame = requestAnimationFrame(updateHeroExit);
  };
  addEventListener('scroll', scheduleHeroExit, { passive: true });
  addEventListener('resize', scheduleHeroExit, { passive: true });
  updateHeroExit();

})();
