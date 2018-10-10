import React, { Component } from 'react';
import Presenter from './Presenter';

class Container extends Component {
  componentDidMount() {

  }

  getMemos = () => {
    console.log('getMemos');
    this.props.requestMemos();
  };

  render() {
    return (
      <Presenter
        {...this.props}
        getMemos={this.getMemos}
      />
    );
  }
}

export default Container;
