import React, { useRef, useState} from 'react';
import logo from './image/logo.png' ;
import btnList from './data/searchData.json' ;
import bells from './data/bell.json' ;
import './css/App.css';

function Header() {
    const [active, setActive] = useState(false);
    const liRef = useRef(null);
    
    const hambHandle = (event) => {
        if (liRef.current) {
            console.log(event);
            console.log(event.type);
            if (event.type === 'click') {
                setActive(!active);
            }
        }
    }
    const divClasses = ['top' , 'mid' , 'bot'] ;

    return (
        <div id='header'>
            <header className="App-header" >
                <ul className='topAside'>
                    <ul className='left'>
                        <li className={active ? `active hamb` : `hamb`} ref={liRef} onClick={hambHandle}>
                            {divClasses.map(cls => 
                                <div key={cls} className={cls}></div>
                            )}
                        </li>
                        <li className='pay'>
                            <a href="#none">Naver Pay</a>
                        </li>
                    </ul>
                    <ul className='right'>
                        <li className="chat"></li>
                        <li className="bell">
                            {bells.length > 0 && (
                                <span className='notification=count'>{bells.length}</span>
                            )}
                        </li>
                    </ul>
                </ul>
                <div className="search">
                    <img src={logo} className="App-logo" alt="logo" />
                    <form action="" id='searchForm' method='get'>
                        <fieldset>
                            <input type="text" id="typingView" placeholder='검색어를 입력하세요'/>
                        </fieldset>
                    </form>
                    <button type='submit'>
                        검색하기
                    </button>
                </div>
                <div className="otherBtn">
                    <ul>
                        {btnList.map((item,index)=>(
                            <li key={index} className={"btn_"+item.className}>
                                <a href={item.href} rel="noopener noreferrer" target={item.isBlank}>
                                    {item.a}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default Header;

