import {ADD_TODO} from '../actions/todos'
import {ADD_GOAL} from '../actions/goals'
//ES6 Version of Redux Middleware
const checker = (store) => (next) => (action) => {
  if (action.type === ADD_TODO && action.todo.name.toLowerCase().includes('bitcoin')) {
    return alert('Try another one')
  }
  if (action.type === ADD_GOAL && action.goal.name.toLowerCase().includes('bitcoin')) {
    return alert('Try another one')
  }
  return next(action)
}
export default checker
