import React, { PureComponent } from 'react';
import Presenter from './Presenter';

class Container extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      labelTitle: '',
    }
  }

  componentDidMount() {
    this.init();
  }

  onChangeLabelTitle = (e) => {
    this.setState({ labelTitle: e.target.value });
  }

  onClickCreateLabel = (e) => {
    e.preventDefault();

    // 라벨 타이틀 입력값이 빈문자열일 경우 요청 무시.
    if (this.state.labelTitle === '') return;

    // 라벨생성 성공시 redux labelList에 추가.
    // server로부터 labelList요청 하지 않음.
    this.props.requestCreateLabel(this.state.labelTitle);
    this.setState({ labelTitle: '' });
  }

  init = () => {
    this.props.requestMemosList();
    this.props.requestLabelsList();
  }

  render() {
    return (
      <Presenter
        {...this.props}
        {...this.state}
        onClickCreateLabel={this.onClickCreateLabel}
        onChangeLabelTitle={this.onChangeLabelTitle}
        onClickLabel={this.props.setSelectedLabelId}
      />
    );
  }
}

export default Container;
