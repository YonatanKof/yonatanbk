<script setup>
import { useModal } from 'vue-final-modal';
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
	<main class="wrapper center-center">
		<div class="this-one">
			<ShapesCircleFifth />
			<ShapesCircleHalf />
		</div>
		<OpenForWork />
		<Text tag="h1" variant="main-title">Main Title</Text>
		<Text tag="h2" variant="compressed-title">Compressed Title</Text>
		<Text>Simple text</Text>
		<hr />
		<Text tag="h2" variant="main-title">Buttons</Text>
		<section>
			<div>
				<Text tag="h3" variant="compressed-title">Primary</Text>
				<Button buttonSize="small">SM</Button>
				<Button>MD</Button>
				<Button buttonSize="large">LG</Button>
				<Text tag="h3" variant="compressed-title">Secondary</Text>
				<Button buttonStyle="secondary" buttonSize="small">SM</Button>
				<Button buttonStyle="secondary">MD</Button>
				<Button buttonStyle="secondary" buttonSize="large">LG</Button>
				<Text tag="h3" variant="compressed-title">Ghost</Text>
				<Button buttonSize="small" buttonStyle="ghost">SM</Button>
				<Button buttonStyle="ghost">MD</Button>
				<Button buttonSize="large" buttonStyle="ghost">LG</Button>
				<Text tag="h3" variant="compressed-title">Subtle</Text>
				<Button buttonSize="small" buttonStyle="subtle">SM</Button>
				<Button buttonStyle="subtle">MD</Button>
				<Button buttonSize="large" buttonStyle="subtle">LG</Button>
			</div>
			<div>
				<Text tag="h3" variant="compressed-title">Open Dialog</Text>
				<Button :onClick="open">Open Dialog</Button>
				<Text tag="h3" variant="compressed-title">Open Link</Text>
				<Button tag="a" href="https://wwape.com" target="_blank">Visit WWApe</Button>
				<Text tag="h3" variant="compressed-title">Download File</Text>
				<Button tag="a" href="/misc/CV-YonatanBenKnaan-2024.pdf" target="_blank"> Download CV </Button>
			</div>
		</section>
	</main>
</template>

<style scoped>
.this-one {
	background-color: black;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	font-size: var(--step--2);
	mask-image: url(/images/torn-2.webp);
	mask-size: contain;
}
section {
	gap: var(--space-xl);
	display: flex;
	flex-direction: row;
}
div {
	display: flex;
	flex-direction: column;
	gap: var(--space-2xs);
	align-items: start;
	justify-content: start;
}
</style>