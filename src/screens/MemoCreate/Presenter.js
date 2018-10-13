import React from 'react';
import './styles.css';

const Presenter = props => {
  return (
    <div className="memo-create">
      <div className="top">
        <input type="text" placeholder="제목을 입력하세요" onChange={props.onChangeTitle} value={props.title} />
      </div>
      <textarea className="editModeContent" onChange={props.onChangeContent} value={props.content} placeholder="내용을 입력하세요" />
      <button onClick={props.onClickCreateComplete} className="edit">생성</button>
    </div>
  );
};


export default Presenter;
