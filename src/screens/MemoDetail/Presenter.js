import React from 'react';
import moment from 'moment-timezone';
import './styles.css';

const Presenter = props => {
  const memoDetail = props.memosListById[props.memoId];
  if (!memoDetail) return <div />;

  return (
    <div className="label-detail">
      <div className="top">
        {
          props.isEditMode ?
            <input type="text" placeholder="제목을 입력하세요" onChange={props.onChangeTitle} value={props.title} /> :
            <h3>{memoDetail.title}</h3>
        }


        <button onClick={props.onClickDeleteMemo} className="delete">삭제</button>
        <button onClick={props.onClickEditMode} className="edit">{ props.isEditMode ? '수정완료' : '수정' }</button>
        <p>{`메모 수정일 ${moment(memoDetail.updatedAt).format("YYYY. MM. DD.")}`}</p>
      </div>
      {
        props.isEditMode ?
          <textarea className="editModeContent" onChange={props.onChangeContent} value={props.content} /> :
          <p>{memoDetail.content}</p>
      }
    </div>
  );
};


export default Presenter;
