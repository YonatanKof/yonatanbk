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
	<section id="hello" class="checked-grid-lines torn-paper-bottom">
		<div class="main-message">
			<div id="main-messages-top">
				<div id="avatar">
					<NuxtImg src="/images/kof-pic.webp" placeholder />
					<Text tag="h2" variant="compressed-title" text-style="color-slight">I'm Yonatan <span class="no-brake">Ben Knaan,</span> </Text>
				</div>
				<Text class="text-on-big" id="main-title-1" tag="h1" variant="main-title" text-style="grid-size-big"
					>a full stack designer
				</Text>
				<Text class="text-on-small" id="main-title-1" tag="h1" variant="main-title" text-style="grid-size-big"
					>a full stack
				</Text>
			</div>

			<div id="main-messages-bottom">
				<Text class="text-on-big" id="main-title-2" text-style="grid-size-big text-end" tag="h1" variant="main-title"
					>who leads <span class="no-brake">design initiatives</span>
				</Text>
				<Text class="text-on-small" id="main-title-2" text-style="grid-size-big text-end" tag="h1" variant="main-title"
					>design lead
				</Text>
				<Text id="flipping-message" text-style="text-end color-slight" tag="h2" variant="compressed-title">
					that Manage design Teams <span class="no-brake">in Startups and Orgs</span>
				</Text>
			</div>
			<span id="logos-cta">
				<ClientProof />
				<div class="cta-buttons">
					<Button
						style="padding-inline: unset"
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
.text-on-big {
	@media (width < 704px) {
		display: none;
	}
}
.text-on-small {
	display: none;
	@media (width < 704px) {
		display: unset;
	}
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
}
.main-message {
	margin-inline: auto;
	padding-block-start: calc(var(--header-height) + calc(var(--grid-block) * 2));
	display: grid;
	grid-template-columns: 1fr;
	max-width: calc(var(--grid-block) * var(--grid-num));
	grid-template-rows: repeat(23, var(--grid-block));
	grid-template-columns: repeat(var(--grid-num), var(--grid-block));
	justify-content: center;
	@media (width < 1216px) {
		--grid-num: 37;
	}
	@media (width < 1152px) {
		--grid-num: 35;
		grid-template-rows: repeat(24, var(--grid-block));
	}
	@media (width < 960px) {
		--grid-num: 33;
	}
	@media (width < 896px) {
		--grid-num: 31;
	}
	@media (width < 704px) {
		--grid-num: 23;
	}
	@media (width < 640px) {
		--grid-num: 21;
	}
	@media (width < 600px) {
		--grid-num: 19;
	}
	@media (width < 560px) {
		--grid-num: 17;
		grid-template-rows: repeat(22, var(--grid-block));
	}
	@media (width < 520px) {
		--grid-num: 15;
		
	}
	@media (width < 480px) {
		--grid-num: 13;
		grid-template-rows: repeat(31, var(--grid-block));
	}
	@media (width < 440px) {
		--grid-num: 11;
	}
}

#main-messages-top {
	grid-row: 1 / span 5;
	grid-column: 5 / -1;
	display: grid;
	grid-template-rows: subgrid;
	grid-template-columns: subgrid;
	@media (width < 1216px) {
		grid-column: 3 / -1;
	}
	@media (width < 960px) {
		grid-column: 1 / -1;
	}
	@media (width < 768px) {
		grid-column: 1 / -1;
	}
	@media (width < 480px) {
		grid-row: 1 / span 8;
	}
}
#main-messages-bottom {
	grid-row: 6 / span 5;
	display: grid;
	grid-template-rows: subgrid;
	grid-column: 1 / -1;
	@media (width < 1216px) {
		grid-row: 6 / span 8;
	}
	@media (width < 704px) {
		grid-row: 6 / span 6;
	}
	/* @media (width < 520px) {
		grid-row: 6 / span 9;
	} */
	@media (width < 480px) {
		grid-row: 9 / span 9;
	}
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
	@media (width < 704px) {
		grid-column: 3 / -1;
	}
	@media (width < 640px) {
		grid-column: 2 / -1;
	}
	@media (width < 600px) {
		grid-column: 1 / -1;
	}
	@media (width < 560px) {
		gap: var(--space-xs);
		margin-inline-start: calc(var(--grid-block) * -1);
	}
	@media (width < 520px) {
		margin-inline-start: calc(var(--grid-block) * -2);
	}
	@media (width < 480px) {
		margin-inline-start: unset;
		grid-column: 2 / -2;
	}
	@media (width < 440px) {
		margin-inline-start: unset;
		grid-column: 1 / -2;
	}
}
#main-title-1 {
	grid-row: 3 / span 3;
	grid-column: 3 / -6;
	position: relative;
	@media (width < 1216px) {
		grid-column: 4 / -5;
	}
	@media (width < 1152px) {
		grid-column: 3 / -4;
	}
	@media (width < 960px) {
		grid-column: 3 / -3;
	}
	@media (width < 896px) {
		grid-column: 3 / -2;
	}
	@media (width < 768px) {
		grid-column: 3 / -2;
	}
	@media (width < 704px) {
		grid-row: 3 / span 6;
		grid-column: 5 / -5;
	}
	@media (width < 640px) {
		grid-column: 4 / -4;
	}
	@media (width < 600px) {
		grid-column: 3 / -3;
	}
	@media (width < 560px) {
		grid-column: 2 / -2;
	}
	@media (width < 520px) {
		grid-column: 1 / -1;
	}
	@media (width < 480px) {
		grid-row: 3 / span 6;
		grid-column: 4 / -4;
	}	
	@media (width < 440px) {
		grid-row: 3 / span 6;
		grid-column: 3 / -3;
	}
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
		inset-inline-start: calc(var(--grid-block) * -1);
	}
}
#main-title-2 {
	grid-row: 1 / span 3;
	@media (width < 1152px) {
		grid-row: 1 / span 6;
	}
	@media (width < 704px) {
		grid-row: 1 / span 3;
	}
	@media (width < 640px) {
		grid-column: 1 / -1;
	}
	@media (width < 520px) {
		font-size: calc(var(--grid-block) * 2.9);
	}
	@media (width < 480px) {
		grid-row: 1 / span 6;	
	}
	
}
#flipping-message {
	grid-row: 4 / span 2;
	align-self: center;
	@media (width < 1152px) {
		grid-row: 7 / span 2;
		text-align: center;
	}
	@media (width < 704px) {
		grid-row: 4 / span 2;
	}
	@media (width < 640px) {
		grid-column: 1 / -1;
		grid-row: 4 / span 3;
	}
	@media (width < 480px) {
		grid-row: 7 / span 3;
	}
}
#logos-cta {
	grid-row: 13 / span 3;
	width: 100%;
	display: flex;
	justify-content: space-between;
	grid-column: 1 / -1;
	@media (width < 1152px) {
		grid-row: 16 / span 3;
	}
	@media (width < 704px) {
		grid-row: 12 / span 7;
		flex-direction: column-reverse;
	}
	@media (width < 640px) {
		grid-row: 13 / span 7;
	}
	@media (width < 520px) {
		/* grid-row: 16 / span 7; */
	}
	@media (width < 480px) {
		grid-row: 19 / span 10;
	}
}
.client-section {
	max-width: calc(var(--grid-block) * 20);
	@media (width < 1408px) {
	}
	@media (width < 1280px) {
	}
	@media (width < 1216px) {
		max-width: calc(var(--grid-block) * 18);
	}
	@media (width < 1152px) {
		max-width: calc(var(--grid-block) * 16);
	}
	@media (width < 960px) {
		max-width: calc(var(--grid-block) * 14);
	}
	@media (width < 896px) {
		max-width: calc(var(--grid-block) * 12);
	}
	@media (width < 704px) {
		max-width: 100%;
	}
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
	@media (width < 704px) {
		align-self: flex-end;
		& button {
			width: calc(var(--grid-block) * 11);
		}
		& a {
			width: calc(var(--grid-block) * 11);
		}
	}
	@media (width < 640px) {
		& button {
			width: calc(var(--grid-block) * 10);
		}
		& a {
			width: calc(var(--grid-block) * 10);
		}
	}
	@media (width < 600px) {
		& button {
			width: calc(var(--grid-block) * 9);
		}
		& a {
			width: calc(var(--grid-block) * 9);
		}
	}
	@media (width < 560px) {
		& button {
			width: calc(var(--grid-block) * 8);
		}
		& a {
			width: calc(var(--grid-block) * 8);
		}
	}
	@media (width < 520px) {
		& button {
			width: calc(var(--grid-block) * 7);
		}
		& a {
			width: calc(var(--grid-block) * 7);
		}
	}
	@media (width < 480px) {
		flex-direction: column-reverse;
		gap: calc(var(--grid-block) / 3);
		& button {
			width: calc(var(--grid-block) * 13);
		}
		& a {
			width: calc(var(--grid-block) * 13);
		}
	}
	@media (width < 440px) {
		& button {
			width: calc(var(--grid-block) * 11);
		}
		& a {
			width: calc(var(--grid-block) * 11);
		}
	}
}
/* #main-title-1,
#main-title-2 {
	@media (width < 640px) {
		font-size: calc(var(--grid-block) * 2.75);
	}
} */
</style>
