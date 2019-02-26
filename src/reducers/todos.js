let initialState = {
  todos: [],
  tmp: []
}

export const todos = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_TODO': {
      let todos = state.todos
      todos.push({
        id: action.id,
        text: action.text,
        completed: false
      })
      return { ...state, todos, tmp: todos }
    }

    case 'TOGGLE_TODO': {
      let todos = state.todos
      todos.forEach(todo => {
        if (todo.id === action.id) {
          let status = todo.completed
          todo['completed'] = !status
        }
      })
      return { ...state, todos, tmp: todos }
    }

    case 'SHOW_COMPLETED': {
      let todos = state.todos
      console.log(state.todos)
      todos = todos.filter(t => t.completed)
      console.log('todos', todos)
      return { ...state, tmp: todos }
    }

    case 'SHOW_PENDING': {
      let todos = state.todos
      console.log(state.todos)
      todos = todos.filter(t => !t.completed)
      console.log('todos', todos)
      return { ...state, tmp: todos }
    }


    // case 'SHOW_ALL':
    //   return state


    // console.log('asjndjkn')
    // let todos = state.todos

    // console.log('todos', todos)
    // return state

    // case 'SHOW_PENDING':
    //   state.tmp = state.all.filter(t => !t.completed)
    //   return state


    //   {
    //     state.map(t => {
    //       if (!t.completed) {
    //         newState.push(t)
    //       }
    //     })
    //     return newState
    //   }

    default:
      return state

  }
}