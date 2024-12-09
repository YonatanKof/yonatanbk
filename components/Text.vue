<script setup lang="ts">
// Define the variant type as a const array first
const VARIANTS = ['main-title', 'compressed-title', 'text', 'large-text'] as const;
// Create the type from the array values
type Variant = (typeof VARIANTS)[number];

const props = withDefaults(
	defineProps<{
		tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
		variant?: 'main-title' | 'compressed-title' | 'text' | 'large-text';
	}>(),
	{
		tag: 'p',
		variant: 'text',
	}
);

// Type-safe variant classes mapping
const VARIANT_CLASSES: Record<Variant, string> = {
	'main-title': 'heading-large', // font-bold text-5xl
	'compressed-title': 'heading-small',
	'large-text': 'large-text',
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

<style scoped>
.heading-large {
	font-variation-settings: 'wght' 800, 'wdth' 100, 'opsz' 96;
	font-size: var(--step-8);
	line-height: 1;
}
.heading-small {
	font-variation-settings: 'wght' 400, 'wdth' 86, 'opsz' 96;
	font-size: var(--step-4);
	line-height: 1;
}
.large-text {
	font-variation-settings: var(--base-font-settings);
	font-size: var(--step-2);
	font-family: var(--font-body);
}
.text {
	font-variation-settings: var(--base-font-settings);
}
</style>
