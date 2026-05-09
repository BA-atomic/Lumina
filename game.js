document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(SplitText);

  texts = document.querySelectorAll(".text");

  let t1 = gsap.timeline();

  texts.forEach((el) => {
    el.style.visibility = "visible";
    split = new SplitText(el, { type: "chars" });
    t1.from(split.chars, {
      opacity: 0,
      x: 150,
      duration: 1,
      stagger: 0.02,
      ease: "power3.out",
    });
    t1.to(split.chars, {
      opacity: 0,
      y: -20,
      duration: 1,
      stagger: 0.02,
    });
  });
});
