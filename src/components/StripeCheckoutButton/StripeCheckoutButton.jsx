import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const peiceForStripe = price * 100;
    const publishableKey = 'pk_test_51Hx1OAHAPgoMI7yKb8SSwF7pNQfNpXzAoexWVGPKyZLoHTBAOHt1LNs2WJQng1rmKjoTYIgLxb28SuDwnCAfWJoF00BbJ0ZevK';

    const onToken = token => {
        console.log(token);
        alert('Payment successful');
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name='Crown Clothing Ltd.'
            billingAddress
            shippingAddress
            image='http://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={peiceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;