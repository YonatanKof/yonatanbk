<script setup>
import CircleHalf from '/components/Shapes/CircleHalf';
import CircleFifth from '/components/Shapes/CircleFifth';
import Square from '/components/Shapes/Square';
import SquareCenter from '/components/Shapes/SquareCenter';
import SquareLines from '/components/Shapes/SquareLines';
const contentItems = [
	{
		title: 'Product Design',
		subTitle:
			"Even simple products present complex design challenges. Managing needs, scope, priorities, teams, stakeholders — and we haven't talked about the main dish: research, UX, UI, and implementation. And I haven't mentioned what follows like QA, measurements, iterations, and all that jazz. This is where I thrive – transforming the process complexity into user-friendly solution that work.",
		components: CircleFifth,
	},
	{
		title: 'Hands-On Design',
		subTitle:
			"With total control over design tools and methods, I deliver blazing fast, pixel-perfect results that matter, right when they're needed. Leveraging dev skills and intimate knowledge of complex systems, I build design systems that developers actually use, and that bridge the gap between planning and execution, enhance collaboration, streamline design processes, and foster a creative environment.",
		components: SquareLines,
	},
	{
		title: 'Design Initiatives',
		subTitle:
			"Pushing design initiatives across an org can be a real challenge – even if it comes from mgmt., let alone if it's a design-driven one. The way we push, manage and implement these initiatives is what makes or breaks the design in a company. Using proper backlog mgmt. to keep my eyes on the prize, and coaching methods for good vibes – I make design initiatives happen.",
		components: Square,
	},
	// {
	// 	title: 'DesignOps & Mgmt.',
	// 	subTitle:
	// 		"With a blend of team coaching, best-in-class backlog management tools, and sweet soft skills, I deliver results that matter, right when they're needed.",
	// 	components: CircleHalf,
	// },
	// {
	// 	title: 'Brand Building',
	// 	subTitle:
	// 		"Experienced in crafting brand identities that cross interfaces and teams, greatly improving a brand's impact across the digital landscape.",
	// 	components: SquareCenter,
	// },
];
</script>

<template>
	<section id="design" class="checked-grid-lines torn-paper-bottom">
		<div id="secondary-messages">
			<div class="wrapper">
				<!-- As the name implies, this term is closely related to development and that makes sense for I'm a <nuxt-link to="https://designtechnologist.club/">design technologist</nuxt-link>.  -->
				<LayoutContentTop>
					<template #title> Define <span class="no-brake">full stack</span> product design</template>
					<template #desc>
						If you're proficient in UX research, hands-on design, team leadership, design ops, front-end development,
						stakeholders mgmt. and backlog mgmt., then you're a full-stack product designer.
					</template>
				</LayoutContentTop>
				<Text class="space" tag="h3" variant="main-s-title"> What I bring to the mix </Text>
				<Text variant="large-text" class="max-ch">
					For the last 15+ years, I bridged the gap between people, businesses, and technology through research, design,
					and execution; creating elegant solutions that simplify complexity and enhance lives.
				</Text>

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
	padding-block-end: var(--space-3xl);
}
br {
	margin-block-end: var(--space-m);
}
.space {
	margin-block-end: var(--space-s);
	text-wrap: balance;
}
.max-ch {
	max-width: 55ch;
	padding-block-end: var(--space-xl);
	@media (width < 640px) {
		padding-block-end: var(--space-l);
	}
	@media (width < 544px) {
		padding-block-end: var(--space-m);
	}
}
</style>
