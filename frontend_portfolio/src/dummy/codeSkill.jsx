import React, { useState, useContext, useRef } from 'react';
import { SectionContext } from './FullPage';

function Paging() {
  const sectionRefs = useContext(SectionContext);
  return (
    <section className="cd_skl" id="section3" ref={sectionRefs[2]}>
      <a href="" />
    </section>
  );
}

export default Paging;
