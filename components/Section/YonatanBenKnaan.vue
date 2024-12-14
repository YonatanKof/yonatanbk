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
	<section id="yonatan-ben-knaan" class="section-block checked-grid-lines torn-paper-bottom">
		<div class="main-message">
			<div id="main-messages-top">
				<div id="avatar">
					<NuxtImg src="/images/kof-pic.webp" placeholder />
					<Text tag="h2" variant="compressed-title" class="color-slight">Hi, I’m Yonatan Ben Knaan </Text>
				</div>
				<Text id="main-title-1" tag="h1" variant="main-title">A full stack designer </Text>
			</div>

			<div id="main-messages-bottom">
				<Text id="main-title-2" class="text-end" tag="h1" variant="main-title">Who leads design initiatives </Text>
				<Text id="flipping-message" class="text-end color-slight" tag="h2" variant="compressed-title">
					That Manage design Teams in Startups and Orgs
				</Text>
			</div>
			<span id="logos-cta">
				<ClientProof />
				<div class="cta-buttons">
					<Button
						style="padding: unset"
						button-style="secondary"
						tag="a"
						href="https://www.linkedin.com/in/yonatankof/"
						target="_blank"
					>
						Hit me on Linkedin
					</Button>
					<Button :onClick="open">Contact Me</Button>
				</div>
			</span>
		</div>
	</section>
</template>

<style scoped>
.text-end {
	text-align: end;
}
.cta-buttons {
	display: flex;
	flex-direction: row;
	gap: calc(var(--grid-block) / 2);
	& button {
		width: calc(var(--grid-block) * 6);
	}
	& a {
		width: calc(var(--grid-block) * 8);
	}
}
.main-message {
	padding-block-start: calc(var(--header-height) + calc(var(--grid-block) * 2));
	display: grid;
	grid-template-columns: 1fr;
	/* max-width: calc(var(--grid-block) * 39); */
	/* max-width: max-content; */
	grid-template-rows: repeat(20, var(--grid-block));
	grid-template-columns: repeat(39, var(--grid-block));
	justify-content: center;
}
.span-low {
	display: flex;
	flex-direction: column;
	align-items: end;
	gap: var(--space-2xs);
}
.torn-paper-bottom {
	--torn-paper-image: url('/images/torn-1.webp');
	--torn-paper-bg-color: var(--color-brand-red-main);
}
#main-messages-top {
	grid-row: 1 / span 5;
	grid-column: 5 / end;
	display: grid;
	grid-template-rows: subgrid;
	grid-template-columns: subgrid;
}
#main-messages-bottom {
	grid-row: 6 / span 5;
	grid-column: 1 / span 3;
	display: grid;
	grid-template-rows: subgrid;
	justify-self: center;
	grid-column: 1 / end;
}
#avatar {
	grid-row: 1 / span 2;
	grid-column: 1 / end;
	display: flex;
	align-items: center;
	gap: var(--space-s);
	& img {
		border-radius: 100%;
		width: calc(var(--grid-block) * 2);
		height: calc(var(--grid-block) * 2);
	}
}
#main-title-1 {
	grid-row: 3 / span 3;
	grid-column: 3 / end;
	position: relative;
	&::before {
		content: '';
		background-image: url('/images/arrow-v1.webp');
		display: inline-block;
		width:  calc(var(--grid-block) * 1.1);
		aspect-ratio: 136/214;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		position: absolute;
		transform: rotate(115deg);
		/* inset-block-end: var(--grid-block); */
		inset-inline-start: calc(var(--grid-block) * -1);
	}
}
#main-title-2 {
	grid-row: 1 / span 3;
}
#flipping-message {
	grid-row: 4 / span 2;
	align-self: center;
}
#logos-cta {
	grid-row: 12 / span 3;
	width: 100%;
	display: flex;
	justify-content: space-between;
	gap: var(--space-xl);
	grid-column: 1 / end;
}
</style>
