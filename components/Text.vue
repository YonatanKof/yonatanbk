<script setup lang="ts">
// Define the variant type as a const array first
const VARIANTS = ['main-title', 'secondary-title', 'compressed-title', 'text', 'large-text', 'body-medium', 'body-small'] as const;
// Create the type from the array values
type Variant = (typeof VARIANTS)[number];

const props = withDefaults(
	defineProps<{
		tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
		variant?: 'main-title' | 'secondary-title' | 'compressed-title' | 'text' | 'large-text' | 'body-medium' | 'body-small';
	}>(),
	{
		tag: 'p',
		variant: 'text',
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
	text: 'text',
};

const variantClasses = computed(() => {
	return VARIANT_CLASSES[props.variant];
});
</script>

<template>
	<component :is="tag" :class="variantClasses">
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
	font-variation-settings: 'wght' 400, 'wdth' 86, 'opsz' 96;
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
.text {
	font-size: var(--step-1);
	font-variation-settings: var(--base-font-settings);
}
</style>
