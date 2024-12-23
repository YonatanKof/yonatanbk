<script setup lang="ts">
defineProps({
	title: {
		type: String,
		default: 'Proj name!',
	},
	description: {
		type: String,
		default: 'Proj description!',
	},
});
</script>

<template>
	<div>
		<Text tag="h1" variant="main-title">{{ title }}</Text>
		<Text variant="large-text" class="this-text">{{ description }}</Text>
	</div>
</template>

<style scoped>
div {
	display: flex;
	gap: var(--space-m);
	flex-direction: column;
	justify-content: center;
	align-items: start;
	padding-block-end: var(--space-2xl);
	@media (width < 640px) {
		padding-block-end: var(--space-xl);
	}
	@media (width < 544px) {
		padding-block-end: var(--space-l);
	}
}
p {
	max-width: 60ch;
}
</style>
