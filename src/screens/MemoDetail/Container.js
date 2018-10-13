import React, { PureComponent } from 'react';
import Presenter from './Presenter';

class Container extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isEditMode: false,
      title: '',
      content: '',
    }
  }

  componentDidMount() {
    this.init();
  }

  init = () => {
  }

  onClickDeleteMemo = () => {
    this.props.requestDeleteMemo(this.props.memoId);
  }

  onClickEditMode = () => {
    this.setState((prevState) => ({ isEditMode: !prevState.isEditMode }), this.updateMemo);
  }

  onChangeTitle = (e) => {
    this.setState({ title: e.target.value });
  }

  onChangeContent = (e) => {
    this.setState({ content: e.target.value });
  }

  updateMemo = () => {
    // 수정 완료 버튼 누르는 시점에서만 요청.
    if (this.state.isEditMode) return;

    this.props.requestUpdateMemo(this.props.memoId, this.state.title, this.state.content);
  }

  render() {
    return (
      <Presenter
        {...this.props}
        {...this.state}
        onClickDeleteMemo={this.onClickDeleteMemo}
        onClickEditMode={this.onClickEditMode}
        onChangeTitle={this.onChangeTitle}
        onChangeContent={this.onChangeContent}
      />
    );
  }
}

export default Container;
