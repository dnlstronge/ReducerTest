import React, { useState, useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './components/context/authContext';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const context = useContext(AuthContext)

  return (
    <React.Fragemnt>
        <MainHeader isAuthenticated={context.isLoggedIn}  />
        <main>
          {!context.isLoggedIn && <Login />}
          {context.isLoggedIn && <Home />}
        </main>
    </React.Fragemnt>
  );
}

export default App;
