document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("background-video");

  if (!video) {
    console.warn("Background video element not found");
    return;
  }

  // Force required autoplay attributes
  video.muted = true;
  video.playsInline = true;
  video.loop = true;
  video.autoplay = true;

  // Try playing immediately
  const tryPlay = () => {
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          console.log("Background video is playing");
        })
        .catch((error) => {
          console.warn("Autoplay blocked, retrying...", error);

          // Retry after user interaction
          const resumeOnInteraction = () => {
            video.play();
            document.removeEventListener("click", resumeOnInteraction);
            document.removeEventListener("scroll", resumeOnInteraction);
          };

          document.addEventListener("click", resumeOnInteraction);
          document.addEventListener("scroll", resumeOnInteraction);
        });
    }
  };

  // Play when video is ready
  if (video.readyState >= 3) {
    tryPlay();
  } else {
    video.addEventListener("canplay", tryPlay);
  }
});

/* Navbar scroll effect */
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (!header) return;

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
