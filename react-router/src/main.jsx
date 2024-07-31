import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Profile from "./components/Profile";
import Spinach from "./components/Spinach";
import Popeye from "./components/Popeye";
import DefaultProfile from "./components/DefaultProfile";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "profile",
    element: <Profile></Profile>,
    children: [
      {
        index: true,
        element: <DefaultProfile></DefaultProfile>,
      },
      {
        path: "spinach",
        element: <Spinach></Spinach>,
      },
      {
        path: "popeye",
        element: <Popeye></Popeye>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
