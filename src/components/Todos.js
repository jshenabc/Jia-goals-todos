import React from 'react'
import { connect } from 'react-redux'
import List from './List'
import {
  handleAddTodo,
  handleDeleteTodo,
  handleToggle
} from '../actions/todos'

class Todos extends React.Component {
   addItem = (e) => {
    e.preventDefault();
    // return API.saveTodo(this.inputElement.value)
    //   .then((todo) => {
    //     this.props.store.dispatch(addTodoAction(todo))
    //     this.inputElement.value = '';
    //   }).catch(() => {
    //      alert('There was an error. Try again.')
    //   })
    this.props.dispatch(handleAddTodo(
      this.inputElement.value,
      () => this.inputElement.value = ''
    ))
  }
  removeItem = (todo) => {
    // this.props.store.dispatch(
    //   removeTodoAction(todo.id)
    // )
    // return API.deleteTodo(todo.id)
    //   .catch(() => {
    //     this.props.store.dispatch(addTodoAction(todo))
    //     alert('An error occured!')
    //   })
    this.props.dispatch(handleDeleteTodo(todo))
  }
  toggleItem = (id) => {
    // this.props.store.dispatch(
    //   toggleTodoAction(id)
    // )
    // return API.saveTodoToggle(id)
    //   .catch(() => {
    //     this.props.store.dispatch(toggleTodoAction(id))
    //     alert('An error occured!')
    //   })
    this.props.dispatch(handleToggle(id))
  }
  render() {
    return (
      <div>
        <h1>Todos</h1>
        <input
          type='text'
          placeholder='Add todo'
          ref={(input) => this.inputElement = input}
        />
        <button onClick={this.addItem}>Add Todo</button>
        <List items={this.props.todos} remove={this.removeItem} toggle={this.toggleItem}/>
      </div>

    )
  }
}

// class ConnectedTodos extends React.Component {
//   render() {
//     return (
//       <Context.Consumer>
//         {(store) => {
//           const { todos } = store.getState()
//           return <Todos todos={todos} dispatch={store.dispatch}/>
//         }}
//       </Context.Consumer>
//     )
//   }
// }

//use Connect
export default connect((state) => ({
  todos: state.todos
}))(Todos)
