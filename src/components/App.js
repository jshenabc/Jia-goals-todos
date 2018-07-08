import React from 'react'
import { connect } from 'react-redux'
import ConnectedTodos from './Todos'
import ConnectedGoals from './Goals'
import {
  handleInitialData
} from '../actions/shared'

//force load App
  //pass todos and goals into Component
  class App extends React.Component {
    componentDidMount(){
      const {dispatch} = this.props
      dispatch(handleInitialData())
      // Promise.all([
      //   API.fetchTodos(),
      //   API.fetchGoals()
      // ]).then(([todos, goals]) => {
      //   //fetch default
      //   console.log('Todos+Goals', [todos, goals]);
      //   //dispatch
      //   store.dispatch(receiveDataAction(todos, goals))
      // })
      //store.subscribe(() => this.forceUpdate())
    }
    render() {
      if (this.props.loading === true){
        return (
          <h3>Loading App</h3>
        )
      }
      return (
        <div>
          <ConnectedTodos/>
          <ConnectedGoals/>
        </div>
      )
    }
  }

  //use Connect
  export default connect((store) => ({
    loading: store.loading
  }))(App)
