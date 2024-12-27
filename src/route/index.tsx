import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Portfolio from "../pages/Portfolio";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />}>
				<Route index element={<Navigate to='about' />} />
				<Route path='about' element={<About />} />
				<Route path='skills' element={<Skills />} />
				<Route path='portfolio' element={<Portfolio />} />
			</Route>
		</Routes>
	);
};

export default AppRoutes;
