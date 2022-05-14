import { all, fork } from "redux-saga/effects"

import ProfileSaga from "./auth/profile/saga"
import LayoutSaga from "./layout/saga"

import dashboardSaga from "./dashboard/saga";
import dashboardSaasSaga from "./dashboard-saas/saga";

export default function* rootSaga() {
  yield all([
    //public
    fork(ProfileSaga),
    fork(LayoutSaga),
    fork(dashboardSaga),
    fork(dashboardSaasSaga)
  ])
}
