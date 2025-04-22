import React, { useEffect, useState } from "react";

const MoonPhaseScroller = () => {
	const [scrollIndex, setScrollIndex] = useState(0);

	const moonPhases = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"];

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const maxScroll = document.body.scrollHeight - window.innerHeight;
			const percentage = scrollTop / maxScroll;
			const index = Math.min(
				moonPhases.length - 1,
				Math.floor(percentage * moonPhases.length)
			);
			setScrollIndex(index);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className='fixed top-4 left-4 z-50 text-4xl md:text-6xl transition-opacity duration-500'>
			<span className='select-none drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]'>
				{moonPhases[scrollIndex]}
			</span>
		</div>
	);
};

export default MoonPhaseScroller;

// const [darkMode, setDarkMode] = useState(true);

{
	/* <>
	<MoonPhaseScroller />
	<div
		className={
			darkMode ? "bg-[#1e1e2f] text-white" : "bg-[#fefefe] text-[#1e1e2f]"
		}
	>

		<div className='absolute top-4 right-4 z-50'>
			<button
				onClick={() => setDarkMode(!darkMode)}
				className={`text-2xl p-2 rounded-full shadow-lg transition duration-300 
            ${
				darkMode
					? "text-yellow-300 hover:text-yellow-400"
					: "text-indigo-600 hover:text-indigo-800"
			}`}
			>
				{darkMode ? <p>Sun</p> : <p>Moon</p>}
			</button>
		</div>
	
		<section className='min-h-screen flex flex-col justify-center items-center text-center px-4'>
			<h1 className='text-5xl md:text-6xl font-bold mb-4'>
				Hi, I’m Monali 🌙
			</h1>

			<h1 className='text-4xl font-bold text-center pt-20 text-indigo-100'>
				<Typewriter
					words={[
						"Hi, I'm Monali.",
						"I build dreamy interfaces under moonlight.",
						"React Dev. Dreamer. Moonchild. 🌙",
					]}
					loop={true}
					cursor
					cursorStyle='|'
					typeSpeed={70}
					deleteSpeed={50}
					delaySpeed={1500}
				/>
			</h1>
			<p className='text-xl md:text-2xl mb-6 max-w-xl'>
				A Front-End Developer who dreams in code and moonlight
			</p>
			<div className='space-x-4'>
				<button className='bg-[#b8b8ff] text-[#1e1e2f] px-6 py-2 rounded-xl hover:shadow-lg transition'>
					View Work
				</button>
				<button className='border border-[#b8b8ff] px-6 py-2 rounded-xl hover:bg-[#b8b8ff33] transition'>
					Download Resume
				</button>
			</div>
		</section>

	
		<section className='px-8 py-20 bg-[#2b2d42] text-center'>
			<h2 className='text-3xl font-semibold mb-6'>About Me</h2>
			<p className='text-lg max-w-2xl mx-auto'>
				✨ Pisces soul | 2.6 Yrs in React | Artist at Heart
				<br />I craft elegant interfaces with clean code. I believe
				design is emotion, and code is the poetry behind it.
			</p>
		</section>


		<section className='px-8 py-20 bg-[#1e1e2f]'>
			<h2 className='text-3xl font-semibold text-center mb-10'>
				Projects
			</h2>
			<div className='grid md:grid-cols-3 gap-8'>
				{[1, 2, 3].map((_, i) => (
					<div
						key={i}
						className='bg-[#2b2d42] rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300'
					>
						<h3 className='text-xl font-semibold mb-2'>
							Project {i + 1}
						</h3>
						<p className='text-sm mb-4'>
							A beautiful React project with dreamy design and
							interactivity.
						</p>
						<div className='text-sm text-[#b8b8ff]'>
							#React #Tailwind
						</div>
					</div>
				))}
			</div>
		</section>

	
		<section className='px-8 py-20 bg-[#2b2d42] text-center'>
			<h2 className='text-3xl font-semibold mb-10'>Skills</h2>
			<div className='flex flex-wrap justify-center gap-6'>
				{[
					"React",
					"Tailwind",
					"JavaScript",
					"HTML",
					"CSS",
					"Framer Motion",
				].map((skill) => (
					<span
						key={skill}
						className='bg-[#b8b8ff33] text-[#b8b8ff] px-4 py-2 rounded-full text-sm'
					>
						{skill}
					</span>
				))}
			</div>
		</section>

		<section className='px-8 py-20 bg-[#1e1e2f] text-center'>
			<h2 className='text-3xl font-semibold mb-6'>Contact Me</h2>
			<p className='mb-6 text-lg'>
				Let’s build something magical together ✨
			</p>
			<div className='flex justify-center gap-6 text-xl'>
				<a
					href='mailto:monali@example.com'
					className='hover:text-[#b8b8ff]'
				>
					 <FaEnvelope /> 
				</a>
				<a
					href='https://github.com'
					target='_blank'
					rel='noopener noreferrer'
					className='hover:text-[#b8b8ff]'
				>
				 <FaGithub /> 
				</a>
				<a
					href='https://linkedin.com'
					target='_blank'
					rel='noopener noreferrer'
					className='hover:text-[#b8b8ff]'
				>
				 <FaLinkedin /> 
				</a>
			</div>
		</section>

	 Footer 
		<footer className='text-center py-6 bg-[#2b2d42] text-sm text-[#dfe4ea]'>
			© 2025 Monali | Built with React ⚛️ & Moonlight 🌙
		</footer>
	</div>
</>; */
}
