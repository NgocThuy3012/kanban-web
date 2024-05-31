// components/FullscreenPage.tsx
import React, { useEffect } from "react";

const FullscreenPage: React.FC = () => {
  useEffect(() => {
    const elem: any = document.documentElement;
    const requestFullscreen =
      elem.requestFullscreen ||
      elem.webkitRequestFullscreen ||
      elem.msRequestFullscreen;

    if (requestFullscreen) {
      requestFullscreen.call(elem);
    }
  }, []);

  return <div>This is a fullscreen page.</div>;
};

export default FullscreenPage;
