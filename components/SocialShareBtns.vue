<script setup lang="ts">
const props = defineProps({
	setUrl: {
		type: String,
	},
	fontSize: {
		type: String,
		default: 'var(--step-0)',
	},
	textStyle: {
		type: String,
		default: 'var(--color-sys-main)',
	},
});
</script>

<template>
	<div class="share-box">
		<Text tag="h4" :style="`color:` +  textStyle">Share me on</Text>
		<div class="share-buttons">
			<SocialShare
				v-for="network in ['linkedin', 'x', 'facebook', 'email']"
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
	color: v-bind(textStyle);
	padding: 0.8em 1.1em;
	border-radius: 0;
	text-transform: capitalize;
	font-family: var(--font-title);
	font-size: v-bind(fontSize);
	font-variation-settings: 'wght' 600, 'wdth' 100, 'opsz' 20;
	/* background-color: var(--color-sys-dis); */
	transition: background-color 0.3s;
	border: 1px solid var(--color-brand-red-slight);
	&:hover {
		background-color: var(--color-brand-red-dis);
	}
}
</style>
