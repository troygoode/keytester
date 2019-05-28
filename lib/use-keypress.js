import { useState, useEffect } from "react";

/*
Modified from:
https://usehooks.com/useKeyPress/
*/

// Hook
export default function useKeypress() {
  const [keypressEvent, setKeypressEvent] = useState();

  const onKeyDown = ev => {
    setKeypressEvent(ev);
  };

  const onKeyUp = () => {
    setKeypressEvent(null);
  };

  // Add event listeners
  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, []);

  return keypressEvent;
}
