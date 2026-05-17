window.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(SplitText);

  const welcomeTexts = [
    "Every connection begins with curiosity...",
    "Some people are understood slowly.",
    "Let Lumina discover your energy.",
  ];

  let currentIndex = 0;
  let split;
  const textContainer = document.querySelector(".text");

  function playWelcomeText() {
    split && split.revert();

    if (currentIndex >= welcomeTexts.length) return;

    textContainer.textContent = welcomeTexts[currentIndex];

    split = SplitText.create(textContainer, { type: "chars" });

    const tl = gsap.timeline({
      onComplete: () => {
        currentIndex++;
        if (currentIndex < welcomeTexts.length) {
          playWelcomeText();
        }
      },
    });

    // 3. Define the Entrance Animation (Intro)
    tl.from(split.chars, {
      opacity: 0,
      y: 30,
      scale: 0.9,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.04,
    });

    // 4. The Reading Pause
    // Adds a 2-second dead-space delay before executing the next animation step
    tl.to({}, { duration: 1 });

    // 5. Define the Exit Animation (Outro)
    tl.to(split.chars, {
      opacity: 0,
      y: -30,
      duration: 0.4,
      ease: "power3.in",
      stagger: 0.02,
    });
  }

  // Kickstart the automated loop sequence on page load
  playWelcomeText();
});
