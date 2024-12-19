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
	padding-block-start: var(--space-l);
	padding-block-end: var(--space-2xl);
}
</style>
