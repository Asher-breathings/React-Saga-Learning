import { createStore } from '../myReduxImpl'

const initialState = { name: undefined }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'setName':
      return { ...state, name: action.payload }
    default:
      return state
  }
}

window.store = createStore(reducer)

// Try to run:
// store.dispatch({ type: 'setName', payload: 'Jean Valjean' })
