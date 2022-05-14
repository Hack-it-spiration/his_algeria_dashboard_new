import { combineReducers } from "redux"

// Front
import Layout from "./layout/reducer"
import Profile from "./auth/profile/reducer"

//E-commerce
import ecommerce from "./e-commerce/reducer"


//crypto
import crypto from "./crypto/reducer"

//invoices
import invoices from "./invoices/reducer"

//projects
import projects from "./projects/reducer"

//tasks
import tasks from "./tasks/reducer"

//contacts
import contacts from "./contacts/reducer"

//mails
import mails from "./mails/reducer";

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
