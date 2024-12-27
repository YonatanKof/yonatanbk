<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal';

const emit = defineEmits<{
	(e: 'confirm'): void;
}>();
</script>

<template>
	<VueFinalModal
		class="confirm-modal"
		content-class="confirm-modal-content"
		overlay-transition="vfm-fade"
		content-transition="vfm-fade"
		:click-to-close="false"
	>
		<Text tag="h2" variant="secondary-title" class="title">Let's talk!</Text>
	</VueFinalModal>
</template>

<style>
.confirm-modal {
	display: flex;
	justify-content: center;
	align-items: center;
}
.confirm-modal-content {
	min-width: calc(var(--space-4xl) * 2);
	width: calc(var(--space-8xl) * 2);
	padding: var(--space-m);
	display: flex;
	flex-direction: column;
	background-color: var(--color-sys-invert-main);
	border-radius: var(--border-radius-xs);
	box-shadow: var(--shadow-lg);
	overflow: hidden;
	gap: var(--space-xs);
	margin-inline: var(--space-l);
	max-height: calc(100vh - var(--space-l));
	overflow: auto;
}
</style>
<style scoped>
form {
	display: flex;
	flex-direction: column;
	gap: var(--space-xs);
}
.input {
	display: flex;
	gap: var(--space-3xs);
	flex-direction: column;
}
label {
	position: relative;
	& p {
		color: var(--color-sys-dim);
		position: absolute;
		inset-block-start: 0;
		inset-inline-end: 0;
	}
}
span {
	display: flex;
	gap: var(--space-2xs);
	justify-content: space-evenly;
	z-index: 1000;
	margin-block-start: var(--space-4xs);
	div {
		background-color: var(--color-brand-dis);
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: var(--border-radius-xs);
	}
	a {
		font-size: var(--step--1);
	}
	button {
		width: 100%;
	}
}
</style>
