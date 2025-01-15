<template>
	<section id="work">
		<div class="wrapper">
			<LayoutContentTop>
				<template #title>Selected Works</template>
				<template #desc>
					As a partner in a design agency, a startup team member, a freelancer, and an executive - I've solved and
					delivered a large and varied scope of projects. Here are just a few.
				</template>
			</LayoutContentTop>
			<div class="work">
				<Project
					id="pepperi"
					highlight-color="#6E960A"
					:image-array="[
						{
							url: '/projects/pepperi/pepperi-survey-builder.webm',
							name: 'Survey Builder',
						},
						{
							url: '/projects/pepperi/design-systems.webm',
							name: 'Pepperi Design Systems',
						},
						{
							url: '/projects/pepperi/pepperi-personas.webm',
							name: 'User Personas Initiative',
						},
						{
							url: '/projects/pepperi/brand.webm',
							name: 'Pepperi Brand Guide',
						},
						{
							url: '/projects/pepperi/pepperi-page-builder-vid.webm',
							name: 'No Code Webpage Builder',
						},
					]"
					title="Pepperi"
					position="Product Design Lead"
					sub-title="PaaS for B2B Wholesale Commerce"
					year="2018-2024"
					description="As complex as it gets: Order Mgmt. Systems, Storefront, CRM, Dashboard, Back Office, User Configurator, Page Builder, Themes and more. At Pepperi, I led and executed research and design of multiple products and initiatives of our web platform. Moreover, I've managed requirements, backlogs, stakeholder interface and our awesome design system. Besides our amazing product team, I've also supported marketing, brand, and PS teams."
					:verticals="['B2B', 'E-commerce', 'Storefront', 'No Code Editor', 'Webpage Builder']"
					:jobs="[
						'Research',
						'Design Systems Lead',
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
							url: 'https://wwape.com/work/pepperi-page-builder/',
							name: 'Web Page Builder Case Study (WWApe)',
						},
						{
							url: 'https://60ae3e9eff8e4c003b2f90d4-tpugnwjzfy.chromatic.com/?path=/docs/pepperi-design-system--page',
							name: 'Pepperi Design System (Storybook)',
						},
						{
							url: 'https://wwape.com/work/pepperi-design-system/',
							name: 'Pepperi Design Systems Page (WWApe)',
						},
						{
							url: 'https://brand.pepperi.com/',
							name: 'Pepperi Brand Guide (VuePress)',
						},
						{
							url: 'https://peppersona.netlify.app/',
							name: 'Pepperi Persona (via Notion API)',
						},
						{
							url: 'https://www.pepperi.com/',
							name: 'Visit Pepperi Site',
						},
					]"
				/>
				<Project
					id="design-systems"
					order="flip"
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
						{
							url: '/projects/pepperi/brand.webm',
							name: 'Pepperi Brand Guide',
						},
					]"
					title="Design Systems & Guides"
					sub-title="Systemize design to helps teams win"
					position="Product Design Lead"
					year="2015-2025"
					description="Guiding dev and product teams to build awesome design systems, and stakeholders to craft top-notch brand books. Be sure to check out the Pepperi project below to see an enterprise-grade design system Storybook implementation."
					:verticals="['Storybook', 'CSS', 'Figma', 'Sketch', 'Abstract', 'Notion']"
					:jobs="['Design Systems Lead', 'Component Architecture', 'Documentation', 'Design Operations']"
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
						{
							url: 'https://wwape.com/work/pepperi-design-system/',
							name: 'Pepperi Design Systems Page (WWApe)',
						},
						{
							url: 'https://brand.pepperi.com/',
							name: 'Pepperi Brand Guide (VuePress)',
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
					sub-title="Data-driven career choices platform"
					position="UX Researcher"
					year="2018"
					description="A project for JDC and the Ministry of Labour which includes user interviews, UX concept and research, project scoping, and wireframes. With this, we raised significant funds and partners to build a tool for Israel's growing marketplace."
					:verticals="['Gov', 'Education', 'Lifestyle', 'Self Improvement']"
					:jobs="['UX Research', 'User Interviews', 'Project Scoping', 'UX', 'Wireframing']"
					logo="/images/clients-color/avodata.webp"
					:link-to="[
						// {
						// 	url: 'https://projects.invisionapp.com/share/6KOHWPXSFJZ#/screens/324972866',
						// 	name: 'Review UX Flow',
						// },
						{
							url: 'https://www.dropbox.com/scl/fi/61whvk1a2wc3o3mgjmfp3/Avodata-User-interviews-and-findings.pdf.pdf?rlkey=rv1dncksebo6r5digmsa0eere&st=b8j1tbzx&dl=0',
							name: 'Review User Interviews & Findings (PDF)',
						},
						{
							url: 'https://avodata.labor.gov.il/',
							name: 'Visit Avodata Site',
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
					sub-title="Design Agency, UX/UI and Product Ideation"
					position="Design Manager & Co-Partner"
					year="2009-2015"
					description="High-pace design studio and agency, where I supervised daily operations, managed design teams and multiple accounts from start to finish. This included overseeing project scopes and stakeholder communications."
					:verticals="['Native Apps', 'WebApps', 'E-commerce', 'Education', 'Branding', 'Desktop']"
					:jobs="['Ideation', 'Design Manager', 'BizDev', 'Project Owner', 'Researcher', 'UX/UI Design']"
					logo="/images/clients-color/mtns.webp"
					:link-to="[
						{
							url: 'https://www.flickr.com/photos/matnas/albums/',
							name: 'History in pics (Flickr)',
						},
						{
							url: 'https://dribbble.com/mtns',
							name: 'Selected projects (Dribbble)',
						},
					]"
				/>
			</div>
		</div>
	</section>
</template>

<style scoped>
.wrapper {
	max-width: var(--display-width-xl);
}
.work {
	display: flex;
	flex-direction: column;
	gap: var(--space-4xl);
	@media (width < 720px) {
		gap: var(--space-3xl);
	}
	@media (width < 544px) {
		gap: var(--space-2xl);
	}
	@media (width < 480px) {
		gap: var(--space-xl);
	}
}
</style>
