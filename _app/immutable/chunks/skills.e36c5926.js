import{A as s}from"./UIcon.a4688a57.js";const d=`# Svelte

---

[\`Svelte\`](https://svelte.dev/) is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members. Svelte is not a monolithic JavaScript library imported by applications: instead, Svelte compiles HTML templates to specialized code that manipulates the DOM directly, which may reduce the size of transferred files and give better client performance. Application code is also processed by the compiler, inserting calls to automatically recompute data and re-render UI elements when the data they depend on is modified. This also avoids the overhead associated with runtime intermediate representations, such as virtual DOM, unlike traditional frameworks (such as React and Vue) which carry out the bulk of their work at runtime, i.e. in the browser.

The compiler itself is written in TypeScript. Its source code is licensed under MIT License and hosted on GitHub.

<br/>

Svelte is :

- compiled : Svelte shifts as much work as possible out of the browser and into your build step. No more manual optimisations — just faster, more efficient apps.
- compact : Write breathtakingly concise components using languages you already know — HTML, CSS and JavaScript. Oh, and your application bundles will be tiny as well.
- complete : Built-in scoped styling, state management, motion primitives, form bindings and more — don't waste time trawling npm for the bare essentials. It's all here.

<br/>

## Example

\`\`\`ts
<script>
    let count = 1;
    $: doubled = count * 2;
<\/script>

<p>{count} * 2 = {doubled}</p>

<button on:click={() => count = count + 1}>Count</button>
\`\`\`

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

> Svelte is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members.
`;function p(e,...t){const n=Object.assign({},e);return Object.keys(n).forEach(a=>{t.includes(a)&&delete n[a]}),n}const i=e=>e,m=[i({name:"Programming Languages",slug:"pro-lang"}),i({name:"Frameworks",slug:"framework"}),i({name:"Libraries",slug:"library"}),i({name:"Langauges",slug:"lang"}),i({name:"Databases",slug:"db"}),i({name:"ORMs",slug:"orm"}),i({name:"DevOps",slug:"devops"}),i({name:"Testing",slug:"test"}),i({name:"Dev Tools",slug:"devtools"}),i({name:"Markup & Style",slug:"markup-style"}),i({name:"Design",slug:"design"}),i({name:"Soft Skills",slug:"soft"})],r=e=>{const t=p(e,"category");return e.category&&(t.category=m.find(n=>n.slug===e.category)),t},l=[r({slug:"js",color:"yellow",description:`<p>
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
			</p>`,logo:s.JavaScript,name:"Javascript",category:"pro-lang"}),r({slug:"php",color:"blue",description:`<p>1. PHP REST API Architect:<br>
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
			</p>`,logo:s.PHP,name:"PHP",category:"pro-lang"}),r({slug:"python",color:"blue",description:`<p>1. Python Data Wizard:<br>
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
			   </p>`,logo:s.Python,name:"Python",category:"pro-lang"}),r({slug:"html",color:"orange",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:s.HTML,name:"HTML",category:"markup-style"}),r({slug:"css",color:"blue",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:s.CSS,name:"CSS",category:"markup-style"}),r({slug:"sass",color:"pink",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:s.Sass,name:"Sass",category:"markup-style"}),r({slug:"bootstrap",color:"violet",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:s.Bootstrap,name:"Bootstrap",category:"library"}),r({slug:"svelte",color:"orange",description:d,logo:s.Svelte,name:"Svelte",category:"library"})],h="Skills",f=(...e)=>l.filter(t=>e.includes(t.slug)),b=e=>{const t=[],n=[];return l.forEach(a=>{if(e.trim()&&!a.name.toLowerCase().includes(e.trim().toLowerCase()))return;if(!a.category){console.log(a.category),n.push(a);return}let o=t.find(u=>{var c;return u.category.slug===((c=a.category)==null?void 0:c.slug)});o||(o={items:[],category:a.category},t.push(o)),o.items.push(a)}),n.length!==0&&t.push({category:{name:"Others",slug:"others"},items:n}),t};export{b as a,f as g,l as i,h as t};
