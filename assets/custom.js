<<<<<<< HEAD
// FEATURED COLLECTION SLIDER
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".fps-section").forEach((section) => {
    const slider = section.querySelector(".fps-slider");
    const next = section.querySelector(".fps-next");
    const prev = section.querySelector(".fps-prev");

    if (!slider) return;

    // Width of one product card + gap
    function getScrollAmount() {
      const slide = slider.querySelector(".fps-slide");
      if (!slide) return 300;

      const gap = parseInt(getComputedStyle(slider).gap) || 25;

      return slide.offsetWidth + gap;
    }

    next?.addEventListener("click", () => {
      slider.scrollBy({
        left: getScrollAmount(),
        behavior: "smooth",
      });
    });

    prev?.addEventListener("click", () => {
      slider.scrollBy({
        left: -getScrollAmount(),
        behavior: "smooth",
      });
    });

    // Mouse Drag

    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("dragging");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("dragging");
    });

    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("dragging");
    });

    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;

      e.preventDefault();

      const x = e.pageX - slider.offsetLeft;

      const walk = (x - startX) * 1.5;

      slider.scrollLeft = scrollLeft - walk;
    });

    // Touch Swipe

    let touchStart = 0;

    slider.addEventListener("touchstart", (e) => {
      touchStart = e.touches[0].clientX;
    });

    slider.addEventListener("touchmove", (e) => {
      const touchMove = e.touches[0].clientX;

      slider.scrollLeft += touchStart - touchMove;

      touchStart = touchMove;
    });
  });
});

// COLLECTION SLIDER
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".custom-collection-slider").forEach((section) => {
    const track = section.querySelector(".slider-track");
    const prev = section.querySelector(".prev");
    const next = section.querySelector(".next");

    if (!track) return;

    const scrollAmount = 320;

    next?.addEventListener("click", () => {
      track.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    });

    prev?.addEventListener("click", () => {
      track.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    });
  });
});

/* PRODUCT TAB */

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".custom-product-tabs").forEach((section) => {
    const buttons = section.querySelectorAll(".tab-button");
    const tabs = section.querySelectorAll(".tab-content");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        buttons.forEach((btn) => btn.classList.remove("active"));
        tabs.forEach((tab) => tab.classList.remove("active"));

        button.classList.add("active");

        const target = section.querySelector("#" + button.dataset.tab);

        if (target) {
          target.classList.add("active");
        }
      });
    });
  });
});

/* ===================================
   TESTIMONIAL
=================================== */

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".custom-testimonial").forEach((section) => {
    const track = section.querySelector(".testimonial-track");
    const prev = section.querySelector(".prev");
    const next = section.querySelector(".next");

    if (!track) return;

    const scrollAmount = 450;

    next?.addEventListener("click", () => {
      track.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    });

    prev?.addEventListener("click", () => {
      track.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    });
  });
});

/* ==========================
   FAQ SECTION
========================== */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".custom-faq").forEach((section) => {
    const items = section.querySelectorAll(".faq-item");

    items.forEach((item) => {
      const button = item.querySelector(".faq-question");
      const answer = item.querySelector(".faq-answer");

      button.addEventListener("click", () => {
        const isActive = item.classList.contains("active");

        items.forEach((i) => {
          i.classList.remove("active");
          i.querySelector(".faq-answer").style.maxHeight = null;
        });

        if (!isActive) {
          item.classList.add("active");
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      });
    });
  });
});

/* ===========================
   COUNTDOWN TIMER
=========================== */

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".countdown-timer").forEach((timer) => {
    const endDate = new Date(timer.dataset.date).getTime();

    function updateTimer() {
      const now = new Date().getTime();
      const distance = endDate - now;

      if (distance <= 0) {
        timer.querySelector(".days").textContent = "00";
        timer.querySelector(".hours").textContent = "00";
        timer.querySelector(".minutes").textContent = "00";
        timer.querySelector(".seconds").textContent = "00";

        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      timer.querySelector(".days").textContent = String(days).padStart(2, "0");
      timer.querySelector(".hours").textContent = String(hours).padStart(
        2,
        "0",
      );
      timer.querySelector(".minutes").textContent = String(minutes).padStart(
        2,
        "0",
      );
      timer.querySelector(".seconds").textContent = String(seconds).padStart(
        2,
        "0",
      );
    }

    updateTimer();
    setInterval(updateTimer, 1000);
  });
});

/*=========================
BEFORE AFTER
==========================*/

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".ba-wrapper").forEach((wrapper) => {
    const slider = wrapper.querySelector(".ba-slider");
    const after = wrapper.querySelector(".after-image");
    const handle = wrapper.querySelector(".ba-handle");

    function update(value) {
      after.style.width = value + "%";
      handle.style.left = value + "%";
    }

    update(50);

    slider.addEventListener("input", function () {
      update(this.value);
    });
  });
});

/*==========================================
    TESTIMONIAL SLIDER
==========================================*/

document.addEventListener("DOMContentLoaded", () => {
  // Initialize all testimonial sections
  document.querySelectorAll(".custom-testimonial").forEach((section) => {
    // Get slider elements
    const track = section.querySelector(".testimonial-track");
    const prev = section.querySelector(".prev");
    const next = section.querySelector(".next");

    if (!track) return;

    const scrollAmount = 450;

    // Next slide
    next?.addEventListener("click", () => {
      track.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    });

    // Previous slide
    prev?.addEventListener("click", () => {
      track.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    });
  });
});

/*==========================================
    LOGO SLIDER
==========================================*/

document.addEventListener("DOMContentLoaded", () => {
  // Select all logo sliders
  document.querySelectorAll(".custom-logo-slider").forEach((slider) => {
    // Future interactive functionality
    // (e.g., play/pause controls or dynamic speed)
  });
});

/*==========================================
    STICKY ADD TO CART
==========================================*/

document.addEventListener("DOMContentLoaded", () => {
  // Get sticky cart
  const stickyCart = document.querySelector(".sticky-cart");

  if (!stickyCart) return;

  // Show sticky cart after scrolling
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      stickyCart.classList.add("show");
    } else {
      stickyCart.classList.remove("show");
    }
  });
});


// AJAX ADD TO CART
const button = document.querySelector("#my-add-to-cart");

button.addEventListener("click", () => {
  const variantId = button.dataset.variantId;

  fetch("/cart/add.js", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: variantId,
      quantity: 1,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Product Added");
      console.log(data);
      updateCartCount();
    });


});

// AJAX GET CART
const showCartButton = document.querySelector("#show-cart");

showCartButton.addEventListener("click", () => {

    fetch("/cart.js")
        .then(response => response.json())
        .then(cart => {
            console.log(cart);
        });

});

// AJAX UPDATE CART COUNT
function updateCartCount() {

    fetch("/cart.js")
        .then(response => response.json())
        .then(cart => {

            document.querySelector("#cart-count").textContent = cart.item_count;

        });

}
updateCartCount();
=======
// FEATURED COLLECTION SLIDER
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".fps-section").forEach((section) => {
    const slider = section.querySelector(".fps-slider");
    const next = section.querySelector(".fps-next");
    const prev = section.querySelector(".fps-prev");

    if (!slider) return;

    // Width of one product card + gap
    function getScrollAmount() {
      const slide = slider.querySelector(".fps-slide");
      if (!slide) return 300;

      const gap = parseInt(getComputedStyle(slider).gap) || 25;

      return slide.offsetWidth + gap;
    }

    next?.addEventListener("click", () => {
      slider.scrollBy({
        left: getScrollAmount(),
        behavior: "smooth",
      });
    });

    prev?.addEventListener("click", () => {
      slider.scrollBy({
        left: -getScrollAmount(),
        behavior: "smooth",
      });
    });

    // Mouse Drag

    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("dragging");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("dragging");
    });

    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("dragging");
    });

    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;

      e.preventDefault();

      const x = e.pageX - slider.offsetLeft;

      const walk = (x - startX) * 1.5;

      slider.scrollLeft = scrollLeft - walk;
    });

    // Touch Swipe

    let touchStart = 0;

    slider.addEventListener("touchstart", (e) => {
      touchStart = e.touches[0].clientX;
    });

    slider.addEventListener("touchmove", (e) => {
      const touchMove = e.touches[0].clientX;

      slider.scrollLeft += touchStart - touchMove;

      touchStart = touchMove;
    });
  });
});

// COLLECTION SLIDER
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".custom-collection-slider").forEach((section) => {
    const track = section.querySelector(".slider-track");
    const prev = section.querySelector(".prev");
    const next = section.querySelector(".next");

    if (!track) return;

    const scrollAmount = 320;

    next?.addEventListener("click", () => {
      track.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    });

    prev?.addEventListener("click", () => {
      track.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    });
  });
});

/* PRODUCT TAB */

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".custom-product-tabs").forEach((section) => {
    const buttons = section.querySelectorAll(".tab-button");
    const tabs = section.querySelectorAll(".tab-content");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        buttons.forEach((btn) => btn.classList.remove("active"));
        tabs.forEach((tab) => tab.classList.remove("active"));

        button.classList.add("active");

        const target = section.querySelector("#" + button.dataset.tab);

        if (target) {
          target.classList.add("active");
        }
      });
    });
  });
});

/* ===================================
   TESTIMONIAL
=================================== */

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".custom-testimonial").forEach((section) => {
    const track = section.querySelector(".testimonial-track");
    const prev = section.querySelector(".prev");
    const next = section.querySelector(".next");

    if (!track) return;

    const scrollAmount = 450;

    next?.addEventListener("click", () => {
      track.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    });

    prev?.addEventListener("click", () => {
      track.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    });
  });
});

/* ==========================
   FAQ SECTION
========================== */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".custom-faq").forEach((section) => {
    const items = section.querySelectorAll(".faq-item");

    items.forEach((item) => {
      const button = item.querySelector(".faq-question");
      const answer = item.querySelector(".faq-answer");

      button.addEventListener("click", () => {
        const isActive = item.classList.contains("active");

        items.forEach((i) => {
          i.classList.remove("active");
          i.querySelector(".faq-answer").style.maxHeight = null;
        });

        if (!isActive) {
          item.classList.add("active");
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      });
    });
  });
});

/* ===========================
   COUNTDOWN TIMER
=========================== */

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".countdown-timer").forEach((timer) => {
    const endDate = new Date(timer.dataset.date).getTime();

    function updateTimer() {
      const now = new Date().getTime();
      const distance = endDate - now;

      if (distance <= 0) {
        timer.querySelector(".days").textContent = "00";
        timer.querySelector(".hours").textContent = "00";
        timer.querySelector(".minutes").textContent = "00";
        timer.querySelector(".seconds").textContent = "00";

        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      timer.querySelector(".days").textContent = String(days).padStart(2, "0");
      timer.querySelector(".hours").textContent = String(hours).padStart(
        2,
        "0",
      );
      timer.querySelector(".minutes").textContent = String(minutes).padStart(
        2,
        "0",
      );
      timer.querySelector(".seconds").textContent = String(seconds).padStart(
        2,
        "0",
      );
    }

    updateTimer();
    setInterval(updateTimer, 1000);
  });
});

/*=========================
BEFORE AFTER
==========================*/

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".ba-wrapper").forEach((wrapper) => {
    const slider = wrapper.querySelector(".ba-slider");
    const after = wrapper.querySelector(".after-image");
    const handle = wrapper.querySelector(".ba-handle");

    function update(value) {
      after.style.width = value + "%";
      handle.style.left = value + "%";
    }

    update(50);

    slider.addEventListener("input", function () {
      update(this.value);
    });
  });
});

/*==========================================
    TESTIMONIAL SLIDER
==========================================*/

document.addEventListener("DOMContentLoaded", () => {
  // Initialize all testimonial sections
  document.querySelectorAll(".custom-testimonial").forEach((section) => {
    // Get slider elements
    const track = section.querySelector(".testimonial-track");
    const prev = section.querySelector(".prev");
    const next = section.querySelector(".next");

    if (!track) return;

    const scrollAmount = 450;

    // Next slide
    next?.addEventListener("click", () => {
      track.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    });

    // Previous slide
    prev?.addEventListener("click", () => {
      track.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    });
  });
});

/*==========================================
    LOGO SLIDER
==========================================*/

document.addEventListener("DOMContentLoaded", () => {
  // Select all logo sliders
  document.querySelectorAll(".custom-logo-slider").forEach((slider) => {
    // Future interactive functionality
    // (e.g., play/pause controls or dynamic speed)
  });
});

/*==========================================
    STICKY ADD TO CART
==========================================*/

document.addEventListener("DOMContentLoaded", () => {
  // Get sticky cart
  const stickyCart = document.querySelector(".sticky-cart");

  if (!stickyCart) return;

  // Show sticky cart after scrolling
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      stickyCart.classList.add("show");
    } else {
      stickyCart.classList.remove("show");
    }
  });
});


// AJAX ADD TO CART
const button = document.querySelector("#my-add-to-cart");

button.addEventListener("click", () => {
  const variantId = button.dataset.variantId;

  fetch("/cart/add.js", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: variantId,
      quantity: 1,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Product Added");
      console.log(data);
      updateCartCount();
    });


});

// AJAX GET CART
const showCartButton = document.querySelector("#show-cart");

showCartButton.addEventListener("click", () => {

    fetch("/cart.js")
        .then(response => response.json())
        .then(cart => {
            console.log(cart);
        });

});

// AJAX UPDATE CART COUNT
function updateCartCount() {

    fetch("/cart.js")
        .then(response => response.json())
        .then(cart => {

            document.querySelector("#cart-count").textContent = cart.item_count;

        });

}
updateCartCount();
>>>>>>> 94141d712f3508a38e9adf959e5e53953c889580
