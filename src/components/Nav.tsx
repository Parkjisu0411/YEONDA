import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import React, { MouseEvent, useRef, useState } from 'react';

import '../styles/Nav.css';
import Dropdown from './Dropdown';
import useClickOutside from '../hoc/useClickOutside';

function Nav() {

    const dropdownRef = useRef<HTMLDivElement>(null);
    const [isActive, setIsActive] = useClickOutside(dropdownRef, false);
    const [option, setOption] = useState({left: 0, top: 0});
    const dropdownItems = [
        {name: '공지사항', value: 'announcement'},
        {name: '신고 문의', value: 'report'},
        {name: '테스트', value: 'test'}
    ];

    const clickDropdown = (event: MouseEvent) => {
        setOption({
            left: event.currentTarget.getClientRects()[0].x - 170, 
            top: event.currentTarget.getClientRects()[0].y + 20
        });
        setIsActive(!isActive);
    }
    
    return (
        <nav>
            <div>
                <ul>

                </ul>
            </div>
            <div ref={dropdownRef} onClick={clickDropdown}>
                <FontAwesomeIcon className='compo-hover--pointer' icon={ faEllipsisVertical } />
                <Dropdown isActive={isActive} items={dropdownItems} option={option}></Dropdown>
            </div>
        </nav>
    );
}

export default Nav;
