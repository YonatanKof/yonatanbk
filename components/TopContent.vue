<script setup lang="ts">
const props = defineProps<{
	title?: string;
	description?: string;
}>();
</script>

<template>
	<div>
		<Text tag="h1" variant="main-title" v-html="title" />
		<Text variant="large-text" class="this-text" v-html="description"/>
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
