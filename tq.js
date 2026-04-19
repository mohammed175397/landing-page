
  // HAMBURGER
  function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('open');
  }

  // SMOOTH SCROLL
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        document.getElementById('navLinks').classList.remove('open');
      }
    });
  });

  // NAVBAR SCROLL
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    nav.style.boxShadow = window.scrollY > 20 ? '0 4px 30px rgba(0,0,0,0.3)' : 'none';
  });

  // SCROLL REVEAL
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = (i % 4) * 0.1 + 's';
    observer.observe(el);
  });

  // FAQ ACCORDION
  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.parentElement;
      const isOpen = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      if (!isOpen) item.classList.add('active');
    });
  });

  // FORM SUBMIT → WhatsApp redirect
  document.getElementById('requestForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const fd = new FormData(this);
    const name = fd.get('name');
    const phone = fd.get('phone');
    const product = fd.get('product');
    const duration = fd.get('duration');
    const employer = fd.get('employer');
    const notes = fd.get('notes');

    const msg = `مرحباً، أريد تقديم طلب تقسيط:\n👤 الاسم: ${name}\n📞 الهاتف: ${phone}\n💼 جهة العمل: ${employer}\n📦 المنتج: ${product}\n📅 مدة التقسيط: ${duration}${notes ? '\n📝 ملاحظات: ' + notes : ''}`;
    const encoded = encodeURIComponent(msg);

    // Show success
    document.getElementById('success-msg').style.display = 'block';
    this.style.opacity = '0.4';
    this.style.pointerEvents = 'none';

    // Open WhatsApp after short delay
    setTimeout(() => {
      window.open(`https://wa.me/970500000000?text=${encoded}`, '_blank');
    }, 800);
  });

  document.querySelector(".nav-cta").addEventListener("click", () => {
    document.querySelector("#form").scrollIntoView({ behavior: "smooth" });
  });