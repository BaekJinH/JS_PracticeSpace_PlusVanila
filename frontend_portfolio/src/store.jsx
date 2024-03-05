import React, { useState, useEffect } from 'react';
import StoreEl from './data/article.json';

function Store() {
  const [itemCounts, setItemCounts] = useState(() => {
    const savedCounts = localStorage.getItem('itemCounts');
    try {
      if (savedCounts) {
        return JSON.parse(savedCounts);
      }
    } catch (error) {
      console.error('Error itemCounts', error);
      return {};
    }
    return {};
  });
  const [total, setTotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newTotal = Object.values(itemCounts).reduce(
      (acc, curr) => acc + curr,
      0,
    );
    const newPrice = StoreEl.reduce((acc, item, index) => {
      const itemCount = itemCounts[index] || 0;
      return acc + item.price * itemCount;
    }, 0);
    localStorage.setItem('itemCounts', JSON.stringify(itemCounts));

    setTotal(newTotal);
    setTotalPrice(newPrice);
  }, [itemCounts]);

  const handleIncrement = index => {
    setItemCounts(prev => ({
      ...prev,
      [index]: (prev[index] || 0) + 1,
    }));
  };

  const handleDecrement = index => {
    setItemCounts(prev => ({
      ...prev,
      [index]: Math.max(0, (prev[index] || 0) - 1),
    }));
  };
  return (
    <div>
      <div className="store_wrap">
        <h4 className="ttl">상점 페이지</h4>
        <ul>
          {StoreEl.map((item, index) => (
            <li key={index} className="atc_el">
              <div className="head">{item.title}</div>
              <div className="bottom">
                <span>{item.content}</span>
                <span>{item.registrant}</span>
                <br />
                <span>{item.price}원</span>
                <br />
                <span>개수: {itemCounts[index] || 0}</span>
                <br />
                <span>가격: {(itemCounts[index] || 0) * item.price}</span>
                <div className="btn_count">
                  <button onClick={() => handleIncrement(index, item.price)}>
                    Plus
                  </button>
                  <button onClick={() => handleDecrement(index, item.price)}>
                    Minus
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <p className="pymt_wrap">
          <span>총 개수: {total}</span>
          <span>총 가격: {totalPrice}</span>
          <br />
          <button
            onClick={() => {
              setItemCounts(itemCounts === 0);
            }}
          >
            장바구니 초기화
          </button>
        </p>
      </div>
    </div>
  );
}

export default Store;
