<script setup>
const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	subTitle: {
		type: String,
		required: true,
	},
	active: {
		type: Boolean,
		default: false,
	},
	duration: {
		type: Number,
		default: 2000,
	},
	index: {
		type: Number,
		required: true,
	},
	images: {
		type: [String, Array],
		default: null,
	},
});

const emit = defineEmits(['complete', 'select']);
const isActive = ref(props.active);
const isPaused = ref(false);
const isMobileView = ref(false);
let timer = null;

const normalizedImages = computed(() => {
	if (!props.images) return [];
	return Array.isArray(props.images) ? props.images : [props.images];
});

watch(
	() => props.active,
	(newValue) => {
		isActive.value = newValue;
		if (newValue && !isPaused.value) {
			startTimer();
		} else {
			clearTimeout(timer);
		}
	}
);

function startTimer() {
	clearTimeout(timer);
	timer = setTimeout(() => {
		isActive.value = false;
		emit('complete');
	}, props.duration);
}

function handleMouseEnter() {
	if (isActive.value) {
		isPaused.value = true;
		clearTimeout(timer);
	}
}

function handleMouseLeave() {
	if (isActive.value && isPaused.value) {
		isPaused.value = false;
		startTimer();
	}
}

function handleClick() {
	if (!isActive.value) {
		emit('select', props.index);
	}
}

function updateViewport() {
	isMobileView.value = window.innerWidth < 640;
}

onMounted(() => {
	updateViewport();
	window.addEventListener('resize', updateViewport);
	if (props.active) {
		startTimer();
	}
});

onUnmounted(() => {
	clearTimeout(timer);
	window.removeEventListener('resize', updateViewport);
});
</script>

<template>
	<div
		class="content-toggle"
		@mouseenter="handleMouseEnter"
		@mouseleave="handleMouseLeave"
		@touchstart.prevent="handleMouseEnter"
		@touchend.prevent="handleMouseLeave"
		@click="handleClick"
	>
		<Text tag="h3" variant="secondary-title">{{ title }}</Text>
		<AccordionProgressBar :active="isActive" :duration="duration" :isPaused="isPaused" />

		<Text variant="large-text" class="subtitle" :class="{ visible: isActive }" v-show="isActive">
			{{ subTitle }}
		</Text>

		<!-- Mobile Image -->
		<div v-if="isMobileView && images" class="mobile-image-container" v-show="isActive">
			<template v-for="imageUrl in normalizedImages" :key="index">
				<img :src="imageUrl" :alt="`Image for ${title}`" class="mobile-image" :class="{ 'fade-in': isActive }" />
			</template>
		</div>
	</div>
</template>

<style scoped>
.content-toggle {
	width: 100%;
	position: relative;
	cursor: pointer;
	transition: background-color 0.3s ease;
	display: flex;
	flex-direction: column;
	gap: var(--space-s);
}

.subtitle-container {
	margin-top: var(--space-m);
}

.subtitle {
	margin: 0;
	opacity: 0;
	transform: translateY(10px);
	transition: all 0.3s ease;
}

.subtitle.visible {
	opacity: 1;
	transform: translateY(0);
}

.mobile-image-container {
	margin: 1rem 0;
	display: flex;
	gap: 0.5rem;
	overflow-x: auto;
	scroll-snap-type: x mandatory;
	-webkit-overflow-scrolling: touch;
}

.mobile-image {
	width: 100%;
	aspect-ratio: 16/9;
	object-fit: cover;
	border-radius: 8px;
	scroll-snap-align: start;
	opacity: 0;
	transform: scale(1.1);
	transition: all 0.3s ease;
}

.mobile-image.fade-in {
	opacity: 1;
	transform: scale(1);
}

/* @media (min-width: 640px) {
	.mobile-image-container {
		display: none;
	}
} */
</style>
