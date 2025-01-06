<script setup lang="ts">
defineProps({
	isDesc: {
		type: Boolean,
		default: true,
	},
});
</script>

<template>
	<div>
		<Text tag="h1" variant="main-title">
			<slot name="title">Proj name!</slot>
		</Text>
		<Text variant="large-text" class="this-text" v-if="isDesc">
			<slot name="desc"></slot>
		</Text>
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
.this-text {
	max-width: 45ch;
}
</style>
