import React, { Component } from 'react';
import Presenter from './Presenter';

class Container extends Component {
  componentDidMount() {
    this.init();
  }

  init = () => {
    this.props.requestMemosList();
    this.props.requestLabelsList();
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
