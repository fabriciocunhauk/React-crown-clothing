import React from 'react';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

import './SignInAndSignUp.styles.scss';

const SignInSignOut = () => {
    return (
        <div className="sign-in-sign-up">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInSignOut;