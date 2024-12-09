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
					(Array.isArray(item.images) || typeof item.images === 'string')
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
	isMobileView.value = window.innerWidth < 640;
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
				:images="item.images"
				:active="currentIndex === index"
				:duration="duration"
				:index="index"
				@complete="handleToggleComplete"
				@select="handleItemSelect"
			/>
		</div>
		<AccordionListImageToggle v-if="!isMobileView" :items="items" :currentIndex="currentIndex" :duration="duration" />
	</div>
</template>

<style scoped>
.content-list-wrapper {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: var(--space-m);
	width: 100%;
}

.content-list {
	display: flex;
	flex-direction: column;
	gap: var(--space-m);
}

@media (max-width: 640px) {
	.content-list-wrapper {
		gap: 1rem;
	}
}
</style>
