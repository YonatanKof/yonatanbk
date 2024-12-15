<script setup>
import CircleHalf from '/components/Shapes/CircleHalf';
import CircleFifth from '/components/Shapes/CircleFifth';
const contentItems = [
	{
		title: 'Design Initiatives',
		subTitle:
			"Pushing design initiatives across teams and stakeholders can be a real challenge. But let me tell you, I've been there, done that, and emerged victorious.",
		components: CircleHalf,
	},
	{
		title: 'Product Design',
		subTitle:
			"We all know complex products have major design problems. But that's cool, I love transforming these challenges into user-friendly solutions that just work.",
		components: CircleFifth,
	},
	{
		title: 'Brand Building',
		subTitle:
			"I craft brand identities that seamlessly cross interfaces and teams. Imagine for a moment how this will improve your brand's impact across the digital landscape.",
		components: CircleHalf,
	},
	{
		title: 'DesignOps & Mgmt.',
		subTitle:
			"Using a blend of team coaching and best-in-class backlog management tools and methods to deliver results that matter, right when they're needed. The best approach to transform your team's efficiency.",
		components: CircleFifth,
	},
	{
		title: 'Execution & Dev',
		subTitle:
			'I bridge planning and execution through design systems, leveraging my coding skills and hands-on abilities to enhance collaboration, streamline design processes and foster a collaborative environment.',
		components: CircleHalf,
	},
];
</script>

<template>
	<section id="full-stack" class="section-block checked-grid-lines torn-paper-bottom">
		<div id="secondary-messages">
			<div class="wrapper">
				<div class="top-content">
					<Text tag="h1" variant="main-title" >Full Stack Design</Text>
					<Text variant="large-text" class="this-text">
						For the last 15+ years my mission is to bridge the gap between people, businesses, and technology through
						research, design and execution; creating elegant solutions that simplify complexity and enhance lives.
					</Text>
				</div>
				<AccordionListToggle :items="contentItems" :duration="10000" />
			</div>
		</div>
	</section>
</template>

<style scoped>
#secondary-messages {
	background-color: var(--color-brand-red-main);
	color: var(--color-sys-invert-main);
	height: 100%;
	text-align: start;
}

.top-content {
	display: flex;
	gap: var(--space-m);
	flex-direction: column;
	justify-content: center;
	align-items: start;
	padding-block-start: var(--space-l);
	padding-block-end: var(--space-2xl);
}
.this-text {
	max-width: 57ch;
	text-wrap: balance;
}
</style>
