<script setup>
import ShapesCircle from '/components/Shapes/Circle';
const contentItems = [
	{
		title: 'Leading Design',
		subTitle:
			"Here's the thing: pushing design initiatives across teams and stakeholders can be a real challenge. But let me tell you, I've been there, done that, and emerged victorious.",
		components: ShapesCircle,
	},
	{
		title: 'Product Design',
		subTitle:
			"We all know complex products have major design problems. But that's cool, I love transforming these challenges into user-friendly solutions that just work.",
		components: ShapesCircle,
	},
	{
		title: 'Brand Building',
		subTitle:
			"I craft brand identities that seamlessly cross interfaces and teams. Imagine for a moment how this will improve your brand's impact across the digital landscape.",
		components: ShapesCircle,
	},
	{
		title: 'Design Management',
		subTitle:
			"Using a blend of team coaching and best-in-class backlog management tools and methods to deliver results that matter, right when they're needed. The best approach to transform your team's efficiency.",
		components: ShapesCircle,
	},
	{
		title: 'DesignOps & Dev',
		subTitle:
			'I bridge planning and execution through design systems, leveraging my coding skills to enhance collaboration, streamline design processes and foster a collaborative environment.',
		components: ShapesCircle,
	},
];
</script>

<template>
	<section id="full-stack" class="section-block">
		<div id="secondary-messages">
			<div class="padding-center-center">
				<div class="wrapper">
					<div class="top-content">
						<Text tag="h1" variant="main-title">Full Stack Design</Text>
						<Text variant="large-text" class="this-text">
							For the last 15+ years my mission is to bridge the gap between users, businesses, and technology through
							research, design and execution, creating elegant solutions that simplify complexity and enhance lives.
						</Text>
					</div>
					<AccordionListToggle :items="contentItems" :duration="10000" />
				</div>
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
	/* display: flex; */
	/* align-items: start; */
}
.wrapper {
	padding-block: var(--space-2xl) calc(var(--space-8xl) * 2);
	width: 100%;
	max-width: var(--display-width-lg);
}
.top-content {
	display: flex;
	gap: var(--space-s);
	flex-direction: column;
	justify-content: center;
	align-items: start;
	padding-block-end: var(--space-2xl);
}
.this-text {
	max-width: 57ch;
	text-wrap: balance;
}
</style>
