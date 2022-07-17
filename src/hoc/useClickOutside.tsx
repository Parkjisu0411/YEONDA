import React, { RefObject, useEffect, useRef, useState } from 'react';

const useClickOutside = (el: RefObject<HTMLElement>, initialState: boolean):[boolean, React.Dispatch<React.SetStateAction<boolean>>] => {
    const [isActive, setIsActive] = useState(initialState);
    
    useEffect(() => {
        const clickOutside = (ev:MouseEvent) => {
            if(!el.current?.contains(ev.target as HTMLElement))
                setIsActive(!isActive);
        }
    
        if(isActive)
            document.addEventListener('click', clickOutside);

        return () => {
            document.removeEventListener('click', clickOutside);
        }
    }, [el, isActive]);

    return [isActive, setIsActive];
}

export default useClickOutside;