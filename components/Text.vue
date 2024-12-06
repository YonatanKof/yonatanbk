<script setup lang="ts">
// Define the variant type as a const array first
const VARIANTS = ['large', 'small', 'text'] as const;
// Create the type from the array values
type Variant = (typeof VARIANTS)[number];

const props = withDefaults(
	defineProps<{
		tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
		variant?: 'large' | 'small' | 'text';
	}>(),
	{
		tag: 'p',
		variant: 'text',
	}
);

// Type-safe variant classes mapping
const VARIANT_CLASSES: Record<Variant, string> = {
	large: 'heading-large', // font-bold text-5xl
	small: 'heading-small',
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
	text-transform: capitalize;
	font-variation-settings: 'wght' 800, 'wdth' 100, 'opsz' 96;
	font-size: var(--step-7);
	text-align: center;
	line-height: 1.1;
}
.heading-small {
	/* text-transform: capitalize; */
	font-variation-settings: 'wght' 400, 'wdth' 86, 'opsz' 96;
	font-size: var(--step-4);
	/* text-align: center; */
	line-height: 1.1;
}
.text {
	/* text-decoration: underline; */
}
</style>
