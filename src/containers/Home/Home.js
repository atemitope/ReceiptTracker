import React, { Component } from 'react';
import {DangerButton, SuccessButton} from 'components';

export default class App extends Component {
  render() {
    const styles = require('./Home.scss');
    return (
      <div>
      <p className={styles.home}>
      The reciept apps
      </p>
      <DangerButton message="this is a danger button" />
      <SuccessButton message="this is a danger button"/>

      </div>
      );
  }
}
