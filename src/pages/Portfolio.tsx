import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { useState } from "react";
import { ProjectData } from "../Types";
import ProjectCard from "../components/ProjectCard";
import ProjectDetailsModal from "../components/ProjectDetailsModal";
import { projectList } from "../data/projects";

const Portfolio = () => {
	const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
		null
	);

	return (
		<>
			<div className='flex flex-col items-center justify-center relative w-full h-full'>
				<div className='w-full px-6 md:px-12 max-w-6xl'>
					<Swiper
						modules={[Pagination]}
						spaceBetween={50}
						grabCursor={true}
						breakpoints={{
							640: { slidesPerView: 1 },
							768: { slidesPerView: 2 },
							1024: { slidesPerView: 3 },
						}}
						pagination={{
							clickable: true,
						}}
						centeredSlides={true}
						className='mySwiper h-96'
					>
						{projectList.map((project, index) => (
							<SwiperSlide key={index}>
								<ProjectCard
									logo={project?.logo}
									title={project?.title}
									category={project?.category}
									techStack={project?.techStack}
									description={project?.description}
									setSelectedProject={setSelectedProject}
								/>
							</SwiperSlide>
						))}
					</Swiper>
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
