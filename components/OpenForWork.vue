<script setup lang="ts"></script>

<template>
	<div class="open">
		<div class="pulse-wrapper">
			<span></span>
		</div>
		<Text variant="body-x-small" class="chip" id="open-text">Open For Work</Text>
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
		transform: scale(1);
		opacity: 0;
	}
}
.open {
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	gap: var(--space-3xs);
	height: min-content;
	position: relative;
	backdrop-filter: blur(2px);
	border-radius: 4rem;
}
.chip {
	border: unset;
}

.pulse-wrapper {
	position: absolute;
	display: inline-block;
	inset-inline-start: calc(var(--space-3xs) * -1);
	height: var(--space-s);
	width: var(--space-s);
	&::before {
		content: '';
		display: block;
		height: var(--space-s);
		width: var(--space-s);
		background: radial-gradient(white 0%, transparent 50%);
		border-radius: 100%;
		transform: scale(1.5);
	}
}

span {
	display: inline-block;
	border-radius: 100%;
	background-color: var(--color-brand-green-main);
}

/* Pulsing circles using pseudo-elements */
span::before,
span::after {
	content: '';
	transform: scale(0.5);
	opacity: 0;
	position: absolute;
	inset: 0;
	border-radius: 100%;
	background-color: var(--color-brand-green-main);
	animation: pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Delay the second pulse */
span::after {
	animation-delay: 1s;
}
#open-text {
	color: var(--color-sys-slight);
	padding: 0.5em 1em;
	background-color: var(--color-sys-invert-slight);
}
</style>
