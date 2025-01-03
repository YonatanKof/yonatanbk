<script setup lang="ts">
import { Typed } from '@duskmoon/vue3-typed-js';
import type { TypedOptions } from '@duskmoon/vue3-typed-js';

const options: TypedOptions = {
	strings: [
		'<span class="text-bold color-brand-green">Delivering </span> design <span class="text-bold color-brand-orange">Innovation</span>',
		'<span class="text-bold color-brand-green">Building</span> design <span class="text-bold color-brand-orange">Systems</span>',
		'<span class="text-bold color-brand-blue">Leading</span> design <span class="text-bold color-brand-red">Teams</span>',
		'<span class="text-bold color-brand-red">Managing</span> design <span class="text-bold color-brand-blue">Sprints</span>',
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
		<span>
			<Typed :options="options">
				<Text class="typing" text-style="text-end color-slight" tag="h2" variant="compressed-title"> </Text>
			</Typed>
		</span>
		<Text text-style="text-end color-slight" tag="h2" variant="compressed-title"> in startups and orgs </Text>
	</div>
</template>

<style scoped>
span {
	min-height: var(--step-4);
}
span,
div {
	display: flex;
	flex-direction: row;
	gap: var(--space-2xs);
	justify-content: end;
	@media (width < 720px) {
		flex-direction: column;
	}
}
h2 {
	@media (width < 1152px) {
		text-align: center;
	}
}
.aa {
	color: var(--color-brand-red-main);
}
.bb {
	color: var(--color-brand-green-main);
}
.cc {
	color: var(--color-brand-blue-main);
}
.dd {
	color: var(--color-brand-orange-main);
}
</style>
