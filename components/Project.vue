<script setup lang="ts">
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
	image: {
		type: [Array],
		default: null,
		required: true,
	},
});
</script>
<template>
	<article>
		<div class="project-image-gallery">
			<NuxtImg class="project-image" src="/images/projects/pepperi-page-builder.webp" placeholder />
		</div>
		<div class="info">
			<Text tag="h3" variant="secondary-title">{{ title }}</Text>
			<div id="meta-data">
				<Text variant="body-x-small">{{ position }}</Text>
				<span class="dot"></span>
				<Text variant="body-x-small">{{ year }}</Text>
			</div>
			<Text variant="body-small">{{ description }}</Text>
			<div id="verticals">
				<Text v-for="vertical in verticals" variant="body-x-small"><span class="color-dimmed">#</span>{{ vertical }}</Text>
			</div>
			<div id="jobs">
				<Text class="chip" v-for="job in jobs" variant="body-x-small">{{ job }}</Text>
			</div>
			<NuxtImg class="logo" :src="logo" placeholder />
		</div>
	</article>
</template>

<style scoped>
article {
	display: grid;
	grid-template-columns: 3fr minmax(320px, 2fr);
	gap: var(--space-l);
}
.project-image-gallery {
	aspect-ratio: 3 / 2;
	aspect-ratio: 5 / 4;
	overflow: hidden;
	display: flex;
	align-items: center;
	border-radius: var(--border-radius-md);
}
.project-image {
	width: 100%;
	height: auto;
}
.info {
	display: flex;
	flex-direction: column;
	gap: var(--space-xs);
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
}
#verticals {
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
</style>
