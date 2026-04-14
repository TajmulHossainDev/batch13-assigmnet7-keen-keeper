import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import FriendDetails from "../Pages/FriendDetails/FriendDetails";
import Timeline from "../Pages/Timeline/Timeline";
import Stats from "../Pages/Stats/Stats";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/friend/:id",
        element: <FriendDetails></FriendDetails>,
      },
      {
        path: "/timeline",
        element: <Timeline></Timeline>,
      },
      {
        path: "/stats",
        element: <Stats></Stats>,
      },
    ],
  },
]);

export {router};
