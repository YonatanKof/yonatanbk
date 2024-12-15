<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination } from 'vue3-carousel';

const props = defineProps({
	images: {
		type: Array,
		default: () => [],
		required: true,
	},
});

const config = {
	autoplay: 5000,
	wrapAround: true,
	pauseAutoplayOnHover: true,
};

// Function to determine if the file is a video (webm)
const isVideo = (file) => {
	return file.toLowerCase().endsWith('.webm');
};
</script>

<template>
	<Carousel v-bind="config">
		<Slide v-for="slide in props.images" :key="slide">
			<div class="carousel__item">
				<span v-if="slide.name">
					<Text tag="h4" class="hovering-text" variant="body-small" text-style="color-invert-main">{{ slide.name }}</Text>
				</span>
				<video v-if="isVideo(slide.url)" loop muted autoplay>
					<source :src="slide.url" type="video/webm" />
				</video>
				<NuxtImg v-else :src="slide.url" placeholder />
			</div>
		</Slide>

		<template #addons>
			<Pagination />
		</template>
	</Carousel>
</template>

<style scoped>
@keyframes rotate {
	0% {
		background-color: var(--color-brand-red-main);
	}
	25% {
		background-color: var(--color-brand-green-main);
	}
	50% {
		background-color: var(--color-brand-blue-main);
	}
	75% {
		background-color: var(--color-brand-orange-main);
	}
	100% {
		background-color: var(--color-brand-red-main);
	}
}
.carousel {
	max-width: calc(var(--space-7xl) * 4);
	background-color: var(--color-sys-hardly);
	height: 100%;
	overflow: hidden;
	border-radius: var(--border-radius-sm);
	--vc-pgn-width: var(--space-2xs);
	--vc-pgn-kof-width: var(--space-xs);
	--vc-pgn-height: var(--space-2xs);
	--vc-pgn-border-radius: 20px;
	--vc-pgn-background-color: var(--color-sys-dim);
	--vc-pgn-active-color: var(--color-sys-main);
}
.carousel__pagination {
	background-color: var(--color-sys-invert-slight);
	padding-inline: 0.3em !important;
	border-radius: 4rem;
}
.carousel__item {
	position: relative;
	& video,
	& img {
		width: 100%;
		height: auto;
		display: flow-root;
	}
}
span {
	position: absolute;
	inset-block-start: 0;
	inset-inline-start: 0;
	animation: 5s linear infinite rotate;
	border-end-end-radius: var(--border-radius-sm);
}
.hovering-text {
	padding: 0.3em 0.6em;
	font-variation-settings: 'wght' 800;
}
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
