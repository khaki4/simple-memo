import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const getLabelClassName = (selectedLabelId, labelId) => {
  const result = selectedLabelId === labelId ? 'selected' : '';
  return result;
};

const Presenter = props => {
  return (
    <div className="label-list">
      <div>
        <h2>{`전체메모(${props.memosList.length})`}</h2>
      </div>
      <div>
        <form onSubmit={props.onClickCreateLabel}>
          <input
            type="text"
            placeholder="라벨을 입력해주세요"
            onChange={props.onChangeLabelTitle}
            value={props.labelTitle}
          />
          <button onClick={props.onClickCreateLabel}>라벨 추가하기</button>
        </form>
      </div>
      {props.labelList.map(label => {
        return (
          <div
            key={label._id}
          >
            <Link to={`/${label._id}`}>
              <div
                className={getLabelClassName(props.selectedLabelId, label._id)}
              >
                <span className={label._id}>
                  { `${label.title} (${label.memos.length})` }
                </span>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};


export default Presenter;
