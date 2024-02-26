import React, { Fragment } from 'react';
import {useNavigate} from 'react-router-dom';

function Product() {
    let navigate = useNavigate();
    return(
        <Fragment>
            Product
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

export default Product;