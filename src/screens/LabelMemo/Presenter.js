import React from 'react';
import moment from 'moment-timezone';
import { Link, Route } from 'react-router-dom';
import { ellipsisText } from '../../util/textUtil';
import './styles.css';


const Presenter = props => {
  const labelMemo = props.labelList[props.labelId] || {};
  console.log(labelMemo)
  return (
    <div className="label-memo">
      <h3>{labelMemo.title}</h3>
      {labelMemo.memos && labelMemo.memos.map(memo => {
        return (
          <div key={memo._id}>
            <Link to={`/${props.labelId}/${memo._id}/`}>
              <h4>
                {memo.title}
                <span>{moment(memo.createdAt).format("YYYY. MM. DD.")}</span>
              </h4>
              <p>{ellipsisText(memo.content)}</p>
            </Link>
          </div>
        )
      })}
    </div>
  );
};


export default Presenter;
