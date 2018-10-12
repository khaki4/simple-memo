import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LabelList from './screens/LabelList';
import LabelMemo from './screens/LabelMemo';
import MemoDetail from './screens/MemoDetail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <>
            <LabelList />
            <Route
              exact
              path="/:labelId/:memoId?"
              component={LabelMemo}
            />
            <Route
              exact
              path="/:labelId/:memoId"
              component={MemoDetail}
            />
          </>
        </Router>
      </div>
    );
  }
}

export default App;
