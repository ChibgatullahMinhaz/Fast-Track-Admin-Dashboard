import { createBrowserRouter } from "react-router";
import App from "../App";
import DashboardHome from "../pages/DashboardHome/DashboardHome";

export const routers = createBrowserRouter([
  {
    path: "/admin/dashboard",
    Component: App,
    children: [{ index: true, Component: DashboardHome }],
  },
]);
