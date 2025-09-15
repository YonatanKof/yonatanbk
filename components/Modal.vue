<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal';

export interface LinkToProps {
	modelValue: boolean;
	escToClose?: boolean;
	clickToClose?: boolean;
	modalWidth?: number;
}

const props = withDefaults(defineProps<LinkToProps>(), {
	escToClose: false,
	clickToClose: false,
	modalWidth: 2,
});

// Create a computed style object
// I took this extra step because the modal is Teleport
// And it moves content outside of Vue's normal component hierarchy.
// Setting styles on the component (:style="modalStyles"), ensures it travel with teleported content
const modalStyles = computed(() => ({
	'--modal-width': `calc(var(--space-8xl) * ${props.modalWidth})`,
}));

const emit = defineEmits<{
	(e: 'confirm'): void;
	(e: 'update:modelValue', value: boolean): void;
}>();

// Create a computed property for the modal's show/hide state
const showModal = computed({
	get: () => props.modelValue,
	set: (value) => emit('update:modelValue', value),
});

const isMobileView = ref(false);
function updateViewport() {
	isMobileView.value = window.innerWidth < 544;
}

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
		v-model="showModal"
		class="confirm-modal"
		content-class="confirm-modal-content confirm-modal-content-top"
		overlay-transition="vfm-fade"
		content-transition="vfm-fade"
		:click-to-close="clickToClose"
		:esc-to-close="escToClose"
		:style="modalStyles"
	>
		<slot />
	</VueFinalModal>
	<VueFinalModal
		v-else
		v-model="showModal"
		class="confirm-modal"
		content-class="confirm-modal-content confirm-modal-content-bottom"
		overlay-transition="vfm-fade"
		content-transition="vfm-fade"
		:click-to-close="clickToClose"
		:esc-to-close="escToClose"
		:style="modalStyles"
		swipe-to-close="down"
	>
		<slot />
	</VueFinalModal>
</template>

<style>
.confirm-modal {
	z-index: 10000 !important;
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
	width: var(--modal-width);
	padding: var(--space-m);
	border: 2px solid var(--color-sys-main);
	box-shadow: var(--shadow-lg);
	overflow: hidden;
	margin-inline: var(--space-l);
	max-height: calc(100vh - var(--space-l));
	overflow: auto;
}
</style>
