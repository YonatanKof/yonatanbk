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
	<section id="yonatan-ben-knaan">
		<div id="main-messages" class="section-block checked-grid-lines">
			<div class="padding-center-center main-message">
				<div id="main-messages-top">
					<span>
						<div id="avatar">
							<NuxtImg src="/images/kof-pic.webp" placeholder />
							<Text tag="h2" variant="compressed-title" class="color-slight">Hi, I’m Yonatan Ben Knaan </Text>
						</div>
						<Text class="title" tag="h1" variant="main-title">A full stack designer </Text>
					</span>
					<span>
						<Text class="text-end" tag="h1" variant="main-title">Who leads design initiatives </Text>
						<Text id="main-message" class="text-end color-slight" tag="h2" variant="compressed-title" >
							Perfect to Manage design Teams in Startups and Orgs
						</Text>
					</span>
				</div>
				<div id="main-messages-bottom">
					<ClientProof />
					<div class="cta-buttons">
						<Button button-style="secondary" tag="a" href="https://www.linkedin.com/in/yonatankof/" target="_blank">
							Look me up on Linkedin
						</Button>
						<Button :onClick="open">Contact Me</Button>
					</div>
				</div>
			</div>
		</div>
		<div id="secondary-messages" class="section-block">
			<div class="padding-center-center">
				<Text tag="h1" variant="main-title">Design Connection</Text>
			</div>
		</div>
	</section>
</template>

<style scoped>
.title {
	width: fit-content;
	position: relative;
}
.title::before {
	content: '';
	background-image: url('/images/arrow-v1.webp');
	display: inline-block;
	width: var(--step-3);
	aspect-ratio: 136/214;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	position: absolute;
	transform: rotate(115deg);
	inset-block-end: var(--step-3);
	inset-inline-start: calc(var(--step-3) * -1);
}
/* span:first-child {
	color: aquamarine;
} */
.text-end {
	text-align: end;
}
#main-messages-bottom {
	width: 100%;
	display: flex;
	justify-content: space-between;
	gap: var(--space-xl);
}
.cta-buttons {
	display: flex;
	flex-direction: row;
	gap: var(--space-s);
}

.client-section {
	width: 20rem;
}

#main-messages {
	display: flex;
	justify-content: center;
	align-items: center;
}
.main-message {
	display: grid;
	gap: var(--space-4xl);
	grid-template-columns: 1fr;
	padding-block-end: var(--space-4xl);
}
#main-messages-top {
	display: flex;
	flex-direction: column;
	align-items: center;
}
#avatar {
	display: flex;
	align-items: center;
	gap: var(--space-s);
	margin-inline-start: calc(calc(var(--step-6) + var(--space-3xs)) * -1);
}
#avatar img {
	border-radius: 100%;
	width: var(--step-6);
	height: var(--step-6);
}
#secondary-messages {
	background-color: var(--color-brand-red-main);
	height: 100%;
}
#secondary-messages h1 {
	color: var(--color-sys-invert-main);
}
</style>
