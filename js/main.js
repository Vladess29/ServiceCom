

// ===== Accordion ===== \\
document.querySelectorAll('.mobile-accordion__title').forEach(button => {
    button.addEventListener('click', () => {
      const accordionItem = button.parentElement;
      const isActive = accordionItem.classList.contains('active');
  
      document.querySelectorAll('.mobile-accordion__item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.mobile-accordion__content').style.maxHeight = null;
      });
  
      if (!isActive) {
        accordionItem.classList.add('active');
        const content = accordionItem.querySelector('.mobile-accordion__content');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });



// ===== Mobile menu script ===== \\
const burgerBtn = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-popup');
const html = document.querySelector('html');
burgerBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    html.classList.toggle('no-scroll');
});