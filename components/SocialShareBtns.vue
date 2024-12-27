<script setup lang="ts">
import { icons } from 'vue3-carousel';
</script>

<template>
	<div class="share-box">
		<Text tag="h4" variant="heading-x-small">Share me on</Text>
		<div class="share-buttons">
			<SocialShare
				v-for="network in ['facebook', 'x', 'linkedin', 'email']"
				:key="network"
				:network="network"
				:styled="true"
				:icon="false"
			>
				<template #label>{{ network }}</template>
			</SocialShare>
		</div>
	</div>
</template>

<style>
.share-box{
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  justify-content: center;
}
.share-buttons {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
}

.social-share-button {
	color: #fff;
	padding: 1rem;
	border-radius: 0;
}
</style>
