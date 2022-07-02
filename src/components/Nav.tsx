import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import '../styles/Nav.css';

function Main() {
    return (
        <nav>
            <div>
                <ul>

                </ul>
            </div>
            <FontAwesomeIcon icon={ faEllipsisVertical } />
        </nav>
    );
}

export default Main;
