import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "../pages/Layout";
import Home from "../pages/Home";
import { useState } from "react";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Portfolio from "../pages/Portfolio";

const AppRoutes = () => {
	const [darkMode, setDarkMode] = useState(true);
	return (
		<Routes>
			<Route
				path='/'
				element={
					<Layout darkMode={darkMode} setDarkMode={setDarkMode} />
				}
			>
				<Route index element={<Navigate to='home' />} />
				<Route path='home' element={<Home />} />
				<Route path='about' element={<About />} />
				<Route path='skills' element={<Skills />} />
				<Route path='portfolio' element={<Portfolio />} />
			</Route>
		</Routes>
	);
};

export default AppRoutes;
