import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {
    App,
    Home,
  } from 'containers';

export default () => {
  return (
    <Route path="/" component={App}>
      { /* Home (main) route */ }
      <IndexRoute component={Home}/>
    </Route>
  );
};
