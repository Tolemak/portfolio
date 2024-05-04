import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelor degree of biomedical engineering',
		description: '',
		location: 'Poland, Gdańsk',
		logo: Assets.Unknown,
		name: '',
		organization: 'Gdańsk University of Technology',
		period: { from: new Date(2017, 10, 1), to: new Date(2021, 2, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['Apps Development', 'Algebra', 'Biomedicine']
	},
	{
		degree: 'Master degree of IT project management',
		description: '',
		location: 'Poland, Gdańsk',
		logo: Assets.Unknown,
		name: '',
		organization: 'The Gdańsk School of Banking',
		period: { from: new Date(2021, 3, 1), to: new Date(2022, 9, 1) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['IT Managment', 'CRM', 'ITIL']
	}
];

export const title = 'Education';
