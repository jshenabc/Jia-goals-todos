import API from 'goals-todos-api'
//replace string with const
export const ADD_GOAL = 'ADD_GOAL'
export const REMOVE_GOAL = 'REMOVE_GOAL'

//actionCreators

function addGoalAction (goal) {
  return {
    type: ADD_GOAL,
    goal
  }
}

function removeGoalAction (id) {
  return {
    type: REMOVE_GOAL,
    id
  }
}


//handleAddGoal(this.inputElement.value)
//use thunk
//Export async action creator
export function handleAddGoal(inputValue, callback) {
  return (dispatch) => {
    return API.saveGoal(inputValue)
      .then((goal) => {
        dispatch(addGoalAction(goal))
        callback()
      }).catch(() => {
         alert('There was an error. Try again.')
      })
  }
}

//handleDeleteGoal(goal)
export function handleDeleteGoal (goal) {
  return (dispatch) => {
    dispatch(removeGoalAction(goal.id));
    return API.deleteGoal(goal.id)
      .catch(() => {
        dispatch(addGoalAction(goal))
        alert('An error occured!')
      })
  }
}
