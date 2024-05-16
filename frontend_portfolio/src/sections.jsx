import React, { useState, useContext, useRef } from 'react';
import Project from './data/project.json';
import PointerEventContext from './event/pointerEventContext';
import PointerEvent from './event/cursorPoint';
import { SectionContext, SectionProvider } from './event/fullPage';

export function Introduce() {
  // const sectionRefs = useContext(SectionContext);
  return (
    <section className="intro_sf" id="section1">
      <div className="int_wrap">
        <div className="left">
          <div className="profile">
            <img src="/frontend_portfolio/src/image/" alt="" />
          </div>
        </div>
        <div className="right">
          <ul className="info">
            <li>백진혁</li>
            <li>만 24세 ( 1999/09/23 )</li>
            <li>제스아이앤씨 퍼블리셔 1년 5개월 근무 </li>
            <li>
              <p>간단 자기소개 / 다짐</p>
            </li>
            <li>
              <a href="#none">주소</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export function PagingRolling() {
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

export function CodeSkills() {
  // const sectionRefs = useContext(SectionContext);
  return (
    <section className="cd_skl" id="section3">
      <a href="" />
    </section>
  );
}
