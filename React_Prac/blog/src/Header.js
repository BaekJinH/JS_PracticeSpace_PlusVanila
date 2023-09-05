import logo from './logo.svg';
import './css/App.css';
import './css/reset.css';
import React, { useRef, useState} from 'react';

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

    return (
        <div id='header'>
            <header className="App-header" >
                <ul className="side">
                    <img src={logo} className="App-logo" alt="logo" />
                    {/* <li className={active ? `active hamb` : `hamb`} ref={liRef} onClick={hambHandle}>
                        <div className="top"></div>
                        <div className="mid"></div>
                        <div className="bot"></div>
                    </li> */}
                </ul>
            </header>
        </div>
    );
}

export default Header;

