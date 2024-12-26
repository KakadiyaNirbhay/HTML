document.addEventListener('DOMContentLoaded', () => {
  const videoPlayer = document.getElementById('videoPlayer');

  // Set autoplay and play the video
  videoPlayer.muted = true; // Most browsers require videos to be muted for autoplay
  videoPlayer.play().catch((error) => {
      console.error('Autoplay was prevented:', error);
  });
});
