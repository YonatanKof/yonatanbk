<script setup>
import CircleHalf from '/components/Shapes/CircleHalf';
import CircleFifth from '/components/Shapes/CircleFifth';
import Square from '/components/Shapes/Square';
import SquareCenter from '/components/Shapes/SquareCenter';
import SquareLines from '/components/Shapes/SquareLines';
const contentItems = [
	{
		title: 'Design Initiatives',
		subTitle:
			"Pushing design initiatives across teams and stakeholders can be a real challenge. But let me tell you, I've been there, done that, and emerged victorious - and when design wins everybody wins.",
		components: Square,
	},
	{
		title: 'Product Design',
		subTitle:
			"We all know complex products have major design problems. But that's cool, my passion is transforming challenges into multi-teams, user-friendly solutions that just work.",
		components: CircleFifth,
	},
	{
		title: 'Brand Building',
		subTitle:
			"Experienced in crafting brand identities that cross interfaces and teams, greatly improving a brand's impact across the digital landscape.",
		components: SquareCenter,
	},
	{
		title: 'DesignOps & Mgmt.',
		subTitle:
			"With a blend of team coaching, best-in-class backlog management tools, and sweet soft skills, I deliver results that matter, right when they're needed.",
		components: CircleHalf,
	},
	{
		title: 'Execution & Dev',
		subTitle:
			'Leveraging my coding skills and hands-on abilities I build design systems that bridge planning and execution to enhance collaboration, streamline design processes and foster a creative environment.',
		components: SquareLines,
	},
];
</script>

<template>
	<section id="design" class="checked-grid-lines torn-paper-bottom">
		<div id="secondary-messages">
			<div class="wrapper">
				<LayoutContentTop
					title="Full Stack Design"
					description="For the last 15+ years my mission is to bridge the gap between people, 
					businesses, and technology through research, design and execution; creating elegant 
					solutions that simplify complexity and enhance lives."
				/>
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
.this-text {
	max-width: 57ch;
	text-wrap: balance;
}
</style>
