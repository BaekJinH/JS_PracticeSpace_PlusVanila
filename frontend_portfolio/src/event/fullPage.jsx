import React, { createContext, useContext, useRef, useEffect } from 'react';

export const SectionContext = createContext();

function FullPage() {
  const sections = useContext(SectionContext);

  useEffect(() => {}, [sections]);

  return null;
}

function SectionProvider({ children }) {
  const sectionRefs = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  return (
    <SectionContext.Provider value={sectionRefs}>
      {children}
    </SectionContext.Provider>
  );
}

export { FullPage, SectionProvider };
