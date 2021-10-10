import React from 'react';
import SignIn from './components/SignIn';
import Logo from './components/Logo';
import CreateAccountForm from './components/CreateAccountForm';
import SmallPrint from './components/SmallPrint';

const App = () => (
  <>
    <div className="main-wrapper">
      <header>
        <SignIn />
      </header>
      <div className="centered-content">
        <Logo />
        <CreateAccountForm />
        <footer>
          <SmallPrint />
        </footer>
      </div>
    </div>
    <footer className="privacy-settings">
      <a href="#">Privacy Settings</a>
    </footer>
  </>
);

export default App;
