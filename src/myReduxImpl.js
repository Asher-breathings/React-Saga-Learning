import { EventEmitter } from 'events'
import { logAction } from './logger'

export const createStore = reducer => ({
  state: reducer(undefined, 'redux-init'),
  stateEmitter: new EventEmitter(),
  actionsEmitter: new EventEmitter(),

  dispatch(action) {
    this.state = reducer(this.state, action)
    this.actionsEmitter.emit(action.type, action)
    this.stateEmitter.emit('new_state')
    logAction(action, this.state)
  }
})
