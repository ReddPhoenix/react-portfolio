import React, { useEffect, useState } from 'react';
import PublishTwoToneIcon from '@material-ui/icons/PublishTwoTone';

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
                    <PublishTwoToneIcon />
                </div>
            }
        </div>
    );

}

