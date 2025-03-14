document.addEventListener("DOMContentLoaded", () => {
    const signatureContainer = document.getElementById("signature-container");

    if (!signatureContainer) {
        console.error("Signature container element not found!");
        return;
    }

    fetch("signature.svg")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(svgContent => {
            signatureContainer.innerHTML = svgContent;

            // Select all path elements within the loaded SVG
            const paths = signatureContainer.querySelectorAll("svg > path");

            if (!paths || paths.length === 0) {
                console.error("No path elements found in SVG!");
                return;
            }

            const animationDuration = 1; // Duration of each path animation in seconds

            let currentDelay = 0; // Initial delay

            // Animate each path element sequentially
            paths.forEach((path, index) => {
                const pathLength = path.getTotalLength();

                // Set initial state (invisible)
                path.style.strokeDasharray = pathLength;
                path.style.strokeDashoffset = pathLength;

                // Animate!
                gsap.to(path, {
                    strokeDashoffset: 0,
                    duration: animationDuration,
                    ease: "power2.inOut",
                    delay: currentDelay,  // Use the current delay
                    onComplete: () => {
                        console.log(`Animation complete for path ${index + 1}`);
                    }
                });

                currentDelay += animationDuration; // Increment the delay for the next path
            });

        })
        .catch(error => {
            console.error("Error loading signature.svg:", error);
        });
});