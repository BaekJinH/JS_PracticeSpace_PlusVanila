import { useContext, useEffect } from 'react';
import PointerEventContext from './pointerEventContext';

function PointerEvent() {
  const areaRef = useContext(PointerEventContext);

  useEffect(() => {
    const cursorDiv = document.createElement('div');
    cursorDiv.style.position = 'absolute';
    cursorDiv.style.pointerEvents = 'none'; // 이 div를 마우스 이벤트의 대상으로 삼지 않음
    cursorDiv.style.width = '20px'; // 적당한 크기 설정
    cursorDiv.style.height = '20px';
    cursorDiv.style.borderRadius = '50%'; // 원형으로 표시
    cursorDiv.style.backgroundColor = 'red'; // 쉽게 식별할 수 있는 색으로 설정
    cursorDiv.style.zIndex = '1000'; // 다른 요소 위에 표시되도록 높은 z-index 설정
    document.body.appendChild(cursorDiv); // body에 div 추가

    const area = areaRef.current;
    const moveCursor = e => {
      const areaRect = area.getBoundingClientRect();
      cursorDiv.style.left = `${e.pageX - areaRect.left}px`;
      cursorDiv.style.top = `${e.pageY - areaRect.top}px`;
    };

    if (area) {
      area.addEventListener('mousemove', moveCursor);
    }

    return () => {
      if (area) {
        area.removeEventListener('mousemove', moveCursor);
      }
      document.body.removeChild(cursorDiv); // 컴포넌트 언마운트 시 div 제거
    };
  }, [areaRef]); // areaRef가 변경될 때마다 effect를 다시 실행

  return null; // 실제 DOM에 추가할 내용이 없으므로 null 반환
}

export default PointerEvent;
