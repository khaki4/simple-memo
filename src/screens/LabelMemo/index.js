import { connect } from 'react-redux';
import Container from './Container';
import * as fromLabel from '../../reducers/label';

const mapStateToProps = (state, ownProps) => {
  return {
    memosList: state.memo.memosList,
    labelList: state.label.labelsListById,
    labelId: ownProps.match.params.labelId,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestLabelById: (labelId) => {
      dispatch(fromLabel.requestLabelById(labelId))
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
