import { connect } from 'react-redux';
import Container from './Container';
import * as fromMemo from '../../reducers/memo';
import * as fromLabel from '../../reducers/label';

const mapStateToProps = state => {
  return {
    memosList: state.memo.memosList,
    labelList: state.label.labelsList,
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
    requestCreateLabel: (title, content) => {
      dispatch(fromLabel.requestCreateLabel(title, content))
    },
    requestAddMemo: (labelId, memoIds) => {
      dispatch(fromLabel.requestAddMemo(labelId, memoIds))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
