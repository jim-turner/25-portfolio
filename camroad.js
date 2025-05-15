document.addEventListener("DOMContentLoaded", () => {
  // Create a GSAP timeline
  const timeline = gsap.timeline();

  // Animate the camroad.svg from right to left
  timeline.fromTo(
    "#camroad", // Target the camroad element
    { x: "60vw" }, // Start position (off-screen to the right)
    { x: "-3vw", duration: 25, ease: "power1.inOut" } // End position (off-screen to the left)
  );

  // Rotate the tires while the camroad is moving
  timeline.to(
    "#_x3C_back_x5F_tire_x3E__1_, #_x3C_front_tire_x3E_", // Both tires
    {
      rotation: -360 * 10, // Rotate 10 full times (adjust as needed)
      transformOrigin: "50% 50%", // Rotate around the center of the tires
      duration: 24, // Match the camroad's duration
      ease: "linear", // Constant speed while moving
    },
    "<" // Start this animation at the same time as the camroad animation
  );

  // Ease the tires to a stop after the camroad animation ends
  // timeline.to(
  //   "#_x3C_back_x5F_tire_x3E__1_, #_x3C_front_tire_x3E_", // Both tires
  //   {
  //     rotation: "-=90", // Rotate an additional 90 degrees to ease to a stop
  //     duration: 2, // Duration of the easing stop
  //     ease: "power2.out", // Decelerate smoothly
  //   }
  // );
});
