<script setup lang="ts">
// Define the variant type as a const array first
const VARIANTS = [
	'main-title',
	'secondary-title',
	'compressed-title',
	'text',
	'large-text',
	'body-medium',
	'body-small',
	'body-x-small',
] as const;
// Create the type from the array values
type Variant = (typeof VARIANTS)[number];

// Define available text styles
const TEXT_STYLES = ['color-slight', 'color-dim', 'color-dis', 'grid-size-big', 'grid-size-small', 'text-end'] as const;
type TextStyle = (typeof TEXT_STYLES)[number];

const props = withDefaults(
	defineProps<{
		tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
		variant?:
			| 'main-title'
			| 'secondary-title'
			| 'compressed-title'
			| 'text'
			| 'large-text'
			| 'body-medium'
			| 'body-small'
			| 'body-x-small';
		textStyle?: string; // Accept space-separated style classes
	}>(),
	{
		tag: 'p',
		variant: 'text',
		textStyle: '',
	}
);

// Type-safe variant classes mapping
const VARIANT_CLASSES: Record<Variant, string> = {
	'main-title': 'heading-large',
	'secondary-title': 'heading-medium',
	'compressed-title': 'heading-small',
	'large-text': 'body body-large',
	'body-medium': 'body body-medium',
	'body-small': 'body body-small',
	'body-x-small': 'body body-x-small',
	text: 'text',
};

// Compute combined classes from both variant and text styles
const computedClasses = computed(() => {
	const classes = [VARIANT_CLASSES[props.variant]];

	// Add text style classes if provided
	if (props.textStyle) {
		classes.push(...props.textStyle.split(' '));
	}

	return classes;
});
</script>

<template>
	<component :is="tag" :class="computedClasses">
		<slot />
	</component>
</template>

<style>
.heading-large {
	font-variation-settings: 'wght' 800, 'wdth' 100, 'opsz' 96;
	font-size: var(--step-8);
	line-height: 1;
}
.heading-medium {
	font-variation-settings: 'wght' 700, 'wdth' 100, 'opsz' 12;
	font-size: var(--step-4);
	line-height: 1;
}
.heading-small {
	font-variation-settings: 'wght' 300, 'wdth' 96, 'opsz' 80;
	font-size: var(--step-4);
	line-height: 1;
}
.body {
	font-variation-settings: var(--base-font-settings);
	font-family: var(--font-body);
	line-height: 1.35;
}
.body-large {
	font-size: var(--step-2);
}
.body-medium {
	font-size: var(--step-1);
}
.body-small {
	font-size: var(--step-0);
}
.body-x-small {
	font-size: var(--step--1);
}
.text {
	font-size: var(--step-1);
	font-variation-settings: var(--base-font-settings);
}

/* New style classes */
.color-slight {
	color: var(--color-sys-slight);
}
.color-dim {
	color: var(--color-sys-dim);
}
.color-dis {
	color: var(--color-sys-dis);
}
.text-end {
	text-align: end;
}
.grid-size-big {
	font-size: calc(var(--grid-block) * 3);
	line-height: calc(var(--grid-block) * 3);
}
.grid-size-small {
	font-size: calc(var(--grid-block) * 1);
	line-height: calc(var(--grid-block) * 1);
}
</style>
