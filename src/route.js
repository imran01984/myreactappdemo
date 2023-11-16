import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import page01 from './Pages/page01';
import page02 from './Pages/page02';
import page03 from './Pages/page03';

export default function route() {
  return (
    <BrowserRouter>
    <Switch>
        <Route path='/page01' Component={page01}></Route>
        <Route path='/page02' Component={page02}></Route>
        <Route path='/page03' Component={page03}></Route>
        <Route component={NotFound}/>
    </Switch>
    </BrowserRouter>
  )
}
