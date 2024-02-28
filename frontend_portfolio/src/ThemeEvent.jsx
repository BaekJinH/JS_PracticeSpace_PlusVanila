// 아래는 버튼 클릭 시 테마 변경 적용
import React, { useEffect } from 'react';

function ThemeEvent() {
  useEffect(() => {
    function updateTheme() {
      const d = document.documentElement;
      const c = d.classList;

      const bodyHasClass = document.body.classList.length > 0;

      if (bodyHasClass) {
        d.style.colorScheme = '';
      } else {
        let e = localStorage.getItem('theme');
        if (e === 'dark') {
          d.style.colorScheme = 'dark';
          c.add('dark');
          c.remove('light');
        } else {
          d.style.colorScheme = 'light';
          c.add('light');
          c.remove('dark');
        }
      }
    }

    updateTheme();

    window.addEventListener('storage', event => {
      if (event.key === 'theme') {
        updateTheme();
      }
    });

    return () => {
      window.removeEventListener('storage', updateTheme);
    };
  }, []);

  return null;
}

export default ThemeEvent;
