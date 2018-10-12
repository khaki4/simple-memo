import React, { Component } from 'react';
import Presenter from './Presenter';

class Container extends Component {
  componentDidMount() {
    this.init();
  }

  init = () => {
  }

  render() {
    return (
      <Presenter
        {...this.props}
      />
    );
  }
}

export default Container;
