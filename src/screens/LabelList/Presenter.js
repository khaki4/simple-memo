import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Presenter = props => {
  return (
    <div>
      <div>{`전체메모(${props.memosList.length})`}</div>
      {props.labelList.map(label => {
        return (
          <div key={label._id}>
            <Link href={`${label._id}`} to={`${label._id}`}>
              { `${label.title} (${label.memos.length})` }
            </Link>
          </div>
        );
      })}
    </div>
  );
};


export default Presenter;
