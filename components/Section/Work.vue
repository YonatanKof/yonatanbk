<template>
	<section id="work">
		<div class="wrapper">
			<LayoutContentTop
				title="Selected Works"
				description="As a partner in a design agency, a startup team member, a freelance, and as 
			corporate man - I've solved all kinds of design problems and have met with all kind of 
			projects. Here are but a few."
			/>
			<div class="work">
				<Project
					id="design-systems"
					highlight-color="var(--color-brand-red-main)"
					:animation-time="6000"
					:image-array="[
						{
							url: '/projects/design-systems/ads.webm',
							name: 'Allotropy Design System',
						},
						{
							url: '/projects/design-systems/kds.webm',
							name: 'Kof Design System',
						},
						{
							url: '/projects/design-systems/bgf.webm',
							name: 'Brand Guide Framework',
						},
						{
							url: '/projects/design-systems/tokens.webm',
							name: 'Design Tokens In Action',
						},
					]"
					title="Design Systems & Guides"
					position="Design Lead"
					year="2015-2025"
					description="Building design systems before they were called this way, which are actually an extension of a brand book – therefor I also build awesome brand guides. Also, be sure to check out Pepperi project below to see an enterprise garde design system implemented using Storybook."
					:verticals="['Design Systems', 'Brand Guides', 'Design Tokens', 'Component Libraries']"
					:jobs="['Storybook', 'CSS', 'Figma', 'Sketch', 'Illustrator', 'Abstract', 'Notion']"
					logo="/images/clients-color/GeoKof.webp"
					:link-to="[
						{
							url: 'https://www.figma.com/community/file/1456699524814141190/allotropy-design-system',
							name: 'Allotropy Design System (Figma)',
						},
						{
							url: 'https://yonatankof.notion.site/Kof-Design-System-6648214c57cc40e4b80c4718386ec2b5?pvs=4',
							name: 'Kof Design System (Sketch)',
						},
						{
							url: 'https://yonatankof.notion.site/a7b6eaaf27ed45d3961232ad8be14995?v=53118f85dcae462ba34e484535cc1584&pvs=4',
							name: 'Brand Guide Framework (Notion)',
						},
						{
							url: 'https://wwape.com/post/design-tokens/',
							name: 'Design Tokens In Action (WWApe)',
						},
						// Example of an internal link, so it's missing the external icon
						// {
						// 	url: '/kof',
						// 	name: 'Kof',
						// 	internal: true,
						// },
					]"
				/>
				<Project
					id="pepperi"
					order="flip"
					highlight-color="#6E960A"
					:image-array="[
						{
							url: '/projects/pepperi/design-systems.webm',
							name: 'Design Systems',
						},
						{
							url: '/projects/pepperi/pepperi-personas.webm',
							name: 'User Personas',
						},
						{
							url: '/projects/pepperi/brand.webm',
							name: 'Brand Guide',
						},
						{
							url: '/projects/pepperi/pepperi-page-builder-vid.webm',
							name: 'No Code Webpage Builder',
						},
					]"
					title="Pepperi"
					position="Head of Design"
					year="2018-2024"
					description="Lead webapp across various roles, designing new products, managing requirements, backlogs and design system, conducting research, while supporting marketing, brand and professional services team."
					:verticals="['B2B', 'E-commerce', 'Storefront', 'No Code Editor', 'Webpage Builder']"
					:jobs="[
						'Research',
						'Competitive Analysis',
						'Stakeholder Mgmt.',
						'Backlog Mgmt.',
						'Design',
						'UX',
						'User Testing',
					]"
					logo="/images/clients-color/pepperi.webp"
					:link-to="[
						{
							url: 'https://www.pepperi.com/',
							name: 'Visit Pepperi Site',
						},
						{
							url: 'https://60ae3e9eff8e4c003b2f90d4-tpugnwjzfy.chromatic.com/?path=/docs/pepperi-design-system--page',
							name: 'Explore Pepperi Design System',
						},
						{
							url: 'https://brand.pepperi.com/',
							name: 'Review Pepperi Brand Guide',
						},
						{
							url: 'https://peppersona.netlify.app/',
							name: 'Pepperi Persona (via Notion API)',
						},
					]"
				/>
				<Project
					highlight-color="#0068F5"
					id="avodata"
					:animation-time="3000"
					:image-array="[
						{
							url: '/projects/avodata/ux-research.webp',
							name: 'UX Research',
						},
						{
							url: '/projects/avodata/user-interviews.webp',
							name: 'User Interviews',
						},
						{
							url: '/projects/avodata/scoping.webp',
							name: 'Scoping',
						},
						{
							url: '/projects/avodata/ux.webp',
							name: 'UX',
						},
						{
							url: '/projects/avodata/reception.webp',
							name: 'Reception',
						},
						{
							url: '/projects/avodata/avodata.webm',
							name: 'Try it now',
						},
					]"
					title="Avodata"
					position="Freelance"
					year="2018"
					description="Data-driven career choices made easy – A project by JCD and Ministry of Labour which includes user interviews, UX research, project scoping, UX concept and wireframes for Israel's growing market place"
					:verticals="['Gov', 'Education', 'Life Style', 'Self Improvement']"
					:jobs="['Research', 'User Interviews', 'UX']"
					logo="/images/clients-color/avodata.webp"
					:link-to="[
						{
							url: 'https://avodata.labor.gov.il/',
							name: 'Visit Avodata site',
						},
						{
							url: 'https://projects.invisionapp.com/share/6KOHWPXSFJZ#/screens/324972866',
							name: 'Review Avodata UX Mockups',
						},
					]"
				/>
				<Project
					highlight-color="#EC1F8E"
					id="mtns"
					order="flip"
					:animation-time="4000"
					:image-array="[
						{
							url: '/projects/mtns/services.webm',
							name: 'Services',
						},
						{
							url: '/projects/mtns/history.webp',
							name: 'Flashback',
						},
						{
							url: '/projects/mtns/members.webp',
							name: 'Team Members',
						},
						{
							url: '/projects/mtns/clients.webp',
							name: 'Clients',
						},
					]"
					title="Matnas Interactive"
					position="Partner"
					year="2009-2015"
					description="High pace design studio and agency, where I supervised daily operations, managed design teams and multiple accounts start to finish. Leading designers, managing projects scopes, budgeting, stakeholder communication, and managing deadlines at best quality."
					:verticals="['Native App', 'WebApps', 'E-commerce', 'Education', 'Branding', 'Desktop']"
					:jobs="['Ideation', 'Design Manager', 'Business Development', 'Project Owner', 'Researcher', 'UX/UI Design']"
					logo="/images/clients-color/mtns.webp"
					:link-to="[
						{
							url: 'https://dribbble.com/mtns',
							name: 'Selected projects (Dribbble)',
						},
						{
							url: 'https://www.flickr.com/photos/matnas/albums/',
							name: 'History in pics (Flickr)',
						},
					]"
				/>
			</div>
		</div>
	</section>
</template>

<style scoped>
.work {
	display: flex;
	flex-direction: column;
	gap: var(--space-xl);
}
</style>
