import { connect } from 'react-redux';
import Container from './Container';
import * as fromMemo from '../../reducers/memo';
import * as fromLabel from '../../reducers/label';

const mapStateToProps = state => {
  return {
    memosList: state.memo.memosList,
    labelList: state.label.labelsList,
    selectedLabelId: state.label.selectedLabelId,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestCreateMemo: (title, content) => {
      dispatch(fromMemo.requestCreateMemo(title, content))
    },
    requestMemosList: () => {
      dispatch(fromMemo.requestMemosList())
    },
    requestLabelsList: () => {
      dispatch(fromLabel.requestLabelsList())
    },
    requestCreateLabel: (title) => {
      dispatch(fromLabel.requestCreateLabel(title))
    },
    requestAddMemo: (labelId, memoIds) => {
      dispatch(fromLabel.requestAddMemo(labelId, memoIds))
    },
    setSelectedLabelId: (labelId) => {
      dispatch(fromLabel.setSelectedLabelId(labelId))
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
