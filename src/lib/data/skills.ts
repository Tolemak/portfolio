import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description: `<p>
			1. JavaScript UX Specialist:<br>
			   Proficient in leveraging JavaScript to craft seamless user experiences, I specialize in building dynamic interfaces that engage and delight users. My expertise lies in creating fluid transitions, interactive elements, and intuitive navigation, enhancing overall usability and satisfaction.
			</p>
			<br>
			<p>
			2. Data Preloading Maestro:<br>
			   With a knack for optimizing performance, I excel in using JavaScript to preload data, ensuring swift access to content and resources. Whether it's prefetching images, loading essential assets, or fetching data asynchronously, I employ efficient techniques to minimize load times and enhance the user experience.
			<p>
			<br>
			</p>
			3. Interactive Frontend Developer:<br>
			   As an adept JavaScript developer, I focus on building interactive frontend experiences that captivate users. From designing responsive layouts to implementing animated transitions and real-time updates, I leverage JavaScript to create engaging interfaces that keep users immersed and engaged.
			</p>
			<br>
			<p>
			4. Efficient Data Loader:<br>
			   Specializing in data preloading techniques, I use JavaScript to seamlessly fetch and load data ahead of time, optimizing application performance. By prefetching critical resources, caching frequently accessed data, and utilizing lazy loading strategies, I ensure that users have instant access to the information they need, resulting in a smooth and responsive user experience.
			</p>`,
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'php',
		color: 'blue',
		description: `<p>1. PHP REST API Architect:<br>
			   Proficient in PHP for REST API integrations, I specialize in designing and developing robust API endpoints to facilitate seamless communication between applications. Leveraging PHP frameworks like Laravel or Symfony, I ensure secure authentication, data validation, and error handling, enabling smooth data exchange and interoperability.
			</p>
			<br>
			<p>	
			2. Data Preprocessing Prodigy:<br>
			   With PHP as my tool of choice, I excel in preprocessing data before SQL operations, ensuring data consistency and integrity. Whether it's sanitizing user input, validating data formats, or transforming data structures, I leverage PHP's versatile functions and libraries to prepare data for efficient storage and retrieval in SQL databases.
			</p>
			<br>
			<p>	
			3. API Integration Expert:<br>
			   As a skilled PHP developer, I focus on integrating RESTful APIs seamlessly into applications, enabling communication with external services and systems. Using PHP's cURL extension or HTTP client libraries, I establish connections, send requests, and handle responses, ensuring smooth data exchange and synchronization between disparate systems.
			</p>
			<br>
			<p>	
			4. SQL Data Pipeline Maestro:<br>
			   Specializing in PHP for preprocessing data before SQL operations, I create efficient data pipelines to optimize database performance and reliability. Leveraging PHP's data manipulation capabilities, I cleanse, transform, and validate data before inserting or updating records in SQL databases, ensuring data quality and consistency.
			</p>`,
		logo: Assets.PHP,
		name: 'PHP',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'python',
		color: 'blue',
		description: `<p>1. Python Data Wizard:<br>
			   Proficient in Python for data processing, I specialize in extracting insights from raw datasets, transforming them into meaningful information. Whether it's cleaning, analyzing, or visualizing data, I leverage Python's powerful libraries like Pandas and NumPy to efficiently handle large datasets and derive actionable insights.
			   </p>
			   <br>
			   <p>			
			2. Automation Script Guru:<br>
			   With Python as my tool of choice, I excel in creating automation scripts to streamline repetitive tasks and workflows. From automating file management and data entry to scheduling routine processes, I harness Python's simplicity and versatility to save time and increase productivity.
			   </p>
			   <br>
			   <p>
			3. Data Processing Maestro:<br>
			   As a skilled Python developer, I focus on processing and manipulating data with precision and efficiency. Using libraries like pandas, numpy, and scikit-learn, I clean, preprocess, and analyze data to extract valuable insights and drive informed decision-making.
			   </p>
			   <br>
			   <p>
			4. Efficient Script Developer:<br>
			   Specializing in automation and scripting with Python, I create tailored solutions to simplify complex tasks and workflows. Whether it's automating system maintenance, deploying software updates, or orchestrating workflows, I leverage Python's rich ecosystem of libraries and frameworks to develop robust and scalable automation scripts.
			   </p>`,
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'sass',
		color: 'pink',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.Sass,
		name: 'Sass',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'bootstrap',
		color: 'violet',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.Bootstrap,
		name: 'Bootstrap',
		category: 'library'
	}),
	defineSkill({
		slug: 'svelte',
		color: 'orange',
		description: svelte,
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'library'
	})
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			console.log(item.category);
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
