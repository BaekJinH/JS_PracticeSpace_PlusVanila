import React, { useState, useContext } from 'react';

function Introduce() {
  return (
    <div className="intro_sf" id="section1">
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
    </div>
  );
}

export default Introduce;
