const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".intro-motto", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".intro-slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".hidden-intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("header", { opacity: 0 }, { opacity: 1, duration: 1 });