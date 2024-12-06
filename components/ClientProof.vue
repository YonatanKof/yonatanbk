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
const SCROLL_SPEED = 2;
// Keep gap size in pixels for calculation
const GAP_SIZE = 32; // 2rem = 32px at default font size

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
		<h4 class="client-title">Among my clients and initiatives</h4>

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
.client-section {
	margin: 2rem 0;
}

.client-title {
	font-size: 1.5rem;
	font-weight: 500;
	margin-bottom: 1.5rem;
	text-align: center;
}

.logo-container {
	width: 100%;
	margin: 0 auto;
	overflow: hidden;
	position: relative;
}

.logo-scroll {
	display: flex;
	gap: 2rem;
	will-change: transform;
	position: relative;
}

.client-logo {
	height: 4rem; /* 64px → 4rem */
	width: auto;
	object-fit: contain;
	flex-shrink: 0;
}
</style>
