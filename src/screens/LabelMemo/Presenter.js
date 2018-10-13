import React from 'react';
import moment from 'moment-timezone';
import { Link } from 'react-router-dom';
import { ellipsisText } from '../../util/textUtil';
import './styles.css';

const getLabelMemoClassName = (selectedMemoId, memoId) => {
  const result = selectedMemoId === memoId ? 'card selected' : 'card';
  return result;
};

const Presenter = props => {
  const labelMemo = props.labelList[props.labelId] || {};
  return (
    <div className="label-memo">
      <h3>{labelMemo.title}</h3>
      <button onClick={props.onClickDeleteSeletedLabels}>선택 메모 삭제</button>
      {labelMemo.memos && labelMemo.memos.map(memo => {
        return (
          <div key={memo._id} className={getLabelMemoClassName(props.selectedMemoId, memo._id)}>
            <input
              className="checkBoxInput"
              name="isSelectedMemo"
              type="checkbox"
              checked={props.checkedMemoIds.includes(memo._id)}
              onChange={() => props.onChangeCheckedMemoIds(memo._id)}
            />
            <form onSubmit={(e) => props.onClickMemoTitleChange(e, memo._id)}>
              <Link to={`/${props.labelId}/${memo._id}/`}>
                <div className="top">
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
                        <span>{ellipsisText(memo.title)}</span>
                    }
                    <span className="date">{moment(memo.updatedAt).format("YYYY. MM. DD.")}</span>
                  </span>
                  <p>{ellipsisText(memo.content)}</p>
                </div>
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
