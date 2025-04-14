

CustomEase.create("cubic", "0.83, 0, 0.17, 1");
let isAnimating = false;

function initializeCards() {
    let cards = Array.from(document.querySelectorAll(".card"));

    // Reset the positioning for stacking the cards
    cards.forEach((card, index) => {
        gsap.set(card, {
            y: -15 + 20 * index + "%",  // Stagger the cards along the Y axis
            z: 15 * index,               // Make each card a little further back in the z-axis
            opacity: 1,                  // Make cards visible
        });
    });
}

function animateCards() {
    if (isAnimating) return; // Prevent overlap of animations

    isAnimating = true;

    let slider = document.querySelector(".slider");
    let cards = Array.from(slider.querySelectorAll(".card"));

    // Get the last card
    let lastCard = cards[cards.length - 1];

    // Animate the last card to move forward
    gsap.to(lastCard, {
        y: "+=150%",            // Move the last card down
        duration: 0.75,         // Duration of the animation
        ease: "cubic",   // Use a smooth easing function
        onComplete: () => {
            // Once the animation completes, move the last card to the front of the stack
            slider.prepend(lastCard);

            // Update the positions of the remaining cards
            updateCardPositions();

            // Reset the animation flag after a delay
            setTimeout(() => {
                isAnimating = false;
            }, 800);  // Delay before the next animation starts
        },
    });
}

function updateCardPositions() {
    let cards = Array.from(document.querySelectorAll(".card"));

    // Update the positions of the remaining cards
    cards.forEach((card, index) => {
        gsap.to(card, {
            y: () => -15 + 20 * index + "%",  // Stagger the cards along the Y axis
            z: () => 15 * index,              // Apply some Z-depth effect for layering
            duration: 0.5,                    // Duration for the animation
            ease: "cubic",             // Use a smooth easing function
        });
    });
}

// Initialize the cards initially
initializeCards();

// Set an interval to animate the cards automatically every few seconds
setInterval(() => {
    animateCards();
}, 800);  // Animation occurs every 3 seconds



gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".txt1", 
    { x: "30%" },  // Start from CSS-defined translateX
    { x: "0%", duration: 0.8, scrollTrigger: {
        trigger: ".overlay-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
    }}
);

gsap.fromTo(".txt2", 
    { x: "-10%" },  // Start from CSS-defined translateX
    { x: "0%", duration: 0.8, scrollTrigger: {
        trigger: ".overlay-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
    }}
);

gsap.fromTo(".txt3", 
    { x: "30%" },  // Start from CSS-defined translateX
    { x: "0%", duration: 0.8, scrollTrigger: {
        trigger: ".overlay-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
    }}
);
gsap.fromTo(".txt4", 
    { x: "30%" },  // Start from CSS-defined translateX
    { x: "0%", duration: 0.8, scrollTrigger: {
        trigger: ".overlay-section-2",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
    }}
);

gsap.fromTo(".txt5", 
    { x: "-10%" },  // Start from CSS-defined translateX
    { x: "0%", duration: 0.8, scrollTrigger: {
        trigger: ".overlay-section-2",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
    }}
);

gsap.fromTo(".txt6", 
    { x: "30%" },  // Start from CSS-defined translateX
    { x: "0%", duration: 0.8, scrollTrigger: {
        trigger: ".overlay-section-2",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
    }}
);


function navigateToSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const container = document.getElementById('carousel');
    const dots = document.querySelectorAll('.nav-dot');
    
    container.scrollLeft = slides[index].offsetLeft - slides[0].offsetLeft;
    
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}


gsap.registerPlugin(ScrollTrigger);

// Get all .view-btn elements
document.querySelectorAll('.view-btn').forEach(viewBtn => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: viewBtn,
      start: 'bottom bottom',
      end: 'top top',
      toggleActions: 'play reverse play reverse',
      markers: false,
    }
  });

  tl.fromTo(['.btn--wrap', '.btn--outer','.btn--wrap--expaned','.btn--wrap--expanedmax'], {
    scale: 0,
    opacity: 0
  }, {
    scale: 1,
    opacity: 1,
    duration: 0.8,
    ease: 'elastic.out(1, 0.75)',
    stagger: 0.1,
  })
  .to('.btn--outer', {
    scale: 0,
    opacity: 0,
    duration: 0.4,
    ease: 'cubic',
  })
  .to('.btn--wrap', {
    width: '16rem',
    duration: 0.3,
    ease: 'power1.out',
    onComplete: () => {
      // Fade in .inside-txt when width reaches 16rem
      gsap.to('.inside-txt', { opacity: 1, duration: 0.5 });
    },
    onReverseComplete: () => {
      // Fade out .inside-txt when width is reversed
      gsap.to('.inside-txt', { opacity: 0, duration: 0.5 });
    }
  })
  .to('.btn--wrap--expaned', {
    width: '18rem',
    duration: 0.3,
    ease: 'power1.out',
    onComplete: () => {
      // Fade in .inside-txt when width reaches 16rem
      gsap.to('.inside-txt--expanded', { opacity: 1, duration: 0.9 });
    },
    onReverseComplete: () => {
      // Fade out .inside-txt when width is reversed
      gsap.to('.inside-txt--expanded', { opacity: 0, duration: 0.3 });
    }
  })
  .to('.btn--wrap--expanedmax', {
    width: '23rem',
    duration: 0.3,
    ease: 'power1.out',
    onComplete: () => {
      // Fade in .inside-txt when width reaches 16rem
      gsap.to('.inside-txt--expandedmax', { opacity: 1, duration: 0.9 });
    },
    onReverseComplete: () => {
      // Fade out .inside-txt when width is reversed
      gsap.to('.inside-txt--expandedmax', { opacity: 0, duration: 0.3 });
    }
  });
});


document.querySelector('.cur').style.backgroundColor = '#040404';

Shery.imageEffect(".cur", {
    style: 2, //Select Style
    debug: false,
    config: {
        "resolutionXY":{"value":100},"distortion":{"value":true},"mode":{"value":-3},"mousemove":{"value":2},"modeA":{"value":1},"modeN":{"value":0},"speed":{"value":1,"range":[-500,500],"rangep":[-10,10]},"frequency":{"value":50,"range":[-800,800],"rangep":[-50,50]},"angle":{"value":0.5,"range":[0,3.141592653589793]},"waveFactor":{"value":1.4,"range":[-3,3]},"color":{"value":10212607},"pixelStrength":{"value":3,"range":[-20,100],"rangep":[-20,20]},"quality":{"value":5,"range":[0,10]},"contrast":{"value":1,"range":[-25,25]},"brightness":{"value":1,"range":[-1,25]},"colorExposer":{"value":0.18,"range":[-5,5]},"strength":{"value":0.2,"range":[-40,40],"rangep":[-5,5]},"exposer":{"value":8,"range":[-100,100]},"zindex":{"value":"1","range":[-9999999,9999999]},"aspect":{"value":1.9653003246753247},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}
    },
});

document.getElementById("fold-dis").addEventListener("click", function () {
  this.classList.toggle("open");
});

gsap.registerPlugin(ScrollTrigger);

// Page load animation
gsap.timeline()
  .to(".hero-title h3", {
      y: 0,
      rotate: 0,
      duration: 0.8,
      ease: "power3.out"
  })
  .to([".hero-header h4", ".hero-header h5", ".slider"], {
      opacity: 1,
      duration: 0.8,
      ease: "power3.out"
  });

gsap.utils.toArray(".w-embed--text").forEach((element, index) => {
  gsap.fromTo(
      element,
      { opacity: 0, y: 50 }, // Initial state (hidden & moved down)
      {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
              trigger: element,
              start: "bottom bottom", // Start animation when element enters viewport
              toggleActions: "play none none none", // Play once, do nothing when leaving
          },
      }
  );
});

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".m_navbar");
  const dropmenu = document.querySelector(".nav--dropmenu");

  // Set initial collapsed state
  dropmenu.style.clipPath = "polygon(0 0, 100% 0, 100% 0, 0% 0%)";

  function expandMenu() {
      dropmenu.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
      dropmenu.style.transition = "clip-path 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)";
  }

  function collapseMenu() {
      dropmenu.style.clipPath = "polygon(0 0, 100% 0, 100% 0, 0% 0%)";
  }

  navbar.addEventListener("mouseenter", expandMenu);
  dropmenu.addEventListener("mouseenter", expandMenu);

  navbar.addEventListener("mouseleave", function () {
      setTimeout(() => {
          if (!dropmenu.matches(":hover") && !navbar.matches(":hover")) {
              collapseMenu();
          }
      }, 10); // Minimal delay to prevent flickering
  });

  dropmenu.addEventListener("mouseleave", function () {
      setTimeout(() => {
          if (!dropmenu.matches(":hover") && !navbar.matches(":hover")) {
              collapseMenu();
          }
      }, 10); // Minimal delay to prevent flickering
  });
});
