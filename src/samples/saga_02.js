import { call, select, put, runSaga, take } from '../mySagaImpl'
import { getUser } from './api'
import { store, selectUserId } from './store'

function* mySaga() {
  const userId = yield select(selectUserId)
  const user = yield call(getUser, userId)
  yield put({ type: 'getUserSuccess', payload: user })
}

runSaga(store, mySaga)
