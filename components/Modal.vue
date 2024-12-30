<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal';

const isMobileView = ref(false);
function updateViewport() {
	isMobileView.value = window.innerWidth < 544;
}
defineEmits<{
	(e: 'confirm'): void;
}>();

onMounted(() => {
	updateViewport();
	window.addEventListener('resize', updateViewport);
});

onUnmounted(() => {
	window.removeEventListener('resize', updateViewport);
});
</script>

<template>
	<VueFinalModal
		v-if="!isMobileView"
		class="confirm-modal"
		content-class="confirm-modal-content confirm-modal-content-top"
		overlay-transition="vfm-fade"
		content-transition="vfm-fade"
		:click-to-close="false"
	>
		<FormContactMe @confirm="$emit('confirm')" />
	</VueFinalModal>
	<VueFinalModal
		v-else
		class="confirm-modal"
		content-class="confirm-modal-content confirm-modal-content-bottom"
		overlay-transition="vfm-fade"
		content-transition="vfm-fade"
		:click-to-close="false"
		swipe-to-close="down"
	>
		<FormContactMe @confirm="$emit('confirm')" />
	</VueFinalModal>
</template>

<style>
.confirm-modal {
	display: flex;
	justify-content: center;
	align-items: center;
}
.confirm-modal-content {
	display: flex;
	flex-direction: column;
	background-color: var(--color-sys-invert-main);
	padding: var(--space-m);
	gap: var(--space-xs);
}
.confirm-modal-content-bottom {
	border-block-start: 2px solid var(--color-sys-main);
	position: absolute;
	inset-block-end: 0;
	width: calc(100% - var(--space-m) * 2);
}
.confirm-modal-content-top {
	min-width: calc(var(--space-4xl) * 2);
	width: calc(var(--space-8xl) * 2);
	padding: var(--space-m);
	border: 2px solid var(--color-sys-main);
	box-shadow: var(--shadow-lg);
	overflow: hidden;
	margin-inline: var(--space-l);
	max-height: calc(100vh - var(--space-l));
	overflow: auto;
}
</style>
