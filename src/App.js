import React, { useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);



  return (
    <React.Fragemnt>
        <MainHeader isAuthenticated={isLoggedIn}  />
        <main>
          {!isLoggedIn && <Login />}
          {isLoggedIn && <Home />}
        </main>
    </React.Fragemnt>
  );
}

export default App;
