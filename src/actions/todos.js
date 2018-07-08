import API from 'goals-todos-api'
//replace string with const
//Export action types
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

//actionCreators
function addTodo (todo) {
  return {
    type: ADD_TODO,
    todo
  }
}

function removeTodo (id) {
  return {
    type: REMOVE_TODO,
    id
  }
}

function toggleTodo (id) {
  return {
    type: TOGGLE_TODO,
    id
  }
}


//handleAddTodo(this.inputElement.value)
//use thunk
//Export async action creator
export function handleAddTodo(inputValue, callback) {
  return (dispatch) => {
    return API.saveTodo(inputValue)
      .then((todo) => {
        dispatch(addTodo(todo))
        callback()
      }).catch(() => {
         alert('There was an error. Try again.')
      })
  }
}

//Notice that we’re no longer returning the action itself! Instead, we’re returning a function that is being passed dispatch. We then call this function when we have the data
export function handleDeleteTodo (todo) {
  return (dispatch) => {
    dispatch(
      removeTodo(todo.id)
    )
    return API.deleteTodo(todo.id)
      .catch(() => {
        dispatch(addTodo(todo))
        alert('An error occured!')
      })
  }
}

//handleToggle
export function handleToggle (id) {
  return (dispatch) => {
    dispatch(
      toggleTodo(id)
    )
    return API.saveTodoToggle(id)
      .catch(() => {
        dispatch(toggleTodo(id))
        alert('An error occured!')
      })
  }
}
