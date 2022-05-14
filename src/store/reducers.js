import { combineReducers } from "redux"

// Front
import Layout from "./layout/reducer"
import Profile from "./auth/profile/reducer"







//Dashboard
import Dashboard from "./dashboard/reducer";

//Dasboard saas
import DashboardSaas from "./dashboard-saas/reducer";

import boundsReducer from "./bounds/reducer";
import segmentsReducer from "./segments/reducer";


const rootReducer = combineReducers({
  // public
  Profile,
  Layout,
  Dashboard,
  DashboardSaas,
  boundsReducer,
  segmentsReducer
})

export default rootReducer
