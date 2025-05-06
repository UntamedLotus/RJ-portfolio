import { NavLink, useNavigate } from "react-router-dom";
import { Sun, Moon } from "lucide-react";

const navLinks = ["home", "about", "skills", "portfolio"];

const NavBar = ({
	darkMode,
	setDarkMode,
}: {
	darkMode: boolean;
	setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const navigate = useNavigate();

	return (
		<nav className='flex flex-col sm:flex-row items-center justify-between py-4 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-32 text-[#5a2a2a] gap-y-4 sm:gap-y-0'>
			<p
				onClick={() => navigate("/")}
				className='text-2xl sm:text-3xl font-bold text-[#cb83a3] cursor-pointer'
			>
				RUTTIKA .
			</p>

			<section className='flex flex-wrap justify-center sm:justify-end items-center gap-4 sm:gap-6 md:gap-10 text-base sm:text-lg md:text-xl'>
				{navLinks.map((name) => (
					<NavLink
						key={name}
						to={name}
						className={({ isActive }) =>
							isActive
								? "text-[#5a2a2a] font-semibold"
								: "text-[#cb83a3]"
						}
					>
						{`${name.charAt(0).toUpperCase()}${name.slice(1)}`}
					</NavLink>
				))}

				{/* Optional: Dark mode toggle */}
				{/* <button
					onClick={() => setDarkMode(!darkMode)}
					className='p-2 rounded-full bg-[#f9d9d9]/40 border border-[#e7a4b1] hover:bg-[#f9d9d9]/70 transition backdrop-blur-sm'
				>
					{darkMode ? <Sun size={20} /> : <Moon size={20} />}
				</button> */}
			</section>
		</nav>
	);
};

export default NavBar;
