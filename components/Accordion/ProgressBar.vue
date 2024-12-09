<template>
	<div class="progress-container" :class="{ hidden: !active }">
		<div
			class="progress-bar"
			:style="{
				width: `${progress}%`,
				transition: isPaused ? 'none' : `width ${remainingTime}ms linear`,
			}"
		></div>
	</div>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue';

const props = defineProps({
	active: {
		type: Boolean,
		default: false,
	},
	duration: {
		type: Number,
		default: 2000,
	},
	isPaused: {
		type: Boolean,
		default: false,
	},
});

const progress = ref(0);
const remainingTime = ref(props.duration);
let startTime = 0;

async function updateProgress() {
	if (!props.active) {
		progress.value = 0;
		remainingTime.value = props.duration;
		return;
	}

	if (props.isPaused) {
		const elapsedTime = Date.now() - startTime;
		progress.value = (elapsedTime / props.duration) * 100;
		remainingTime.value = props.duration - elapsedTime;
		return;
	}

	progress.value = 0;
	remainingTime.value = props.duration;
	startTime = Date.now();

	await nextTick();
	progress.value = 100;
}

watch(() => props.active, updateProgress, { immediate: true });
watch(() => props.isPaused, updateProgress);
</script>

<style scoped>
.progress-container {
	width: 100%;
	height: 4px;
	background-color: #e0e0e0;
	border-radius: 2px;
	overflow: hidden;
	opacity: 1;
	transition: opacity 0.3s ease;
}

.progress-container.hidden {
	opacity: 0;
	height: 0;
}

.progress-bar {
	height: 100%;
	width: 0;
	background-color: #2196f3;
	border-radius: 2px;
}
</style>
