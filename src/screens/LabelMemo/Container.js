import React, { PureComponent } from 'react';
import produce from 'immer';
import Presenter from './Presenter';

class Container extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      checkedMemoIds: [],
      nameEditMode: {},
      changedMemoTitle: {},
    }
    this.checkedMemoIds = new Set();
  }

  componentDidMount() {
    this.init();
  }


  init = () => {

  }

  onChangeCheckedMemoIds = (memoId) => {
    if (this.checkedMemoIds.has(memoId)) {
      this.checkedMemoIds.delete(memoId);
    } else {
      this.checkedMemoIds.add(memoId);
    }
    this.setState({ checkedMemoIds: [...this.checkedMemoIds] })
  }

  onChangeTitle = (memoId, memoTitle = '') => {
    this.setState(
      produce(draft => {
        draft.changedMemoTitle[memoId] = memoTitle;
      })
    );
  }

  onClickMemoTitleChange = (e, memoId) => {
    e.preventDefault();

    this.setState(
      produce(draft => {
        draft.nameEditMode[memoId] = !draft.nameEditMode[memoId];
      }),
      this.updateMemoTitle(memoId, this.state.changedMemoTitle[memoId])
    );
  }

  updateMemoTitle = (memoId, changedMemoTitle) => {
    this.props.requestUpdateMemo(memoId, changedMemoTitle);
  }

  render() {
    return (
      <Presenter
        {...this.props}
        {...this.state}
        onChangeCheckedMemoIds={this.onChangeCheckedMemoIds}
        onClickMemoTitleChange={this.onClickMemoTitleChange}
        onChangeTitle={this.onChangeTitle}
      />
    );
  }
}

export default Container;
