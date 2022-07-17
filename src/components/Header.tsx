import '../styles/Header.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import React from 'react';



function Header() {
    return (
        <header className='bx-wrap'>
            <span className='logo compo-hover--pointer'>YEONDA</span>
            <div>
                <ul>
                    <li>
                        <FontAwesomeIcon className='compo-hover--pointer' icon={ faSun } />
                    </li>
                    <li>
                        <FontAwesomeIcon className='compo-hover--pointer' icon={ faSearch } />
                    </li>
                    <li>
                        <button className='btn-login compo-hover--pointer'>로그인</button>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
