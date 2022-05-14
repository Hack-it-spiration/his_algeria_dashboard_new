import { all, fork } from "redux-saga/effects"

import ProfileSaga from "./auth/profile/saga"
import LayoutSaga from "./layout/saga"

import projectsSaga from "./projects/saga"
import tasksSaga from "./tasks/saga"
import mailsSaga from "./mails/saga"
import contactsSaga from "./contacts/saga";
import dashboardSaga from "./dashboard/saga";
import dashboardSaasSaga from "./dashboard-saas/saga";

export default function* rootSaga() {
  yield all([
    //public
    fork(ProfileSaga),
    fork(LayoutSaga),
    fork(mailsSaga),
    fork(projectsSaga),
    fork(tasksSaga),
    fork(contactsSaga),
    fork(dashboardSaga),
    fork(dashboardSaasSaga)
  ])
}
