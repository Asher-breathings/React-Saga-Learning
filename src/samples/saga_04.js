import { takeEvery, select, call, put, runSaga } from '../mySagaImpl'
import { store, selectUserId } from './store'
import { getUser } from './api'

function* userSaga() {
  const userId = yield select(selectUserId)
  const user = yield call(getUser, userId)
  yield put({ type: 'getUserSuccess', payload: user })
}

function* mySaga() {
  yield* takeEvery('getUser', userSaga)
}

runSaga(store, mySaga)

// Try to run:
// store.dispatch({ type: 'getUser' })
