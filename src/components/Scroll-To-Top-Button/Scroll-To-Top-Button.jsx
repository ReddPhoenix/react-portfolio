import React, { useEffect, useState } from 'react';
import { Icon } from 'react-icons-kit';
import {chevronCircleUp} from 'react-icons-kit/fa/chevronCircleUp'


export default function ScrollToTopButton() {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false)
        };
    
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
    }, []);


    return (
        <div className='scroll-to-top'>
            {isVisible &&
                <div onClick={scrollToTop}>
                    <Icon className='UpIcon' size={45} icon={chevronCircleUp} />
                </div>
            }
        </div>
    );
}

