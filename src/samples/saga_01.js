import { call, runSaga } from '../mySagaImpl'
import { getUser } from './api'
import { store } from './store'

const showUserName = user => {
  console.log('User:', user.name)
}

function* mySaga() {
  const user = yield call(getUser, 1)
  yield call(showUserName, user)
}

runSaga(store, mySaga)
