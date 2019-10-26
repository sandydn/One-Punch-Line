import React from 'react'
import {
    Switch,
    Route
  } from "react-router-dom";
import HomePage from './HomePage';
import Fight from './Fight';
import First from './first/Index'

const index = () => {
	return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/fight">
        <Fight />
      </Route>
      <Route path="/first">
        <First />
      </Route>
    </Switch>
  )
}

export default index
