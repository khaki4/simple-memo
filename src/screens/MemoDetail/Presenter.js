import React from 'react';
import moment from 'moment-timezone';
import './styles.css';


const Presenter = props => {
  const memoDetail = props.memosListById[props.memoId] || {};
  console.log('memoDetail', memoDetail);
  return (
    <div className="label-detail">
      <h1>{memoDetail.title}</h1>
      <p>{moment(memoDetail.createdAt).format("YYYY. MM. DD.")}</p>
      <p>{memoDetail.content}</p>
    </div>
  );
};


export default Presenter;
