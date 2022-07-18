import React from "react";

import Video from '../Assets/math.mp4'
// import Video from "../Assets/video.mp4";

const Hero = () => {
  return (
    <div className="w-full h-[90vh] top-[90px]">
      <video
        className="object-cover h-full w-full absolute -z-10"
        src={Video}
        autoPlay
        loop
      />
    </div>
  );
};
export default Hero;
