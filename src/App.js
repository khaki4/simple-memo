import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom'
import history from './history';
import LabelList from './screens/LabelList';
import LabelMemo from './screens/LabelMemo';
import MemoDetail from './screens/MemoDetail';
import MemoCreate from './screens/MemoCreate';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div className="simple-memo">
            <LabelList />
            <Route
              path="/labels/:labelId/"
              component={LabelMemo}
            />
            <Route
              exact
              path="/labels/:labelId/memos/:memoId"
              component={MemoDetail}
            />
            <Route
              exact
              path="/labels/:labelId/memos/create"
              component={MemoCreate}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
