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
					:image-array="[
						'/images/projects/pepperi/pepperi-personas.webm',
						'/images/projects/pepperi/pepperi-page-builder.webp',
						'/images/projects/pepperi/pepperi-design-system.webp',
						'/images/projects/pepperi/pepperi-page-builder-vid.webm',
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
					order="flip"
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
