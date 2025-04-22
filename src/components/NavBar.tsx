import { NavLink, useNavigate } from "react-router-dom";
import { Sun, Moon } from "lucide-react";

const NavBar = ({
	darkMode,
	setDarkMode,
}: {
	darkMode: boolean;
	setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const navigate = useNavigate();

	return (
		<nav className='grid grid-cols-2 text-[#5a2a2a]'>
			<p
				onClick={() => navigate("/")}
				className='p-5 text-2xl capitalize font-bold text-[#cb83a3] cursor-pointer'
			>
				RUTTIKA .
			</p>

			<section className='flex items-center justify-end gap-10 px-10 text-xl'>
				<NavLink
					className={({ isActive }) =>
						`${
							isActive
								? "text-[#5a2a2a] font-semibold"
								: "text-[#cb83a3]"
						}`
					}
					to='home'
				>
					Home
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						`${
							isActive
								? "text-[#5a2a2a] font-semibold"
								: "text-[#cb83a3]"
						}`
					}
					to='about'
				>
					About
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						`${
							isActive
								? "text-[#5a2a2a] font-semibold"
								: "text-[#cb83a3]"
						}`
					}
					to='skills'
				>
					Skills
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						`${
							isActive
								? "text-[#5a2a2a] font-semibold"
								: "text-[#cb83a3]"
						}`
					}
					to='portfolio'
				>
					Portfolio
				</NavLink>

				<button
					onClick={() => setDarkMode(!darkMode)}
					className='p-2 rounded-full bg-[#f9d9d9]/40 border border-[#e7a4b1] hover:bg-[#f9d9d9]/70 transition backdrop-blur-sm'
				>
					{darkMode ? <Sun size={20} /> : <Moon size={20} />}
				</button>
			</section>
		</nav>
	);
};

export default NavBar;
