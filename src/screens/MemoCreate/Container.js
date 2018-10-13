import React, { PureComponent } from 'react';
import Presenter from './Presenter';

class Container extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
    }
  }

  onChangeTitle = (e) => {
    this.setState({ title: e.target.value });
  }

  onChangeContent = (e) => {
    this.setState({ content: e.target.value });
  }

  onClickCreateComplete = () => {
    if (!(this.state.title && this.props.labelId)) return;

    this.props.requestCreateAndAddMemo(this.props.labelId, this.state.title, this.state.content);
    this.setState({ title: '', content: '' });
  }

  render() {
    return (
      <Presenter
        {...this.props}
        {...this.state}
        onChangeTitle={this.onChangeTitle}
        onChangeContent={this.onChangeContent}
        onClickCreateComplete={this.onClickCreateComplete}
      />
    );
  }
}

export default Container;
