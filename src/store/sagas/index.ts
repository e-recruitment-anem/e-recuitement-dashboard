import { all, takeLatest, select } from "redux-saga/effects";
import { getExample } from "../selectors";

import { exampleAction } from "../slices/example";

function* runExample() {
  try {
    // DO YOUR HTTP CALL USING REDUX SAGA
    const { example } = yield select(getExample);
    console.log(example);
  } catch (error) {
    console.log(error);
  }
}

// If any of these functions are dispatched, invoke the appropriate saga
function* rootSaga() {
  yield all([takeLatest(exampleAction.type, runExample)]);
}

export default rootSaga;
