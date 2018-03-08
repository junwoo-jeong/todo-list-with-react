import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';

class App extends Component {
  render() {
    return (
      <TodoListTemplate form={<div>이렇게 말인가</div>}>
        템플릿 완성
      </TodoListTemplate>
    );
  }
}

export default App;
