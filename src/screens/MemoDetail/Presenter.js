import React from 'react';
import moment from 'moment-timezone';
import './styles.css';

const Presenter = props => {
  const memoDetail = props.memosListById[props.memoId];
  if (!memoDetail) return <div />;

  return (
    <div className="label-detail">
      <div className="top">
        <h1>{memoDetail.title}</h1>

        <button onClick={props.onClickDeleteMemo}>삭제</button>
        <p>{`메모 수정일 ${moment(memoDetail.updatedAt).format("YYYY. MM. DD.")}`}</p>
      </div>
      <p>{memoDetail.content}</p>
    </div>
  );
};


export default Presenter;
