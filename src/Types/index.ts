export interface ProjectData {
	logo: string;
	title: string;
	category: string;
	techStack: string[];
	description: string[];
}

export interface ProjectCardProps extends ProjectData {
	setSelectedProject: (project: ProjectData) => void;
}
