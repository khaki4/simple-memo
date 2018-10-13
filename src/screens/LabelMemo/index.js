import { connect } from 'react-redux';
import Container from './Container';
import * as fromLabel from '../../reducers/label';
import * as fromMemo from '../../reducers/memo';

const mapStateToProps = (state, ownProps) => {
  return {
    memosList: state.memo.memosList,
    checkedMemoIds: state.memo.checkedMemoIds,
    selectedMemoId: state.memo.selectedMemoId,
    labelList: state.label.labelsListById,
    labelId: ownProps.match.params.labelId,
    memoId: ownProps.match.params.memoId,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestLabelById: (labelId) => {
      dispatch(fromLabel.requestLabelById(labelId));
    },
    requestUpdateMemo: (memoId, title) => {
      dispatch(fromMemo.requestUpdateMemo(memoId, title));
    },
    requestRemoveMemo: (memoIds) => {
      dispatch(fromLabel.requestRemoveMemo(ownProps.match.params.labelId, memoIds));
    },
    setSelectedLabelId: (labelId) => {
      dispatch(fromLabel.setSelectedLabelId(labelId));
    },
    setSelectedMemoId: (memoId) => {
      dispatch(fromMemo.setSelectedMemoId(memoId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
