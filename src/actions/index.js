import { ADD_TODO, TOGGLE_TODO, SHOW_ALL, SHOW_COMPLETED, SHOW_INCOMPLETED, SET_VISIBILITY_FILTER } from './actionTypes'
let nextId = 0
export const addTodo = (text) => {
  console.log('addd', text)
  return {
    type: ADD_TODO,
    id: nextId++,
    text
  }
}

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id
})

// export const showAll = () => ({
//   type: SET_VISIBILITY_FILTER,
//   filter: SHOW_ALL
// })

// export const showCompleted = () => ({
//   type: SET_VISIBILITY_FILTER,
//   filter: SHOW_COMPLETED
// })

// export const showIncomplete = () => ({
//   type: SET_VISIBILITY_FILTER,
//   filter: SHOW_INCOMPLETED
// })