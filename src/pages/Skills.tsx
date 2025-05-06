import { motion } from "framer-motion";

const Skills = () => {
	const Slider = ({
		title,
		percentage,
	}: {
		title: string;
		percentage: number;
	}) => (
		<div className='relative w-full'>
			<p className='pb-2 text-sm sm:text-base font-medium flex justify-between'>
				<span>{title}</span>
				<span className='text-[#c2718c] text-xs sm:text-sm'>
					{percentage}%
				</span>
			</p>
			<section className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-[#eacdda] relative overflow-hidden'>
				<motion.div
					className='bg-[#d59cb5] h-2.5 rounded-full'
					initial={{ width: 0 }}
					animate={{ width: `${percentage}%` }}
					transition={{ duration: 1.5, ease: "easeInOut" }}
				/>
			</section>
			<span
				className='absolute -bottom-3 text-pink-500 text-lg sm:text-xl animate-pulse'
				style={{ left: `calc(${percentage}% - 8px)` }}
			>
				❤︎
			</span>
		</div>
	);

	return (
		<div className='flex items-center justify-center px-4 py-10 sm:px-10'>
			<div className='w-full max-w-5xl space-y-6 sm:space-y-8 p-6 sm:p-10 rounded-3xl border-2 border-dashed border-[#cb83a3] shadow-sm shadow-[#c495aa] bg-white dark:bg-[#fff7f9]'>
				<Slider title='HTML & CSS' percentage={90} />
				<Slider title='JavaScript' percentage={85} />
				<Slider title='TypeScript' percentage={80} />
				<Slider title='React.JS' percentage={80} />
				<Slider title='Redux' percentage={70} />
				<Slider title='Sass, TailwindCSS, MUI' percentage={90} />
				<Slider title='RESTful API' percentage={50} />
				<Slider title='GIT' percentage={50} />
			</div>
		</div>
	);
};

export default Skills;
