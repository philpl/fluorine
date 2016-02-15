import React, { Component, PropTypes } from 'react'
import { withStore, withActions } from 'fluorine-lib'

// import dispatcher from '../dispatcher'
// import counter from '../reducers/counter'
// import * as CounterActions from '../actions/counter'

// @withStore(dispatcher.reduce(counter), 'counter')
// @withActions(dispatcher, CounterActions)

export default class HeaderComp extends Component {
  static propTypes = {
  };

  render() {
    return (
      <header className="header">
          <h1>todos</h1>
          <TodoTextInput newTodo
                         onSave={this.handleSave.bind(this)}
                         placeholder="What needs to be done?" />
      </header>
    )
  }
}