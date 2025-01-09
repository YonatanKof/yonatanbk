<script setup lang="ts">
const PROJECT_ORDER = ['default', 'flip'] as const;
type ProjectOrder = (typeof PROJECT_ORDER)[number];

const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	desc: {
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
		type: Array as PropType<{ url: string; name: string; internal?: boolean }[]>,
		required: false,
		default: () => [],
	},
});
const projectClasses = computed(() => ({
	[`project-${props.order}`]: true,
}));
const isMobileView = ref(false);

function updateViewport() {
	isMobileView.value = window.innerWidth < 800;
}

onMounted(() => {
	updateViewport();
	window.addEventListener('resize', updateViewport);
});

onUnmounted(() => {
	window.removeEventListener('resize', updateViewport);
});
</script>
<template>
	<article :class="projectClasses">
		<Carousel
			v-if="!isMobileView"
			:images="imageArray"
			:animationTime="animationTime"
			:highlightColor="highlightColor"
		/>
		<div class="info">
			<Text tag="h3" variant="secondary-title">{{ title }}</Text>
			<div id="meta-data">
				<Text variant="body-x-small">{{ position }}</Text>
				<span class="dot"></span>
				<Text variant="body-x-small">{{ year }}</Text>
			</div>
			<Text class="max-ch" tag="h6" variant="heading-x-small">{{ desc }}</Text>
			<Text class="max-ch" variant="body-small">{{ description }}</Text>
			<Carousel
				class="spacing"
				v-if="isMobileView"
				:images="imageArray"
				:animationTime="animationTime"
				:highlightColor="highlightColor"
			/>
			<div id="links">
				<Text class="max-ch" tag="h6" variant="heading-x-small">Explore project</Text>
				<Text v-for="link in props.linkTo" variant="body-x-small">
					<NuxtLink
						:class="{ 'external-icon': !link.internal }"
						:to="link.url"
						:target="!link.internal ? '_blank' : undefined"
						:external="!link.internal"
						:key="link.name"
						>{{ link.name }}
					</NuxtLink>
				</Text>
			</div>
			<div id="verticals" class="max-ch">
				<Text v-for="vertical in verticals" variant="body-x-small"
					><span class="color-dimmed">#</span>{{ vertical }}</Text
				>
			</div>
			<div id="jobs" class="max-ch">
				<Text class="chip" v-for="job in jobs" variant="body-x-small">{{ job }}</Text>
			</div>
			<NuxtImg class="logo" :src="logo" placeholder />
		</div>
	</article>
</template>

<style scoped>
article {
	display: flex;
	gap: var(--space-l);
	flex-direction: row;
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
	min-width: calc(var(--space-2xl) * 4);
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
	/* margin-block-start: var(--space-xs); */
	display: flex;
	flex-direction: column;
	gap: var(--space-3xs);
	& > :first-child {
		margin-block: var(--space-2xs);
	}
}
#verticals {
	padding-block-start: var(--space-2xs);
	column-gap: var(--space-xs);
	row-gap: var(--space-3xs);
}
#jobs {
	gap: var(--space-2xs);
}
.logo {
	height: var(--space-l);
	width: auto;
	align-self: flex-start;
}
@media (800px >= width) {
	article {
		gap: var(--space-s);
	}
	.info {
		min-width: 100%;
	}
	.project-default,
	.project-flip {
		flex-direction: column-reverse;
	}
	h3 {
		font-size: var(--step-6);
	}
}
.max-ch {
	max-width: 55ch;
}
.spacing {
	margin-block: var(--space-2xs);
}
</style>
