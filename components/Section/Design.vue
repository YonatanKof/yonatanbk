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
			"We all know complex products have major design problems. But that's cool, my passion is transforming challenges into multi-teams, user-friendly solutions that just work.",
		components: CircleFifth,
	},
	{
		title: 'Hands-On & Dev',
		subTitle:
			'Leveraging coding and hands-on skills, I build design systems that bridge planning and execution to enhance collaboration, streamline design processes, and foster a creative environment.',
		components: SquareLines,
	},
	{
		title: 'Design Initiatives',
		subTitle:
			"Pushing design initiatives across teams and stakeholders can be a real challenge. But let me tell you, I've been there, done that, and emerged victorious - and when design wins everybody wins.",
		components: Square,
	},
	{
		title: 'DesignOps & Mgmt.',
		subTitle:
			"With a blend of team coaching, best-in-class backlog management tools, and sweet soft skills, I deliver results that matter, right when they're needed.",
		components: CircleHalf,
	},
	{
		title: 'Brand Building',
		subTitle:
			"Experienced in crafting brand identities that cross interfaces and teams, greatly improving a brand's impact across the digital landscape.",
		components: SquareCenter,
	},
];
</script>

<template>
	<section id="design" class="checked-grid-lines torn-paper-bottom">
		<div id="secondary-messages">
			<div class="wrapper">
				<!-- As the name implies, this term is closely related to development and that makes sense for I'm a <nuxt-link to="https://designtechnologist.club/">design technologist</nuxt-link>.  -->
				<LayoutContentTop>
					<template #title> This is <span class="no-brake">full stack design</span></template>
					<template #desc>
						If you're proficient in UX research, hands-on design, team leadership, design ops, front-end development,
						stakeholders mgmt. and backlog mgmt., then you're a full-stack product designer.<br />
						For the last 15+ years, I bridged the gap between people, businesses, and technology through research,
						design, and execution; creating elegant solutions that simplify complexity and enhance lives.
					</template>
				</LayoutContentTop>
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
</style>
