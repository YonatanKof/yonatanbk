<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

const props = defineProps({
	images: {
		type: [Array],
		default: null,
		required: true,
	},
});

const config = {
	autoplay: 5000,
	wrapAround: true,
	pauseAutoplayOnHover: true,
};
</script>

<template>
	<Carousel v-bind="config">
		<Slide class="slide-img" v-for="slide in props.images" :key="slide">
			<div class="carousel__item">
				<NuxtImg class="ar" :src="slide" placeholder />
			</div>
		</Slide>

		<template #addons>
			<!-- <Navigation /> -->
			<Pagination />
		</template>
	</Carousel>
</template>
<style scoped>
.carousel {
	/* --carousel-width: 480px; */
	max-width: calc(var(--space-7xl) * 4);
	background-color: var(--color-brand-orange-main);
	height: 100%;
	overflow: hidden;
	border-radius: var(--border-radius-sm);
	--vc-pgn-width: var(--space-2xs);
	--vc-pgn-kof-width: var(--space-xs);
	--vc-pgn-height: var(--space-2xs);
	--vc-pgn-border-radius: 20px;
	--vc-pgn-background-color: var(--color-sys-dim);
	--vc-pgn-active-color: var(--color-brand-red-main);
}
.carousel__item {
	& img {
		width: 100%;
		height: auto;
		display: flow-root;
	}
}
/* @media (960px >= width) {
	.carousel {
        --carousel-width: 400px;
	}
} */
</style>
<style>
.carousel__pagination-button--active::after {
	width: var(--vc-pgn-kof-width);
}

@media (hover: hover) {
	.carousel__pagination-button:hover::after {
		width: var(--vc-pgn-kof-width);
	}
}
</style>
