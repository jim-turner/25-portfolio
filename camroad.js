document.addEventListener("DOMContentLoaded", () => {
  // Animate the camroad.svg from right to left
  gsap.fromTo(
    "#camroad", // Target the image by its ID
    { x: "60vw" }, // Start position (off-screen to the right)
    { x: "-3vw", duration: 25, ease: "power1.inOut", repeat: -1 } // End position (off-screen to the left)
  );
});
