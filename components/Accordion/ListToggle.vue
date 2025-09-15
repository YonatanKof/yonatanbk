<script setup>
const props = defineProps({
	items: {
		type: Array,
		required: true,
		validator: (items) => {
			return items.every(
				(item) =>
					typeof item.title === 'string' &&
					typeof item.subTitle === 'string' &&
					(Array.isArray(item.components) || typeof item.components === 'object')
			);
		},
	},
	duration: {
		type: Number,
		default: 2000,
	},
});

const currentIndex = ref(0);
const isMobileView = ref(false);

function handleToggleComplete() {
	currentIndex.value = (currentIndex.value + 1) % props.items.length;
}

function handleItemSelect(index) {
	currentIndex.value = index;
}

function updateViewport() {
	isMobileView.value = window.innerWidth < 544;
}

onMounted(() => {
	currentIndex.value = 0;
	updateViewport();
	window.addEventListener('resize', updateViewport);
});

onUnmounted(() => {
	window.removeEventListener('resize', updateViewport);
});
</script>

<template>
	<div class="content-list-wrapper">
		<div class="content-list">
			<AccordionItemToggle
				v-for="(item, index) in items"
				:key="index"
				:title="item.title"
				:subTitle="item.subTitle"
				:components="item.components"
				:active="currentIndex === index"
				:duration="duration"
				:index="index"
				@complete="handleToggleComplete"
				@select="handleItemSelect"
			/>
		</div>
		<AccordionListComponentToggle
			v-if="!isMobileView"
			:items="items"
			:currentIndex="currentIndex"
			:duration="duration"
		/>
	</div>
</template>

<style scoped>
.content-list-wrapper {
	display: grid;
	grid-template-columns: 1fr var(--shape-size);
	gap: var(--space-2xl);
	width: 100%;
	padding-block-end: var(--space-8xl);
	@media (width < 880px) {
		gap: var(--space-xl);
	}
	@media (width < 720px) {
		gap: var(--space-l);
	}
	@media (width < 624px) {
		grid-template-columns: 1fr;
		padding-block-end: var(--space-2xl);
	}
}

.content-list {
	display: flex;
	flex-direction: column;
	gap: var(--space-xs);
}
</style>
