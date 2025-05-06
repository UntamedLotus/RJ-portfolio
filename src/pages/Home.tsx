import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import ContactModal from "../components/ContactModal";

const Home = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<div className='h-full flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32'>
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				className='flex flex-col items-center text-center w-full max-w-screen-xl'
			>
				<h1 className='text-2xl sm:text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl uppercase font-bold text-[#c2718c]'>
					<Typewriter
						words={[
							"Hello, I'm Ruttika ♡",
							"React Frontend Developer",
						]}
						loop={true}
						cursor
						cursorStyle='♥'
						typeSpeed={40}
						deleteSpeed={40}
						delaySpeed={1400}
					/>
				</h1>

				<p className='mt-4 text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl text-[#8e4d5d] max-w-md sm:max-w-lg md:max-w-xl italic'>
					React frontend developer with a passion for performance,
					pixel-perfection, and polished user experiences.
				</p>

				<div className='mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 font-semibold'>
					<button
						type='button'
						onClick={() => setIsOpen(true)}
						className='px-6 py-2 rounded-lg border-2 border-[#e7a4b1] text-[#c2718c] hover:bg-[#d68ea3] hover:text-white transition shadow-md text-sm md:text-base'
					>
						💌 Connect with me!
					</button>
					<a
						href='/public/RUTTIKA JADHAV.pdf'
						download='Ruttika_Resume'
						className='px-6 py-2 rounded-lg bg-[#e7a4b1] text-white hover:bg-[#d68ea3] transition shadow-md text-sm md:text-base'
					>
						📋 Download CV
					</a>
				</div>
			</motion.div>
			<ContactModal isOpen={isOpen} setIsOpen={setIsOpen} />
		</div>
	);
};

export default Home;
