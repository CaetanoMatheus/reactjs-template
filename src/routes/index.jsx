import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={() => <h1>Home Page</h1>} exact />
        <Route path="/other" component={() => <h1>Other Page</h1>} />
      </Switch>
    </BrowserRouter>
  )
}
