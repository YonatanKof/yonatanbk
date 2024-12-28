<script setup lang="ts">
const props = defineProps({
	setUrl: {
		type: String,
	},
});
</script>

<template>
	<div class="share-box">
		<Text tag="h4">Share me on</Text>
		<div class="share-buttons">
			<SocialShare
				v-for="network in ['linkedin', 'x', 'email', 'facebook']"
				:key="network"
				:network="network"
				:icon="false"
				:url="setUrl"
			>
				<template #label>{{ network }}</template>
			</SocialShare>
		</div>
	</div>
</template>

<style>
.share-box {
	display: flex;
	flex-direction: column;
	gap: var(--space-2xs);
	justify-content: center;
}
.share-buttons {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: var(--space-3xs);
}

.social-share-button {
	color: var(--color-sys-main);
	padding: 1em 1.25em;
	border-radius: 0;
	text-transform: capitalize;
	font-family: var(--font-title);
	font-variation-settings: 'wght' 600, 'wdth' 100, 'opsz' 20;
	background-color: var(--color-sys-dis);
	transition: background-color 0.3s;
	/* border-inline-end: 2px solid var(--color-brand-red-dim); */
	border: 1px solid var(--color-brand-red-dim);
	&:hover {
		background-color: var(--color-brand-red-dim);
	}
	&:first-child {
		/* border-inline-start: 2px solid var(--color-brand-red-dim); */
		/* border-inline-end: none; */
	}
}
</style>
