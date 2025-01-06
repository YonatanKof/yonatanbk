<script setup lang="ts">
export interface LinkToProps {
	title?: string;
	description?: string;
	href?: string;
	highlightColor?: string;
}

const props = withDefaults(defineProps<LinkToProps>(), {
	highlightColor: 'var(--color-brand-red-main)',
});
</script>

<template>
	<nuxt-link class="link-to" :to="href">
		<Text tag="h5" variant="heading-x-small" class="external-icon">{{ title }}</Text>
		<Text variant="body-small">{{ description }}</Text>
	</nuxt-link>
</template>

<style scoped>
.link-to {
	display: flex;
	flex-direction: column;
	gap: var(--space-3xs);
	text-decoration: none;
	padding-block: var(--space-2xs);
	padding-inline: var(--space-s);
	position: relative;
	color: var(--color-sys-main);
	transition: transform 0.25s ease, background-color 0.25s ease;

	&::before {
		content: '';
		display: inline-block;
		background-color: v-bind(highlightColor);
		border-radius: var(--border-radius-xs);
		height: 100%;
		inset-inline-start: 0;
		inset-block-start: 0;
		position: absolute;
		width: var(--space-3xs);
	}

	&:hover {
		transform: translateX(var(--space-3xs));
		background-color: var(--color-sys-hardly);
		background-color: color-mix(in hsl, v-bind(highlightColor) 10%, transparent);
		border-radius: var(--border-radius-xs);
	}
	.external-icon {
		&::after {
			background-color: v-bind(highlightColor);
			width: var(--space-xs);
			height: var(--space-xs);
		}
	}
}
p {
	max-width: 45ch;
}
a {
	&:hover {
		border-block-end-color: transparent;
	}
}
</style>
