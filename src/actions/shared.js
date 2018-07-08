import API from 'goals-todos-api'
export const RECEIVE_DATA = 'RECEIVE_DATA';

function receiveData (todos, goals) {
  return {
    type: RECEIVE_DATA,
    todos,
    goals
  }
}

//handleInitialData
export function handleInitialData() {
  return (dispatch) => {
    return Promise.all([
      API.fetchTodos(),
      API.fetchGoals()
    ]).then(([todos, goals]) => {
      //fetch default
      console.log('Todos+Goals', [todos, goals]);
      //dispatch
      dispatch(receiveData(todos, goals))
    })
  }
}
