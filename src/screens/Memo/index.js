import { connect } from 'react-redux';
import Container from './Container';
import * as fromMemo from '../../reducers/memo';

const mapStateToProps = state => {
  return {
    memos: state.memo.memos,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestMemos: payload => {
      dispatch(fromMemo.requestMemos(payload))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
