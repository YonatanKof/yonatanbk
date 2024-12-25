<script setup>
const logos = [
	'/images/clients/JDC.webp',
	'/images/clients/365scores.webp',
	'/images/clients/Intel.webp',
	'/images/clients/Avodata.webp',
	'/images/clients/Gett.webp',
	'/images/clients/ISOC-IL.webp',
	'/images/clients/SolarEdge.webp',
	'/images/clients/Bit.webp',
	'/images/clients/Ministry_of_Labour.webp',
	'/images/clients/MTNS.webp',
	'/images/clients/Peace_Now.webp',
	'/images/clients/Pepperi.webp',
	'/images/clients/Watchful.webp',
];

const containerRef = ref(null);
const scrollPosition = ref(0);
const firstSetWidth = ref(0);
const SCROLL_SPEED = 0.25;
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
		<ShapesCross v-for="index in 4" class="cross" :class="`cross-${index}`" />
		<Text class="client-title color-slight" tag="h4" variant="body-small">Among my clients and initiatives</Text>

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
	height: calc(var(--grid-block) * 3);
	background-color: var(--color-sys-invert-main);
	display: grid;
	grid-template-rows: repeat(3, var(--grid-block));
	box-shadow: inset 0 0 0 1px var(--color-brand-red-dim);
	position: relative;
}
.cross {
	position: absolute;
}
.cross-1 {
	inset-inline-start: calc(calc(var(--grid-block) * -0.25) - 0.5px);
	inset-block-start: calc(calc(var(--grid-block) * -0.25) - 0.5px);
}
.cross-2 {
	inset-inline-end: calc(calc(var(--grid-block) * -0.25) - 0.5px);
	inset-block-start: calc(calc(var(--grid-block) * -0.25) - 0.5px);
}
.cross-3 {
	inset-inline-end: calc(calc(var(--grid-block) * -0.25) - 0.5px);
	inset-block-end: calc(calc(var(--grid-block) * -0.25) - 0.5px);
}
.cross-4 {
	inset-inline-start: calc(calc(var(--grid-block) * -0.25) - 0.5px);
	inset-block-end: calc(calc(var(--grid-block) * -0.25) - 0.5px);
}

.client-title {
	padding-inline-start: var(--space-2xs);
	grid-row: 1 / span 1;
	font-size: var(--step--1);
	background-color: var(--color-brand-red-hardly);
	grid-column: revert-layer;
	justify-self: stretch;
	align-self: stretch;
	line-height: calc(var(--grid-block) * 1);
}

.logo-container {
	width: 100%;
	margin: 0 auto;
	overflow: hidden;
	position: relative;
	grid-row: 2 / span 2;
	display: flex;
	align-items: center;
	border-block-start: 0.75px dashed var(--color-brand-red-slight);
}

.logo-scroll {
	display: flex;
	gap: 1.5rem;
	will-change: transform;
	position: relative;
}

.client-logo {
	/* height: 2rem; 64px → 4rem */
	height: var(--grid-block); 
	width: auto;
	object-fit: contain;
	flex-shrink: 0;
}
</style>
