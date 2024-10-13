
document.addEventListener('DOMContentLoaded', function () {
  const menuOrderForm = document.getElementById('menuOrderForm');
  const menuShoppingCart = document.getElementById('menuShoppingCart');
  const menuTotalPrice = document.getElementById('menuTotalPrice');
  const menuTotalOrders = document.getElementById('menuTotalOrders');

  const beverageOrderForm = document.getElementById('beverageOrderForm');
  const beverageShoppingCart = document.getElementById('beverageShoppingCart');
  const beverageTotalPrice = document.getElementById('beverageTotalPrice');
  const beverageTotalOrders = document.getElementById('beverageTotalOrders');

  let menuCart = [];
  let beverageCart = [];

  // ... (rest of your JavaScript code) ...
});
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Sticky header on scroll
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    document.addEventListener('scroll', () => {
      window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
    });
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = document.querySelectorAll('#navbar a');

  function navbarlinksActive() {
    navbarlinks.forEach(navbarlink => {

      if (!navbarlink.hash) return;

      let section = document.querySelector(navbarlink.hash);
      if (!section) return;

      let position = window.scrollY + 200;

      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navbarlinksActive);
  document.addEventListener('scroll', navbarlinksActive);

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  
  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate pURE cOUNTER
   */
  new PureCounter();

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   * Init swiper slider with 3 slides at once in desktop view
   */
  new Swiper('.slides-3', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });

  /**
   * Gallery Slider
   */
  new Swiper('.gallery-slider', {
    speed: 400,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 20
      }
    }
  });

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

});

// add to cart and shopping cart
var menuCart = [];
var beverageCart = [];

function addToCart(type) {
  var selectElement, quantityElement, cart, totalPriceElement, totalOrdersElement;

  if (type === 'menu') {
    selectElement = document.getElementById('menuItem');
    quantityElement = document.getElementById('quantity');
    cart = menuCart;
    totalPriceElement = document.getElementById('menuTotalPrice');
    totalOrdersElement = document.getElementById('menuTotalOrders');
  } else if (type === 'beverage') {
    selectElement = document.getElementById('beverageItem');
    quantityElement = document.getElementById('beverageQuantity');
    cart = beverageCart;
    totalPriceElement = document.getElementById('beverageTotalPrice');
    totalOrdersElement = document.getElementById('beverageTotalOrders');
  } else {
    return; // Invalid type
  }

  var selectedOption = selectElement.options[selectElement.selectedIndex];
  var item = selectedOption.value;
  var price = parseFloat(selectedOption.getAttribute('data-price'));
  var quantity = parseInt(quantityElement.value);

  var shoppingCart = document.createElement('ul');
  shoppingCart.id = type + 'ShoppingCart';
  document.getElementById(type + 'ShoppingCart').innerHTML = '';

  var listItem = document.createElement('li');
  listItem.textContent = quantity + ' x ' + item + ' - Php ' + (price * quantity).toFixed(2);
  shoppingCart.appendChild(listItem);

  // Update total price and total orders
  var currentTotalPrice = 0;
  var currentTotalOrders = 0;

  for (var i = 0; i < cart.length; i++) {
    currentTotalPrice += cart[i].price * cart[i].quantity;
    currentTotalOrders += cart[i].quantity;
  }

  currentTotalPrice += price * quantity;
  currentTotalOrders += quantity;

  totalPriceElement.textContent = currentTotalPrice.toFixed(2);
  totalOrdersElement.textContent = currentTotalOrders;

  // Add item to the cart array
  cart.push({ item: item, price: price, quantity: quantity });
}

