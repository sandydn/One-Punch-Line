import React from 'react'
import {
    Switch,
    Route
  } from "react-router-dom";
import HomePage from './HomePage';
import Fight from './Fight';

const index = () => {
	return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/fight">
        <Fight />
      </Route>
    </Switch>
  )
}

export default index
