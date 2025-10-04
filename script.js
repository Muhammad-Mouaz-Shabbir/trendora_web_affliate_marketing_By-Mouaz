document.addEventListener('DOMContentLoaded',()=>{
  // Prevent header movement during page transitions
  const header = document.querySelector('.site-header');
  if(header) {
    header.style.position = 'fixed';
    header.style.top = '10px';
    header.style.left = '50%';
    header.style.transform = 'translateX(-50%) translateZ(0)';
    header.style.zIndex = '1040';
  }

  // Navigation active state management
  const navItems=document.querySelectorAll('.bottom-nav .nav-item');
  navItems.forEach(item=>{
    item.addEventListener('click',(e)=>{
      // Only prevent default if it's not a link to another page
      if(item.getAttribute('href') === '#') {
        e.preventDefault();
        navItems.forEach(n=>n.classList.remove('active'));
        item.classList.add('active');
      } else {
        // For page navigation, ensure smooth transition
        e.preventDefault();
        const targetUrl = item.getAttribute('href');
        if(targetUrl && targetUrl !== '#') {
          // Add a small delay to prevent header flicker
          setTimeout(() => {
            window.location.href = targetUrl;
          }, 50);
        }
      }
    });
  });

  // Category tap highlight
  const categoryCards=document.querySelectorAll('.category-card');
  categoryCards.forEach(card=>{
    card.addEventListener('click',()=>{
      categoryCards.forEach(c=>c.classList.remove('active'));
      card.classList.add('active');
    });
  });

  // Smooth scrolling for better UX
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Image lazy loading optimization
  const images = document.querySelectorAll('img[loading="lazy"]');
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }

  // Performance: Preload critical images
  const criticalImages = ['img/logo.png', 'img/firstimage.png'];
  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });

  // Add loading states
  const productImages = document.querySelectorAll('.product-image img');
  productImages.forEach(img => {
    img.addEventListener('load', function() {
      this.parentElement.classList.add('loaded');
    });
  });
});

