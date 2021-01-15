import React from 'react';


const Header = (props) => {
    function toggleBurgerMenu() {
        document.querySelector('.navbar-menu').classList.toggle('is-active');
    }

    return (
        <div className='hero-head'>
            <nav className='navbar' role='navigation' aria-label='main navigation' >
                <div className='container' id='navbar-background'>
                    <div className='navbar-brand'>
                        <span role='button' className='navbar-burger burger' aria-label='menu' aria-expanded='false' data-target='navbarMenu' onClick={toggleBurgerMenu}>
                            <span aria-hidden='true'></span>
                            <span aria-hidden='true'></span>
                            <span aria-hidden='true'></span>
                            <span aria-hidden='true'></span>
                            <span aria-hidden='true'></span>
                        </span>
                    </div>
                    <div id='navbarMenu' className='navbar-menu'>
                        <div className='navbar-end'>
                            <span className='navbar-item' onClick={toggleBurgerMenu}>
                                <a className='button is-white is-outlined' href='/react-portfolio/'>
                                    <span className='icon'>
                                        <i className='fa fa-home'></i>
                                    </span>
                                    <span>Home</span>
                                </a>
                            </span>
                            <span className='navbar-item' onClick={toggleBurgerMenu}>
                                <a className='button is-white is-outlined' href='/react-portfolio/portfolio'>
                                    <span className='icon'>
                                        <i className='fa fa-code'></i>
                                    </span>
                                    <span>Portfolio</span>
                                </a>
                            </span>
                            <span className='navbar-item' onClick={toggleBurgerMenu}>
                                <a className='button is-white is-outlined' target='_blank' rel='noreferrer noopener' href='https://drive.google.com/file/d/1oUpFzV2oGDskBou4uAaKMvPG0tFh_usq/view?usp=sharing'>
                                    <span className='icon'>
                                        <i className='fa fa-id-card'></i>
                                    </span>
                                    <span>Resume</span>
                                </a>
                            </span>
                            <span className='navbar-item' onClick={toggleBurgerMenu}>
                                <a className='button is-white is-outlined' target='_blank' rel='noreferrer noopener' href='https://www.linkedin.com/in/walter-guerrero-7494201a9/'>
                                    <span className='icon'>
                                        <i className='fa fa-linkedin'></i>
                                    </span>
                                    <span>LinkedIn</span>
                                </a>
                            </span>
                            <span className='navbar-item' onClick={toggleBurgerMenu}>
                                <a className='button is-white is-outlined' target='_blank' rel='noreferrer noopener' href='https://github.com/reddphoenix'>
                                    <span className='icon'>
                                        <i className='fa fa-github'></i>
                                    </span>
                                    <span>GitHub</span>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </nav>

        </div >

    )
}

export default Header;