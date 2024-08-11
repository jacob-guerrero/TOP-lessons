import App from "./App";
import Profile from "./components/Profile";
import ErrorPage from "./components/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "profile/:name",
    element: <Profile></Profile>,
  },
];

export default routes;
