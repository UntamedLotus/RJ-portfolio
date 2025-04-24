import { ProjectData } from "../Types";

import HealinkLogo from "../assets/Healink.jpeg";
import ViaBrokerLogo from "../assets/ViaBroker.png";
import ScrapcartLogo from "../assets/Scrapcart.png";
import AlcroenLogo from "../assets/app-title.png";
import MaptyLogo from "../assets/MaptyLogo.png";
import WildOasisLogo from "../assets/WildOasis.png";
import WorldWiseLogo from "../assets/WorldWise.png";

export const projectList: ProjectData[] = [
	{
		logo: HealinkLogo,
		title: "HeaLink",
		category: "Healthcare",
		techStack: [
			"React",
			"Redux",
			"TailwindCSS",
			"TypeScript",
			"chart.js",
			"Google maps",
			"FHIR",
		],
		description: [
			"Developed a healthcare product that meets ABDM compliance standards, connecting patients and doctors through user-friendly applications.",
			"Provided easy access to diverse healthcare services from our network of experienced professionals.",
			"Developed React-based application from scratch incorporating key features like dynamic role-based mechanism, FHIR and HMIS features of ABDM ABHA flow.",
			"Integrated the pre-existing ABDM APIs adhering to the standards laid down by the National Health Authority.",
			"Implemented advanced state management techniques using Redux and Context API to ensure efficient data handling.",
		],
	},
	{
		logo: ViaBrokerLogo,
		title: "Via Broker",
		category: "Real Estate",
		techStack: [
			"React",
			"Redux",
			"TypeScript",
			"Styled components",
			"Google maps",
		],
		description: [
			"Developed a real estate brokerage application starting from role-based signup, allowing seamless onboarding of brokers, buyers, and sellers.",
			"Implemented property listing modules for both sellers (with image uploads and detailed info) and buyers (with advanced filter options like location, price, etc.).",
			"Built proposal creation and sharing flow for brokers, enabling them to send curated property deals directly to clients.",
			"Integrated Google Maps to support the 'Near Me' feature, implementing a custom algorithm to handle location-based filtering with distance tracking.",
			"Used Twilio Chat API to enable real-time messaging between brokers and clients within the platform.",
			"Utilized Redux for efficient state management and Styled Components for modular, reusable UI styling.",
		],
	},
	{
		logo: ScrapcartLogo,
		title: "Scrap cart",
		category: "B2C / E-Commerce",
		techStack: ["React", "Redux", "MaterialUI"],
		description: [
			"Built an end-to-end user journey for customers to explore and purchase scrap materials, starting from OTP-based onboarding to order confirmation.",
			"Implemented dynamic search and filter features to allow users to browse scrap materials by type, category, and condition.",
			"Designed detailed scrap overview pages using Material UI, ensuring clean UI and a seamless user experience.",
			"Integrated user profile management including order history, personal details, and preferences for a personalized platform experience.",
			"Used React and Redux to structure scalable frontend architecture and ensure consistent state management across modules.",
		],
	},
	{
		logo: AlcroenLogo,
		title: "Alcroen",
		category: "Healthcare",
		techStack: [
			"Next.js",
			"zustand",
			"react-d3-tree",
			"TailwindCSS",
			"Paypal",
			"Typescript",
		],
		description: [
			"Implemented image upload and preview functionality, enabling the system to process inputs through a trained machine learning model for disease detection.",
			"Built dynamic result modules to display predicted skin conditions along with AI-suggested treatments and medications.",
			"Developed a secure role-based mechanism to manage permissions for users, doctors, and administrators.",
			"Integrated PayPal as the payment gateway for consultation and premium features using seamless, user-friendly flows.",
			"Used Next.js for optimized routing and SSR, Zustand for lightweight state management, and Tailwind CSS for clean and responsive UI design.",
			"Visualized skin condition classifications and AI inference flows using custom tree diagrams with react-d3-tree and TypeScript for type-safe development.",
		],
	},
	{
		logo: MaptyLogo,
		title: "Mapty",
		category: "Health & fitness",
		techStack: ["html5", "css", "JavaScript", "leaflet.js"],
		description: [
			"Developed a location-based fitness tracking application focused on running and cycling workouts using Leaflet.js and browser geolocation API.",
			"Enabled users to log and visualize workouts directly on the map, displaying routes and key stats such as distance and duration.",
			"Integrated real-time location detection through the browser using Liflet library.",
			"Built the UI using HTML, CSS, and JavaScript, ensuring a clean layout for desktop users.",
			"Practiced and enhanced skills in API handling and asynchronous JavaScript as part of the learning journey.",
		],
	},
	{
		logo: WildOasisLogo,
		title: "Wild Oasis",
		category: "B2C / E-Commerce",
		techStack: ["React", "react query", "recharts.js", "context API"],
		description: [
			"Built a feature-rich staff-side web dashboard for hotel system management using React.js, React Query, and Context API.",
			"Developed dynamic charts and statistics dashboards for visualizing bookings, sales, check-ins, and more using Recharts.",
			"Created a detailed booking list module with filtering and tabbed views for easy access and efficient staff handling.",
			"Designed and implemented cabin management features, enabling staff to add, edit, duplicate, and delete cabin details along with image handling.",
			"Practiced modern data-fetching and caching techniques with React Query for efficient server state management.",
		],
	},

	{
		logo: WorldWiseLogo,
		title: "World Wise",
		category: "Travel",
		techStack: ["React", "RestAPI", "leaflet.js", "tailwindcss"],
		description: [
			"Developed a simple and intuitive web application to track places visited by users around the world using Leaflet.js and React.js.",
			"Implemented interactive map functionality allowing users to drop pins on visited locations, marking their travel footprints.",
			"Enabled users to log city name, date of visit, and personal notes to preserve memories tied to each travel experience.",
			"Used REST APIs to manage and persist travel data, practicing real-world API integration and asynchronous operations.",
		],
	},
];
