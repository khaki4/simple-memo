import React from 'react';
import './styles.css';

const Presenter = props => {
  return (
    <div>
      <button onClick={props.getMemos}>get memos</button>
      <div>
        {props.memos.map(memo => <div key={memo._id}>{memo.title}</div>)}
      </div>
    </div>
  );
};


export default Presenter;
