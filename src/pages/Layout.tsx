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
			className={`min-h-screen grid grid-rows-[auto_1fr_auto] px-4 font-JosefinSans
        ${
			darkMode
				? "bg-[#f3e8e3] text-[#5a2a2a]"
				: "bg-[#fff0f5] text-[#5a2a2a]"
		}`}
		>
			<NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
			<div className='overflow-y-auto flex-1'>
				<Outlet />
			</div>
			<footer className='text-xs sm:text-sm md:text-base flex items-center justify-end py-4'>
				<p>ⓒ Ruttika Jadhav {new Date().getFullYear()} 🩷</p>
			</footer>
		</div>
	);
};

export default Layout;
