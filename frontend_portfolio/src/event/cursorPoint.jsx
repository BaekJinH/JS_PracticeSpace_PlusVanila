import { useEffect } from 'react';

function PointerEvent() {
  useEffect(() => {
    function cursor(e) {
      let pX = e.offsetX;
      let pY = e.offsetY;

      console.log(pX, pY);
    }

    cursor();

    return () => {
      window.addEventListener('mousemove', cursor);
    };
  }, []);
  return null;
}

export default PointerEvent;
