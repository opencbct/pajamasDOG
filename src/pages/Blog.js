import React, { Fragment } from 'react';
import {useNavigate} from 'react-router-dom';

function Blog() {
    let navigate = useNavigate();
        return(
            <Fragment>
                Blog
                <div>
                <button
                    onClick={() => {
                        navigate('/Cart');
                    }}
                >
                    Order
                </button>
                </div>
            </Fragment>
        );
}

export default Blog;