import React from 'react';
import lockIcon from '../images/lock-icon.png';

const CreateAccountForm = () => (
  <>
    <div class="form-wrapper">
      <h1>Create an Intuit account</h1>
      <h2>One account for everything Intuit, including Mint.</h2>
      <a className="learn-more" href="#">Learn more</a>

      <form>
        <label>
          Email address
          <input type="email" />
        </label>

        <label>
          Phone
          <span className="recommended-msg"> (recommended)</span>
          <input type="tel" />
        </label>
        <small className="call-rates-msg">Standard call, message, or data rates may apply.</small>

        <label>
          Password
          <input type="password" />
        </label>

        <button type="submit">
          <img src={lockIcon} alt="closed lock" />
          Create Account
        </button>
      </form>

      <small className="terms-conditions-msg">
        By selecting Create Account, you agree to our <a href="#">Terms</a> and have read and acknowledge our <a href="#">Global Privacy Statement.</a>
      </small>

    </div>

    <div className="recaptcha-msg">
      <small>
        Invisible reCAPTCHA by Google <a href="#">Privacy Policy</a> and <a href="#">Terms of Use.</a>
      </small>
    </div>
  </>
);

export default CreateAccountForm;
