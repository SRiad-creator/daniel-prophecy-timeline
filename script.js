// ===== Intersection Observer for scroll animations =====
document.addEventListener('DOMContentLoaded', () => {

  // Animate chapter blocks on scroll
  const blocks = document.querySelectorAll('.chapter-block');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  blocks.forEach(b => observer.observe(b));

  // Animate timeline items
  const timelineItems = document.querySelectorAll('.timeline-content');
  const tlObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        tlObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'all 0.7s cubic-bezier(0.22, 1, 0.36, 1)';
    tlObserver.observe(item);
  });

  // Animate overview cards
  const cards = document.querySelectorAll('.overview-card');
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, i * 100);
        cardObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
    cardObserver.observe(card);
  });

  // Animate father cards
  const fatherCards = document.querySelectorAll('.father-card');
  const fatherObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, i * 80);
        fatherObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  fatherCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
    fatherObserver.observe(card);
  });

  // Animate table rows
  const rows = document.querySelectorAll('.empires-table tbody tr');
  const rowObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateX(0)';
        }, i * 100);
        rowObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  rows.forEach(row => {
    row.style.opacity = '0';
    row.style.transform = 'translateX(-20px)';
    row.style.transition = 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)';
    rowObserver.observe(row);
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Parallax on hero cross
  window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
      const scrolled = window.scrollY;
      hero.style.setProperty('--scroll', scrolled * 0.3 + 'px');
      const cross = hero.querySelector('::before');
    }
  });
});
