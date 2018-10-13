import React from 'react';
import moment from 'moment-timezone';
import { Link, Route } from 'react-router-dom';
import { ellipsisText } from '../../util/textUtil';
import './styles.css';


const Presenter = props => {
  const labelMemo = props.labelList[props.labelId] || {};
  return (
    <div className="label-list">
      <h3>{labelMemo.title}</h3>
      <button onClick={props.onClickDeleteSeletedLabels}>선택 라벨 삭제</button>
      {labelMemo.memos && labelMemo.memos.map(memo => {
        return (
          <div key={memo._id}>
            <form onSubmit={(e) => props.onClickMemoTitleChange(e, memo._id)}>
              <input
                name="isSelectedMemo"
                type="checkbox"
                checked={props.checkedMemoIds.includes(memo._id)}
                onChange={() => props.onChangeCheckedMemoIds(memo._id)}
              />
              <Link to={`/${props.labelId}/${memo._id}/`}>
                <span>
                  {
                    props.nameEditMode[memo._id] ?
                      (
                        <input
                          type="text"
                          onChange={(e) => props.onChangeTitle(memo._id, e.target.value)}
                          value={props.changedMemoTitle[memo._id] || ''}
                        />
                      ) :
                      <span>{memo.title}</span>
                  }
                  <span>{moment(memo.updatedAt).format("YYYY. MM. DD.")}</span>
                </span>
                <p>{ellipsisText(memo.content)}</p>
              </Link>
              <button onClick={(e) => props.onClickMemoTitleChange(e, memo._id)}>
                {props.nameEditMode[memo._id] ? '이름변경완료' : '이름변경'}
              </button>
            </form>
          </div>
        )
      })}
    </div>
  );
};


export default Presenter;
