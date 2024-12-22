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
	<section id="yonatan-ben-knaan" class="checked-grid-lines torn-paper-bottom">
		<div class="main-message">
			<div id="main-messages-top">
				<div id="avatar">
					<NuxtImg src="/images/kof-pic.webp" placeholder />
					<Text tag="h2" variant="compressed-title" text-style="color-slight">Yonatan Ben Knaan, </Text>
				</div>
				<Text id="main-title-1" tag="h1" variant="main-title" text-style="grid-size-big">a full stack designer </Text>
			</div>

			<div id="main-messages-bottom">
				<Text id="main-title-2" text-style="grid-size-big text-end" tag="h1" variant="main-title"
					>who leads <span class="no-brake">design initiatives</span>
				</Text>
				<Text id="flipping-message" text-style="text-end color-slight" tag="h2" variant="compressed-title">
					that Manage design Teams in Startups and Orgs
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
@property --grid-num {
	syntax: '<number>';
	initial-value: 39;
	inherits: true;
}

.torn-paper-bottom {
	--torn-paper-image: url('/images/torn-1.webp');
	--torn-paper-bg-color: var(--color-brand-red-main);
}
.checked-grid-lines {
	background-image: linear-gradient(to right, var(--color-brand-red-dis) 1px, transparent 1px),
		linear-gradient(to bottom, var(--color-brand-red-dis) 1px, transparent 1px);
	background-size: var(--grid-block) var(--grid-block);
	background-position: center top;
	/* min-height: 1280px; */
}
.main-message {
	margin-inline: auto;
	padding-block-start: calc(var(--header-height) + calc(var(--grid-block) * 2));
	display: grid;
	grid-template-columns: 1fr;
	max-width: calc(var(--grid-block) * var(--grid-num));
	grid-template-rows: repeat(24, var(--grid-block));
	grid-template-columns: repeat(var(--grid-num), var(--grid-block));
	justify-content: center;
	/* transition: max-width 0.25s ease-in-out, grid-template-columns 0.25s ease-in-out; */
	/* @media (width <= 1408px) {
		--grid-num: 37;
	} */
	/* @media (width <= 1280px) {
		--grid-num: 37;
	} */
	@media (width <= 1216px) {
		--grid-num: 37;
	}
	@media (width <= 1152px) {
		--grid-num: 35;
	}
	@media (width <= 960px) {
		--grid-num: 33;
	}
	@media (width <= 896px) {
		--grid-num: 31;
	}
	/* @media (width <= 768px) {
		--grid-num: 27;
	} */
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

#main-messages-top {
	grid-row: 1 / span 5;
	grid-column: 5 / -1;
	display: grid;
	grid-template-rows: subgrid;
	grid-template-columns: subgrid;
	@media (width <= 1216px) {
		grid-column: 3 / -1;
	}
	@media (width <= 960px) {
		grid-column: 2 / -1;
	}
	@media (width <= 768px) {
		grid-column: 1 / -1;
	}
	/* @media (width <= 704px) {

	} */
}
#main-messages-bottom {
	grid-row: 6 / span 5;
	grid-column: 1 / span 3;
	display: grid;
	grid-template-rows: subgrid;
	justify-self: center;
	grid-column: 1 / -1;
	@media (width <= 1216px) {
		grid-row: 6 / span 8;
	}
	/* @media (width <= 768px) {
		grid-row: 6 / span 5;
	} */
}
#avatar {
	grid-row: 1 / span 2;
	grid-column: 1 / -1;
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
	grid-column: 3 / -6;
	position: relative;
	@media (width <= 1216px) {
		grid-column: 4 / -5;
	}
	@media (width <= 1152px) {
		grid-column: 3 / -4;
	}
	@media (width <= 960px) {
		grid-column: 3 / -2;
	}
	@media (width <= 896px) {
		grid-column: 2 / -2;
	}
	@media (width <= 768px) {
		grid-column: 3 / -2;
	}
	/* @media (width <= 704px) {
		grid-column: 3 / -6;
	} */
	&::before {
		content: '';
		background-image: url('/images/arrow-v1.webp');
		display: inline-block;
		width: calc(var(--grid-block) * 1.1);
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
	@media (width <= 1152px) {
		grid-row: 1 / span 6;
	}
}
#flipping-message {
	grid-row: 4 / span 2;
	align-self: center;
	@media (width <= 1152px) {
		grid-row: 7 / span 2;
		text-align: center;
	}
}
#logos-cta {
	grid-row: 13 / span 3;
	width: 100%;
	display: flex;
	justify-content: space-between;
	gap: var(--space-xl);
	grid-column: 1 / -1;
	@media (width <= 1152px) {
		grid-row: 16 / span 3;
	}
}
.client-section {
	max-width: calc(var(--grid-block) * 20);
	@media (width <= 1408px) {
	}
	@media (width <= 1280px) {
		
	}
	@media (width <= 1216px) {
		max-width: calc(var(--grid-block) * 18);
		
	}
	@media (width <= 1152px) {
		max-width: calc(var(--grid-block) * 16);
		
	}
	@media (width <= 960px) {
		max-width: calc(var(--grid-block) * 14);
		
	}
	@media (width <= 896px) {
		max-width: calc(var(--grid-block) * 12);
		/* max-width: calc(var(--grid-block) * 10); */
		
	}
	@media (width <= 768px) {
		
	}

}
</style>
