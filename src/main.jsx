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
import UpdateItem from "./Pages/UpdateItem/UpdateItem.jsx";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute.jsx";
import ViewDetails from "./Pages/ViewDetails/ViewDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://art-and-craft-store-server-sigma.vercel.app/craftProduct"),
      },
      {
        path: "/allArtCraftItems",
        element: <AllArtAndCraft></AllArtAndCraft>,
        loader: () => fetch("https://art-and-craft-store-server-sigma.vercel.app/craftProduct"),
      },
      {
        path: "/addCraft",
        element: (
          <PrivateRoute>
            <AddCraft></AddCraft>
          </PrivateRoute>
        ),
      },
      {
        path: "/myArtAndCraft",
        element: (
          <PrivateRoute>
            <MyArtAndCraft></MyArtAndCraft>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/updateItem/:id",
        element: (
          <PrivateRoute>
            <UpdateItem></UpdateItem>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://art-and-craft-store-server-sigma.vercel.app/craftProduct/${params.id}`),
      },
      {
        path: "/viewDetails/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://art-and-craft-store-server-sigma.vercel.app/craftProduct/${params.id}`),
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
