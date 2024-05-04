import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'software-freelance-junior',
		company: 'Self-employed',
		description: 'Development and maintenance of a web application combining ERP and CRM. Creating new functionalities and integrations with REST API in response to customer needs.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2020, 8, 1), to: new Date() },
		skills: getSkills('html', 'css', 'js', 'php', 'sql', 'symfony', 'bootstrap', 'twig', 'python'),
		name: 'Web Developer',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating awesome applications for customers.'
	}
];

export const title = 'Experience';
