<template>
	<section id="work" class="section-block">
		<div class="wrapper work">
			<Text tag="h1" variant="main-title">Selected Works</Text>
			<Project
				:image-array="[
					'/images/projects/ui-control/card.webp',
					'/images/projects/ui-control/list.webp',
					'/images/projects/ui-control/menu.webp',
					'/images/projects/ui-control/slag.webp',
					'/images/YonatanBK-Social.jpg',
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
