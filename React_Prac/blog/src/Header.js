import React, { useRef, useState} from 'react';
import logo from './image/logo.png' ;
import btnList from './data/searchData.json' ;
import './css/App.css';
import './css/reset.css';

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
                    <li className={active ? `active hamb` : `hamb`} ref={liRef} onClick={hambHandle}>
                        {divClasses.map(cls => <div key={cls} className={cls}></div>)}
                    </li>
                    <li className='pay'>
                        <a href=""></a>
                    </li>
                </ul>
                <div className="search">
                    <img src={logo} className="App-logo" alt="logo" />
                    <form action="" id='searchForm' method='get'>
                        <fieldset>
                            <input type="text" />
                        </fieldset>
                    </form>
                    <button type='submit'>
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

