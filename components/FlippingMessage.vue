<!-- <script setup lang="ts"> -->
<script setup>
import VueTypewriterEffect from 'vue-typewriter-effect';
</script>

<template>
	<div>
		<Text text-style="text-end color-slight" tag="h2" variant="compressed-title">
      <vue-typewriter-effect :strings="['Managing', 'Building', 'Leading', 'Executing']" />  design Teams <span class="no-brake">in Startups and Orgs</span>
		</Text>
	</div>
</template>

<style scoped>
h2 {
	@media (width < 1152px) {
		text-align: center;
	}
}
</style>
