// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Hero Section (Smooth fade-in and slide-up)
gsap.from(".hero-copy h1", {
  opacity: 0,
  y: 30, // Slide-up effect
  duration: 1.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".hero",
    start: "top 80%",
    toggleActions: "play reverse play reverse", // Animation plays and reverses
  },
});

gsap.from(".hero-copy h3", {
  opacity: 0,
  y: 30,
  duration: 1.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".hero",
    start: "top 75%",
    toggleActions: "play reverse play reverse",
  },
});

// Tagline Image (Soft fade-in)
gsap.from(".tagline img", {
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".hero",
    start: "top 70%",
    toggleActions: "play reverse play reverse",
  },
});

// Studies Section (Fade-in with gentle slide)
gsap.from(".study-1, .study-2, .study-3", {
  opacity: 0,
  y: 40,
  duration: 1.2,
  ease: "power2.out",
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".hero-studies",
    start: "top 80%",
    toggleActions: "play reverse play reverse",
  },
});

// Services Section (Soft fade and slight slide-in from bottom)
gsap.from(".service", {
  opacity: 0,
  y: 40,
  duration: 1.3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".hero-services",
    start: "top 70%",
    stagger: 0.3,
    toggleActions: "play reverse play reverse",
  },
});

// Reviews Section (Simple fade-up effect with stagger)
gsap.from(".review", {
  opacity: 0,
  y: 40,
  duration: 1.2,
  ease: "power2.out",
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".reviews",
    start: "top 80%",
    toggleActions: "play reverse play reverse",
  },
});

// Hero Visions Section (Clean fade-in with slight scale-up)
gsap.from(".visions-col", {
  opacity: 0,
  scale: 0.95,
  duration: 1.2,
  ease: "power2.out",
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".hero-visions",
    start: "top 80%",
    toggleActions: "play reverse play reverse",
  },
});

// News Items (Soft fade and scale-up for clean reveal)
gsap.from(".news-item", {
  opacity: 0,
  scale: 0.95,
  duration: 1.2,
  ease: "power2.out",
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".hero-news",
    start: "top 80%",
    toggleActions: "play reverse play reverse",
  },
});
