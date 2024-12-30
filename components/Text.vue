<script setup lang="ts">
const VARIANTS = [
	'main-title',
	'secondary-title',
	'compressed-title',
	'heading-small',
	'heading-x-small',
	'body',
	'large-text',
	'body-medium',
	'body-small',
	'body-x-small',
] as const;
type Variant = (typeof VARIANTS)[number];

const TEXT_STYLES = [
	'color-slight',
	'color-dim',
	'color-dis',
	'color-invert',
	'grid-size-big',
	'text-end',
	'text-center',
	'text-bold',
] as const;
type TextStyle = (typeof TEXT_STYLES)[number];

const props = withDefaults(
	defineProps<{
		tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
		variant?: Variant;
		textStyle?: TextStyle | string;
	}>(),
	{
		tag: 'p',
		variant: 'body',
	}
);

const VARIANT_CLASSES: Record<Variant, string> = {
	'main-title': 'heading-large',
	'secondary-title': 'heading-medium',
	'compressed-title': 'heading-small',
	'heading-small': 'heading-small',
	'heading-x-small': 'heading-x-small',
	'large-text': 'body body-large',
	'body-medium': 'body body-medium',
	'body-small': 'body body-small',
	'body-x-small': 'body body-x-small',
	body: 'body',
};

const computedClasses = computed(() => {
	const classes = [VARIANT_CLASSES[props.variant]];

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
	font-variation-settings: 'wght' 300, 'wdth' 96, 'opsz' 96;
	font-size: var(--step-4);
	line-height: 1;
	@media (width < 976px) {
		font-size: var(--step-3);
	}
}
.heading-small {
	font-variation-settings: 'wght' 600, 'wdth' 100, 'opsz' 20;
	font-size: var(--step-3);
	line-height: 1;
}
.heading-x-small {
	font-variation-settings: 'wght' 600, 'wdth' 100, 'opsz' 20;
	font-size: var(--step-1);
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
	color: var(--color-sys-slight);
}

.color-invert {
	color: var(--color-sys-invert-main);
}
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
.text-center {
	text-align: center;
}
.text-bold {
	font-variation-settings: 'wght' 600;
}
.grid-size-big {
	font-size: calc(var(--grid-block) * 3);
	line-height: calc(var(--grid-block) * 3);
}
@supports (background: -webkit-named-image(i)) {
	.grid-size-big {
		font-variation-settings: 'wght' 800, 'wdth' 92, 'opsz' 96;
	}
}
</style>
