import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
	const location = useLocation();
	const [activePath, setActivePath] = useState(location.pathname);

	useEffect(() => {
		setActivePath(location.pathname);
	}, [location]);

	return (
		<nav className='grid grid-cols-2'>
			<p className='p-5 text-3xl capitalize font-semibold text-[#cb83a3]'>
				{activePath?.slice(1)}
			</p>

			<section className='flex items-center justify-between px-10 border-b border-zinc-700 border-l py-6 rounded-bl-3xl bg-zinc-700 text-xl'>
				<NavLink
					className={({ isActive }) =>
						`${
							isActive
								? "text-[#b6517e] font-semibold"
								: "text-white"
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
								? "text-[#b6517e] font-semibold"
								: "text-white"
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
								? "text-[#b6517e] font-semibold"
								: "text-white"
						}`
					}
					to='portfolio'
				>
					Portfolio
				</NavLink>
			</section>
		</nav>
	);
};

export default NavBar;
