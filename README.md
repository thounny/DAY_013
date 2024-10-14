# DAY_013 | GSAP Animations

This project is part of the daily code challenge series, **DAY_013**, where I explore creating **GSAP animations** across various elements like images, text, and sections. In this project, I utilize **HTML**, **CSS**, **JavaScript**, and **GSAP ScrollTrigger** to animate all page elements, making interactions more engaging and fluid as the user scrolls through the page.

## Inspiration

This project started as something I was working on for fun during class. I wanted to try out new things with **GSAP animations** and see how I could bring all the content on the page to life with scroll-triggered effects. As I started experimenting, I thought the results were pretty cool, so I decided to turn it into a full project and keep improving the animations as I learned more.

---

## Project Preview

![DAY_013 Animation](./assets/DAY_013_1.gif)

---

## GSAP ScrollTrigger in Action

### What is GSAP?

**GSAP (GreenSock Animation Platform)** is a powerful JavaScript library used for creating high-performance animations. It's known for its ability to handle complex animations smoothly, and it can be customized for various scroll-based interactions using **ScrollTrigger**. ScrollTrigger enables animation to react to scroll behavior, creating a dynamic and responsive user experience.

### How ScrollTrigger is Used in This Project

In **DAY_013**, the animations are triggered as specific elements enter the viewport. The entire page is animated, from the navigation bar to images and sections, creating a seamless and fluid browsing experience.

#### Key Concepts

1. **Scroll-Triggered Animations**: Elements like images, headers, and sections animate into view based on the user's scroll position.
2. **Scrubbing**: The animations are tied to scroll progress, so the user controls the pace of the animation.
3. **Reversing on Scroll**: Animations reset as the user scrolls back up, providing a consistent experience whether scrolling down or up.

---

## Detailed Breakdown of the JavaScript

### Setting up ScrollTrigger with GSAP

Animations in **DAY_013** are handled by **GSAP ScrollTrigger**, which listens for scroll events and adjusts the elements' properties as they come into or exit the viewport.

#### Example JavaScript Code

```javascript
// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Hero Section Animation
gsap.from(".hero-copy h1", {
  opacity: 0,
  y: 30,
  duration: 1.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".hero",
    start: "top 80%",
    toggleActions: "play reverse play reverse",
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

// Tagline Image Animation
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

// Animate all images on scroll
gsap.from(".study-1 img, .study-2 img, .study-3 img", {
  opacity: 0,
  scale: 0.95,
  duration: 1.5,
  ease: "power2.out",
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".hero-studies",
    start: "top 80%",
    toggleActions: "play reverse play reverse",
  },
});

// Projects Section Animation
gsap.from(".case", {
  opacity: 0,
  y: 20,
  duration: 1,
  ease: "power2.out",
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".hero-cases",
    start: "top 85%",
    toggleActions: "play reverse play reverse",
  },
});
```

### Key Animations

1. **Hero Section Animation**:  
   The main header and tagline text slide up and fade in as the user scrolls down. The animation reverses as the user scrolls back up, creating a fluid entry and exit effect.

2. **Image Animations**:  
   All images in the `.study-1`, `.study-2`, and `.study-3` sections fade in with a gentle scale-up effect, making the content come alive as the user scrolls through the studies section.

3. **Project Section Animation**:  
   Each project in the `.case` class fades in and slightly moves up as it comes into view. The `stagger` effect ensures that each project animates one after the other, creating a clean, engaging reveal.

---

## How to Run

1. **Clone the repository**:

   ```bash
   git clone https://github.com/thounny/DAY_013.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd DAY_013
   ```

3. **Open the `index.html` file** in your web browser:

   - You can double-click the file in your file explorer, or
   - Serve it using a local development server (e.g., Live Server in VSCode).

---

## Project Structure

```bash
DAY_013/
│
├── assets/
│   └── favicon.ico
│   ├── logo1.png
│   ├── DAY_013_1.gif
│   ├── miku.gif
│   ├── index_dwn.gif
│   ├── images/
│       ├── a bunch of images and gifs
├── main.css
├── index.css
├── index.html
└── gsap.js
```

---

## Features

- **Full Page Animation**: Every image, header, and section is animated, providing a dynamic user experience.
- **Scroll-Triggered Animations**: The content comes to life as you scroll down the page, and resets as you scroll back up.
- **GSAP ScrollTrigger**: Leveraging **GSAP** and **ScrollTrigger** for smooth, high-performance scroll animations.

---

## Technologies Used

- **HTML5**: For document structure.
- **CSS3**: For page layout and design.
- **JavaScript (ES6)**: For animation and interactivity.
- **GSAP (GreenSock Animation Platform)**: For creating smooth, scroll-based animations.

---

## Author

![Logo](./assets/index_dwn.gif)

**Thounny Keo**  
Frontend Development Student | Year Up United

---
![Logo](./assets/miku.gif)
