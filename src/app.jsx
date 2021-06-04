import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

/* Páginas */
import Site from './site/site.jsx';
import Login from './app/login.jsx';

function App(){
    return <BrowserRouter>
      <Route exact path='/' component={Site}/>
      <Route exact path='/app' component={Login}/>
    </BrowserRouter>;
  }

export default App;