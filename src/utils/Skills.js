// utils/skills.js
import { TbBrandTailwind } from 'react-icons/tb';

export const skills = [
	{
		category: 'Languages',
		items: [
			{ name: 'HTML', iconClass: 'fa-brands fa-html5' },
			{ name: 'JavaScript', iconClass: 'fa-brands fa-js' },
			{
				name: 'TypeScript',
				iconClass: 'devicon-typescript-plain',
				learning: true,
			},
		],
	},
	{
		category: 'Framework_Frontend',
		items: [
			{ name: 'ReactJS', iconClass: 'fa-brands fa-react' },
			{
				name: 'NextJS',
				iconClass: 'devicon-nextjs-original-wordmark',
				learning: true,
			},
			{
				name: 'React Native',
				iconClass: 'fa-brands fa-react',
				learning: true,
			},
			{
				name: 'Redux',
				iconClass: 'fa-brands fa-react',
				learning: false,
			},
		],
	},
	{
		category: 'Framework_Backend',
		items: [
			{ name: 'FireStore', iconClass: 'devicon-firebase-plain' },
			{ name: 'Express', iconClass: 'devicon-express-original' },
			{ name: 'NodeJS', iconClass: 'devicon-nodejs-plain-wordmark' },
		],
	},
	{
		category: 'Database',
		items: [
			{ name: 'MongoDB', iconClass: 'devicon-mongodb-plain' },
			{ name: 'Firebase', iconClass: 'devicon-firebase-plain' },
		],
	},
	{
		category: 'Tools',
		items: [
			{ name: 'Git', iconClass: 'devicon-git-plain' },
			{ name: 'GitHub', iconClass: 'devicon-github-original colored' },
		],
	},
	{
		category: 'Framework.CSS',
		items: [
			{ name: 'Material UI', iconClass: 'devicon-materialui-plain' },
			{ name: 'CSS', iconClass: 'devicon-css3-plain' },
			{
				name: 'React Bootstrap',
				iconClass: 'devicon-reactbootstrap-original',
			},
			{ name: 'Tailwind CSS', iconComponent: TbBrandTailwind },
		],
	},
];
