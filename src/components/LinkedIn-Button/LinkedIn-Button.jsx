import React, { useEffect, useState } from 'react';
import { Icon } from 'react-icons-kit';
import { linkedinSquare } from 'react-icons-kit/fa/linkedinSquare';



export default function ScrollToTopButton() {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false)
        };
    
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
    }, []);


    return (
        <div className='linkedin'>
            {isVisible &&
                <div >
                    <a target='_blank' rel='noreferrer noopener' href='https://www.linkedin.com/in/walter-guerrero-7494201a9/'>
                        <Icon size={45} icon={linkedinSquare} />
                    </a>
                </div>
            }
        </div>
    );
}

