import { useContext, useEffect } from 'react';
import PointerEventContext from './pointerEventContext';

function PointerEvent() {
  const areaRef = useContext(PointerEventContext);

  useEffect(() => {
    const cursorDiv = document.createElement('div');
    cursorDiv.style.position = 'absolute';
    cursorDiv.style.pointerEvents = 'none';
    cursorDiv.style.width = '20px';
    cursorDiv.style.aspectRatio = '1';
    cursorDiv.style.borderRadius = '50%';
    cursorDiv.style.backgroundColor = 'red';
    cursorDiv.style.transform = 'translate(-50% , -50%)';
    cursorDiv.style.transition = 'all 0.3s ease-out';
    cursorDiv.style.zIndex = '1000';
    document.body.appendChild(cursorDiv);

    let frameId = null;

    const area = areaRef.current;
    const moveCursor = e => {
      const updataePosition = () => {
        const rect = area.getBoundingClientRect();
        const cX = e.clientX - rect.left;
        const cY = e.clientY - rect.top;

        cursorDiv.style.left = `${e.pageX}px`;
        cursorDiv.style.top = `${e.pageY}px`;

        // 1번
        if (cX >= 200 && cX <= 400 && cY >= 100 && cY <= 300) {
          // 2번
        } else if (cX) {
          // 3번
        } else if (0) {
          // 4번
        } else if (0) {
          // 5번
        } else if (0) {
          // 6번
        } else if (0) {
          // 7번
        } else if (0) {
          // 8번
        } else if (0) {
        }
      };

      if (frameId) {
        cancelAnimationFrame(frameId);
      }

      frameId = requestAnimationFrame(updataePosition);
    };

    const clickCursor = e => {
      const rect = area.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      console.log(`X 좌표 : ${x}px, Y 좌표: ${y}px`);
    };

    if (area) {
      area.addEventListener('click', clickCursor);
      area.addEventListener('mousemove', moveCursor);
    }

    return () => {
      if (area) {
        area.removeEventListener('mousemove', moveCursor);
        area.removeEventListener('click', clickCursor);
      }
      document.body.removeChild(cursorDiv); // 컴포넌트 언마운트 시 div 제거
    };
  }, [areaRef]); // areaRef가 변경될 때마다 effect를 다시 실행

  return null; // 실제 DOM에 추가할 내용이 없으므로 null 반환
}

export default PointerEvent;
