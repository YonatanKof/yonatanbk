<script setup lang="ts">
// Define the variant type as a const array first
const VARIANTS = ['small', 'medium', 'large'] as const;
// Create the type from the array values
type Variant = (typeof VARIANTS)[number];

const props = withDefaults(
	defineProps<{
		tag?: 'button' | 'a';
		variant?: 'small' | 'medium' | 'large';
	}>(),
	{
		// Defaults
		tag: 'button',
		variant: 'medium',
	}
);

// Type-safe variant classes mapping
const VARIANT_CLASSES: Record<Variant, string> = {
	large: 'button-large',
	small: 'button-small',
	medium: 'button-medium',
};

const variantClasses = computed(() => {
	return VARIANT_CLASSES[props.variant];
});
</script>

<template>
	<component class="button" :is="tag" :class="variantClasses">
		<slot />
	</component>
</template>

<style scoped>
.button {
	--clip-shift: var(--space-2xs);
	padding: 1em 1.5em;
	margin-inline-start: var(--clip-shift);
	margin-block-end: var(--clip-shift);
	background-color: var(--color-sys-invert-main);
	box-shadow: inset 0 0 0 var(--space-4xs) var(--color-sys-dim);
	position: relative;
	&::before {
		content: '';
		width: auto;
		height: auto;
		background-image: repeating-linear-gradient(
			135deg,
			var(--color-brand-orange-main) 0px calc(var(--clip-shift) / 3),
			var(--color-brand-red-main) calc(var(--clip-shift) / 3) calc(var(--clip-shift) / 1.5)
		);
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
}
.button-small {
	font-size: var(--step--1);
	--clip-shift: var(--space-2xs);
}
.button-medium {
	font-size: var(--step-1);
	--clip-shift: var(--space-xs);
}
.button-large {
	font-size: var(--step-2);
	--clip-shift: var(--space-s);
}
</style>
