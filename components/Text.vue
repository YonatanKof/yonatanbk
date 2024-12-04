<script setup lang="ts">
import { computed } from 'vue';

type Variant = 'large' | 'small' | 'text';

const { tag = 'p', variant = 'text' } = defineProps<{
	tag?: 'h1' | 'h2' | 'p'; // to h6
	variant?: Variant;
}>();

const VARIANT_CLASSES: Record<Variant, string> = {
	large: 'heading-large', // font-bold text-5xl
	small: 'heading-small',
	text: 'text',
};

const variantClasses = computed(() => {
	return VARIANT_CLASSES[variant];
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
