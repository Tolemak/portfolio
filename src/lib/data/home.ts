import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Kamil';

export const lastName = 'Gałkowski';

export const description =
	"I'm a Fullstack Developer with a passion for building robust web applications and integrating APIs. With expertise in PHP, Symfony, JavaScript, Bootstrap, Python, and SQL, I enjoy bringing creative solutions to complex problems and delivering high-quality software solutions.";

export const links: Array<{ platform: Platform; link: string }> = [
	{
		platform: Platform.GitHub,
		link: 'https://github.com/Tolemak'
	},
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/kamil-ga%C5%82kowski-544a781aa/'
	},
	{
		platform: Platform.Email,
		link: 'tolemak.pancreas694@slmail.me'
	}
];

export const skills = getSkills('js', 'css', 'html', 'reactjs', 'sass', 'svelte', 'ts');
