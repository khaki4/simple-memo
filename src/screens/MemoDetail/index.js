import { connect } from 'react-redux';
import Container from './Container';
import * as fromLabel from '../../reducers/label';
import * as fromMemo from '../../reducers/memo';

const mapStateToProps = (state, ownProps) => {
  return {
    memosListById: state.memo.memosListById,
    labelId: ownProps.match.params.labelId,
    memoId: ownProps.match.params.memoId,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestDeleteMemo: (memoId) => {
      dispatch(fromMemo.requestDeleteMemo(memoId));
    },
    requestUpdateMemo: (labelId, title, content) => {
      dispatch(fromMemo.requestUpdateMemo(labelId, title, content));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
