import App from "./App";
import Profile from "./components/Profile";
import ErrorPage from "./components/ErrorPage";
import ProfileManager from "./components/ProfileManager";

const routes = [
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "profile",
    element: <ProfileManager></ProfileManager>,
  },
  {
    path: "profile/:name",
    element: <Profile></Profile>,
  },
];

export default routes;
