import React from 'react'
import { connect } from 'react-redux'
import List from './List'
import {
  handleAddGoal,
  handleDeleteGoal
} from '../actions/goals'

class Goals extends React.Component {
  addItem = (e) => {
    e.preventDefault();
    // return API.saveGoal(this.inputElement.value)
    //   .then((goal) => {
    //     this.props.store.dispatch(addGoalAction(goal))
    //     this.inputElement.value = '';
    //   }).catch(() => {
    //      alert('There was an error. Try again.')
    //   })
    this.props.dispatch(handleAddGoal(
      this.inputElement.value,
      () => {this.inputElement.value = ''}
    ))
  }
  removeItem = (goal) => {
    // this.props.store.dispatch(removeGoalAction(goal.id));
    // return API.deleteGoal(goal.id)
    //   .catch(() => {
    //     this.props.store.dispatch(addGoalAction(goal))
    //     alert('An error occured!')
    //   })
    this.props.dispatch(handleDeleteGoal(goal))
  }
  render() {
    return (
      <div>
        <h1>Goals</h1>
        <input
          type='text'
          placeholder='Add goal'
          ref={(input) => this.inputElement = input}
        />
        <button onClick={this.addItem}>Add Goal</button>
        <List items={this.props.goals} remove={this.removeItem}/>
      </div>

    )
  }
}

// class ConnectedGoals extends React.Component {
//   render() {
//     return (
//       <Context.Consumer>
//         {(store) => {
//           const { goals } = store.getState()
//           return <Goals goals={goals} dispatch={store.dispatch}/>
//         }}
//       </Context.Consumer>
//     )
//   }
// }

//use Connect
export default connect((state) => ({
  goals: state.goals
}))(Goals)
