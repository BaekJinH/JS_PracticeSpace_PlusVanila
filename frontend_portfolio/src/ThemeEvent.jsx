import React, { useEffect } from 'react';

function ThemeEvent() {
  useEffect(() => {
    try {
      const d = document.documentElement,
        c = d.classList;

      c.remove('light', 'dark');

      let e = localStorage.getItem('theme');

      if ('system' === e || (!e && true)) {
        let t = '(prefers-color-scheme: dark)',
          m = window.matchMedia(t);

        if (m.media !== t || m.matches) {
          d.style.colorScheme = 'dark';
          c.add('dark');
        } else {
          d.style.colorScheme = 'light';
          c.add('light');
        }
      } else if (e) {
        c.add(e || '');
      }
    } catch (error) {}
  }, []);
}

export default ThemeEvent;
