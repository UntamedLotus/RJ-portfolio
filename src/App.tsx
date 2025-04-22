import "./App.css";
import { BrowserRouter } from "react-router";
import AppRoutes from "./route";
import React from "react";

function App() {
	return (
		<React.StrictMode>
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
		</React.StrictMode>
	);
}

export default App;
