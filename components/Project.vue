<script setup lang="ts">
const PROJECT_ORDER = ['default', 'flip'] as const;
type ProjectOrder = (typeof PROJECT_ORDER)[number];

const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	position: {
		type: String,
		required: true,
	},
	year: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	verticals: {
		type: [Array],
		default: null,
	},
	jobs: {
		type: [Array],
		default: null,
	},
	logo: {
		type: String,
		required: true,
	},
	imageArray: {
		type: [Array],
		default: null,
		required: true,
	},
	order: {
		type: String as PropType<ProjectOrder>,
		default: 'default',
	},
	animationTime: {
		type: Number,
		default: 5000,
	},
	highlightColor: {
		type: String,
		default: 'var(--color-brand-red-main)',
	},
	linkTo: {
		type: Array as PropType<{ url: string; name: string; external?: boolean }[]>,
		required: false,
		default: () => [],
	},
});
const projectClasses = computed(() => ({
	[`project-${props.order}`]: true,
}));
</script>
<template>
	<article :class="projectClasses">
		<Carousel :images="imageArray" :animationTime="animationTime" :highlightColor="highlightColor"/>
		<div class="info">
			<Text tag="h3" variant="secondary-title">{{ title }}</Text>
			<div id="meta-data">
				<Text variant="body-x-small">{{ position }}</Text>
				<span class="dot"></span>
				<Text variant="body-x-small">{{ year }}</Text>
			</div>
			<Text variant="body-small">{{ description }}</Text>
			<div id="verticals">
				<Text v-for="vertical in verticals" variant="body-x-small"
					><span class="color-dimmed">#</span>{{ vertical }}</Text
				>
			</div>
			<div id="jobs">
				<Text class="chip" v-for="job in jobs" variant="body-x-small">{{ job }}</Text>
			</div>
			<NuxtImg class="logo" :src="logo" placeholder />
			<!-- <div id="links"> -->
			<Text v-for="link in props.linkTo" variant="body-x-small">
				<NuxtLink :class="{ external: link.external }" :to="link.url" :key="link.name">{{ link.name }}</NuxtLink>
			</Text>
			<!-- </div> -->
		</div>
	</article>
</template>

<style scoped>
article {
	display: flex;
	gap: var(--space-l);
	width: 100%;
}
.project-default {
	flex-direction: row;
}
.project-flip {
	flex-direction: row-reverse;
}
.project-image {
	width: 100%;
	height: auto;
}
.info {
	max-width: calc(var(--space-7xl) * 3);
	min-width: calc(var(--space-3xl) * 4);
	display: flex;
	flex-direction: column;
	gap: var(--space-2xs);
}
#meta-data {
	display: flex;
	align-items: center;
	flex-direction: row;
	gap: var(--space-2xs);
	& > span {
		clip-path: circle(50%);
		background-color: var(--color-sys-dis);
		width: var(--space-3xs);
		height: var(--space-3xs);
	}
}
#verticals,
#jobs {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	font-style: italic;
	padding-block-end: var(--space-2xs);
}
#links {
	display: flex;
	flex-direction: row;
}
#verticals {
	padding-block-start: var(--space-2xs);
	column-gap: var(--space-xs);
	row-gap: var(--space-3xs);
}
#jobs {
	gap: var(--space-2xs);
}
.chip {
	padding: 0.25em 0.75em;
	border: 1px dashed var(--color-brand-red-slight);
	border-radius: 4rem;
}
.logo {
	height: var(--space-l);
	width: max-content;
}
.external::after {
	content: '';
	display: inline-block;
	clip-path: polygon(
		0% 0%,
		40% 0%,
		40% 20%,
		20% 20%,
		20% 80%,
		80% 80%,
		80% 20%,
		80% 40%,
		80% 32.5%,
		57% 57%,
		42% 42%,
		67.5% 20%,
		60% 20%,
		60% 0%,
		100% 0%,
		100% 40%,
		80% 40%,
		80% 60%,
		100% 60%,
		100% 100%,
		0% 100%
	);
	background-color: var(--color-focus-main);
	width: var(--space-2xs);
	height: var(--space-2xs);
	margin-inline-start: var(--space-3xs);
}
</style>
