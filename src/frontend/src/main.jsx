import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Login from "./components/Login.jsx";
import Form from "./components/Form.jsx";
import Signup from "./components/Signup.jsx";
import User from "./components/User.jsx";
import Doctor from "./components/Doctor.jsx";
import Ambulance from "./components/Ambulance.jsx";
import AiCheck from "./components/AICheck.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/home",
		element: <App />,
	},
	{
		path: "/form",
		element: <Form />,
	},
	{
		path: "/signup",
		element: <Signup />,
	},
	{
		path: "/check",
		element: <AiCheck />,
	},
	{
		path: "/user",
		element: <User />,
	},
	{
		path: "/doctor",
		element: <Doctor />,
	},
	{
		path: "/ambulance",
		element: <Ambulance />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		{/* <App /> */}
		<RouterProvider router={router} />
	</React.StrictMode>
);
