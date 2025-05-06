import { useState } from "react";
import { ProjectData } from "../Types";
import { projectList } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ProjectDetailsModal from "../components/ProjectDetailsModal";

const Portfolio = () => {
	const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
		null
	);

	return (
		<>
			<div className='min-h-screen px-6 py-20'>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto'>
					{projectList.map((project, index) => (
						<div
							key={index}
							className='relative group transition-all duration-500'
						>
							<ProjectCard
								logo={project?.logo}
								title={project?.title}
								category={project?.category}
								techStack={project?.techStack}
								description={project?.description}
								setSelectedProject={setSelectedProject}
							/>

							<div className='absolute inset-0 rounded-3xl bg-pink-200 opacity-0 group-hover:opacity-10 transition-all duration-500 blur-2xl pointer-events-none'></div>
						</div>
					))}
				</div>
			</div>

			{selectedProject && (
				<ProjectDetailsModal
					selectedProject={selectedProject}
					setSelectedProject={setSelectedProject}
				/>
			)}
		</>
	);
};

export default Portfolio;
