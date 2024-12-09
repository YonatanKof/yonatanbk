<template>
	<div class="content-images">
		<div v-for="(imageUrl, index) in currentImages" :key="`${currentIndex}-${index}`" class="image-container">
			<img
				:src="imageUrl"
				:alt="`Image for ${currentItem?.title || 'content'}`"
				class="content-image"
				:class="{ 'fade-in': isActive }"
			/>
		</div>
	</div>
</template>

<script setup>
import { ref, computed, watch, nextTick } from 'vue';

const props = defineProps({
	items: {
		type: Array,
		required: true,
		validator: (items) => {
			return items.every(
				(item) =>
					typeof item.title === 'string' &&
					typeof item.subTitle === 'string' &&
					(Array.isArray(item.images) || typeof item.images === 'string')
			);
		},
	},
	currentIndex: {
		type: Number,
		required: true,
	},
	duration: {
		type: Number,
		default: 2000,
	},
});

const isActive = ref(true);

const currentItem = computed(() => props.items[props.currentIndex]);

const currentImages = computed(() => {
	const images = currentItem.value?.images;
	return Array.isArray(images) ? images : [images];
});

watch(
	() => props.currentIndex,
	() => {
		isActive.value = false;
		nextTick(() => {
			isActive.value = true;
		});
	}
);
</script>

<style scoped>
.content-images {
	display: flex;
	gap: 1rem;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	width: 100%;
}

.image-container {
	flex: 1;
	max-width: 300px;
	aspect-ratio: 16/9;
	overflow: hidden;
	border-radius: 8px;
	background-color: #f5f5f5;
}

.content-image {
	width: 100%;
	height: 100%;
	object-fit: cover;
	opacity: 0;
	transform: scale(1.1);
	transition: all 0.3s ease;
}

.content-image.fade-in {
	opacity: 1;
	transform: scale(1);
}

@media (max-width: 640px) {
	.content-images {
		display: none;
	}
}
</style>
