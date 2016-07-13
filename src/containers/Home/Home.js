import React, { Component } from 'react';

export default class App extends Component {
  render() {
    const styles = require('./Home.scss');
    return (
      <div>
      <p className={styles.home}>
      The reciept apps
      </p>
      </div>
      );
  }
}
