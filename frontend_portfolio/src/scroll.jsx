import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Scroll() {
  const [imgArr, setImgArr] = useState([]);

  useEffect(() => {
    const API_URL =
      'https://api.thedogapi.com/v1/images/search?size=small&format=json&has_breeds=true&order=ASC&page=0&limit=10';
    axios.get(API_URL).then(res => {
      console.log(res);

      const getData = res.data.map(dogImg => {});
      // setImgArr(getData);
    });
  });

  return (
    <div className="inf_scroll">
      <ul>
        <li />
      </ul>
    </div>
  );
}

export default Scroll;
