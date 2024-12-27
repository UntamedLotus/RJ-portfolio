import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router";
import AppRoutes from "./route";

function App() {
	return (
		<React.StrictMode>
			<BrowserRouter>
				<div className='h-[100vh]'>
					<div className='bg-zinc-900 h-full'>
						<AppRoutes />
					</div>
				</div>
			</BrowserRouter>
		</React.StrictMode>
	);
}

export default App;
