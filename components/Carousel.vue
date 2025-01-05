<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination } from 'vue3-carousel';

const props = defineProps({
	images: {
		type: Array,
		default: () => [],
		required: true,
	},
	animationTime: {
		type: Number,
		default: 5000,
	},
	highlightColor: {
		type: String,
		default: 'var(--color-brand-red-main)',
	},
});
// ↓ used for CCS animation too
// const animTime = 5000;
const config = {
	autoplay: props.animationTime,
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
					<Text tag="h4" class="hovering-text" variant="body-x-small" text-style="color-invert">
						{{ slide.name }}
					</Text>
				</span>
				<video v-if="isVideo(slide.url)" loop muted autoplay poster="/images/geoKof-ph.webp" playsinline>
					<source :src="slide.url" type="video/webm" />
					<source :src="slide.url.replace('.webm', '.mp4')" type="video/mp4" />
				</video>
				<NuxtImg v-else :src="slide.url" />
			</div>
		</Slide>

		<template #addons>
			<Pagination />
		</template>
	</Carousel>
</template>

<style scoped>
.carousel {
	/* --highlight-color: v-bind(highlightColor); */
	--highlight-color:  color-mix(in hsl, v-bind(highlightColor) 90%, black);
	--anim-time: calc(v-bind(animationTime) * 1ms);
	--border-width: var(--space-3xs);
	--vc-pgn-width: var(--space-2xs);
	--vc-pgn-kof-width: var(--space-xs);
	--vc-pgn-height: var(--space-2xs);
	--vc-pgn-border-radius: unset;
	--vc-pgn-background-color: var(--color-sys-invert-dim);
	--vc-pgn-active-color: var(--color-sys-invert-main);
	max-width: calc(var(--space-8xl) * 4);
	background-color: var(--highlight-color);
	height: 100%;
	overflow: hidden;
	border-radius: unset;
	position: relative;
	border: var(--border-width) solid var(--highlight-color);
	cursor: grab;
	&:hover {
		cursor: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABLSURBVHgB7ZM5CgAgDASz4vPUx6r/i0fhgVdhJy4kEGaZLqAapjE4cZG2MypDZi7TZscFXeYLvuARgWwPANvyjBdB/LgOaOu79ooH6GUestWY8A0AAAAASUVORK5CYII=')
				2 2,
			auto;
	}
}
.carousel__pagination {
	background-color: var(--highlight-color);
	padding-inline: 0.2em !important;
	inset-block-end: var(--border-width);
	inset-inline-end: var(--border-width);
	left: unset;
	transform: unset;
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
	inset-block-start: var(--border-width);
	inset-inline-start: var(--border-width);
	background-color: var(--highlight-color);
}
.hovering-text {
	/* padding: calc(0.5em - var(--border-width)) 0.8em 0.5em calc(0.8em - var(--border-width)); */
	padding: 0.4em 0.6em;
	font-variation-settings: 'wght' 600;
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
