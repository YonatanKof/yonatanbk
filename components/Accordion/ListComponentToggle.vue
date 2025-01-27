<script setup>
import { ref, computed, watch, nextTick } from 'vue';

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
	currentIndex: {
		type: Number,
		required: true,
	},
	duration: {
		type: Number,
		default: 2000,
	},
});

const isActive = ref(true);

const currentItem = computed(() => props.items[props.currentIndex]);

const currentComponents = computed(() => {
	const components = currentItem.value?.components;
	return Array.isArray(components) ? components : [components];
});
</script>

<template>
	<div class="content-components">
		<div v-for="(component, index) in currentComponents" :key="`${currentIndex}-${index}`" class="component-container">
			<component :is="component" class="content-component" :class="{ 'fade-in': isActive }" />
		</div>
	</div>
</template>

<style scoped>
.content-components {
	width: 100%;
	padding-block-start: var(--space-m);
}

.component-container {
	flex: 1;
	overflow: hidden;
}

.content-component {
	width: 100%;
	opacity: 0;
	transform: scale(1.1);
	transition: all 0.3s ease;
	@media (width < 624px) {
		display: none;
	}
}

.content-component.fade-in {
	opacity: 1;
	transform: scale(1);
}
</style>
