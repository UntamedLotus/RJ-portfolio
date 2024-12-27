import React from "react";

const About = () => {
	const Card = ({
		icon,
		title,
		content,
	}: {
		icon: React.ReactNode;
		title: string;
		content: string;
	}) => (
		<section className='border border-zinc-700 p-7 rounded-3xl shadow-sm shadow-slate-700 flex items-start gap-5'>
			<span className='text-[#b6517e]'>{icon}</span>
			<section className='space-y-4'>
				<h2 className='text-xl font-semibold'>{title}</h2>
				<p className='leading-7'>{content}</p>{" "}
			</section>
		</section>
	);

	return (
		<div className='px-10'>
			<p className='pt-5'>
				As a software developer with over two years of expertise in
				building robust React applications, I excel in leveraging
				JavaScript, TypeScript, and RESTful APIs to create seamless user
				experiences. I thrive on solving complex problems and
				collaborating within dynamic teams to deliver impactful software
				solutions.
			</p>

			<div className='grid grid-cols-2 mt-8 gap-5'>
				<Card
					icon={
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke-width='1.5'
							stroke='currentColor'
							className='size-10'
						>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
							/>
						</svg>
					}
					title='Building Scalable Solutions'
					content='Crafting robust frontend architectures that scale
					effortlessly, ensuring seamless performance and reliability
					for web applications.'
				/>

				<Card
					icon={
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke-width='1.5'
							stroke='currentColor'
							className='size-10'
						>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25'
							/>
						</svg>
					}
					title='Enhancing User Experience'
					content='Designing intuitive interfaces with a focus on
						accessibility and responsiveness to deliver exceptional
						user engagement across devices.'
				/>

				<Card
					icon={
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke-width='1.5'
							stroke='currentColor'
							className='size-10'
						>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z'
							/>
						</svg>
					}
					title='Optimizing Performance'
					content='Implementing advanced techniques like lazy loading,
						leveraging the latest tools and frameworks and efficient
						state management to ensure lightning-fast applications.'
				/>

				<Card
					icon={
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke-width='1.5'
							stroke='currentColor'
							className='size-10'
						>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5'
							/>
						</svg>
					}
					title='RESTful API Integration'
					content='Integrating RESTful APIs with a focus on security, and
						extensibility for smooth working across platforms.'
				/>
			</div>
		</div>
	);
};

export default About;
