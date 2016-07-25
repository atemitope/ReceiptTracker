import React, { Component, PropTypes } from 'react';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  }
  render() {
    const styles = require('./App.scss');
    return ( < div >
      <p className = { styles.header } >
      Hello and welcome to the reciept tracker app < /p>
      { this.props.children }
      </div>
    );
  }
}
