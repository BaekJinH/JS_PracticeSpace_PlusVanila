import { useEffect, useRef } from 'react';

function FullPage() {
  const sectionRef = useRef([]);

  useEffect(() => {
    const fullInit = () => {
      const sections = sectionRef.current;
    };
  }, []);
  return null;
}

export default FullPage;
