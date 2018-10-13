import { connect } from 'react-redux';
import Container from './Container';
import * as fromMemo from '../../reducers/memo';

const mapStateToProps = (state, ownProps) => {
  return {
    labelId: ownProps.match.params.labelId,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestCreateAndAddMemo: (labelId, title, content) => {
      dispatch(fromMemo.requestCreateAndAddMemo(labelId, title, content))
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
