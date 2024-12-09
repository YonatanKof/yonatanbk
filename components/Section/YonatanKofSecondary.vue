<script setup>
const contentItems = [
	{
		title: 'Leading Design',
		subTitle:
			"Here's the thing: pushing design initiatives across teams and stakeholders can be a real challenge. But let me tell you, I've been there, done that, and emerged victorious.",
		images: 'imgs/KN-Shape-1A.webp',
	},
	{
		title: 'Product Design',
		subTitle:
			"We all know complex products have major design problems. But that's cool, I love transforming these challenges into user-friendly solutions that just work.",
		images: 'imgs/KN-Shape-1B.webp',
	},
	{
		title: 'Brand Building',
		subTitle:
			"I craft brand identities that seamlessly cross interfaces and teams. Imagine for a moment how this will improve your brand's impact across the digital landscape.",
		images: 'imgs/KN-Shape-1A.webp',
	},
	{
		title: 'Design Management',
		subTitle:
			"Using a blend of team coaching and best-in-class backlog management tools and methods to deliver results that matter, right when they're needed. The best approach to transform your team's efficiency.",
		images: 'imgs/KN-Shape-1B.webp',
	},
	{
		title: 'DesignOps & Dev',
		subTitle:
			'I bridge planning and execution through design systems, leveraging my coding skills to enhance collaboration, streamline design processes and foster a collaborative environment.',
		images: 'imgs/KN-Shape-1A.webp',
	},
];
</script>

<template>
	<div id="secondary-messages" class="section-block">
		<div class="padding-center-center">
			<div class="top-content">
				<Text tag="h1" variant="main-title"
					>Design <br />
					Connection</Text
				>
				<Text variant="large-text" class="this-text">
					For the last 15+ years my mission is to bridge the gap between users, businesses, and technology through
					research and design, creating elegant solutions that simplify complexity and enhance lives.
				</Text>
				<AccordionListToggle :items="contentItems" :duration="2000" />
			</div>
		</div>
	</div>
</template>

<style scoped>
#secondary-messages {
	background-color: var(--color-brand-red-main);
	color: var(--color-sys-invert-main);
	height: 100%;
	text-align: start;
	display: flex;
	align-items: start;
}
.top-content {
	padding: var(--space-m);
	display: flex;
	gap: var(--space-s);
	flex-direction: column;
	justify-content: center;
	align-items: start;
	width: 100%;
	max-width: var(--display-width-lg);
}
.this-text {
	max-width: 57ch;
	text-wrap: balance;
}
</style>
