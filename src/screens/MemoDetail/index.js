import { connect } from 'react-redux';
import Container from './Container';

const mapStateToProps = (state, ownProps) => {
  return {
    memosListById: state.memo.memosListById,
    memoId: ownProps.match.params.memoId,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
