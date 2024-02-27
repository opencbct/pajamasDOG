import React, { Fragment } from 'react';
import {useNavigate} from 'react-router-dom';

function Footer() {
    let navigate = useNavigate();
        return(
            <Fragment>
                Home
                <div>
                <button
                    onClick={() => {
                        navigate('/Home');
                    }}
                >
                    Home
                </button>
                </div>
            </Fragment>
        );
}

export default Footer;