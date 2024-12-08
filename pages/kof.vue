<script setup>
import { ModalsContainer, useModal } from 'vue-final-modal';
import Modal from '~/components/Modal.vue';


const { open, close } = useModal({
	component: Modal,
	attrs: {
		onConfirm() {
			close();
		},
	},
});
</script>

<template>
	<section class="section-block padding-center-center">
		<Button :onClick="open">Open Dialog</Button>
		<Button buttonSize="small">Small! Primary</Button>
		<Button>Medium! Primary</Button>
		<Button buttonSize="large">Large! Primary</Button>
		<Button buttonStyle="secondary" buttonSize="small">Small! Secondary</Button>
		<Button buttonStyle="secondary">Medium! Secondary</Button>
		<Button buttonStyle="secondary" buttonSize="large">Large! Secondary</Button>
		<Button buttonSize="small" buttonStyle="ghost">Small! Ghost</Button>
		<Button buttonStyle="ghost">Medium! Ghost</Button>
		<Button buttonSize="large" buttonStyle="ghost">Large! Ghost</Button>
		<Button buttonSize="small" buttonStyle="subtle">Small! Subtle</Button>
		<Button buttonStyle="subtle">Medium! Subtle</Button>
		<Button buttonSize="large" buttonStyle="subtle">Large! Subtle</Button>
	</section>
</template>

<style scoped>
section {
	gap: 1rem;
}
</style>
