import { motion } from "framer-motion";

const Skills = () => {
	const Slider = ({
		title,
		percentage,
	}: {
		title: string;
		percentage: number;
	}) => (
		<div className='relative'>
			<p className='pb-2 '>
				{title}{" "}
				<span className='text-[#c2718c] text-sm'>{percentage}%</span>
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
				className='absolute -bottom-3.5 text-pink-500 text-2xl animate-pulse'
				style={{ left: `calc(${percentage}% - 8px)` }}
			>
				❤︎
			</span>
		</div>
	);

	return (
		<div className=' flex items-center justify-center'>
			<div className='w-3/4 rounded-3xl space-y-7 border border-[#cb83a3] p-7 shadow-sm shadow-[#c495aa]'>
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
