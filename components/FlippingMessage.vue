<script setup lang="ts">
import { Typed } from '@duskmoon/vue3-typed-js';
import type { TypedOptions } from '@duskmoon/vue3-typed-js';

const options: TypedOptions = {
	strings: [
		'Design Development Delivery',
		// '<span class="this-text-on-big">From </span> <span class="text-bold color-brand-red">Design </span> to <span class="text-bold color-brand-blue">Production</span>',
		'</span> <span class="text-bold color-brand-red">Designing </span> for <span class="text-bold color-brand-blue">Production</span>',
		'<span class="text-bold color-brand-green">Building</span> design <span class="text-bold color-brand-orange">Systems</span>',
		'<span class="text-bold color-brand-orange">Steering</span> <span class="this-text-on-big">cross</span> <span class="this-text-on-small">x</span>-functional <span class="text-bold color-brand-blue">Teams</span>',
		'<span class="text-bold color-brand-blue">Leading</span> design <span class="text-bold color-brand-red">Initiatives</span>',
		// '<span class="text-bold color-brand-red">Managing</span> design <span class="text-bold color-brand-blue">Backlogs</span>',
		'<span class="text-bold color-brand-orange">Executing</span> design <span class="text-bold color-brand-green">Research</span>',
	],
	loop: true,
	typeSpeed: 40,
	backSpeed: 20,
	backDelay: 2500,
	showCursor: false,
};
</script>

<template>
	<div>
		<div class="this-flip">
			<span>
				<Typed :options="options">
					<Text class="typing" text-style="text-end color-slight" tag="h2" variant="compressed-title"> </Text>
				</Typed>
			</span>
			<Text class="hide" text-style="text-end color-slight" tag="h2" variant="compressed-title">
				in startups and orgs
			</Text>
		</div>
	</div>
</template>

<style scoped>
span {
	min-height: var(--step-4);
}
span,
.this-flip {
	display: flex;
	flex-direction: row;
	gap: var(--space-2xs);
	justify-content: end;
	/* @media (width < 720px) {
		flex-direction: column;
	} */
	/* @media (width < 480px) {
		flex-flow: row;
	} */
}
h2 {
	@media (width < 1152px) {
		text-align: center;
	}
}
.hide {
	@media (width < 720px) {
		visibility: hidden;
		display: none;
		line-height: var(--grid-block);
	}
}
</style>
<style>
.this-text-on-big {
	@media (width < 560px) {
		display: none;
		color: aquamarine;
	}
}
.this-text-on-small {
	display: none;
	@media (width < 560px) {
		display: unset;
	}
}</style>
