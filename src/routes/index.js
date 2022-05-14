import React from "react"
import { Redirect } from "react-router-dom"


import Accidents from "../pages/Dashboard/Accidents";
import TraficCheckIn from "../pages/Dashboard/TraficCheckIn";
import RoadStatus from "../pages/Dashboard/RoadStatus";
import WeatherHistory from "../pages/Dashboard/WeatherHistory";
import Dashboard from "../pages/Dashboard";
const authProtectedRoutes=[]

const publicRoutes = [
  { path: "/dashboard", component: Dashboard },
  { path : "/dashboard/:segmentId/accidents", component : Accidents},
  { path : "/dashboard/:segmentId/traficCheckIn", component : TraficCheckIn},
  { path : "/dashboard/:segmentId/roadStatus", component : RoadStatus},
  { path : "/dashboard/:segmentId/weather", component : WeatherHistory},
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
]

export { authProtectedRoutes, publicRoutes }
