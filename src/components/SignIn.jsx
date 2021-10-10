import React from 'react';
import lockIcon from '../images/lock-icon.png';

const SignIn = () => (
  <>
    <div className="sign-in-options">
      <p>Already have an Intuit account?</p>
      <p>I forgot my User ID or Password</p>
    </div>
    <button type="button">
      <img src={lockIcon} alt="closed lock" />
      Sign In
    </button>
  </>
);

export default SignIn;
