// import React, { useEffect } from 'react';

// function ThemeEvent() {
//   useEffect(() => {
//     try {
//       window.localStorage.setItem('theme', 'light');
//       const d = document.documentElement,
//         c = d.classList;

//       c.remove('light', 'dark');

//       let e = localStorage.getItem('theme');

//       if ('system' === e || (!e && true)) {
//         let t = '(prefers-color-scheme: dark)',
//           m = window.matchMedia(t);

//         if (m.media !== t || m.matches) {
//           d.style.colorScheme = 'dark';
//           c.add('dark');
//         } else {
//           d.style.colorScheme = 'light';
//           c.add('light');
//         }
//       } else if (e === 'dark') {
//         d.style.colorScheme = 'dark';
//         c.add('dark');
//       } else if (e) {
//         d.style.colorScheme = 'light';
//         c.add('light');
//       }
//     } catch (error) {}
//   }, []);
// }

// export default ThemeEvent;

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
