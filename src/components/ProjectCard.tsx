import React from "react";
import { ProjectCardProps } from "../Types";

const ProjectCard: React.FC<ProjectCardProps> = ({
	logo,
	title,
	category,
	techStack,
	description,
	setSelectedProject,
}) => {
	const handleClick = () => {
		setSelectedProject({
			logo,
			title,
			category,
			techStack,
			description,
		});
	};
	return (
		<>
			<div
				onClick={handleClick}
				className='w-full max-w-xs border-2 border-dashed border-[#cb83a3] rounded-3xl  shadow-md bg-white hover:scale-95 hover:shadow-lg hover:shadow-[#c48aa0] transition-all duration-300 cursor-pointer'
			>
				<div className='h-64'>
					<img
						src={logo}
						alt={`${title} logo`}
						className='w-full h-full object-contain p-2'
					/>
				</div>
				<div className='px-5 py-4 bg-[#f9eef3] border-t-2 rounded-b-3xl border-[#cb83a3] border-dashed'>
					<h2 className='text-lg uppercase font-semibold text-[#6b3e54]'>
						{title}
					</h2>
					<p className='text-sm text-[#b57c98]'>{category}</p>
				</div>
			</div>
		</>
	);
};

export default ProjectCard;
