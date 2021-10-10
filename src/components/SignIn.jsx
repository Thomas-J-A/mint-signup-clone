import React from 'react';
import closedLock from '../images/closed-lock.png';

const SignIn = () => (
  <>
    <div className="sign-in-options">
      <p>Already have an Intuit account?</p>
      <p>I forgot my User ID or Password</p>
    </div>
    <button type="button">
      <img src={closedLock} alt="closed lock" />
      Sign In
    </button>
  </>
);

export default SignIn;
