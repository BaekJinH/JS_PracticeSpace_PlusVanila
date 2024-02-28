import React, { useState } from 'react';
import StoreEl from './data/article.json';

function Store() {
  const [total, setTotal] = useState(0);
  const [price, setPrice] = useState(0);

  let cpTotal = total;
  let isNon = total === 0;

  return (
    <div>
      <div className="store_wrap">
        <h4 className="ttl">상점 페이지</h4>
        <ul>
          {StoreEl.map((item, index) => (
            <li key={index} className="atc_el">
              <div className="head">{item.title}</div>
              <div className="bottom">
                {/* 개별 카운팅 필요해보임 => 개별 카운팅 후 해당 요소가 카운팅 되어 있을 때에는 다른 엘리먼트로 감소되지 않도록 */}
                <span>{item.content}</span>
                <span>{item.registrant}</span>
                <div className="btn_count">
                  <button
                    onClick={() => {
                      setTotal(total + 1);
                      setPrice(price + item.price);
                    }}
                  >
                    Plus
                  </button>
                  <button
                    onClick={() => {
                      if (isNon) {
                        return false;
                      } else {
                        setTotal(total - 1);
                        setPrice(price - item.price);
                      }
                    }}
                  >
                    Minus
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <p className="pymt_wrap">
          <span>{total}</span>
          <span>{price}</span>
        </p>
      </div>
    </div>
  );
}

export default Store;
