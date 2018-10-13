import React, { PureComponent } from 'react';
import Presenter from './Presenter';

class Container extends PureComponent {
  componentDidMount() {
    this.init();
  }

  componentDidUpdate() {
  }

  init = () => {
  }

  onClickDeleteMemo = () => {
    this.props.requestDeleteMemo(this.props.memoId);
  }

  render() {
    return (
      <Presenter
        {...this.props}
        onClickDeleteMemo={this.onClickDeleteMemo}
      />
    );
  }
}

export default Container;
