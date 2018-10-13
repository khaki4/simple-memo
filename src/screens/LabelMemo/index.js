import { connect } from 'react-redux';
import Container from './Container';
import * as fromLabel from '../../reducers/label';
import * as fromMemo from '../../reducers/memo';

const mapStateToProps = (state, ownProps) => {
  return {
    memosList: state.memo.memosList,
    labelList: state.label.labelsListById,
    checkedMemoIds: state.memo.checkedMemoIds,
    labelId: ownProps.match.params.labelId,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestLabelById: (labelId) => {
      dispatch(fromLabel.requestLabelById(labelId))
    },
    requestUpdateMemo: (labelId, title) => {
      dispatch(fromMemo.requestUpdateMemo(labelId, title))
    },
    requestRemoveMemo: (memoIds) => {
      dispatch(fromLabel.requestRemoveMemo(ownProps.match.params.labelId, memoIds))
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
