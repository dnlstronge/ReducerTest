import React from 'react';
import AuthContext from '../context/authContext';

import classes from './Navigation.module.css';

const Navigation = (props) => {
  
    return (
      <nav className={classes.nav}>
      <ul>
        {context.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {context.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {context.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
    

  );
};

export default Navigation;
