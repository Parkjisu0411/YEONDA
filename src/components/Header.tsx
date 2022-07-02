import '../styles/Header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import React from 'react';



function Header() {
    return (
        <header className='bx-wrap'>
            <span className="logo">YEONDA</span>
            <div>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={ faSun } />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={ faSearch } />
                    </li>
                    <li>
                        <button className="btn-login">로그인</button>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
