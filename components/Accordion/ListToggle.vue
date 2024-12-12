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
	grid-template-columns: repeat(2, auto);
	gap: var(--space-4xl);
	width: 100%;
	height: 48rem;
}

.content-list {
	display: flex;
	flex-direction: column;
	gap: var(--space-m);
}

@media (max-width: 880px) {
	.content-list-wrapper {
		gap: var(--space-2xl);
	}
}
@media (max-width: 720px) {
	.content-list-wrapper {
		gap: var(--space-l);
	}
}
@media (544px <= width <= 640px) {
	.content-list-wrapper {
		gap: var(--space-m);
	}
}
/* @media (max-width: 640px) {
	.content-list-wrapper {
		gap: 1rem;
	}
} */
</style>
