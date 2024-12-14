<script setup lang="ts"></script>

<template>
	<div class="open">
		<div class="pulse-wrapper">
			<span></span>
		</div>
		<Text variant="body-small" id="open-text">Open For Work</Text>
	</div>
</template>

<style scoped>
@keyframes pulse {
	0% {
		transform: scale(0.5);
		opacity: 0;
	}
	25% {
		transform: scale(0.5);
		opacity: 1;
	}
	100% {
		transform: scale(1.5);
		opacity: 0;
	}
}
.open {
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	gap: var(--space-3xs);
	height: min-content;
}

.pulse-wrapper {
	position: relative;
	display: inline-block;
	height: var(--space-s);
	width: var(--space-s);
}

span {
	display: inline-block;
	border-radius: 100%;
	background-color: var(--color-brand-green-main);
}

/* Pulsing circles using pseudo-elements */
span::before,
span::after {
	transform: scale(0.5);
	opacity: 0;
	content: '';
	position: absolute;
	inset: 0;
	border-radius: 100%;
	background-color: var(--color-brand-green-main);
	animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Delay the second pulse */
span::after {
	animation-delay: 1s;
}
#open-text {
	color: var(--color-sys-slight);
}
</style>
