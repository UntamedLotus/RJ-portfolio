import HealinkLogo from "../assets/Healink.jpeg";
import ViaBrokerLogo from "../assets/ViaBroker.png";
import ScrapcartLogo from "../assets/Scrapcart.png";
import AlcroenLogo from "../assets/app-title.png";
import { motion } from "framer-motion";
// import { useState } from "react";

const Portfolio = () => {
	interface ProjectCardProps {
		logo: string;
		title: string;
		category: string;
		description?: string[];
		details?: string[];
	}

	const ProjectCard = ({
		logo,
		title,
		category,
		description,
	}: // details,
	ProjectCardProps) => {
		// const [isOpen, setIsOpen] = useState(false);

		return (
			<>
				<motion.section
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					// onClick={() => details && setIsOpen(true)}
					className='cursor-pointer border border-[#cb83a3] rounded-3xl shadow-sm shadow-[#c495aa] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-200 bg-white'
				>
					<div className='w-full h-52 bg-white'>
						<img
							src={logo}
							alt={`${title} logo`}
							className='w-full h-full object-content rounded-t-3xl'
						/>
					</div>
					<section className='px-5 py-4 bg-[#f9eef3] border-t border-[#cb83a3]'>
						<h2 className='text-lg uppercase font-semibold text-[#6b3e54]'>
							{title}
						</h2>
						<p className='text-sm text-[#b57c98]'>{category}</p>
						{description && (
							<ul className='mt-2 list-disc list-inside text-[#c47797] space-y-1'>
								{description?.map((item, index) => (
									<li
										key={index}
										className="before:content-['\1F496'] before:mr-2"
									>
										{item}
									</li>
								))}
							</ul>
						)}
					</section>
				</motion.section>

				{/* {details && (
					<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
						<div className='space-y-4 text-left'>
							<h2 className='text-2xl font-bold text-[#cb83a3]'>
								{title}
							</h2>
							<ul className='list-disc list-inside space-y-2 text-[#6b3e54]'>
								{details.map((point, i) => (
									<li
										key={i}
										className="before:content-['\1F338'] before:mr-2"
									>
										{point}
									</li>
								))}
							</ul>
						</div>
					</Modal>
				)} */}
			</>
		);
	};

	return (
		<div className='flex items-center justify-center py-10'>
			<div className='w-11/12 lg:w-3/4'>
				<section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
					<ProjectCard
						logo={HealinkLogo}
						title='HeaLink'
						category='Healthcare'
					/>
					<ProjectCard
						logo={ViaBrokerLogo}
						title='Via Broker'
						category='Real Estate'
					/>
					<ProjectCard
						logo={ScrapcartLogo}
						title='Scrap cart'
						category='B2C / E-Commerce'
					/>
					<ProjectCard
						logo={AlcroenLogo}
						title='Alcroen'
						category='Healthcare'
					/>
				</section>
			</div>
		</div>
	);
};

export default Portfolio;
