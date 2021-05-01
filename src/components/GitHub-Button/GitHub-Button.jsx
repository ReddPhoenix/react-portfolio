import React, { useEffect, useState } from 'react';
import { Icon } from 'react-icons-kit';
// import { github } from 'react-icons-kit/fa/github';
import {linkedinSquare} from 'react-icons-kit/fa/linkedinSquare'



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
        <div className='linkedin'>
            {isVisible &&
                <div onClick={scrollToTop}>
                    <Icon size={45} icon={linkedinSquare} />
                </div>
            }
        </div>
    );
}

