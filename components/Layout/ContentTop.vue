<script setup lang="ts">
defineProps({
	isDesc: {
		type: Boolean,
		default: true,
	},
	isDescIi: {
		type: Boolean,
		default: false,
	},
});
</script>

<template>
	<div>
		<Text tag="h1" variant="main-title" text-style="text-balance">
			<slot name="title">Proj name!</slot>
		</Text>
		<Text variant="large-text" class="max-ch" v-if="isDesc">
			<slot name="desc"></slot>
		</Text>
		<Text variant="large-text" class="max-ch" v-if="isDescIi">
			<slot name="desc-ii"></slot>
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
.max-ch {
	max-width: 55ch;
}
</style>
