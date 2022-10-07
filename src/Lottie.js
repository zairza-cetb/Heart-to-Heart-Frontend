import React from "react";
import Lottie from "react-lottie";

export default function LottieAnimation({ lotti, height }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lotti,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={height} />
    </div>
  );
}
