const Skills = () => {
	const Slider = ({
		title,
		percentage,
	}: {
		title: string;
		percentage: number;
	}) => (
		<div>
			<p className='pb-2 text-sm'>
				{title}{" "}
				<span className='text-slate-400 text-xs'>{percentage}%</span>
			</p>
			<section className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-[#e0b5c8]'>
				<div
					className='bg-[#a12059] h-2.5 rounded-full'
					style={{ width: `${percentage}%` }}
				></div>
			</section>
		</div>
	);

	return (
		<div className='h-full border border-zinc-700 p-10 rounded-3xl space-y-7'>
			<Slider title='HTML & CSS' percentage={90} />
			<Slider title='JavaScript' percentage={85} />
			<Slider title='TypeScript' percentage={80} />
			<Slider title='React.JS' percentage={80} />
			<Slider title='Redux' percentage={70} />
			<Slider title='Sass, TailwindCSS, MUI' percentage={90} />
			<Slider title='RESTful API' percentage={50} />
			<Slider title='GIT' percentage={50} />
		</div>
	);
};

export default Skills;
