import React, { useRef, useContext } from 'react';
import Project from './data/project.json';
import PointerEventContext from '../event/pointerEventContext';
import PointerEvent from '../event/cursorPoint';
import { SectionContext } from './FullPage';

function Paging() {
  const areaRef = useRef(null);

  return (
    <PointerEventContext.Provider value={areaRef}>
      <section
        className="pg_swp"
        id="section2"
        ref={areaRef}
        style={{ height: '400px' }}
      >
        <PointerEvent />
        <div className="el_outer_wrap">
          <ul className="el_list">
            {Project.map((item, index) => (
              <li key={index}>
                <h4>{item.title}</h4>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PointerEventContext.Provider>
  );
}

export default Paging;
