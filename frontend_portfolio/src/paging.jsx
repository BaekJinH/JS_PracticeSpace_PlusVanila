import React, { useState, useContext } from 'react';
import Project from './data/project.json';
import PointerEvent from './event/cursorPoint';

function Paging() {
  return (
    <div className="pg_swp" id="section2">
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
    </div>
  );
}

export default Paging;
