import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = ({
	darkMode,
	setDarkMode,
}: {
	darkMode: boolean;
	setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	return (
		<div
			className={`h-[100vh] grid grid-rows-[10%_auto_5%] px-16 font-JosefinSans  ${
				darkMode
					? "bg-[#f3e8e3] text-[#5a2a2a]"
					: "bg-[#fff0f5] text-[#5a2a2a]"
			}`}
		>
			<NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
			<Outlet />
			<footer className='text-s flex items-center justify-end'>
				<p>ⓒ Ruttika Jadhav {new Date().getFullYear()} 🩷</p>
			</footer>
		</div>
	);
};

export default Layout;
