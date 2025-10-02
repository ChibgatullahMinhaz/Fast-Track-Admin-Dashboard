import { createBrowserRouter, type RouteObject } from "react-router";
import App from "../App";
import { lazy, Suspense } from "react";
import Loader from "../Components/UI/Loader/Loader";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import AddCarForm from "../Components/AddCarForm/AddCarForm";

const DashboardHome = lazy(() => import("../pages/DashboardHome/DashboardHome"));
const UserManagements = lazy(() => import("../pages/UserManagments/UserManagements"));
const CarManagement = lazy(() => import("../pages/carManagement/CarManagement"));
const DriverManagement = lazy(() => import("../pages/DriverManagments/DriverManagement"));
const TrackManagement = lazy(() => import("../pages/TrackManagement/TrackManagement"));
const Chat = lazy(() => import("../pages/Chat/Chat"));
const Login = lazy(() => import("../pages/Login/Login"));



const routers: RouteObject[] = [
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <DashboardHome />
          </Suspense>
        ),
      },
      {
        path: "admin/users",
        element: (
          <Suspense fallback={<Loader />}>
            <UserManagements />
          </Suspense>
        ),
      },
      {
        path: "admin/cars/add",
        element: (
          <Suspense fallback={<Loader />}>
            <AddCarForm />
          </Suspense>
        ),
      },
      {
        path: "admin/cars",
        element: (
          <Suspense fallback={<Loader />}>
            <CarManagement />
          </Suspense>
        ),
      },
      {
        path: "admin/drivers",
        element: (
          <Suspense fallback={<Loader />}>
            <DriverManagement />
          </Suspense>
        ),
      },
      {
        path: "admin/track",
        element: (
          <Suspense fallback={<Loader />}>
            <TrackManagement />
          </Suspense>
        ),
      },
      {
        path: "admin/chats",
        element: (
          <Suspense fallback={<Loader />}>
            <Chat />
          </Suspense>
        ),
      },
      {
        path: "auth/login",
        element: (
          <Suspense fallback={<Loader />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routers);