import React from 'react';

import CustomButton from '../CustomButton/CustomButton';

import './cart-dropdown.styles.scss';

const CartDropDown = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-item" />
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
}

export default CartDropDown;