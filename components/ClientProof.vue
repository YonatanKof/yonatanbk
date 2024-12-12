<script setup>
import { ref, computed, onMounted } from 'vue';

const logos = [
	'/images/clients/365scores.webp',
	'/images/clients/Avodata.webp',
	'/images/clients/Bit.webp',
	'/images/clients/Gett.webp',
	'/images/clients/ISOC-IL.webp',
	'/images/clients/JDC.webp',
	'/images/clients/Ministry_of_Labour.webp',
	'/images/clients/MTNS.webp',
	'/images/clients/Peace_Now.webp',
	'/images/clients/Pepperi.webp',
];

const containerRef = ref(null);
const scrollPosition = ref(0);
const firstSetWidth = ref(0);
const SCROLL_SPEED = 0.5;
// Keep gap size in pixels for calculation
const GAP_SIZE = 24; // 2rem = 32px at default font size

const scrollStyle = computed(() => ({
	transform: `translateX(${-scrollPosition.value}px)`,
}));

const getLogoName = (path) => {
	return path.split('/').pop().replace('.webp', '');
};

const calculateFirstSetWidth = () => {
	const logoContainer = containerRef.value?.firstElementChild;
	if (logoContainer) {
		const logosInFirstSet = Array.from(logoContainer.children).slice(0, logos.length);
		const totalWidth = logosInFirstSet.reduce((width, logo) => width + logo.offsetWidth, 0);
		const gapWidth = logos.length * GAP_SIZE;
		firstSetWidth.value = totalWidth + gapWidth;
	}
};

const animate = () => {
	scrollPosition.value += SCROLL_SPEED;

	if (scrollPosition.value >= firstSetWidth.value) {
		scrollPosition.value = 0;
	}

	requestAnimationFrame(animate);
};

onMounted(() => {
	setTimeout(() => {
		calculateFirstSetWidth();
		animate();
	}, 100);

	window.addEventListener('resize', calculateFirstSetWidth);
});
</script>

<template>
	<div class="client-section">
		<Text class="client-title color-slight" tag="h4" variant="text">Among my clients and initiatives</Text>

		<div class="logo-container" ref="containerRef">
			<div class="logo-scroll" :style="scrollStyle">
				<!-- Original logos -->
				<img v-for="logo in logos" :key="logo" :src="logo" :alt="getLogoName(logo)" class="client-logo" />
				<!-- Cloned logos for seamless scrolling -->
				<img v-for="logo in logos" :key="`clone-${logo}`" :src="logo" :alt="getLogoName(logo)" class="client-logo" />
			</div>
		</div>
	</div>
</template>

<style scoped>
.client-title {
	margin-bottom: var(--space-s);
}

.logo-container {
	width: 100%;
	margin: 0 auto;
	overflow: hidden;
	position: relative;
}

.logo-scroll {
	display: flex;
	gap: 1.5rem;
	will-change: transform;
	position: relative;
}

.logo-container::before {
	content: '';
	background: linear-gradient(to left, var(--color-sys-invert-none), var(--color-sys-invert-main));
	width: 0.5rem;
	height: 100%;
	display: inline-block;
	position: absolute;
	z-index: 100;
}
.logo-container::after {
	content: '';
	background: linear-gradient(to right, var(--color-sys-invert-none), var(--color-sys-invert-main));
	width: 2rem;
	height: 100%;
	display: inline-block;
	position: absolute;
	z-index: 100;
	inset-inline-end: 0;
	inset-block-start: 0;
}

.client-logo {
	height: 2rem; /* 64px → 4rem */
	width: auto;
	object-fit: contain;
	flex-shrink: 0;
}
</style>
