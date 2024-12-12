<script setup lang="ts">
const BUTTON_SIZES = ['small', 'medium', 'large'] as const;
type ButtonSize = (typeof BUTTON_SIZES)[number];

const BUTTON_STYLES = ['primary', 'secondary', 'ghost', 'subtle'] as const;
type ButtonStyle = (typeof BUTTON_STYLES)[number];

const props = withDefaults(
	defineProps<{
		tag?: 'button' | 'a';
		buttonSize?: ButtonSize;
		buttonStyle?: ButtonStyle;
		// Add link-specific props
		href?: string;
		target?: string;
		// Add click handler prop
		onClick?: () => void;
	}>(),
	{
		tag: 'button',
		buttonSize: 'medium',
		buttonStyle: 'primary',
	}
);

const SIZE_CLASSES: Record<ButtonSize, string> = {
	large: 'button-large',
	small: 'button-small',
	medium: 'button-medium',
};

const buttonClasses = computed(() => ({
	button: true,
	[SIZE_CLASSES[props.buttonSize]]: true,
	[`button-${props.buttonStyle}`]: true,
}));

// Handle click events
const handleClick = () => {
	props.onClick?.();
};

// Handle keyup events for accessibility
const handleKeyup = (event: KeyboardEvent) => {
	if (event.key === 'Enter') {
		props.onClick?.();
	}
};
</script>

<template>
	<component :is="tag" :class="buttonClasses" :href="href" :target="target" @click="handleClick" @keyup="handleKeyup">
		<slot />
	</component>
</template>

<style scoped>
@keyframes repeating-linear-gradient {
	0% {
		background-position: 0 0;
	}
	100% {
		background-position: calc(var(--pattern-size) * 10) 0;
	}
}
/* Base style */
.button {
	--clip-shift: var(--space-xs);
	--clip-clr-i: var(--color-brand-red-main);
	--clip-clr-ii: var(--color-brand-orange-main);

	--stripe-width: calc(var(--clip-shift) / 1.5);
	--pattern-size: calc(var(--stripe-width) * 1.4142);

	padding: 1em 1.5em;
	margin-inline-start: var(--clip-shift);
	margin-block-end: var(--clip-shift);
	position: relative;
	background-color: var(--color-sys-invert-main);
	box-shadow: inset 0 0 0 0.1em var(--color-sys-slight);
	transition: all 0.25s ease-out;
	text-align: center;
	&::before {
		content: '';
		width: auto;
		height: auto;
		background: repeating-linear-gradient(
			135deg,
			var(--clip-clr-i) 0px calc(var(--clip-shift) / 3),
			var(--clip-clr-ii) calc(var(--clip-shift) / 3) calc(var(--stripe-width))
		);
		background-size: var(--pattern-size) var(--pattern-size);
		position: absolute;
		inset-inline-start: calc(var(--clip-shift) * -1);
		inset-inline-end: 0;
		inset-block-start: 0;
		inset-block-end: calc(var(--clip-shift) * -1);
		clip-path: polygon(
			var(--clip-shift) 0,
			100% 0,
			100% calc(100% - var(--clip-shift)),
			calc(100% - var(--clip-shift)) 100%,
			0 100%,
			0 var(--clip-shift)
		);
		z-index: -1;
	}
	&:hover {
		box-shadow: inset 0 0 0 0.2em var(--color-sys-main);
		&::before {
			animation: 2s ease-in-out 0s infinite alternate repeating-linear-gradient;
		}
	}
	&:focus,
	&:focus-visible {
		box-shadow: inset 0 0 0 0.1em var(--color-brand-red-main), inset 0 0 0 0.2em var(--color-sys-invert-main),
			inset 0 0 0 0.4em var(--color-focus-slight);
		outline: none;
	}
	&:target {
		border: 4px solid rgb(238, 1, 255);
	}
}
/* Button Size */
.button-small {
	font-size: var(--step--1);
	--clip-shift: var(--space-2xs);
}

.button-medium {
	font-size: var(--step-1);
}

.button-large {
	font-size: var(--step-3);
	--clip-shift: var(--space-s);
}
/* Button Style */

/* .button-primary is using default button styles */

.button-secondary {
	--clip-clr-i: var(--color-sys-dim);
	--clip-clr-ii: var(--color-sys-dis);
}

.button-ghost {
	--clip-shift: 0;
	box-shadow: unset;
	&::before {
		content: none;
	}
}

.button-subtle {
	--clip-shift: 0;
	box-shadow: inset 0 0 0 0.05em var(--color-sys-slight);
	&::before {
		content: none;
	}
}
</style>
