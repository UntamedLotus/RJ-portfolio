import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import ContactModal from "../components/ContactModal";

const Home = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<div>
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				className='flex flex-col items-center justify-center h-full text-center'
			>
				<h1 className='text-4xl md:text-6xl uppercase font-bold text-[#c2718c]'>
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
				<p className='mt-4 text-lg md:text-xl text-[#8e4d5d] max-w-xl italic'>
					React frontend developer with a passion for performance,
					pixel-perfection, and polished user experiences.
				</p>
				{/* <motion.div
					className='absolute top-0 left-0 w-full h-full pointer-events-none'
					animate={{ y: [0, -20, 0] }}
					transition={{ repeat: Infinity, duration: 6 }}
				>
					<div className='absolute top-20 left-10 text-pink-300 text-2xl opacity-50'>
						🎀
					</div>
					<div className='absolute top-1/2 right-10 text-pink-500 text-xl opacity-50'>
						✿
					</div>
				</motion.div> */}
				<div className='mt-8 flex gap-4 font-semibold'>
					<button
						type='button'
						onClick={() => setIsOpen(true)}
						className='px-6 py-2 rounded-lg border-2 border-[#e7a4b1] text-[#c2718c] hover:bg-[#d68ea3] hover:text-white transition shadow-md'
					>
						💌 Connect with me!
					</button>
					<a
						href='/public/RUTTIKA JADHAV.pdf'
						download='Ruttika_Resume'
						className='px-6 py-2 rounded-lg bg-[#e7a4b1] text-white hover:bg-[#d68ea3] transition shadow-md'
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
