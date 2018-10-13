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

  componentDidUpdate() {
    this.setActiveItems();
  }

  init = () => {
    this.setActiveItems();
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

    // 이름 변경 완료 누르는 시점에서 타이틀 값이 없다면 요청 무시.
    if (this.state.nameEditMode[memoId] && !this.state.changedMemoTitle[memoId]) return;

    this.updateMemoTitle(memoId, this.state.changedMemoTitle[memoId]);
    this.setState(
      produce(draft => {
        draft.nameEditMode[memoId] = !draft.nameEditMode[memoId];
        draft.changedMemoTitle[memoId] = '';
      }),

    );
  }

  onClickDeleteSeletedLabels = () => {
    // 체크된 메모가 없을경우 요청 무시.
    if ([...this.checkedMemoIds].length < 1) return;

    this.props.requestRemoveMemo([...this.checkedMemoIds]);
  }

  setActiveItems = () => {
    this.props.setSelectedLabelId(this.props.labelId);
    this.props.setSelectedMemoId(this.props.memoId);
  }

  updateMemoTitle = (memoId, changedMemoTitle) => {
    if (!changedMemoTitle) return;

    this.props.requestUpdateMemo(memoId, changedMemoTitle);
  }

  render() {
    return (
      <Presenter
        {...this.props}
        {...this.state}
        onChangeTitle={this.onChangeTitle}
        onChangeCheckedMemoIds={this.onChangeCheckedMemoIds}
        onClickMemoTitleChange={this.onClickMemoTitleChange}
        onClickDeleteSeletedLabels={this.onClickDeleteSeletedLabels}
      />
    );
  }
}

export default Container;
