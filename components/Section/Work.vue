<template>
	<section id="work" class="section-block">
		<div class="wrapper">
			<LayoutContentTop
				title="Selected Works"
				description="As a partner in a design agency, a startup team member, a freelance, and as 
			corporate man - I've solved all kinds of design problems and have met with all kind of 
			projects. Here are but a few."
			/>
			<div class="work">
				<Project
					id="pepperi"
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
					logo="/images/clients-color/Pepperi.webp"
				/>
				<Project
					highlight-color="#0068F5"
					order="flip"
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
					]"
					title="Avodata"
					position="Freelance"
					year="2018"
					description="Data-driven career choices made easy – A project by JCD and Ministry of Labour which includes user interviews, UX research, project scoping, UX concept and wireframes for Israel's growing market place"
					:verticals="['Education', 'Life Style', 'Self Improvement', 'Government']"
					:jobs="['Research', 'User Interviews', 'UX']"
					logo="/projects/avodata/avodata.webp"
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
	padding-block-end: calc(var(--space-8xl) * 2);
}
</style>
