import React from "react";
const VideoSection = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted className="background-video">
        <source src='https://videos.pexels.com/video-files/7820463/7820463-hd_1920_1080_25fps.mp4' type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>
      
    </div>
  );
};

export default VideoSection;