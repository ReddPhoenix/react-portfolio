import React, { useEffect, useState } from 'react';
import { Icon } from 'react-icons-kit';
import { github } from 'react-icons-kit/fa/github';




export default function GitHubButton() {

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
        <div className='github'>
            {isVisible &&
                <div>
                    <a target='_blank' rel='noreferrer noopener' href='https://github.com/reddphoenix'>
                    <Icon size={45} icon={github} />
                    </a>
                </div>
            }
        </div>
    );
}

