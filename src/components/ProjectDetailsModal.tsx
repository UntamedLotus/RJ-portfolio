import React from "react";
import Modal from "./Modal";
import { ProjectData } from "../Types";

const ProjectDetailsModal = ({
	selectedProject,
	setSelectedProject,
}: {
	selectedProject: ProjectData | null;
	setSelectedProject: React.Dispatch<
		React.SetStateAction<ProjectData | null>
	>;
}) => {
	return (
		<Modal
			isOpen={!!selectedProject}
			onClose={() => setSelectedProject(null)}
		>
			{selectedProject && (
				<>
					<header className='flex items-center gap-5'>
						<img
							src={selectedProject?.logo}
							alt={`${selectedProject?.title} logo`}
							className='w-28 h-28 object-contain bg-white rounded-2xl border-2 border-dashed border-[#cb83a3]'
						/>
						<section>
							<h3 className='text-xl font-semibold'>
								{selectedProject?.title}
							</h3>
							<p className='text-[#c2718c] pb-2'>
								category - {selectedProject?.category}
							</p>

							<section className='flex flex-wrap gap-2 text-sm '>
								{selectedProject?.techStack?.map((t, i) => (
									<span
										key={i + 1}
										className='bg-[#d68ea3] px-2 text-white rounded-md'
									>
										{t}
									</span>
								))}
							</section>
						</section>
					</header>

					{selectedProject?.description && (
						<ul className='mt-5 pt-5 list-inside text-sm text-[#c47797] space-y-1 border-t-2 border-dashed border-[#cb83a3]'>
							{selectedProject?.description.map((item, idx) => (
								<li
									key={idx}
									className="before:content-['\1FA77'] before:mr-2 before:opacity-50"
								>
									{item}
								</li>
							))}
						</ul>
					)}
					<div className='mt-4 text-right'>
						<button
							className='px-6 py-2 rounded-lg border-2 border-[#e7a4b1] text-[#c2718c] hover:bg-[#d68ea3] hover:text-white transition shadow-md'
							onClick={() => setSelectedProject(null)}
						>
							Close
						</button>
					</div>
				</>
			)}
		</Modal>
	);
};

export default ProjectDetailsModal;
