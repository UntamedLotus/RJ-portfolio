import { Outlet } from "react-router-dom";
import BasicInfo from "../components/BasicInfo";
import NavBar from "../components/NavBar";

const Home = () => {
	return (
		<div className='grid grid-cols-[25%_auto] h-full p-8 gap-10'>
			<BasicInfo />
			<div className='bg-zinc-800 rounded-3xl border border-zinc-700 text-white'>
				<NavBar />
				<div className='p-10'>
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default Home;
