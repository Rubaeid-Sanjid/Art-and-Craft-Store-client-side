import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";
import Home from "./Pages/Home/Home.jsx";
import Main from "./Pages/Main/Main.jsx";
import AllArtAndCraft from "./Pages/AllArtAndCraft/AllArtAndCraft.jsx";
import AddCraft from "./Pages/AddCraft/AddCraft.jsx";
import MyArtAndCraft from "./Pages/MyArtAndCraft/MyArtAndCraft.jsx";
import Login from "./Pages/Login/Login.jsx";
import AuthProvider from "./Components/AuthProvider/AuthProvider.jsx";
import Register from "./Pages/Register/Register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=>fetch('http://localhost:5000/craftProduct')
      },
      {
        path: "/allArtCraftItems",
        element: <AllArtAndCraft></AllArtAndCraft>,
        loader: ()=>fetch('http://localhost:5000/craftProduct')
      },
      {
        path: "/addCraft",
        element: <AddCraft></AddCraft>,
      },
      {
        path: "/myArtAndCraft",
        element: <MyArtAndCraft></MyArtAndCraft>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
