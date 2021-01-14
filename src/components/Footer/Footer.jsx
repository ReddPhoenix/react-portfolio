import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <>
                <footer className="footer">
                    <div className="content has-text-centered">
                        <p className='has-text-centered'>

                            <Link href="http://opensource.org/licenses/mit-license.php">MITLicense</Link>. The website content
    is licensed <Link href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</Link>.
                    </p>
                    </div>
                </footer>
            </>
        )
    }
}

export default Footer;