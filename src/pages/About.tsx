import React from "react";
import {
	FolderCode,
	CodeXml,
	LaptopMinimal,
	SquareTerminal,
} from "lucide-react";
import { motion } from "framer-motion";

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
		<motion.section
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3, ease: "easeOut" }}
			whileHover={{
				scale: 1.03,
				boxShadow: "0 10px 20px rgba(203, 131, 163, 0.25)",
			}}
			className='border border-[#cb83a3] p-7 rounded-3xl shadow-sm shadow-[#c495aa] space-y-5 transition-all duration-300 bg-white dark:bg-[#fdf6f9]'
		>
			<section className='space-y-4 flex items-center gap-5'>
				<span className='text-2xl'>{icon}</span>
				<h2 className='text-xl font-semibold'>{title}</h2>
			</section>
			<p className='leading-7 text-[#cb83a3]'>{content}</p>
		</motion.section>
	);

	return (
		<div className='flex items-center justify-center'>
			<div className='w-3/4 text-[#5a2a2a] text-lg'>
				<p>
					As a software developer with over two years of expertise in
					building robust React applications, I excel in leveraging
					JavaScript, TypeScript, and RESTful APIs to create seamless
					user experiences. I thrive on solving complex problems and
					collaborating within dynamic teams to deliver impactful
					software solutions.
				</p>

				<div className='grid grid-cols-4 mt-8 gap-5'>
					<Card
						icon={<FolderCode />}
						title='Building Scalable Solutions'
						content='Crafting robust frontend architectures that scale
					effortlessly, ensuring seamless performance and reliability
					for web applications.'
					/>

					<Card
						icon={<LaptopMinimal />}
						title='Enhancing User Experience'
						content='Designing intuitive interfaces with a focus on
						accessibility and responsiveness to deliver exceptional
						user engagement across devices.'
					/>

					<Card
						icon={<SquareTerminal />}
						title='Optimizing Performance'
						content='Implementing advanced techniques like lazy loading,
						leveraging the latest tools and frameworks and efficient
						state management to ensure lightning-fast applications.'
					/>

					<Card
						icon={<CodeXml />}
						title='RESTful API Integration'
						content='Integrating RESTful APIs with a focus on security, and
						extensibility for smooth working across platforms.'
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
